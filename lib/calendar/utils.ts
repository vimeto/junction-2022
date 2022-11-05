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
        destination: "/registerationStepper",
      },
      props: {},
    };
  }

  const promptInstances = await prisma.promptInstance.findMany({
    where: {
      user: {
        email: session.user.email
      },
    },
    include: {
      prompt: true,
    },
    orderBy: {
      date: 'desc'
    }
  })

  if (!promptInstances) {
    return {
      redirect: {
        permanent: false,
        destination: "/registrationStepper ",
      },
      props: {},
    };
  }

  return {
    props: {
      promptInstances: JSON.parse(JSON.stringify(promptInstances)),
    },
  };
};
