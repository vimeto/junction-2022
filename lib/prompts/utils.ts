import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import prisma from "../prisma";
import startOfDay from 'date-fns/startOfDay'
import endOfDay from 'date-fns/endOfDay'

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

  const today = new Date();

  // returns user with list of today's promptinstances
  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email || ""
    },
    include: {
      promptInstances: {
        where: {
          date: {
            gte: startOfDay(today),
            lt:  endOfDay(today)
          }
        },
        include: {
          prompt: true
        },
        orderBy: {
          date: 'desc'
        }
      }
    }
  })

  if (!user) {
    // this shouldn't exist
  } else if (user.promptInstances.length === 0) {
    // here we create a new prompt instance with the randomization function
  } else if (user.promptInstances.at(-1)?.completed) {
    // today's prompt has been completed
  } else {
    // today's prompt has not been completed
  }

  return {
    props: {
      locale: ctx.locale,
      user: JSON.parse(JSON.stringify(user))
    }
  }
}
