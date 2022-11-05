import Link from "next/link";
import { Box, Button } from "@mui/material";
import { User } from "@prisma/client";
import { GetServerSideProps } from "next";
import Image from "next/image";
import { getSession, useSession } from "next-auth/react";
import prisma from "../../lib/prisma";

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getSession({ req });
  
  if (!session) {
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
      email: session.user.email,
    },
  });

  return {
    props: { user },
  };
};

type Props = {
  user: User;
};

const Task = ({ user }: Props) => {
  const { email, image, name } = user;

  return (

  );
};

export default Task;
