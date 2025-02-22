"use client"


import React, { useState } from 'react'
import styles from './styles.module.css'


const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);


    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }


    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>Abhay Prajapati</div>
            <ul className={`${styles.navlinks} ${isOpen ? styles.active : ""}`} >
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <div className={styles.hamburger} onClick={toggleMenu}>☰</div>
        </nav>
    )
}

export default Navbar
