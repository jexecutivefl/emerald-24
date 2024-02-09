import Main from "@/layout/Main";
import Hero from "@/views/AboutUs/AboutUsMobile/components/Hero/Hero";
import DrScot from "@/views/AboutUs/AboutUsMobile/components/DrScot/DrScot";
import ScheduleYourConsultation
    from "@/views/AboutUs/AboutUsMobile/components/ScheduleYourConsultation/ScheduleYourConsultation";

export default function AboutUsMobile() {


    return <Main isMobile={true}>
        <Hero />
        <DrScot />
        <ScheduleYourConsultation />
    </Main>;
};