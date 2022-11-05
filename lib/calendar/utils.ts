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

  // (PromptInstance & { prompt: Prompt; })[]
  let myPrompts = await prisma.promptInstance.findMany({
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
  });

  myPrompts = await Promise.all(myPrompts.map(async (myPrompt) => {
    const validUntilThreshold = new Date();
    validUntilThreshold.setMinutes(validUntilThreshold.getMinutes() - 1);

    if ((!myPrompt.imageSecureExpires || myPrompt.imageSecureExpires < validUntilThreshold) && myPrompt.imageLocation) {
      const urlAndExpiryDate = await getSecureUrl(myPrompt.imageLocation)
      return await prisma.promptInstance.update({
        where: {
          id: myPrompt.id
        },
        data: {
          imageSecureURL: urlAndExpiryDate?.url,
          imageSecureExpires: urlAndExpiryDate?.expires,
        },
        include: {
          prompt: true
        },
      })
    }

    return myPrompt;
  }));

  return {
    props: {
      promptInstances: JSON.parse(JSON.stringify(myPrompts)),
    },
  };
};
