import Main from "@/layout/Main";
import Hero from "@/views/MedicalMarijuanaAndWeightLossWhatYouShouldKnow/MedicalMarijuanaAndWeightLossWhatYouShouldKnowDesktop/components/Hero/Hero";
import MedicalMarijuanaAndWeightLossWhatYouShouldKnowContent
    from "@/views/MedicalMarijuanaAndWeightLossWhatYouShouldKnow/MedicalMarijuanaAndWeightLossWhatYouShouldKnowDesktop/components/MedicalMarijuanaAndWeightLossWhatYouShouldKnowContent/MedicalMarijuanaAndWeightLossWhatYouShouldKnowContent";

export default function MedicalMarijuanaAndWeightLossWhatYouShouldKnowDesktop() {


    return <Main isMobile={false}>
        <Hero />
        <MedicalMarijuanaAndWeightLossWhatYouShouldKnowContent />

    </Main>;
};