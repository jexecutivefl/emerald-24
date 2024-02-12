import Main from "@/layout/Main";
import Hero from "@/views/MedicalMarijuana/MedicalMarijuanaDesktop/components/Hero/Hero";
import SectionOne from "@/views/MedicalMarijuana/MedicalMarijuanaDesktop/components/SectionOne/SectionOne";
import ScheduleYourConsultation
    from "@/views/MedicalMarijuana/MedicalMarijuanaDesktop/components/ScheduleYourConsultation/ScheduleYourConsultation";

export default function MedicalMarijuanaDesktop() {


    return <Main isMobile={false}>
        <Hero />
        <SectionOne />
        <ScheduleYourConsultation />

    </Main>;
};