import Checkout from "../../components/checkout/Checkout";
import Script from "next/script";
import Head from "next/head";

const OrderPage = () => {


    return (
        <>
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
            <Checkout />
        </>
        
    )
}

export default OrderPage;