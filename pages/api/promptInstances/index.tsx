import { NextApiHandler } from "next";
import { unstable_getServerSession } from "next-auth";
import { createNewPrompt } from "../../../lib/createPrompt/utils";
import prisma from "../../../lib/prisma";
import { options } from "../auth/[...nextauth]";

const handler: NextApiHandler = async (req, res) => {
  if (req.method != "POST") {
    res.status(405).send({ message: "Only POST allowed" }); return;
  }

  const session = await unstable_getServerSession(req, res, options);

  const user = await prisma.user.findUnique({
    where: {
      email: session?.user?.email || ""
    }
  })

  if (!user) { res.status(401).send({ message: "Unauthorized" }); return; }

  const active = Boolean(req.body.active) || false;
  const activityLevel = active ? (user?.activityLevel || 0) : 0

  const newPrompt = await createNewPrompt(activityLevel, user)

  console.log(newPrompt)

  res.status(200).send({
    promptInstance: newPrompt
  })
}

export default handler;
