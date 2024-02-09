import Main from "@/layout/Main";
import Hero from "@/views/MedicalMarijuana/components/Hero/Hero";
import SectionOne from "@/views/MedicalMarijuana/components/SectionOne/SectionOne";
import ScheduleYourConsultation from "@/views/MedicalMarijuana/ScheduleYourConsultation/ScheduleYourConsultation";

export default function MedicalMarijuana() {


    return <Main isMobile={false}>
        <Hero />
        <SectionOne />
        <ScheduleYourConsultation />

    </Main>;
};