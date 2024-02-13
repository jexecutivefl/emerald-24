import Main from "@/layout/Main";
import Hero from "@/views/MedicalMarijuana/MedicalMarijuanaMobile/components/Hero/Hero";
import SectionOne from "@/views/MedicalMarijuana/MedicalMarijuanaMobile/components/SectionOne/SectionOne";
import ScheduleYourConsultation from "@/views/MedicalMarijuana/MedicalMarijuanaMobile/components/ScheduleYourConsultation/ScheduleYourConsultation"
export default function MedicalMarijuanaMobile() {


    return <Main isMobile={true}>
        <Hero />
        <SectionOne />
        <ScheduleYourConsultation />

    </Main>;
};