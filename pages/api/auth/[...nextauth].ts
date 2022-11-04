import { NextApiHandler } from "next";
import NextAuth, { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from "next-auth/providers/credentials";
import bcryptjs from 'bcryptjs';

import prisma from '../../../lib/prisma'


const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options);
export default authHandler;

export const options: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),

    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'Account email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        const c = credentials as { email: string, password: string };

        const payload = {
          email: c.email,
          password: c.password,
        };

        const possibleUser = await prisma.user.findUnique({
          where: {
            email: payload.email
          }
        }) || await prisma.user.findUnique({
          where: {
            username: payload.email
          }
        });

        if (!possibleUser) { return null; }

        const correctPassword = await bcryptjs.compare(payload.password, possibleUser.passwordDigest || "")

        if (correctPassword) {
          return possibleUser;
        } else {
          return null
        }
      }
    }),

  ],
  adapter: PrismaAdapter(prisma),
  secret: process.env.SECRET,
  pages: {
    signIn: "/login",
  }
};
