import React from 'react';
import Accordion from "@/components/Accordion";
import styles from './FrequentlyAskedQuestions.module.css'; // Import the CSS file

function FrequentlyAskedQuestions({ faqs, subheading }) {
    return (
        <div className={styles.faqContainer}>
            <div className={styles.headingContainer}>
                <p className={styles.faqHeader}>FAQ</p>
                <h2>Frequently Asked Questions</h2>
            </div>
            <div className={styles.subHeading}>{subheading}</div>
            {faqs.map((faq, index) => (
                <Accordion key={index} title={faq.title} content={faq.content} />
            ))}
        </div>
    );
}

export default FrequentlyAskedQuestions;
