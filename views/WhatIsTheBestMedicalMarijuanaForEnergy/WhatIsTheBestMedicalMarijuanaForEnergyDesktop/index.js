import Main from "@/layout/Main";
import Hero
    from "@/views/WhatIsTheBestMedicalMarijuanaForEnergy/WhatIsTheBestMedicalMarijuanaForEnergyDesktop/components/Hero/Hero";
import WhatIsTheBestMedicalMarijuanaForEnergyContent
    from "@/views/WhatIsTheBestMedicalMarijuanaForEnergy/WhatIsTheBestMedicalMarijuanaForEnergyDesktop/components/WhatIsTheBestMedicalMarijuanaForEnergyContent/WhatIsTheBestMedicalMarijuanaForEnergyContent";

export default function WhatIsTheBestMedicalMarijuanaForEnergyDesktop() {


    return <Main isMobile={false}>
        <Hero />
        <WhatIsTheBestMedicalMarijuanaForEnergyContent />

    </Main>;
};