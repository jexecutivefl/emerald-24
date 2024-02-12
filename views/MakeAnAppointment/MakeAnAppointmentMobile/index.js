import Main from "@/layout/Main";
import ButtonComponent from "@/components/ButtonComponent";

export default function MakeAnAppointmentMobile() {
    // Inline style for centering the button
    const centerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'right',
        height: '50px' // This assumes you want to center it vertically in the whole viewport
    };

    return (
        <Main isMobile={true}>
            <div style={centerStyle}>
                <ButtonComponent />
            </div>
        </Main>
    );
};
