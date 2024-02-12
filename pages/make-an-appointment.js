import { useState, useEffect } from 'react';
import Head from 'next/head';
import HomeDesktop from "@/views/Home/HomeDesktop";
import HomeMobile from "@/views/Home/HomeMobile";
import MakeAnAppointmentMobile from "@/views/MakeAnAppointment/MakeAnAppointmentMobile";
import MakeAnAppointmentDesktop from "@/views/MakeAnAppointment/MakeAnAppointmentDesktop";


export default function Home() {


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
          {isMobile ? <MakeAnAppointmentMobile /> : <MakeAnAppointmentDesktop />}
        </main>
      </>
  );
}
//
