import Main from "@/layout/Main";
import HowToRenewYourFloridaMedicalMarijuanaCardContent
    from "@/views/HowToRenewYourFloridaMedicalMarijuanaCard/HowToRenewYourFloridaMedicalMarijuanaCardMobile/components/HowToRenewYourFloridaMedicalMarijuanaCardContent/HowToRenewYourFloridaMedicalMarijuanaCardContent";
import Hero from "@/views/HowToRenewYourFloridaMedicalMarijuanaCard/HowToRenewYourFloridaMedicalMarijuanaCardMobile/components/Hero/Hero";

export default function HowToRenewYourFloridaMedicalMarijuanaCardMobile() {


    return <Main isMobile={true}>
        <Hero />
        <HowToRenewYourFloridaMedicalMarijuanaCardContent />
    </Main>;
};