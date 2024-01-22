import Main from "@/layout/Main";
import Image from "next/image";

export default function UnderConstructionMobile() {


    return <Main isMobile={true}>
        <Image
            src="/under-construction.jpeg" // Replace with your image path
            alt="Description of Image" // Provide an alternative text for the image
            width={400} // Adjust the width as needed
            height={500} // Adjust the height as needed
        />
    </Main>;
};