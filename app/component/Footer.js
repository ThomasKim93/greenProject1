"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import footerSt from "../pages/footer/footer.module.scss";

function Footer() {
    const [activeFooter, setActiveFooter] = useState(null);
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const button = document.getElementById('topButton');
            if (button) {
                if (scrollY > 200) {
                    button.style.display = 'block';
                } else {
                    button.style.display = 'none';
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    const handleFooterClick = (index) => {
        setActiveFooter(activeFooter === index ? null : index);
      };
    const footerItems = [
        {
            title: 'Company',
            text: (
                <span>
                    <Link href="../../pages/aboutus"> About us </Link>
                    <Link href="../../pages/customer"> Customers </Link>
                </span>
            )
        },
        {
            title: 'Account',
            text: (
                <span>
                    <Link href="../../pages/login"> Log in </Link>
                    <Link href="../../pages/signup"> Sign up </Link>
                    <Link href="../../pages/support"> Support </Link>
                </span>
            )
        },
        {
            title: 'Legal',
            text: (
                <span>
                    <Link href={'/'}> Privacy Policy </Link>
                </span>
            )
        },
        {
            title: 'Other',
            text: (
                <span>
                    <Link href="../../pages/blogs"> Blogs </Link>
                    <Link href="../../pages/Contact"> Contact Us </Link>
                    <Link href="../../pages/products"> Products </Link>
                </span>
            )
        },
    ];
    return (
        <div className={footerSt.footer}>
            <div className={footerSt.logogroup}>
                <div className={footerSt.topbtngroup}>
                    <a href='#' onClick={(e) => { e.preventDefault(); scrollToTop(); }}>
                        <b className={footerSt.footermediaup}>Go to top</b>
                    </a>
                <div className={footerSt.logo}>
                    <img src='/img/logo.svg'></img>
                    <div className={footerSt.sns}>
                        <Link href={'/'}>
                            <img src='/img/Facebook.png'></img>
                        </Link>
                        <Link href={'/'}>
                            <img src='/img/Twitter.png'></img>
                        </Link>
                        <Link href={'/'}>
                            <img src='/img/Instagram.png'></img>
                        </Link>
                        <Link href={'/'}>
                            <img src='/img/LinkedIn.png'></img>
                        </Link>
                    </div>
                </div>
                </div>
                <div className={footerSt.footermenugroup}>
                    <div className={footerSt.footermenu}>
                        <b>Company</b>
                        <Link href="../../pages/aboutus"> About us </Link>
                        <Link href="../../pages/customer"> Customers </Link>
                    </div>
                    <div className={footerSt.footermenu}>
                        <b>Account</b>
                        <Link href="../../pages/login"> Log in </Link>
                        <Link href="../../pages/signup"> Sign up </Link>
                        <Link href="../../pages/support"> Support </Link>
                    </div>
                    <div className={footerSt.footermenu}>
                        <b>Legal</b>
                        <Link href={'/'}> Privacy Policy </Link>
                    </div>
                    <div className={footerSt.footermenu}>
                        <b>Other</b>
                        <Link href="../../pages/blogs"> Blogs </Link>
                        <Link href="../../pages/Contact"> Contact Us </Link>
                        <Link href="../../pages/products"> Products </Link>
                    </div>
                    <Link href={'/'} className={footerSt.footertopLink} onClick={scrollToTop}>
                        <div className={footerSt.footertop}>
                            <img src='/img/straight.png' className={footerSt.footerstraight}></img>
                        </div>
                        <b className={footerSt.footerup}>UP</b>

                    </Link>
                </div>

                {/* media */}
                <div className={footerSt.footerfooteraccodian}>
                    <div className={footerSt.footeraccodiangroup}>
                        {footerItems.map((item, index) => (
                            <div
                            key={index}
                            className={`${footerSt.footeraccodianlist} ${activeFooter === index ? `${footerSt.active} with-after` : ''}`}
                            onClick={() => handleFooterClick(index)}>
                                <div className={footerSt.footeraccodiantitlegroup}>
                                    <p className={`${footerSt.footeraccodiantitle}  ${activeFooter === index ? footerSt.withUnderline : ''}`}>{item.title}</p>
                                    <div className={footerSt.line}></div>
                                </div>
                                {activeFooter === index && (
                                    <p className={footerSt.footeraccodiantxt}>{item.text}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer