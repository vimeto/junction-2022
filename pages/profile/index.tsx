import { User } from "@prisma/client";
import { AnimatePresence, motion } from "framer-motion";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import Profile from "../../components/Profile";
import prisma from "../../lib/prisma";

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

  const userWithFriends = await prisma.user.findUnique({
    where: {
      email: session.user.email || "",
    },
    include: {
      following: {
        where: {
          following: {
            some: {
              email: session.user.email || "",
            },
          },
        },
      },
    },
  });

  const userWithFriendRequests = await prisma.user.findUnique({
    where: {
      email: session.user.email || "",
    },
    include: {
      followedBy: {
        where: {
          followedBy: {
            none: {
              email: session.user.email || "",
            },
          },
        },
      },
    },
  });

  // const userWithNewFriendRequest = await prisma.user.update({
  //   where: {
  //     email: session.user.email || "",
  //   },
  //   data: {
  //     following: {
  //       connect: {
  //         email: "____new__email____",
  //       },
  //     },
  //   },
  // });

  // const userWithAcceptedFriendRequest = await prisma.user.update({
  //   where: {
  //     email: session.user.email || "",
  //   },
  //   data: {
  //     following: {
  //       connect: {
  //         email: "____new__email____",
  //       },
  //     },
  //   },
  // });

  return {
    props: {
      user: JSON.parse(JSON.stringify(usr)),
      locale: ctx.locale,
      userWithFriends: JSON.parse(JSON.stringify(userWithFriends)),
      userWithFriendRequests: JSON.parse(
        JSON.stringify(userWithFriendRequests)
      ),
      // userWithAcceptedFriendRequest: JSON.parse(
      //   JSON.stringify(userWithAcceptedFriendRequest)
      // ),
      // userWithNewFriendRequest: JSON.parse(
      //   JSON.stringify(userWithNewFriendRequest)
      // ),
    },
  };
};

type Props = {
  locale?: string;
  userWithFriends:
    | User & {
        following: User[];
      };
  userWithFriendRequests:
    | User & {
        followedBy: User[];
      };
};

export default function Prof({
  userWithFriends,
  userWithFriendRequests,
  locale,
}: Props) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        exit={{ opacity: 0 }}
      >
        <Profile
          userWithFriendRequests={userWithFriendRequests}
          userWithFriends={userWithFriends}
          locale={locale}
        />
      </motion.div>
    </AnimatePresence>
  );
}
