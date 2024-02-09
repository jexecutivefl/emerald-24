import Main from "@/layout/Main";
import Hero from "@/views/AboutUs/AboutUsDesktop/components/Hero/Hero";
import DrScot from "@/views/AboutUs/AboutUsDesktop/components/DrScot/DrScot";
import ScheduleYourConsultation
    from "@/views/AboutUs/AboutUsDesktop/components/ScheduleYourConsultation/ScheduleYourConsultation";

export default function AboutUsDesktop() {


    return <Main isMobile={false}>
        <Hero />
        <DrScot />
        <ScheduleYourConsultation />
    </Main>;
};