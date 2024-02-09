import Main from "@/layout/Main";
import HeroComponent from "@/views/Home/HomeDesktop/components/HeroComponent";
import Section1View from "@/views/Home/HomeDesktop/components/Section1View";
import CardComponent2View from "@/views/Home/HomeDesktop/components/CardComponent2View";
import Section2View from "@/views/Home/HomeDesktop/components/Section2View";
import CardComponent3View from "@/views/Home/HomeDesktop/components/CardComponent3View/CardComponent3View";
import Section3View from "@/views/Home/HomeDesktop/components/Section3View";
import ScheduleAnAppointmentToday from "@/components/ScheduleAnAppointment/ScheduleAnAppointmentToday";

export default function HomeDesktop() {


    return <Main isMobile={false}>
        <HeroComponent
            heading={"Patient-Focused and \nPersonalized Care."}
            description={"Experience a medical team here in Sarasota that listens and creates a care plan that\n " +
                "includes your Florida Medical Marijuana Registration Card"}
            backgroundImageUrl="/herobackground.jpeg"
        />
        <Section1View />
        <CardComponent2View />
        <Section2View />
        <CardComponent3View />
        <Section3View />
        {/*<ScheduleAnAppointmentToday />*/}
    </Main>;
};