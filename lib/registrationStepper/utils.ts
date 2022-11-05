import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import prisma from "../prisma";

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

  const usr = await prisma.user.findUnique({
    where: {
      email: session.user.email || "",
    },
  });

  if (usr?.activityConfigured) {
    return {
      redirect: {
        permanent: false,
        destination: "/ ",
      },
      props: {},
    };
  }

  return {
    props: {},
  };
};
