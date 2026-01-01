"use client"
import Link from 'next/link'
import styles from './Navbar.module.css'
import { useState, useEffect } from 'react'

export default function Navbar() {
    const [scrolled, setScrolled] = useState<boolean>(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
            <div className="container">
                <nav className={styles.nav}>
                    <Link href="/" className={styles.logo}>
                        Prime<span className={styles.logoSpan}>Electrical</span>
                    </Link>
                    <ul className={styles.list}>
                        <li><Link href="#" className={styles.link}>Work</Link></li>
                        <li><Link href="#services" className={styles.link}>Services</Link></li>
                        <li><Link href="#contact" className={styles.link}>Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
