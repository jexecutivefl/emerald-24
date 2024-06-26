import Section from "@/components/Section/Section";
import CardComponent from "@/components/cards/CardComponent";
import ButtonComponent from "@/components/ButtonComponent";


const Section1View = () => {
    const cardStyle = {
        height: '300px', // Set a fixed height
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between', // This helps in aligning the content inside the card
        margin: '10px' // Optional margin for spacing around cards
    };

    return (
        <Section>
            <div style={{textAlign: 'center', marginTop: '60px', color: '#54bc77', fontSize: '30px'}}>
                <h2>Get Your Card Without Hassle</h2>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '60px', marginBottom: '70px'}}>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', marginBottom: '120px'}}>

                    <div style={cardStyle}>
                        <CardComponent
                            title="Schedule Your Appointment"
                            content="Book an appointment with us today so we can explore your history, goals, and symptoms so
                                we can help you obtain your Medical Marijuana Card."
                            icon="notebook.png"
                        />
                    </div>
                    <div style={cardStyle}>
                        <CardComponent
                            title="Get a Comprehensive Plan"
                            content="We’ll create a care plan that’s customized to your needs so you know you’re in good hands
                                 with us."
                            icon="stethescope.png"
                        />
                    </div>
                    <div style={cardStyle}>
                        <CardComponent
                            title="Enjoy The Relief You Deserve"
                            content="With our personal guidance and care, you’ll reach your health and wellness goals, and feel
                                 your energy and vitality restored with the help of medical cannabis."
                            icon="hands.png"
                        />
                    </div>
                </div>
                <br/>
                <ButtonComponent/>
            </div>
        </Section>
    )
}

export default Section1View;





