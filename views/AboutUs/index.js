import Main from "@/layout/Main";
import Hero from "@/views/AboutUs/components/Hero/Hero";
import DrScot from "@/views/AboutUs/components/DrScot/DrScot";

export default function AboutUs() {


    return <Main isMobile={false}>
        <Hero />
        <DrScot />
    </Main>;
};