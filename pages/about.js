import { useState, useEffect } from 'react';
import Head from 'next/head';
import UnderConstructionMobile from "@/views/UnderConstruction/UnderConstructionMobile";

import AboutUsDesktop from "@/views/AboutUs/AboutUsDesktop";
import AboutUsMobile from "@/views/AboutUs/AboutUsMobile";

export default function About() {


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
          <>

          </>
        </Head>
        <main>
          {isMobile ? <AboutUsMobile /> : <AboutUsDesktop />}
        </main>
      </>
  );
}
//
