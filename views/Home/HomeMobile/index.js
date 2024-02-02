import Main from "@/layout/Main";

import ScheduleAnAppointmentToday from "@/components/ScheduleAnAppointment/ScheduleAnAppointmentToday";
import HeroComponent from "@/views/Home/HomeMobile/components/HeroComponent";
import Section1View from "@/views/Home/HomeMobile/components/Section1View";
import CardComponent2View from "@/views/Home/HomeMobile/components/CardComponent2View";
import Section2View from "@/views/Home/HomeMobile/components/Section2View";
import CardComponent3View from "@/views/Home/HomeMobile/components/CardComponent3View/CardComponent3View";
import Section3View from "@/views/Home/HomeMobile/components/Section3View";


export default function HomeDesktop() {


    return <Main isMobile={true}>
        <HeroComponent
            heading={"Patient-Focused and \nPersonalized Care."}
            description={"Experience a medical team here in Sarasota\n that listens and creates a care plan\n that " +
                "includes your Florida Medical\n Marijuana Registration Card"}
            backgroundImageUrl="/herobackground.jpeg"
        />
        <Section1View />
        <CardComponent2View />
        <Section2View />
        <CardComponent3View />
        <Section3View />
    </Main>;
};