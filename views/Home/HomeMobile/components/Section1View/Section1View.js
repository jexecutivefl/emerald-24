import CardComponent from "@/components/cards/CardComponent";
import ButtonComponent from "@/components/ButtonComponent";

const Section1View = () => {
    const cardStyle = {
        height: '300px', // Set a fixed height
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between', // This helps in aligning the content inside the card
        margin: '10px', // Optional margin for spacing around cards
        width: '100%' // Ensure cards don't overflow on mobile
    };

    const sectionStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '0 20px' // Add some padding on the sides for mobile
    };

    const cardsContainerStyle = {
        display: 'flex',
        flexDirection: 'column', // Stack cards vertically on mobile
        alignItems: 'center',
        marginBottom: '60px', // Reduced bottom margin for mobile
        width: '100%' // Use full width to accommodate smaller screens
    };

    return (
            <div style={sectionStyle}>
                <div style={cardsContainerStyle}>
                    {/* Adjusting each CardComponent to take full width on smaller screens */}
                    <div style={cardStyle}>
                        <CardComponent
                            title="Schedule Your Appointment"
                            content="Book an appointment with us today so we can explore your history, goals, and symptoms so we can help you obtain your Medical Marijuana Card."
                            icon="notebook.png"
                        />
                    </div>
                    <div style={cardStyle}>
                        <CardComponent
                            title="Get a Comprehensive Plan"
                            content="We’ll create a care plan that’s customized to your needs so you know you’re in good hands with us."
                            icon="stethescope.png"
                        />
                    </div>
                    <div style={cardStyle}>
                        <CardComponent
                            title="Enjoy The Relief You Deserve"
                            content="With our personal guidance and care, you’ll reach your health and wellness goals, and feel your energy and vitality restored with the help of medical cannabis."
                            icon="hands.png"
                        />
                    </div>
                </div>
                <ButtonComponent/>
            </div>
    );
}

export default Section1View;
