import React, { useEffect } from 'react';
import type { NextPage } from 'next';
import { Spacer } from '@nextui-org/react';
import request from 'graphql-request';

import { Table } from 'components/layouts/Table';
import { User } from 'shared/Type';
import Head from 'next/head';

interface RankingData {
  ranking: User[];
}

interface StaticProps {
  rankingData: RankingData;
}

export async function getStaticProps() {
  const endpoint = process.env.API_URL as string;
  const rankingData: RankingData = await request(
    endpoint,
    `{
      ranking(criteria: "contributions", count: 1000, generation: 0, page: 1) {
        name
        generation
        nickname
        avatar_url
        bio
        contributions
      }
    }`,
  );

  return { props: { rankingData }, revalidate: 43200 };
}

const Home: NextPage<StaticProps> = ({ rankingData }) => {
  useEffect(() => {
    console.log(
      `%c
        ___       ___       ___       ___   
       /\\  \\     /\\  \\     /\\  \\     /\\  \\  
      /::\\  \\   /::\\  \\   _\\:\\  \\   /::\\  \\ 
     /:/\\:\\__\\ /::\\:\\__\\ /\\/::\\__\\ /:/\\:\\__\\
     \\:\\:\\/__/ \\;:::/  / \\::/\\/__/ \\:\\:\\/__/
      \\::/  /   |:\\/__/   \\:\\__\\    \\::/  / 
       \\/__/     \\|__|     \\/__/     \\/__/  

  `,
      'color: #0070F3;',
    );
  });

  return (
    <>
      <Head>
        <title>GRIG</title>
        <meta
          name="description"
          content="광주소프트웨어마이스터고등학교 Github 순위 페이지"
        />
      </Head>
      <Spacer y={2} />
      <Table rankingData={rankingData} />
      <Spacer y={2} />
    </>
  );
};

export default Home;
