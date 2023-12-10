"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import heraderSt from '../pages/header/header.module.scss';
import { useRouter } from 'next/navigation';
import MenuOptions from '../comp/Pop'; 


function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className={heraderSt.header}>
      <div className={heraderSt.logo}>
        <img src="../img/logo.png" className={heraderSt.menu}></img>
      </div>

      {/* 일반 메뉴 */}
      <div className={heraderSt.menu}>
        <Link href="/"> Home </Link>
        <Link href="../../pages/products"> Products </Link>
        <Link href="../../pages/aboutus"> About Us </Link>
        <Link href="../../pages/blogs"> Blogs </Link>
        <Link href="../../pages/Contact"> Contact Us </Link>
        <Link href="../../pages/login"> Log In </Link>
        <Link href="../../pages/signup"> Sign Up </Link>
      </div>

      {/* 버거 메뉴 */}
      <div className={heraderSt.menuPopup}>
        {isMenuOpen && <MenuOptions closeMenu={closeMenu} />}
      </div>

      {/* 버튼 이미지 변경 */}
      {isMenuOpen ? (
        <img
          src="../img/close.png"
          className={heraderSt.menubar}
          onClick={toggleMenu}
        ></img>
      ) : (
        <img
          src="../img/menu.png"
          className={heraderSt.menubar}
          onClick={toggleMenu}
        ></img>
      )}
    </div>
  );
}

export default Header;