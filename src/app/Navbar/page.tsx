"use client"


import React, { useState } from 'react'
import styles from './styles.module.css'
import Link from 'next/link';
// import { useRouter } from 'next/navigation';

import { usePathname } from 'next/navigation'



const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);


    const currentPath = usePathname()

    console.log('currentPath: ',currentPath)

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }


    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>Abhay Prajapati</div>
            <ul className={`${styles.navlinks} ${isOpen ? styles.active : ''}`}>
                <li >
                    <Link className={currentPath === '/' ? styles.activeLink : ''} href="/">Home</Link>
                </li>
                <li >
                    <Link className={currentPath === '/AboutUs' ? styles.activeLink : ''} href="/AboutUs">About</Link>
                </li>
                <li className={currentPath === '/services' ? styles.activeLink : ''}>
                    <Link href="/services">Services</Link>
                </li>
                <li className={currentPath === '/contact' ? styles.activeLink : ''}>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
            <div className={styles.hamburger} onClick={toggleMenu}>☰</div>
        </nav>
    )
}

export default Navbar
