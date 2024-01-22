import Main from "@/layout/Main";
import Image from "next/image";

export default function UnderConstructionDesktop() {


    return <Main isMobile={false}>
        <Image
            src="/under-construction.jpeg" // Replace with your image path
            alt="Description of Image" // Provide an alternative text for the image
            width={1420} // Adjust the width as needed
            height={800} // Adjust the height as needed
        />

    </Main>;
};