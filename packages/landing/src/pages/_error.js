import React, { Fragment } from 'react';
import Head from 'next/head';
import ErrorSec from 'containers/Error';
import ResetCSS from 'common/assets/css/style';

export default function Error({ statusCode }) {
  const siteUrl = "https://www.chilsmart.com";
  const is404 = statusCode === 404;
  const title = is404 
    ? "404 - Página no encontrada | Chilsmart"
    : `Error ${statusCode || 500} | Chilsmart`;
  const description = is404
    ? "La página que buscas no existe. Regresa a la página principal de Chilsmart para conocer nuestra plataforma de BI."
    : "Ha ocurrido un error en el servidor. Por favor intenta más tarde o regresa a la página principal.";

  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href={`${siteUrl}${is404 ? '/404' : '/_error'}`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${siteUrl}${is404 ? '/404' : '/_error'}`} />
        <link
          href="https://fonts.googleapis.com/css?family=Lato:400,700|Poppins:400,500,600,700|Roboto:400,500,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ResetCSS />
      <div>
        {statusCode && statusCode !== 404 ? (
          `An error ${statusCode} occurred on server`
        ) : (
          <ErrorSec />
        )}
      </div>
    </Fragment>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};
