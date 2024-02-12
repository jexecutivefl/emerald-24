import styles from './SectionOne.module.css';
import Section from "@/components/Section/Section";
import Image from 'next/image';

const Hero = () => {
    return (
        <Section>
            <div className={styles.container}>
                <p>Medical marijuana is a well-studied and effective treatment for many issues, especially chronic pain.
                    You have probably heard about the many potential benefits, but you need an experienced medical
                    professional like Dr. Lance to ensure your treatment is targeted and effective for your
                    specific medical concerns. </p>
                <p><b>Who Can Use Medical Marijuana In Florida?</b> Florida residents and seasonal residents who have been
                    diagnosed with one of the following conditions can apply for a Florida Medical Card, which lets them
                    purchase medical marijuana from approved dispensaries throughout Florida.</p>
                <div className={styles.listContainer}>
                    <ul className={styles.list}>
                        <li>Cancer</li>
                        <li>Crohn's Disease</li>
                        <li>Amyotrophic Lateral Sclerosis (ALS)</li>
                        <li>Chronic Pain</li>
                        <li>Glaucoma</li>
                        <li>HIV/AIDS</li>
                        <li>Post Traumatic Stress Disorder</li>
                        <li>Multiple Sclerosis</li>
                        <li>Parkinson's Disease</li>
                        <li>Seizures</li>
                        <li>Ulcerative Colitis</li>
                        <p><b>*Other Comparable Conditions</b></p>
                    </ul>
                    <div className={styles.imageContainer}> {/* Wrap the Image component */}
                        <Image
                            src="/medical-marijuana-page.png"
                            alt="Description of the image"
                            width={300}
                            height={250}
                        />
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Hero;
