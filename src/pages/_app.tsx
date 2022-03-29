import React from 'react';
import type { AppProps } from 'next/app';
import { NextUIProvider } from '@nextui-org/react';

import { Header } from 'components/layouts/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <Header />
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
