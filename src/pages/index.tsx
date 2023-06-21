import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const router = useRouter()
  useEffect(()=>{
    // check first condition like authentication and rout

    router.replace('/home')

  },[])
  return (
    <div>
      <Head>
        <title>سایت فروش خانه</title>
        <meta name="description" content="سایت فروش خانه" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
};

export default Home;
