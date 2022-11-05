import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import prisma from "../prisma";
import startOfDay from "date-fns/startOfDay";
import endOfDay from "date-fns/endOfDay";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getSession(ctx);

  if (!session?.user) {
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
      props: {},
    };
  }

  const usr = await prisma.user.findUnique({
    where: {
      email: session.user.email || "",
    },
  });

  if (!usr?.activityConfigured) {
    return {
      redirect: {
        permanent: false,
        destination: "/registrationStepper ",
      },
      props: {},
    };
  }

  const promptInstances = await prisma.promptInstance.findMany({
    where: {
      user: {
        email: usr.email
      },
    },
    include: {
      prompt: true,
    },
    orderBy: {
      date: 'desc'
    }
  })

  return {
    props: {
      promptInstances: JSON.parse(JSON.stringify(promptInstances)),
    },
  };
};
