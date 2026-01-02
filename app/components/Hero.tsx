import styles from './Hero.module.css'

export default function Hero() {
    return (
        <section className={styles.hero}>
            <video
                autoPlay
                loop
                muted
                playsInline
                className={styles.videoBackground}
            >
                <source src="/videos/hero-bg.mp4" type="video/mp4" />
            </video>
            <div className={styles.videoOverlay}></div>

            <div className={styles.content}>
                <h1 className={styles.title}>
                    <span className={styles.neat}>PRIME</span>
                    <br />
                    <span className={styles.frequency}>ELECTRICAL</span>
                </h1>
                <p className={styles.subtitle}>Electrical & Solar Solutions</p>

            </div>

            <div className={styles.scrollIndicator}>
                <span className={styles.scrollText}>Scroll</span>
                <div className={styles.line}></div>
            </div>

            {/* Background Elements */}
            <div className={styles.glow}></div>
        </section>
    )
}
