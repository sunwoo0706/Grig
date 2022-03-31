import React from 'react';
import type { NextPage } from 'next';
import { Spacer } from '@nextui-org/react';

import { Table } from 'components/layouts/Table';

const Home: NextPage = () => {
  return (
    <>
      <Spacer y={2} />
      <Table />
      <Spacer y={2} />
    </>
  );
};

export default Home;
