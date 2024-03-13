import Main from "@/layout/Main";
import Hero from "@/views/AboutUs/AboutUsMobile/components/Hero/Hero";
import ScheduleYourConsultation
    from "@/views/AboutUs/AboutUsMobile/components/ScheduleYourConsultation/ScheduleYourConsultation";
import Dr from "@/views/AboutUs/AboutUsMobile/components/Dr/Dr";

export default function AboutUsMobile() {


    return <Main isMobile={true}>
        <Hero />
        <Dr />
        <ScheduleYourConsultation />
    </Main>;
};