import { GetSignedUrlConfig, Storage } from '@google-cloud/storage';

const getSecureUrl = async (fileLocation: string) => {
  const storage = new Storage({
    projectId: process.env.STORAGE_PROJECT_ID,
    credentials: {
      client_email: process.env.STORAGE_CLIENT_EMAIL,
      private_key: process.env.STORAGE_PRIVATE_KEY,
    },
  });

  const bucket = storage.bucket(process.env.STORAGE_BUCKET_NAME || "");
  const expiresDate = Date.now() + 15 * 60 * 1000;

  try {
    const options: GetSignedUrlConfig = {
      version: 'v4',
      action: 'read',
      expires: expiresDate,
    };

    const [url] = await bucket.file(fileLocation).getSignedUrl(options);

    return { url, expires: new Date(expiresDate) };
  }
  catch (e) {
    console.log(e)
  }
}

export {
  getSecureUrl,
};
