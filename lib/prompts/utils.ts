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
        destination: "/login ",
      },
      props: {},
    };
  }

  const today = new Date();

  // returns user with list of today's promptinstances
  const userWithPrompts = await prisma.user.findUnique({
    where: {
      email: session.user.email || "",
    },
    include: {
      following: true,
      promptInstances: {
        where: {
          date: {
            gte: startOfDay(today),
            lt: endOfDay(today),
          },
        },
        include: {
          prompt: true,
        },
        orderBy: {
          date: "desc",
        },
      },
    },
  });

  const friendPrompts = await prisma.promptInstance.findMany({
    where: {
      userId: {
        in: userWithPrompts?.following.map((u) => u.id),
      },
      shared: true,
    },
    orderBy: {
      date: "desc",
    },
  });

  if (!userWithPrompts) {
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
      locale: ctx.locale,
      user: JSON.parse(JSON.stringify(userWithPrompts)),
      friendPrompts: JSON.parse(JSON.stringify(friendPrompts)),
    },
  };
};
