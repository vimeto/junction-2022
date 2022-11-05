import { Prompt, PromptInstance, User } from '@prisma/client';
import type { GetServerSideProps, NextPage } from 'next'
import { getSession } from 'next-auth/react';
import prisma from '../lib/prisma';

type UserWithPrompts = (User & {
  promptInstances: (PromptInstance & {
      prompt: Prompt;
  })[];
})

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getSession(ctx);

  if (!session?.user) {
    return {
      redirect: {
        permanent: false,
        destination: "/login ",
      },
      props:{},
    };
  }

  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email || ""
    },
    include: {
      following: true
    }
  })

  const friendPrompts = await prisma.promptInstance.findMany({
    where: {
      userId: {
        in: user?.following.map((u) => u.id)
      },
      shared: true,
    },
    orderBy: {
      date: 'desc'
    }
  })

  return {
    props: {
      locale: ctx.locale,
      user: JSON.parse(JSON.stringify(user))
    }
  }
}

const Home: NextPage<{ user: UserWithPrompts }> = ({ user }) => {
  console.log(user);

  return (
    <div className='bg-gray-200'>
      jeejee
    </div>
  )
}

export default Home
