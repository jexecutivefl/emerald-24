import Main from "@/layout/Main";
import HeroComponent from "@/views/Home/HomeDesktop/components/HeroComponent";
import Section1View from "@/views/Home/HomeDesktop/components/Section1View";
import CardComponent2View from "@/views/Home/HomeDesktop/components/CardComponent2View";
import Section2View from "@/views/Home/HomeDesktop/components/Section2View";
import CardComponent3View from "@/views/Home/HomeDesktop/components/CardComponent3View/CardComponent3View";
import Section3View from "@/views/Home/HomeDesktop/components/Section3View";
import WhyChooseEmerald from "@/views/Home/HomeDesktop/components/WhyChooseEmerald/WhyChooseEmerald";

export default function HomeDesktop() {


    return <Main isMobile={false}>
        <HeroComponent
            heading={"Emerald Medical \n Group of Sarasota"}
            description={"Sarasota's leading Medical Marijuana Doctor, \njoin thousands of patients, same day" +
                " approval"}
            backgroundImageUrl="/herobackground.jpeg"
        />
        <Section1View />
        <WhyChooseEmerald />
        <CardComponent2View />
        <Section2View />
        <CardComponent3View />
        <Section3View />
        {/*<ScheduleAnAppointmentToday />*/}
    </Main>;
};