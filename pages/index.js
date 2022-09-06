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
      
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-SDT8BTLCSG"
        strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-SDT8BTLCSG');
          `}
      </Script>
      
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-10977867466"
        strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'AW-10977867466');
          `}
      </Script>

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-W2P45TQ');
          `}
      </Script>

        <IndexView />
    </Fragment>
            
  ) 
};

export default HomePage;