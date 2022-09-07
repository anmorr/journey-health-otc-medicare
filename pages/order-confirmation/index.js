import Script from "next/script";
import Head from "next/head";
import OrderConfirmation from "../../components/checkout/OrderConfirmation";
import { useRouter } from "next/router";
import Main from "../../layout/Main/Main";
import { useEffect } from "react";

const OrderConfirmationPage = () => {
    
    const router = useRouter()

    

    return (
        <>
            <Head>
                <title>COVID Test Signup - Order Confirmation</title>
            <meta name='free-covid-tests'
          content='Receive Free COVID tests! $0 out of pocket.' />
            </Head>

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


        <OrderConfirmation orderNumber={router.query.orderNumber}/>

        </>
        

    )
}

export default OrderConfirmationPage;