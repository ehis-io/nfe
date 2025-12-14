import styles from './Services.module.css'

export default function Services() {
    return (
        <section className={styles.section} id="services">
            <div className="container">
                <h2 className={styles.title}>What We Do</h2>

                <div className={styles.grid}>
                    {/* Sound Card */}
                    <div className={`${styles.card} ${styles.sound}`}>
                        <div className={styles.iconWrapper}>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 2v20M2 13v-2M6 17V7M18 17V7M22 13v-2" />
                            </svg>
                        </div>
                        <h3 className={styles.cardTitle}>Sound</h3>
                        <p className={styles.cardDesc}>
                            Immersive audio experiences. Crystal clear acoustics designed to resonate with your audience at any frequency.
                        </p>
                    </div>

                    {/* Light Card */}
                    <div className={`${styles.card} ${styles.light}`}>
                        <div className={styles.iconWrapper}>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="5" />
                                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                            </svg>
                        </div>
                        <h3 className={styles.cardTitle}>Light</h3>
                        <p className={styles.cardDesc}>
                            Visual spectacles that captivate. From subtle ambiance to high-energy beams that define the atmosphere.
                        </p>
                    </div>

                    {/* Stage Card */}
                    <div className={`${styles.card} ${styles.stage}`}>
                        <div className={styles.iconWrapper}>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M2 22h20M22 2H2v20l20-20z" />
                                <path d="M2 12h20" />
                                <path d="M12 2v20" />
                            </svg>
                        </div>
                        <h3 className={styles.cardTitle}>Stage</h3>
                        <p className={styles.cardDesc}>
                            Designing the platform for performance. Modular, safe, and stunning stage structures for any event size.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
