import { useEffect } from 'react';

import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';

const Home: NextPage = ({ token }: any) => {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>باشگاه مشتریان پذیرندگان سداد</title>
        <meta name="description" content="باشگاه مشتریان پذیرندگان سداد" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
};