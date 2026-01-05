import React, { Fragment } from 'react';
import Head from 'next/head';
import ErrorSec from 'containers/Error';
import ResetCSS from 'common/assets/css/style';

export default function Custom404() {
  const siteUrl = "https://www.chilsmart.com";
  
  return (
    <Fragment>
      <Head>
        <title>404 - Página no encontrada | Chilsmart</title>
        <meta name="description" content="La página que buscas no existe. Regresa a la página principal de Chilsmart para conocer nuestra plataforma de BI." />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href={`${siteUrl}/404`} />
        <meta property="og:title" content="404 - Página no encontrada | Chilsmart" />
        <meta property="og:description" content="La página que buscas no existe." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${siteUrl}/404`} />
        <link
          href="https://fonts.googleapis.com/css?family=Lato:400,700|Poppins:400,500,600,700|Roboto:400,500,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ResetCSS />
      <ErrorSec />
    </Fragment>
  );
}
