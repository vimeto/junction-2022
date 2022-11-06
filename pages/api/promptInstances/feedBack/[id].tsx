import { NextApiHandler } from "next";
import { unstable_getServerSession } from "next-auth";
import formidable from 'formidable';

import { GetSignedUrlConfig, Storage } from '@google-cloud/storage';

import { createNewPrompt } from "../../../../lib/createPrompt/utils";
import prisma from "../../../../lib/prisma";
import { options } from "../../auth/[...nextauth]";

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler: NextApiHandler = async (req, res) => {
  if (req.method != "POST") {
    res.status(405).send({ message: "Only POST allowed" }); return;
  }

  const { id } = req.query;
  const stringId = String(id);

  const storage = new Storage({
    projectId: process.env.STORAGE_PROJECT_ID,
    credentials: {
      client_email: process.env.STORAGE_CLIENT_EMAIL,
      private_key: (process.env.STORAGE_PRIVATE_KEY || "").replace(/\\n/g, '\n'),
    },
  });

  const bucket = storage.bucket(process.env.STORAGE_BUCKET_NAME || "");

  const form = new formidable.IncomingForm();
  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.log("error reading the files");
      return res.status(400).end();
    }

    const inputValue = String(fields.inputValue);
    const enumValue = Number(fields.enumValue) || undefined;
    const share = fields.share === "true";
    let fileLocation = "";

    console.log("saving");
    console.log("sshare", share)

    if (files.file && !(files.file as formidable.File[])?.length) {
      const f = files.file as formidable.File;
      const filename = f.originalFilename;

      const todayseconds = Date.now();
      const res = await bucket.upload(
        f.filepath,
        { destination: `smartq/promptInstances/${todayseconds}/${filename}` }
      )

      fileLocation = res[0].name
    }
    const a = await prisma.promptInstance.update({
      where: {
        id: stringId,
      },
      data: {
        shared: share,
        completed: true,
        enumValue: enumValue,
        inputValue: inputValue,
        imageLocation: fileLocation
      }
    });

    console.log(a);

    return res.status(200).end();
  });

  res.status(200)
}

export default handler;
