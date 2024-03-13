import { useState, useEffect } from 'react';
import Head from 'next/head';
import UnderConstructionMobile from "@/views/UnderConstruction/UnderConstructionMobile";

import AboutUsDesktop from "@/views/AboutUs/AboutUsDesktop";
import AboutUsMobile from "@/views/AboutUs/AboutUsMobile";
import Script from "next/script";

export default function AboutUs() {


  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches);
    };

    // Check mobile on mount and update the state accordingly
    checkMobile();

    // Attach event listener for resizing the window
    window.addEventListener('resize', checkMobile);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
      <>
        <Head>
        <title>About Us - Empowering Your Journey with Our Expertise</title>
        <meta name="description" content="Meet our team and learn about Dr. Tiffany Christian's dedication to integrative medicine and patient empowerment." />
        <meta name="keywords" content="Dr. Tiffany Christian, medical cannabis, integrative medicine, emergency medicine, patient empowerment" />
        <link rel="canonical" href="https://www.yourwebsite.com/about-us" />
      </Head>
    <Script type="application/ld+json">
        {`{
          "@context": "http://schema.org",
          "@type": "Organization",
          "name": "Emerald Medical Group of Sarasota",
          "url": "https://www.emeraldmedicagroup.com/about-us",
          "logo": "https://www.yourwebsite.com/logo.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-941-926-3100",
            "contactType": "Customer Service"
          },
          "sameAs": []
        }`}
    </Script>
        <main>
          {isMobile ? <AboutUsMobile /> : <AboutUsDesktop />}
        </main>
      </>
  );
}
//
