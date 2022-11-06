import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import prisma from "../prisma";
import startOfDay from "date-fns/startOfDay";
import endOfDay from "date-fns/endOfDay";
import { getSecureUrl } from "../app/getSecureUrl";

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
      following: {
        where: {
          following: {
            some: {
              email: session.user.email || "",
            }
          }
        },
      },
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

  if (!userWithPrompts?.activityConfigured) {
    return {
      redirect: {
        permanent: false,
        destination: "/registrationStepper ",
      },
      props: {},
    };
  }

  // returns list of prompt instances by friends
  let friendPrompts = await prisma.promptInstance.findMany({
    where: {
      userId: {
        in: userWithPrompts?.following.map((u) => u.id),
      },
      shared: true,
    },
    include: {
      user: {
        select: {
          name: true,
        },
      },
      prompt: {
        select: {
          translations: true,
          rarityLevel: true,
        },
      },
    },
    orderBy: {
      date: "desc",
    },
  });

  friendPrompts = await Promise.all(
    friendPrompts.map(async (friendPrompt) => {
      const validUntilThreshold = new Date();
      validUntilThreshold.setMinutes(validUntilThreshold.getMinutes() - 1);

      if (
        (!friendPrompt.imageSecureExpires ||
          friendPrompt.imageSecureExpires < validUntilThreshold) &&
        friendPrompt.imageLocation
      ) {
        const urlAndExpiryDate = await getSecureUrl(friendPrompt.imageLocation);
        return await prisma.promptInstance.update({
          where: {
            id: friendPrompt.id,
          },
          data: {
            imageSecureURL: urlAndExpiryDate?.url,
            imageSecureExpires: urlAndExpiryDate?.expires,
          },
          include: {
            user: {
              select: {
                name: true,
              },
            },
            prompt: {
              select: {
                translations: true,
                rarityLevel: true,
              },
            },
          },
        });
      }

      return friendPrompt;
    })
  );

  return {
    props: {
      locale: ctx.locale,
      user: JSON.parse(JSON.stringify(userWithPrompts)),
      friendPrompts: JSON.parse(JSON.stringify(friendPrompts)),
    },
  };
};
