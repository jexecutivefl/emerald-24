import { useState, useEffect } from 'react';
import Head from 'next/head';
import HomeDesktop from "@/views/Home/HomeDesktop";
import HomeMobile from "@/views/Home/HomeMobile";
import UnderConstructionMobile from "@/views/UnderConstruction/UnderConstructionMobile";
import UnderConstructionDesktop from "@/views/UnderConstruction/UnderConstructionDesktop";

export default function YouCantUseMarijuanaYouHaveKids() {


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
          {isMobile ? <UnderConstructionMobile /> : <UnderConstructionDesktop />}
        </main>
      </>
  );
}
//
