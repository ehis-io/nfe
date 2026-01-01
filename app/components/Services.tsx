import styles from './Services.module.css'

export default function Services() {
    return (
        <section className={styles.section} id="services">
            <div className="container">
                <h2 className={styles.title}>Expert Services</h2>

                <div className={styles.grid}>
                    {/* Home Wiring Card */}
                    <div className={`${styles.card} ${styles.wiring}`}>
                        <div className={styles.iconWrapper}>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2z" />
                                <path d="M12 16v.01M12 12v.01M12 8v.01M9 16v.01M9 12v.01M9 8v.01M15 16v.01M15 12v.01M15 8v.01" />
                            </svg>
                        </div>
                        <h3 className={styles.cardTitle}>Home Wiring</h3>
                        <p className={styles.cardDesc}>
                            Safe, reliable, and efficient electrical installations for your modern home. From full rewiring to smart home integration.
                        </p>
                    </div>

                    {/* Solar Installation Card */}
                    <div className={`${styles.card} ${styles.solar}`}>
                        <div className={styles.iconWrapper}>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="4" />
                                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                                <path d="M7 12h10M12 7v10" />
                            </svg>
                        </div>
                        <h3 className={styles.cardTitle}>Solar Energy</h3>
                        <p className={styles.cardDesc}>
                            Harness the sun's power. Expert rooftop solar installations and battery storage solutions to reduce your footprint.
                        </p>
                    </div>

                    {/* Industrial Solutions Card */}
                    <div className={`${styles.card} ${styles.industrial}`}>
                        <div className={styles.iconWrapper}>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.77 3.77z" />
                            </svg>
                        </div>
                        <h3 className={styles.cardTitle}>Maintenance</h3>
                        <p className={styles.cardDesc}>
                            Comprehensive electrical audits and maintenance to ensure your systems perform at peak efficiency and safety.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
