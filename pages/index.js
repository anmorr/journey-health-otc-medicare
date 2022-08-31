import { Fragment, useState } from "react";
import Head from 'next/head'
import IndexView from  '../views/IndexView/IndexView'

import React from 'react';
import Home from '../views/Home';
import Script from 'next/script'

const HomePage = () => {
  // return <Home />;
  return (
    <Fragment>
        <Head>
            <title>COVID Test Signup</title>
            <meta name='free-covid-tests'
          content='Receive Free COVID tests! $0 out of pocket.' />
        
        
        
      </Head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=UA-239505202-1"
        strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());

          gtag('config', 'UA-239505202-1');
          
          
          `}
        </Script>
        <IndexView />
    </Fragment>
            
  ) 
};

export default HomePage;