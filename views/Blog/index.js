import Main from "@/layout/Main";
import BlogCard from "@/components/BlogCard/BlogCard";


export default function BlogDesktop() {

    const pageBlogPosts = [
        {
            title: "CBD FOR MUSCLE SPASMS: HOW CAN IT HELP?\n",
            date: "January 13, 2024",
            commentsCount: 10,
            categories: ["CBD", "MEDICAL MARIJUANA"],
            paragraphs: [
                "Are you struggling with muscle spasms that disrupt your daily routine and " +
                "diminish your quality of life? These involuntary muscle contractions " +
                "can lead to relentless...",
            ],
            imageUrl: "EM-CBD-for-muscle-spasms-image.jpg",
            imageAlt: "Unique Image",
            buttonText: "READ MORE",
            url: "/cbd-for-muscle-spasms-how-can-it-help" // Replace with the actual URL
        },
        {
            title: "WHAT IS THE BEST MEDICAL MARIJUANA FOR ENERGY?",
            date: "December 13, 2023",
            commentsCount: 0,
            categories: ["MEDICAL MARIJUANA"],
            paragraphs: [
                "If you’re feeling tired, sluggish, or unmotivated and are exploring the benefits of medical " +
                "marijuana for energy, you’re not alone. Many people are turning to...",
            ],
            imageUrl: "EM-medical-marijuana-for-energy-image.jpg",
            imageAlt: "Happy woman",
            buttonText: "READ MORE"
        },
        {
            title: "HOW TO RENEW YOUR FLORIDA MEDICAL MARIJUANA CARD",
            date: "November 11, 2023",
            commentsCount: 0,
            categories: ["MEDICAL MARIJUANA", "MEDICAL MARIJUANA CARD"],
            paragraphs: [
                "We’ve mentioned this a few times in passing but it’s often helpful to find the topic upfront in the blog. So – whether you’re a...",
            ],
            imageUrl: "EM-renew-florida-medical-marijuana-card-image.jpg",
            imageAlt: "Various forms of cannabis",
            buttonText: "READ MORE"
        },
        {
            title: "MEDICAL MARIJUANA AND WEIGHT LOSS: WHAT YOU SHOULD KNOW",
            date: "October 11, 2023",
            commentsCount: 0,
            categories: ["MEDICAL MARIJUANA", "MEDICAL WEIGHT LOSS"],
            paragraphs: [
                "Beyond its recreational use, medical marijuana has shown promise in addressing various health issues, some indirectly contributing to weight control. This blog post will look...",
            ],
            imageUrl: "EM-medical-marijuana-and-weight-loss-image.jpg",
            imageAlt: "Notebook and tape measure",
            buttonText: "READ MORE"
        },
        {
            title: "TYPES OF MEDICAL MARIJUANA: WHAT YOU NEED TO KNOW",
            date: "September 11, 2023",
            commentsCount: 0,
            categories: ["GENERAL", "MEDICAL MARIJUANA"],
            paragraphs: [
                "If you’re curious about the types of medical marijuana that exist, you’ve come to the right place! In this comprehensive guide, we’ll cover the basics...",
            ],
            imageUrl: "EM-types-of-medical-marijuana-image.jpg",
            imageAlt: "Cannabis buds and eyedropper",
            buttonText: "READ MORE"
        },
        {
            title: "MEDICAL MARIJUANA LAW IN FLORIDA",
            date: "August 12, 2023",
            commentsCount: 0,
            categories: ["MEDICAL MARIJUANA"],
            paragraphs: [
                "If you’re considering using medical marijuana in Florida, you may have some questions about medical marijuana law and how it applies to you. Here are...",
            ],
            imageUrl: "image-for-medical-marijuana-law-florida.jpg",
            imageAlt: "Marijuana plant in office",
            buttonText: "READ MORE"
        },
        {
            title: "WHAT IS THE COST OF MEDICAL MARIJUANA IN FLORIDA?",
            date: "July 13, 2023",
            commentsCount: 0,
            categories: ["GENERAL", "MEDICAL MARIJUANA"],
            paragraphs: [
                "Medical marijuana has gained significant popularity as a viable treatment option for various medical conditions. But you can be wondering about the cost of medical...",
            ],
            imageUrl: "image-for-cost-of-medical-marijuana-florida.jpg",
            imageAlt: "Medical marijuana in prescription container",
            buttonText: "READ MORE"
        },
        {
            title: "WHAT IS THE FLORIDA MEDICAL MARIJUANA USE REGISTRY?",
            date: "June 11, 2023",
            commentsCount: 0,
            categories: ["MEDICAL MARIJUANA", "MEDICAL MARIJUANA CARD"],
            paragraphs: [
                "Let’s eavesdrop on someone who’s thinking of using medical marijuana for an ailment they haven’t yet found a satisfactory solution for. This person may be...",
            ],
            imageUrl: "image-for-florida-medical-marijuana-use-registry.jpg",
            imageAlt: "Marijuana leaf and stethoscope",
            buttonText: "READ MORE"
        },
        {
            title: "MEDICAL MARIJUANA FOR SEIZURES: WHAT YOU NEED TO KNOW",
            date: "May 11, 2023",
            commentsCount: 0,
            categories: ["MEDICAL MARIJUANA"],
            paragraphs: [
                "Seizures can be debilitating. They can have a profound impact on your physical and mental health. Around 3.4 million Americans live with epilepsy. But in...",
            ],
            imageUrl: "image-for-medical-marijuana-for-seizures.jpg",
            imageAlt: "Graphic of brain and lightning bolt on marijuana leaf",
            buttonText: "READ MORE"
        },
        {
            title: "WILL MEDICAL MARIJUANA USE MAKE ME AN ADDICT?",
            date: "April 13, 2023",
            commentsCount: 0,
            categories: ["MEDICAL MARIJUANA"],
            paragraphs: [
                "If you’re considering medical marijuana, you may have questions about its potential risks and benefits. This article will explore the topic of medical marijuana use...",
            ],
            imageUrl: "image-for-medical-marijuana-addiction.jpg",
            imageAlt: "Cannabis plant",
            buttonText: "READ MORE"
        },
        {
            title: "RELIEF FROM MENOPAUSE SYMPTOMS: CAN MEDICAL MARIJUANA HELP?",
            date: "March 13, 2023",
            commentsCount: 0,
            categories: ["MEDICAL MARIJUANA", "WOMEN'S WELLNESS CARE"],
            paragraphs: [
                "When you’re a woman, relief from menopause symptoms is high on your list of “wants” when it comes to solving the annoyances and discomfort! You...",
            ],
            imageUrl: "image-for-relief-from-menopause-symptoms.jpg",
            imageAlt: "Woman looking tired",
            buttonText: "READ MORE"
        },
        {
            title: "COMPARING DELIVERY METHODS FOR MEDICAL MARIJUANA",
            date: "February 14, 2023",
            commentsCount: 0,
            categories: ["MEDICAL MARIJUANA"],
            paragraphs: [
                "You cannot have failed to notice that medical marijuana has grown in popularity and been proven to offer countless benefits in treating many medical conditions....",
            ],
            imageUrl: "image-for-delivery-methods-medical-marijuana.jpg",
            imageAlt: "Hand holding tablets, capsules, and pills",
            buttonText: "READ MORE"
        },
        {
            title: "WHAT CAN CANNABINOIDS CURE?",
            date: "January 14, 2023",
            commentsCount: 0,
            categories: ["CBD", "GENERAL", "MEDICAL MARIJUANA"],
            paragraphs: [
                "There’s more and more good news about the benefits of medical marijuana, so it’s normal for us to go on our browser and type “what...",
            ],
            imageUrl: "image-for-what-cannabinoids-cure.jpg",
            imageAlt: "Woman looking at CBD bottle",
            buttonText: "READ MORE"
        },
        {
            title: "BENEFITS OF MARIJUANA FOR BRAIN HEALTH",
            date: "December 11, 2022",
            commentsCount: 0,
            categories: ["CBD"],
            paragraphs: [
                "While scientists continue to work hard to understand the true effects of CBD, existing studies show that the benefits of marijuana include promoting overall brain...",
            ],
            imageUrl: "image-for-marijuana-brain-health.jpg",
            imageAlt: "Artistic image of neural pathways",
            buttonText: "READ MORE"
        },
        {
            title: "TELL ME ABOUT MARIJUANA FOR DEPRESSION",
            date: "November 13, 2022",
            commentsCount: 0,
            categories: ["CBD", "MEDICAL MARIJUANA", "MEDICAL MARIJUANA CARD"],
            paragraphs: [
                "In the United States, the legalization of marijuana use for medical and recreational purposes is a growing trend. Because of this, using marijuana for depression...",
            ],
            imageUrl: "image-for-marijuana-depression.jpg",
            imageAlt: "Man looking sad",
            buttonText: "READ MORE"
        },
        {
            title: "THINKING ABOUT MARIJUANA FOR GLAUCOMA: SOME FACTS",
            date: "October 15, 2022",
            commentsCount: 0,
            categories: ["CBD", "MEDICAL MARIJUANA", "PREVENTIVE CARE"],
            paragraphs: [
                "Glaucoma is the second leading cause of blindness worldwide and affects more than 60 million people. In the 1970s, there were reports that smoking marijuana...",
            ],
            imageUrl: "image-for-marijuana-glaucoma.jpg",
            imageAlt: "Composite image of an eye and marijuana",
            buttonText: "READ MORE"
        },
        {
            title: "DOES MEDICAL MARIJUANA HELP WITH NAUSEA?",
            date: "September 14, 2022",
            commentsCount: 0,
            categories: ["MEDICAL MARIJUANA", "PREVENTIVE CARE"],
            paragraphs: [
                "An upset stomach can turn a normal day into a rough one really fast. When your stomach turns and you start to feel queasy, it’s...",
            ],
            imageUrl: "image-for-marijuana-nausea.jpg",
            imageAlt: "Man clutching his stomach",
            buttonText: "READ MORE"
        },
        {
            title: "MEDICAL MARIJUANA FOR SLEEP PROBLEMS",
            date: "August 15, 2022",
            commentsCount: 0,
            categories: ["PREVENTIVE CARE"],
            paragraphs: [
                "Are you one of the millions of Americans suffering from sleep problems? Is lack of sleep interfering with your enjoyment and quality of life? Unfortunately,...",
            ],
            imageUrl: "image-for-marijuana-sleep-problems.jpg",
            imageAlt: "Person lying in bed awake",
            buttonText: "READ MORE"
        },
        {
            title: "HOW CAN I GET A FLORIDA MEDICAL MARIJUANA CARD?",
            date: "July 15, 2022",
            commentsCount: 0,
            categories: ["MEDICAL MARIJUANA"],
            paragraphs: [
                "Friends have told you about the many amazing benefits of medical marijuana. You’ve done your research about how medical marijuana can treat the symptoms of...",
            ],
            imageUrl: "image-for-florida-medical-marijuana-card.jpg",
            imageAlt: "Florida state seal and marijuana leaves",
            buttonText: "READ MORE"
        },
        {
            title: "MEDICAL MARIJUANA FOR CHRONIC PAIN",
            date: "June 15, 2022",
            commentsCount: 0,
            categories: ["MEDICAL MARIJUANA", "PRIMARY CARE"],
            paragraphs: [
                "Of all the wonderful benefits of medical marijuana, relieving chronic pain is at the top of the list. The availability of medical marijuana for chronic...",
            ],
            imageUrl: "image-for-medical-marijuana-chronic-pain.jpg",
            imageAlt: "Man with Chronic Pain",
            buttonText: "READ MORE"
        },
        // Continuing from the previous entries in the array
        {
            title: "DOES MEDICAL MARIJUANA HELP WITH ANXIETY?",
            date: "May 15, 2022",
            commentsCount: 0,
            categories: ["PREVENTIVE CARE"],
            paragraphs: [
                "Anxiety can consume us from time to time. It’s hardwired into our system. It lets us know that we aren’t safe. It gives us clues...",
            ],
            imageUrl: "image-for-medical-marijuana-anxiety.jpg",
            imageAlt: "Medical Marijuana for Anxiety",
            buttonText: "READ MORE"
        },
        {
            title: "USING MEDICAL MARIJUANA FOR THE FIRST TIME",
            date: "April 15, 2022",
            commentsCount: 0,
            categories: ["MEDICAL MARIJUANA"],
            paragraphs: [
                "You’ve done your homework, listened to your doctor’s advice, and decided that medical marijuana is right for you. Now what? Everything about medical marijuana can...",
            ],
            imageUrl: "image-for-using-medical-marijuana-first-time.jpg",
            imageAlt: "Medical Marijuana",
            buttonText: "READ MORE"
        },
        {
            title: "CONFUSED ABOUT CBD? READ THIS.",
            date: "March 15, 2022",
            commentsCount: 0,
            categories: ["CBD", "GENERAL", "MEDICAL MARIJUANA"],
            paragraphs: [
                "If CBD confuses you, you’re not alone. Unfortunately, stories and myths about medical marijuana are abundant, while the facts and a concise understanding of the...",
            ],
            imageUrl: "image-for-confused-about-cbd.jpg",
            imageAlt: "Image of CBD Plant",
            buttonText: "READ MORE"
        },
        {
            title: "8 FAQS ABOUT MEDICAL MARIJUANA",
            date: "February 9, 2022",
            commentsCount: 0,
            categories: ["GENERAL", "MEDICAL MARIJUANA"],
            paragraphs: [
                "We are proud to offer Medical Marijuana in Sarasota and want to clear up a few things for our patients and prospective patients about this...",
            ],
            imageUrl: "image-for-medical-marijuana-faqs.jpg",
            imageAlt: "Medical Marijuana FAQs",
            buttonText: "READ MORE"
        },
        {
            title: "LET’S GET EDUCATED – MEDICAL MARIJUANA FACTS",
            date: "January 19, 2022",
            commentsCount: 0,
            categories: ["MEDICAL MARIJUANA"],
            paragraphs: [
                "We’re all about education here at Emerald Medical Group. We believe that you must have all of the information you need about medical marijuana so...",
            ],
            imageUrl: "image-for-medical-marijuana-education.jpg",
            imageAlt: "Medical Marijuana",
            buttonText: "READ MORE"
        },
        {
            title: "MEDICAL MARIJUANA LAWS FOR SNOWBIRDS!",
            date: "December 16, 2021",
            commentsCount: 0,
            categories: ["MEDICAL MARIJUANA"],
            paragraphs: [
                "Medical marijuana laws are confusing! Especially if you travel from state to state. Many people don’t realize that the laws regarding medical cannabis are not...",
            ],
            imageUrl: "image-for-medical-marijuana-laws-snowbirds.jpg",
            imageAlt: "Medical Marijuana Laws for Snowbirds",
            buttonText: "READ MORE"
        },
        {
            title: "MEDICAL MARIJUANA: LET’S TALK ABOUT THE STIGMA",
            date: "November 17, 2021",
            commentsCount: 0,
            categories: ["MEDICAL MARIJUANA"],
            paragraphs: [
                "Although cannabis use has been legalized to some extent in 44 states, there is still a stigma about its use. That stigma comes from the...",
            ],
            imageUrl: "image-for-medical-marijuana-stigma.jpg",
            imageAlt: "Medical Marijuana",
            buttonText: "READ MORE"
        },
        {
            title: "YOU CAN’T USE MARIJUANA. YOU HAVE KIDS!",
            date: "October 13, 2021",
            commentsCount: 0,
            categories: ["MEDICAL MARIJUANA"],
            paragraphs: [
                "Have you ever wound up in a conversation that sounds something like this… “You can’t smoke marijuana. You’ve got kids! Are you out of your...",
            ],
            imageUrl: "image-for-marijuana-parents.jpg",
            imageAlt: "Can I use marijuana if I have kids?",
            buttonText: "READ MORE"
        },
        {
            title: "CANNABIS INDICA VS. CANNABIS SATIVA: LET’S DISCUSS THE BASICS",
            date: "September 15, 2021",
            commentsCount: 0,
            categories: ["MEDICAL MARIJUANA"],
            paragraphs: [
                "If you’re new to medical marijuana, you may be a little confused about the best type or strain. The different types of marijuana are broken...",
            ],
            imageUrl: "image-for-indica-vs-sativa.jpg",
            imageAlt: "Cannabis Indica vs. Cannabis Sativa",
            buttonText: "READ MORE"
        },
        {
            title: "DID YOU KNOW FLORIDA MEDICAL MARIJUANA LAWS HAVE CHANGED?",
            date: "August 17, 2021",
            commentsCount: 0,
            categories: ["MEDICAL MARIJUANA"],
            paragraphs: [
                "Did you know the laws around medical marijuana have changed here in Florida? If the answer is no, you are not alone. Many people are...",
            ],
            imageUrl: "image-for-florida-medical-marijuana-laws.jpg",
            imageAlt: "Medical Marijuana in Florida",
            buttonText: "READ MORE"
        },
        {
            title: "HOW LONG DOES THC STAY IN YOUR SYSTEM?",
            date: "July 21, 2021",
            commentsCount: 0,
            categories: ["MEDICAL MARIJUANA"],
            paragraphs: [
                "THC, the active compound found in medical and recreational marijuana, causes euphoric effects that last a few hours, but it can remain in your system...",
            ],
            imageUrl: "image-for-thc-in-system.jpg",
            imageAlt: "THC",
            buttonText: "READ MORE"
        },
        {
            title: "MEDICAL MARIJUANA: MISCONCEPTIONS ABOUT THE MEDICINAL PLANT",
            date: "June 16, 2021",
            commentsCount: 0,
            categories: ["MEDICAL MARIJUANA"],
            paragraphs: [
                "The legalization of marijuana, medical marijuana, is a controversial topic. And even though marijuana is fully legalized or medically legalized in most states, there are...",
            ],
            imageUrl: "image-for-medical-marijuana-misconceptions.jpg",
            imageAlt: "Medical Marijuana",
            buttonText: "READ MORE"
        },
        {
            title: "MEDICAL MARIJUANA: IS CBD ADDICTIVE?",
            date: "May 12, 2021",
            commentsCount: 0,
            categories: ["CBD", "MEDICAL MARIJUANA"],
            paragraphs: [
                "CBD is everywhere! CBD can be found in oils, creams, patches, beauty products, salves, tinctures, vapes, and edibles. You name it. Someone has probably found...",
            ],
            imageUrl: "image-for-is-cbd-addictive.jpg",
            imageAlt: "CBD",
            buttonText: "READ MORE"
        },
        {
            title: "CAN CBD BENEFIT MENTAL HEALTH? YES!",
            date: "April 15, 2021",
            commentsCount: 0,
            categories: ["CBD", "MEDICAL MARIJUANA"],
            paragraphs: [
                "Do you struggle with mental health issues? You are not alone. It’s no surprise with everything in the last year, the number of Americans struggling...",
            ],
            imageUrl: "image-for-cbd-mental-health.jpg",
            imageAlt: "Mental Health, CBD",
            buttonText: "READ MORE"
        },
        {
            title: "IF I HAVE ASTHMA, CAN I USE MEDICAL MARIJUANA?",
            date: "March 10, 2021",
            commentsCount: 0,
            categories: ["MEDICAL MARIJUANA"],
            paragraphs: [
                "Constricted lungs, dizziness, shortness of breath, and wheezing can signal asthma! Asthma attacks are always uncomfortable and sometimes even dangerous if you’re not careful. If...",
            ],
            imageUrl: "image-for-medical-marijuana-asthma.jpg",
            imageAlt: "Asthma",
            buttonText: "READ MORE"
        },
        {
            title: "MEDICAL MARIJUANA: ALL ABOUT DOSING EDIBLES",
            date: "February 17, 2021",
            commentsCount: 0,
            categories: ["MEDICAL MARIJUANA"],
            paragraphs: [
                "The days of only being able to smoke medical marijuana are long gone! There are many ways to consume medical marijuana. They each have their...",
            ],
            imageUrl: "image-for-dosing-edibles.jpg",
            imageAlt: "Edibles",
            buttonText: "READ MORE"
        },
        {
            title: "MEDICAL MARIJUANA: TREATING VETERANS WITH PTSD",
            date: "January 13, 2021",
            commentsCount: 0,
            categories: ["MEDICAL MARIJUANA"],
            paragraphs: [
                "Several studies show cannabis has proven medicinal properties, including relieving post-traumatic stress disorder (PTSD) symptoms. So much so that 36 states in the U.S. have...",
            ],
            imageUrl: "image-for-marijuana-veterans-ptsd.jpg",
            imageAlt: "Veterans, PTSD",
            buttonText: "READ MORE"
        },
        {
            title: "MEDICAL MARIJUANA: CAN IT RESTORE BALANCE?",
            date: "December 16, 2020",
            commentsCount: 0,
            categories: ["MEDICAL MARIJUANA"],
            paragraphs: [
                "The medical field is finally recognizing the marvels of medical marijuana. No longer is its healing potential hampered by being linked to drug dealers, potheads,...",
            ],
            imageUrl: "image-for-medical-marijuana-balance.jpg",
            imageAlt: "Marijuana",
            buttonText: "READ MORE"
        },
        {
            title: "CONFUSED ABOUT MEDICAL MARIJUANA AND CBD? KEEP READING!",
            date: "November 18, 2020",
            commentsCount: 0,
            categories: ["CBD", "MEDICAL MARIJUANA"],
            paragraphs: [
                "CBD has become very popular in the last few years. You can find it in pharmacies, dispensaries, box stores, and even online. Many people are...",
            ],
            imageUrl: "image-for-confused-about-marijuana-cbd.jpg",
            imageAlt: "CBD",
            buttonText: "READ MORE"
        },
        {
            title: "MEDICAL MARIJUANA BENEFITS AND USES",
            date: "October 21, 2020",
            commentsCount: 0,
            categories: ["MEDICAL MARIJUANA"],
            paragraphs: [
                "What are the real medical marijuana benefits? And how can you make sure you’re getting the best quality and using it appropriately? Medical product has...",
            ],
            imageUrl: "image-for-medical-marijuana-benefits.jpg",
            imageAlt: "Marijuana",
            buttonText: "READ MORE"
        },
        {
            title: "CANNABIS: LET’S TALK ABOUT THE EFFECTS",
            date: "October 7, 2020",
            commentsCount: 0,
            categories: ["MEDICAL MARIJUANA"],
            paragraphs: [
                "Due to high demand from patients and medical professionals, medical marijuana is becoming more accessible to the people who need it. Still, even though more...",
            ],
            imageUrl: "image-for-cannabis-effects.jpg",
            imageAlt: "Cannabis, Medical Use",
            buttonText: "READ MORE"
        },
        {
            title: "IS CBD ADDICTIVE? LET’S TAKE A LOOK",
            date: "September 23, 2020",
            commentsCount: 0,
            categories: ["CBD", "MEDICAL MARIJUANA"],
            paragraphs: [
                "CBD is everywhere! You can find it in: Oils Creams Patches Beauty products Salves Tinctures Vapes Edibles You name it. Someone has probably found a...",
            ],
            imageUrl: "image-for-is-cbd-addictive.jpg",
            imageAlt: "Marijuana, CBD",
            buttonText: "READ MORE"
        },
        {
            title: "8 DIFFERENCES BETWEEN MEDICAL MARIJUANA AND RECREATIONAL MARIJUANA",
            date: "August 26, 2020",
            commentsCount: 0,
            categories: ["MEDICAL MARIJUANA"],
            paragraphs: [
                "If you are like a lot of Americans, when you hear the word “marijuana,” your mind jumps to the street drug. But, you may have...",
            ],
            imageUrl: "image-for-medical-vs-recreational-marijuana.jpg",
            imageAlt: "Medical Marijuana",
            buttonText: "READ MORE"
        },
        {
            title: "MEDICAL MARIJUANA: LET’S TALK FACTS",
            date: "August 12, 2020",
            commentsCount: 0,
            categories: ["MEDICAL MARIJUANA"],
            paragraphs: [
                "Medical marijuana has been getting a lot of attention over the last few years. Some good news. And some bad news. Because street use of...",
            ],
            imageUrl: "image-for-medical-marijuana-facts.jpg",
            imageAlt: "Medical Marijuana",
            buttonText: "READ MORE"
        },
        {
            title: "MEDICAL MARIJUANA FAQS",
            date: "July 30, 2020",
            commentsCount: 0,
            categories: ["MEDICAL MARIJUANA"],
            paragraphs: [
                "Medical marijuana has been getting a lot of attention over the last few years – some good and some bad. We are proud to be...",
            ],
            imageUrl: "image-for-medical-marijuana-faqs-2020.jpg",
            imageAlt: "Cannabis Doctor in Sarasota – Emerald Medical Group",
            buttonText: "READ MORE"
        },
        {
            title: "THE BENEFITS AND USES OF MEDICAL MARIJUANA",
            date: "July 7, 2020",
            commentsCount: 0,
            categories: ["MEDICAL MARIJUANA"],
            paragraphs: [
                "Medical marijuana has become increasingly common over the past decade. It’s been legalized in nearly 30 states, including Florida, and it seems like it can...",
            ],
            imageUrl: "image-for-benefits-uses-medical-marijuana.jpg",
            imageAlt: "Marijuana, CBD",
            buttonText: "READ MORE"
        },
        {
            title: "MEDICAL MARIJUANA: HOW TO USE IT SAFELY",
            date: "May 21, 2020",
            commentsCount: 0,
            categories: ["MEDICAL MARIJUANA"],
            paragraphs: [
                "Medical marijuana has become increasingly common over the past decade. It’s been legalized in nearly 30 states, including Florida, and it seems like it can...",
            ],
            imageUrl: "image-for-safe-use-medical-marijuana.jpg",
            imageAlt: "Medical Marijuana",
            buttonText: "READ MORE"
        }
];




    return (
        <Main isMobile={false}>
            <div className="blog-posts-container">
                {pageBlogPosts.map((post, index) => (
                    <BlogCard
                        key={index}
                        title={post.title}
                        date={post.date}
                        commentsCount={post.commentsCount}
                        categories={post.categories}
                        paragraphs={post.paragraphs}
                        imageUrl={post.imageUrl}
                        imageAlt={post.imageAlt}
                        buttonText={post.buttonText}
                        url={post.url} // Pass the URL to the BlogCard

                    />
                ))}
            </div>
        </Main>
    );
};


