import { NextApiHandler } from "next";
import { unstable_getServerSession } from "next-auth";
import prisma from "../../../lib/prisma";
import { options } from "../auth/[...nextauth]";

const handler: NextApiHandler = async (req, res) => {
  if (req.method != "POST") {
    res.status(405).send({ message: "Only POST allowed" });
    return;
  }

  const session = await unstable_getServerSession(req, res, options);

  if (!session?.user) {
    return res.status(401).send({ message: "Unauthorized" });
  }

  const fId = req.body.id;

  try {
    await prisma.user.update({
      where: {
        email: session.user.email || "",
      },
      data: {
        following: {
          connect: {
            id: fId,
          },
        },
      },
    });

    return res.status(200).end();
  } catch (e) {
    console.log(e);
    return res.status(500).send({ message: "smth happened" });
  }
};

export default handler;
