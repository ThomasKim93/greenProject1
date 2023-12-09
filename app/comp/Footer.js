"use client"
import React from 'react'
import Link from 'next/link'
import footerSt from "../pages/footer/footer.module.scss";

function Footer() {
  return (
    <div className={footerSt.footer}>
        <div className={footerSt.logogroup}>
            <div className={footerSt.logo}>
                <img src='../img/logo.png'></img>
                <div className={footerSt.sns}>
                    <Link href={'/'}> 
                        <img src='../img/facebook.png'></img>
                    </Link>
                    <Link href={'/'}> 
                        <img src='../img/Twitter.png'></img>
                    </Link>
                    <Link href={'/'}> 
                        <img src='../img/Instagram.png'></img>
                    </Link>
                    <Link href={'/'}> 
                        <img src='../img/LinkedIn.png'></img>
                    </Link>
                </div>
            </div>
            <div className={footerSt.footermenugroup}>
                <div className={footerSt.footermenu}>
                    <b>Company</b>
                    <Link href={'/'}> About us </Link>
                    <Link href={'/'}> Customers </Link>
                </div>
                <div className={footerSt.footermenu}>
                    <b>Account</b>
                    <Link href={'/'}> Log in </Link>
                    <Link href={'/'}> Sign up </Link>
                    <Link href={'/'}> Support </Link>
                </div>
                <div className={footerSt.footermenu}>
                    <b>Legal</b>
                    <Link href={'/'}> Privacy Policy </Link>
                </div>
                <div className={footerSt.footermenu}>
                    <b>Other</b>
                    <Link href={'/'}> Blogs </Link>
                    <Link href={'/'}> Contact Us </Link>
                    <Link href={'/'}> Products </Link>
                </div>
                <Link href={'/'}className={footerSt.footertopLink} > 
                    <div className={footerSt.footertop}>
                        <img src='../img/straight.png'className={footerSt.footerstraight}></img>
                    </div> 
                        <b className={footerSt.footerup}>UP</b>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Footer