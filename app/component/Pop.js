import React, { useState } from 'react';
import Link from 'next/link';
import heraderSt from '../pages/header/header.module.scss';
import { useRouter } from 'next/navigation'; // 변경된 부분: next/navigation 에서 next/router 로 변경

const MenuOptions = ({ closeMenu }) => {
    const router = useRouter();
    const [showProductsSubMenu, setShowProductsSubMenu] = useState(false);

    const handleMenuItemClick = (link) => {
        router.push(link);
        closeMenu();
    };
    const handleProductsSubMenuToggle = () => {
        setShowProductsSubMenu(!showProductsSubMenu);
    };
    return (
        <div className={heraderSt.menuOptionsOverlay}>
            <div className={heraderSt.menuOptions}>
                <div className={heraderSt.logo}>
                    <img src="/img/logo.png" className={heraderSt.img}></img>
                </div>
                <div className={heraderSt.popmenu}>
                    <span className={heraderSt.home}onClick={() => handleMenuItemClick("/")}> HOME </span>
                    {/* Products with Submenu */}
                    <div className={heraderSt.menuOptionsgroup}>
                    <span className={`${heraderSt.products} ${showProductsSubMenu && heraderSt.open}`} onClick={handleProductsSubMenuToggle}>
                            <p className={heraderSt.productsmain}>Products</p>
                            
                        </span>
                            {showProductsSubMenu && (
                            <div className={heraderSt.subMenu}>
                                <span onClick={() => handleMenuItemClick("../../pages/products")}>
                                    Marketplace
                                </span>
                                <span onClick={() => handleMenuItemClick("../../pages/customer")}>
                                    Customers
                                </span>
                                <span onClick={() => handleMenuItemClick("../../pages/solution")}>
                                    Solutions
                                </span>
                            </div>
                        )}
                    </div>
                </div>
                <div className={heraderSt.subMenu2}>
                    <span onClick={() => handleMenuItemClick("../../pages/aboutus")}> About Us </span>
                    <span onClick={() => handleMenuItemClick("../../pages/blogs")}> Blogs </span>
                    <span onClick={() => handleMenuItemClick("../../pages/Contact")}> Contact Us </span>
                    <span onClick={() => handleMenuItemClick("../../pages/login")}> Log In </span>
                    <span className={heraderSt.subMenustyle} onClick={() => handleMenuItemClick("../../pages/signup")}> Sign Up </span>
                </div>
            </div>
        </div>
    );
};

export default MenuOptions;