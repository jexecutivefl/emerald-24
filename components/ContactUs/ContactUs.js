import React, { useState } from 'react';
import styles from './ContactUs.module.css';
import Image from "next/image";
import Section from "@/components/Section/Section";
import { useRouter } from 'next/router';

function ContactUs(props) {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        const formData = {
            name: event.target.name.value,
            email: event.target.email.value,
            phone: event.target.phone.value,
            message: event.target.message.value,
        };

        try {
            const path = '/api/send-lead-email';
            const bodyData = {
                input: {
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    phone: formData.phone
                },
            };

            const response = await fetch(path, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(bodyData),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }

            const responseData = await response.json();
            console.log('Response from API:', responseData);

            // Navigate to thank you page
            router.push('/thank-you-for-your-inquiry');
        } catch (error) {
            console.error('Error in sendLeadInfo: ', error);
            // Optionally, add user feedback here (e.g., setting an error state and displaying it)
        } finally {
            setLoading(false);
        }
    };

    return (
        <Section background={'linear-gradient(90deg, rgba(68,68,24,0.59) 24%, rgba(173,145,88,0.59) 94%)'}>
            <div className={styles.container}>
                <div id="contactUs" className={styles.brandSection}>
                    <Image src="/cedarRidgeLogo.png" alt="Stallion Ridge Logo" width={300} height={200} />
                </div>
                <div className={styles.formWrapper}>
                    <h1 className={styles.h1}>Send Us A Message</h1>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.inputGroup}>
                            <label htmlFor="name" className={styles.label}>Name (required)</label>
                            <input type="text" id="name" name="name" required className={styles.input} />
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="email" className={styles.label}>Email Address (required)</label>
                            <input type="email" id="email" name="email" required className={styles.input} />
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="phone" className={styles.label}>Phone Number (optional)</label>
                            <input type="tel" id="phone" name="phone" className={styles.input} />
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="message" className={styles.label}>Message (required)</label>
                            <textarea id="message" name="message" required className={styles.textarea}></textarea>
                        </div>
                        <div className={styles.submitGroup}>
                            <button type="submit" className={styles.button} disabled={loading}>
                                {loading ? 'Submitting...' : 'Submit'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Section>
    );
}

export default ContactUs;
