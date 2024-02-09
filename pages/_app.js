import "@/styles/globals.css";
import Script from 'next/script'; // Import Script component

export default function App({ Component, pageProps }) {
    return (
        <>
            {/* Google Analytics script */}
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX');
        `}
            </Script>

            {/* Crazy Egg Tracking Script */}
            <Script strategy="afterInteractive">
                {`
          setTimeout(function(){var a=document.createElement("script");
          var b=document.getElementsByTagName("script")[0];
          a.src=document.location.protocol+"//script.crazyegg.com/pages/scripts/XXXX/YYYY.js";
          a.async=true;a.type="text/javascript";b.parentNode.insertBefore(a,b)}, 1);
        `}
            </Script>

            <Component {...pageProps} />
        </>
    );
}
