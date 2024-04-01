import Main from "@/layout/Main";
import Hero
    from "@/views/WhatIsTheBestMedicalMarijuanaForEnergy/WhatIsTheBestMedicalMarijuanaForEnergyMobile/components/Hero/Hero";
import WhatIsTheBestMedicalMarijuanaForEnergyContent
    from "@/views/WhatIsTheBestMedicalMarijuanaForEnergy/WhatIsTheBestMedicalMarijuanaForEnergyMobile/components/WhatIsTheBestMedicalMarijuanaForEnergyContent/WhatIsTheBestMedicalMarijuanaForEnergyContent";

export default function WhatIsTheBestMedicalMarijuanaForEnergyMobile() {


    return <Main isMobile={true}>
        <Hero />
        <WhatIsTheBestMedicalMarijuanaForEnergyContent />

    </Main>;
};