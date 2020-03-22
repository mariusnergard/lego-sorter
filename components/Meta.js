import React from 'react';
import Head from 'next/head';

const Meta = () => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta charSet="utf-8" />
    <meta name="theme-color" content="#44505c" />
    <link rel="shortcut icon" href="/static/favicon.ico" />
    {/* <link rel="stylesheet" type="text/css" href="/static/css/nprogress.css" /> */}
    <link rel="stylesheet" type="text/css" href="/static/css/ps-style.min.css" />
    {/*<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />*/}
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    <link rel="stylesheet" type="text/css" href="/static/css/react-table.css" />
    <title>Mesh!</title>
  </Head>
);

export default Meta;
