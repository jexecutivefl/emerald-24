import styles from './ScheduleAnAppointmentToday.module.css'; // Import the CSS module

const ScheduleAnAppointmentToday = () => {
    return (
        <div className={styles.scheduleAppointmentContainer}>
            <div className={styles.card}>
                <h2 className={styles.h2}>Schedule An Appointment Today</h2>
                <div className={styles.row}>
                    <input type="text" placeholder="First Name" className={styles.input} />
                    <input type="text" placeholder="Last Name" className={styles.input} />
                </div>
                <div className={styles.row}>
                    <input type="email" placeholder="Email" className={styles.input} />
                    <input type="tel" placeholder="Phone" className={styles.input} />
                </div>
                <textarea placeholder="What can we help you with today?" className={styles.textarea}></textarea>
                <label className={styles.checkboxContainer}>
                    <input type="checkbox" />
                    <p>I give consent to use this information to send additional emails and communication as described in your Privacy Policy</p>
                </label>
            </div>
        </div>
    );
};

export default ScheduleAnAppointmentToday;
