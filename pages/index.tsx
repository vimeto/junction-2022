import type { GetServerSideProps, NextPage } from 'next'
import { getSession } from 'next-auth/react';
import prisma from '../lib/prisma';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getSession(ctx);

  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: "/login ",
      },
      props:{},
    };
  }

  return {
    props: {
      locale: ctx.locale,
    }
  }
}

const Home: NextPage = () => {
  return (
    <div className='bg-gray-200'>
      jeejee
    </div>
  )
}

export default Home
