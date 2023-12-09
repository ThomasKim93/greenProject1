"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import heraderSt from "../pages/header/header.module.scss";
function Header() {
    return (
        <div className={heraderSt.header}>
            <div className={heraderSt.logo}>
                <img src='../img/logo.png'></img>
            </div>
            <div className={heraderSt.menu}>
                <Link href='/'> Home </Link>
                <Link href="../../pages/products"> Products </Link>
                <Link href='/'> About Us </Link>
                <Link href='/'> Blogs </Link>
                <Link href="../../pages/Contact"> Contact Us </Link>
                <Link href='/'> Log In </Link>
                <Link href='/'> Sign Up </Link>
            </div>
        </div>
    )
}

export default Header