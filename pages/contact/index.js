import Main from "../../layout/Main/Main"
import Contact from "../../components/ContactPageCover/components/Form/Form";
import ContactPageCover from '../../components/ContactPageCover'
import ContactPageSideBarMap from '../../components/ContactPageSidebarMap'
import Script from "next/script";

const ContactPage = () => {


    return (
        <>
            
            <title>COVID Test Signup - Contact</title>
            <meta name='free-covid-tests'
          content='Receive Free COVID tests! $0 out of pocket.' />
        
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
             <ContactPageSideBarMap />
        </>
           


    )
}

export default ContactPage;