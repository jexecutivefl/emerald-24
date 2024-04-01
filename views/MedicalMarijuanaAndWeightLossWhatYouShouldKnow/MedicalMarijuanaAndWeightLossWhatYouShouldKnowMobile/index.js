import Main from "@/layout/Main";
import Hero from "@/views/MedicalMarijuanaAndWeightLossWhatYouShouldKnow/MedicalMarijuanaAndWeightLossWhatYouShouldKnowMobile/components/Hero/Hero";
import MedicalMarijuanaAndWeightLossWhatYouShouldKnowContent
    from "@/views/MedicalMarijuanaAndWeightLossWhatYouShouldKnow/MedicalMarijuanaAndWeightLossWhatYouShouldKnowMobile/components/MedicalMarijuanaAndWeightLossWhatYouShouldKnowContent/MedicalMarijuanaAndWeightLossWhatYouShouldKnowContent";

export default function MedicalMarijuanaAndWeightLossWhatYouShouldKnowMobile() {


    return <Main isMobile={true}>
        <Hero />
        <MedicalMarijuanaAndWeightLossWhatYouShouldKnowContent />
    </Main>;
};