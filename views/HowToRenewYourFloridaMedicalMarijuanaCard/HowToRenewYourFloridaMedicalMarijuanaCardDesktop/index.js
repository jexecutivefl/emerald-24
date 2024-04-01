import Main from "@/layout/Main";
import HowToRenewYourFloridaMedicalMarijuanaCardContent
    from "@/views/HowToRenewYourFloridaMedicalMarijuanaCard/HowToRenewYourFloridaMedicalMarijuanaCardDesktop/components/HowToRenewYourFloridaMedicalMarijuanaCardContent/HowToRenewYourFloridaMedicalMarijuanaCardContent";
import Hero from "@/views/HowToRenewYourFloridaMedicalMarijuanaCard/HowToRenewYourFloridaMedicalMarijuanaCardDesktop/components/Hero/Hero";

export default function HowToRenewYourFloridaMedicalMarijuanaCardDesktop() {


    return <Main isMobile={false}>
        <Hero />
        <HowToRenewYourFloridaMedicalMarijuanaCardContent />

    </Main>;
};