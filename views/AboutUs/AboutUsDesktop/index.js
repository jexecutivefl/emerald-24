import Main from "@/layout/Main";
import Hero from "@/views/AboutUs/AboutUsDesktop/components/Hero/Hero";
import ScheduleYourConsultation
    from "@/views/AboutUs/AboutUsDesktop/components/ScheduleYourConsultation/ScheduleYourConsultation";
import Dr from "@/views/AboutUs/AboutUsDesktop/components/Dr/Dr";

export default function AboutUsDesktop() {


    return <Main isMobile={false}>
        <Hero />
        <Dr />
        <ScheduleYourConsultation />
    </Main>;
};