"use client"
import React, { useState } from 'react'
import Headers from '../pages/header/page'
import Footer from '../pages/footer/page'
import productsSt from "../pages/products/products.module.scss";
function Products() {
    /*  Dashboard */
    const [activeDashboardItem, setActiveDashboardItem] = useState(0);
    const dashboardItems = [
        {
            mainText: 'Manage your subscription with ease',
            additionalText:
                <span>
                    Discover how much you can save by purchasing software solutions through <br />
                    our platform. Our exclusive discounts and competitive pricing ensure you get <br />
                    the best value for your money.
                </span>,
            imageURL: '../img/Dashboard1.png', // 이미지 URL 추가
        },
        {
            mainText: 'Analytics for better understanding',
            additionalText:
                <span>
                    Discover how much you can save by purchasing software solutions through <br />
                    our platform. Our exclusive discounts and competitive pricing ensure you get <br />
                    the best value for your money.
                </span>,
            imageURL: '../img/Dashboard2.png', // 이미지 URL 추가
        },
        {
            mainText: 'Marketplace to go through all the products',
            additionalText:
                <span>
                    Discover how much you can save by purchasing software solutions through <br />
                    our platform. Our exclusive discounts and competitive pricing ensure you get <br />
                    the best value for your money.
                </span>,
            imageURL: '../img/Dashboard3.png', // 이미지 URL 추가
        },
    ];
    // 대시보드 아이템 클릭을 처리하는 함수
    const handleDashboardItemClick = (index) => {
        setActiveDashboardItem(activeDashboardItem === index ? null : index);
    };

    return (
        <>
        <Headers/>
        <div className={productsSt.Servicesgroup}>
            <div className={productsSt.Services}>
                <div className={productsSt.Servicestext}>
                    <img src='../img/Dashboard1.png'></img>
                        <div className={productsSt.Servicestextgroup}>
                            <h3>Manage your subscription with ease</h3>
                            <p className={productsSt.Servicestxt}>
                            Discover how much you can save by purchasing software solutions through <br/>
                            our platform. Our exclusive discounts and competitive pricing ensure you get <br/>
                            the best value for your money. Discover how much you can save by <br/>
                            purchasing software solutions through our platform. Our exclusive discounts <br/>
                            and competitive pricing ensure you get the best value for your money.
                            </p>
                        </div>
                </div>
            </div>
            <div className={productsSt.Services}>
                <div className={productsSt.Servicestext}>
                    <img src='../img/Dashboard2.png'></img>
                        <div className={productsSt.Servicestextgroup}>
                            <h3>Manage your subscription with ease</h3>
                            <p className={productsSt.Servicestxt}>
                            Discover how much you can save by purchasing software solutions through <br/>
                            our platform. Our exclusive discounts and competitive pricing ensure you get <br/>
                            the best value for your money. Discover how much you can save by <br/>
                            purchasing software solutions through our platform. Our exclusive discounts <br/>
                            and competitive pricing ensure you get the best value for your money.
                            </p>
                        </div>
                </div>
            </div>
            <div className={productsSt.Services}>
                <div className={productsSt.Servicestext}>
                    <img src='../img/Dashboard3.png'></img>
                        <div className={productsSt.Servicestextgroup}>
                            <h3>Manage your subscription with ease</h3>
                            <p className={productsSt.Servicestxt}>
                            Discover how much you can save by purchasing software solutions through <br/>
                            our platform. Our exclusive discounts and competitive pricing ensure you get <br/>
                            the best value for your money. Discover how much you can save by <br/>
                            purchasing software solutions through our platform. Our exclusive discounts <br/>
                            and competitive pricing ensure you get the best value for your money.
                            </p>
                        </div>
                </div>
            </div>
        </div>
            {/* Dashboard */}
            <div className={productsSt.dashboardmain}>
                <div className={productsSt.dashboardgroup}>
                    {/* 대시보드 이미지 및 텍스트 그룹 */}
                    <ul className={productsSt.dashboardgroupimg}>
                        {dashboardItems.map((item, index) => (
                            <li
                                key={index}
                                className={`${productsSt.dashboardtxtgroup} ${activeDashboardItem === index ? productsSt.active : ''}`}
                                onClick={() => handleDashboardItemClick(index)}
                            >
                                {activeDashboardItem === index && (
                                    <>
                                        <img src={item.imageURL} alt={`Dashboard ${index + 1}`} />
                                    </>
                                )}
                                {/* 텍스트 렌더링 */}
                                <div className={productsSt.dashboardflex}>
                                    <b className={productsSt.dashboardtxtmain}>{item.mainText}</b>
                                    <div className={productsSt.line}></div>
                                    <p className={productsSt.dashboardtxt}>{item.additionalText}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {/* contact */}
            <div className={productsSt.contact}>
                <img src='../img/contact.png' className={productsSt.contactimg}></img>
                <div className={productsSt.contacttitle}>
                    <b> Contact Us</b>
                    <p className={productsSt.contacttxt}>Have questions or need assistance? We're here to help you find the perfect software solutions for your business.</p>
                    <form className={productsSt.contactPost}>
                        <input type='email' placeholder="EMAIL" autoComplete="off" className={productsSt.contactMail}></input>
                        <button type='submit' className={productsSt.contactSubmit}>Get Started</button>
                    </form>
                </div>
            </div>
        <Footer/>
        </>
    )
}

export default Products