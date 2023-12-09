"use client"
import React, { useEffect, useRef, useState } from 'react'
import mainSt from "../pages/main/main.module.scss";
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode, Pagination } from 'swiper/modules';
import '../pages/style.css';

function Main() {
    const [satisfaction, setSatisfaction] = useState(0);
    const [decrease, setDecrease] = useState(0);
    const [activeCount, setActiveCount] = useState(0);

    /* interval1 */
    useEffect(() => {
        const interval1 = setInterval(() => {
            setSatisfaction((num) => (num < 98 ? num + 1 : num));
        }, 10);

        const interval2 = setInterval(() => {
            setDecrease((num) => (num < 20 ? num + 1 : num));
        }, 50);

        const interval3 = setInterval(() => {
            setActiveCount((num) => (num < 2 ? num + 1 : num));
        }, 10);

        return () => {
            clearInterval(interval1);
            clearInterval(interval2);
            clearInterval(interval3);
        };
    }, []);

    /*  sliderbar*/
    const thumbRef = useRef(null);
    const sliderRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (event) => {
            let newLeft = event.clientX - shiftX - sliderRef.current.getBoundingClientRect().left;

            // the pointer is out of slider => lock the thumb within the boundaries
            if (newLeft < 0) {
                newLeft = 0;
            }
            let rightEdge = sliderRef.current.offsetWidth - thumbRef.current.offsetWidth;
            if (newLeft > rightEdge) {
                newLeft = rightEdge;
            }

            thumbRef.current.style.left = newLeft + 'px';
        };

        const handleMouseUp = () => {
            document.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('mousemove', handleMouseMove);
        };

        let shiftX;

        if (thumbRef.current && sliderRef.current) {
            thumbRef.current.onmousedown = function (event) {
                event.preventDefault(); // prevent selection start (browser action)

                shiftX = event.clientX - thumbRef.current.getBoundingClientRect().left;

                document.addEventListener('mousemove', handleMouseMove);
                document.addEventListener('mouseup', handleMouseUp);
            };

            thumbRef.current.ondragstart = function () {
                return false;
            };
        }

        return () => {
            document.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, [thumbRef, sliderRef]);

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


    /*  guide*/
    const [activeAccordion, setActiveAccordion] = useState(null);

    // 아코디언 아이템에 대한 데이터
    const accordionItems = [
        {
            title: 'Can I customize the software packages to fit my specific needs?',
            text: (
                <span>
                    Yes, we can work with you to customize software packages to meet your unique <br />
                    requirements. We offer flexible pricing tiers and can tailor solutions to fit your budgetand<br />
                    business goals.
                </span>
            )
        },
        {
            title1: 'How do you protect my company\'s data when it is stored on your platform?',
            text1: (
                <span>
                    Data security is our top priority. We employ industry-leading security measures, <br />
                    including encryption, access controls, and regular security audits, to safeguard your <br />
                    data. We also adhere to strict data privacy regulations and ensure compliance with <br />
                    relevant standards.
                </span>
            )
        },
        {
            title2: 'Can I customize the software packages to fit my specific needs?',
            text2: (
                <span>
                    Yes, we can work with you to customize software packages to meet your unique <br />
                    requirements. We offer flexible pricing tiers and can tailor solutions to fit your budgetand<br />
                    business goals.,
                </span>
            )
        },
        {
            title3: 'Can I control who has access to my company\'s data within your platform?',
            text3: (
                <span>
                    Yes, our platform provides granular access control features, allowing you to specify<br />
                    who can access and manage your data. You can create user roles with different <br />
                    permission levels to ensure data security and privacy.
                </span>
            )
        },
    ];

    // 아코디언 아이템 클릭을 처리하는 함수
    const handleAccordionClick = (index) => {
        setActiveAccordion(activeAccordion === index ? null : index);
    };

    return (
        <div className={mainSt.main}>
            <div className={mainSt.top}>
                <img src='../img/maintop.png'></img>
                <h3>
                    Empower Your Business with Software <br></br> Solutions at Unbeatable Prices
                    <p className={mainSt.toptext}>
                        Discover a curated collection of software solutions from top providers, all at discounted rates. <br></br>
                        Choose the services that fit your unique needs, whether you're a startup or an established<br></br>
                        enterprise.<br></br>
                    </p>
                </h3>
                <Link href='/' className={mainSt.topbtn}> Get Started </Link>
            </div>
            <div className={mainSt.money}>
                <h3 className={mainSt.moneytitle}>
                    We help real people do more <br></br> with money
                </h3>
                <div className={mainSt.moneySatisfaction}>
                    <div className={mainSt.Satisfaction}>
                        <p className={mainSt.Clientpercent} >{satisfaction}%</p>
                        <p className={mainSt.Clienttxt}>Client’s Satisfaction</p>
                    </div>
                    <div className={mainSt.line}></div>
                    <div className={mainSt.Expenses}>
                        <p className={mainSt.Decreasepercent}> {decrease}%</p>
                        <p className={mainSt.Decreasetxt}>Decrease Expenses</p>
                    </div>
                    <div className={mainSt.line}></div>
                    <div className={mainSt.users}>
                        <p className={mainSt.CActivecount}> {activeCount}K+</p>
                        <p className={mainSt.CActivetxt}>CActive users</p>
                    </div>
                </div>
            </div>
            <div className={mainSt.ani}>
                <figure className={mainSt.aniimg}>
                    <img src='../img/swiper1.png'></img>
                    <img src='../img/swiper2.png'></img>
                    <img src='../img/swiper3.png'></img>
                    <img src='../img/swiper4.png'></img>
                    <img src='../img/swiper5.png'></img>
                    <img src='../img/swiper6.png'></img>
                    <img src='../img/swiper7.png'></img>
                    <img src='../img/swiper8.png'></img>
                    <img src='../img/swiper9.png'></img>
                    <img src='../img/swiper10.png'></img>
                </figure>
            </div>
            {/* service */}
            <div className={mainSt.services}>
                <h3>Our Services
                    <p className={mainSt.servicestxt}>In a sea of software solutions, why settle for anything less than the best?</p>
                </h3>
                <div className={mainSt.servicescontents}>
                    <div className={mainSt.services1}>
                        <img src='../img/Marketplace.png'></img>
                        <b>Curated Marketplace</b>
                        <p className={mainSt.services1txt}>
                            We've carefully selected the most trusted and innovative software providers to ensure you have access to the best solutions available.
                        </p>
                    </div>
                    <div className={mainSt.services1}>
                        <img src='../img/Prices.png'></img>
                        <b>Unbeatable Prices</b>
                        <p className={mainSt.services1txt}>
                            We negotiate exclusive discounts with our partners, passing on savings directly to you.
                        </p>
                    </div>
                    <div className={mainSt.services1}>
                        <img src='../img/Guidance.png'></img>
                        <b>Expert Guidance</b>
                        <p className={mainSt.services1txt}>
                            Our team of experts is always here to help you find the perfect software solutions for your business needs.
                        </p>
                    </div>
                    <div className={mainSt.services1}>
                        <img src='../img/Procurement.png'></img>
                        <b>Simplified Procurement</b>
                        <p className={mainSt.services1txt}>
                            Our user-friendly platform makes it easy to compare, purchase, and manage your software subscriptions.
                        </p>
                    </div>
                </div>
            </div>
            {/* Possibilities */}
            <div className={mainSt.Possibilities}>
                <h3>Discover a World of Software<br /> Possibilities
                    <p className={mainSt.Possibilitiestxt}>
                        From productivity tools to creative suites, we offer a comprehensive<br /> selection of software solutions to empower your business.
                    </p>
                    <Link href='/' className={mainSt.Possibilitiesbtn}> View all </Link>
                </h3>
                <div className={mainSt.Possibilitiesimg}>
                    <figure className={mainSt.PossibilitiesGimg}>
                        <figcaption className={mainSt.Possibilitiestrns}>
                            <img src='../img/Software1.png'></img>
                        </figcaption>
                        <figcaption className={mainSt.Possibilitiestrns}>
                            <img src='../img/Software2.png'></img>
                        </figcaption>
                        <figcaption className={mainSt.Possibilitiestrns}>
                            <img src='../img/Software3.png'></img>
                        </figcaption>
                        <figcaption className={mainSt.Possibilitiestrns}>
                            <img src='../img/Software4.png'></img>
                        </figcaption>
                        <figcaption className={mainSt.Possibilitiestrns}>
                            <img src='../img/Software5.png'></img>
                        </figcaption>
                        <figcaption className={mainSt.Possibilitiestrns}>
                            <img src='../img/Software6.png'></img>
                            <div></div>
                        </figcaption>
                        <figcaption className={mainSt.Possibilitiestrns}>
                            <img src='../img/Software7.png'></img>
                        </figcaption>
                        <figcaption className={mainSt.Possibilitiestrns}>
                            <img src='../img/Software8.png'></img>
                        </figcaption>
                        <figcaption className={mainSt.Possibilitiestrns}>
                            <img src='../img/Software9.png'></img>
                        </figcaption>
                    </figure>
                </div>
            </div>
            {/* Platform */}
            <div className={mainSt.Platformgroup}>
                <div className={mainSt.Platform}>
                    <b className={mainSt.Platformtitle}>Let’s calculate your average savings monthly ! </b>
                    <div className={mainSt.Platformbtxt}>
                        <p className={mainSt.PlatformSpending}> Spending  </p>
                        <p className={mainSt.PlatformSpending}> $100K </p>
                    </div>
                    <div className={mainSt.Platformsliderbar}>
                        <div className={mainSt.Platformthumb}>
                            <div className={mainSt.Platformthumbin}></div>
                        </div>
                    </div>
                    <div className={mainSt.Platformsavingtxt}>
                        <div className={mainSt.Platformsavingtxtgroup}>
                            <p className={mainSt.Platformsaving}>Savings</p>
                            <p className={mainSt.Platformsaving}>$ 800</p>
                        </div>
                        <Link href='/' className={mainSt.Platformbtn}> Explore More </Link>
                    </div>

                </div>
                <div className={mainSt.Platformtext}>
                    <b>Unlock Significant Savings with Our<br /> Platform</b>
                    <p className={mainSt.Platformmaintext}>
                        Discover how much you can save by purchasing software solutions through our <br />platform. Our exclusive discounts and competitive pricing ensure you get the<br />
                        best value for your money.
                    </p>
                </div>
            </div>
            {/* Dashboard */}
            <div className={mainSt.dashboardmain}>
                <div className={mainSt.dashboardgroup}>
                    {/* 대시보드 이미지 및 텍스트 그룹 */}
                    <ul className={mainSt.dashboardgroupimg}>
                        {dashboardItems.map((item, index) => (
                            <li
                                key={index}
                                className={`${mainSt.dashboardtxtgroup} ${activeDashboardItem === index ? mainSt.active : ''}`}
                                onClick={() => handleDashboardItemClick(index)}
                            >
                                {activeDashboardItem === index && (
                                    <>
                                        <img src={item.imageURL} alt={`Dashboard ${index + 1}`} />
                                    </>
                                )}
                                {/* 텍스트 렌더링 */}
                                <div className={mainSt.dashboardflex}>
                                    <b className={mainSt.dashboardtxtmain}>{item.mainText}</b>
                                    <div className={mainSt.line}></div>
                                    <p className={mainSt.dashboardtxt}>{item.additionalText}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {/* guide */}
            <div className={mainSt.guide}>
                <div className={mainSt.guidetitle}>
                    <b>Your SAAS solutions guide</b>
                    <p className={mainSt.guidetxt}>
                        We understand that you may some queries before making a decision, and we are<br />
                        here to provide you with all the answers you need.
                    </p>
                </div>
                <div className={mainSt.guideaccodian}>
                    <ul className={mainSt.guideaccodiangroup}>
                        {accordionItems.map((item, index) => (
                            <li
                                key={index}
                                className={`${mainSt.guideaccodianlist} ${activeAccordion === index ? mainSt.active : ''}`}
                                onClick={() => handleAccordionClick(index)}
                            >

                                <p className={mainSt.guideaccodiantitle}>{item.title}</p>
                                {activeAccordion === index && (
                                    <>
                                        <p className={mainSt.guideaccodiantxt}>{item.text}</p>
                                    </>
                                )}
                            </li>
                        ))}
                        {accordionItems.map((item, index) => (
                            <li
                                key={index}
                                className={`${mainSt.guideaccodianlist} ${activeAccordion === index ? mainSt.active : ''}`}
                                onClick={() => handleAccordionClick(index)}
                            >
                                <p className={mainSt.guideaccodiantitle}>{item.title1}</p>
                                {activeAccordion === index && (
                                    <>
                                        <p className={mainSt.guideaccodiantxt}>{item.text1}</p>
                                    </>
                                )}
                            </li>
                        ))}
                        {accordionItems.map((item, index) => (
                            <li
                                key={index}
                                className={`${mainSt.guideaccodianlist} ${activeAccordion === index ? mainSt.active : ''}`}
                                onClick={() => handleAccordionClick(index)}
                            >
                                <p className={mainSt.guideaccodiantitle}>{item.title2}</p>
                                {activeAccordion === index && (
                                    <>
                                        <p className={mainSt.guideaccodiantxt}>{item.text2}</p>
                                    </>
                                )}
                            </li>
                        ))}
                        {accordionItems.map((item, index) => (
                            <li
                                key={index}
                                className={`${mainSt.guideaccodianlist} ${activeAccordion === index ? mainSt.active : ''}`}
                                onClick={() => handleAccordionClick(index)}
                            >
                                <p className={mainSt.guideaccodiantitle}>{item.title3}</p>
                                {activeAccordion === index && (
                                    <>
                                        <p className={mainSt.guideaccodiantxt}>{item.text3}</p>
                                    </>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {/*Customers  */}
            <div className={mainSt.Customers}>
                <div className={mainSt.Customerstitle}>
                    <h3>What Our Customers Say</h3>
                </div>
                <Swiper
                    slidesPerView={6}
                    spaceBetween={60}
                    freeMode={true}
                    loop
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className={mainSt.mySwiper}
                >
                    <SwiperSlide>
                        <p className={mainSt.slidetxt}>
                            "<br /> I can't believe how easy it was to find and compare different software solutions. And the savings calculator helped us make the best decision for our budget.
                        </p>
                        <div className={mainSt.profilegroup}>
                            <img src='../img/profile.png' className={mainSt.slideprofile}></img>
                        <div className={mainSt.review}>
                            <p className={mainSt.name}>Mary Smith</p>
                            <div className={mainSt.star}>
                                <img src='../img/star.png' className={mainSt.profilestar}></img>
                                <img src='../img/star.png' className={mainSt.profilestar}></img>
                                <img src='../img/star.png' className={mainSt.profilestar}></img>
                                <img src='../img/star.png' className={mainSt.profilestar}></img>
                                <img src='../img/star.png' className={mainSt.profilestar}></img>
                            </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <p className={mainSt.slidetxt}>
                            "<br /> I can't believe how easy it was to find and compare different software solutions. And the savings calculator helped us make the best decision for our budget.
                        </p>
                        <div className={mainSt.profilegroup}>
                            <img src='../img/profile.png' className={mainSt.slideprofile}></img>
                        <div className={mainSt.review}>
                            <p className={mainSt.name}>Mary Smith</p>
                            <div className={mainSt.star}>
                                <img src='../img/star.png' className={mainSt.profilestar}></img>
                            </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <p className={mainSt.slidetxt}>
                            "<br /> I can't believe how easy it was to find and compare different software solutions. And the savings calculator helped us make the best decision for our budget.
                        </p>
                        <div className={mainSt.profilegroup}>
                            <img src='../img/profile.png' className={mainSt.slideprofile}></img>
                        <div className={mainSt.review}>
                            <p className={mainSt.name}>Mary Smith</p>
                            <div className={mainSt.star}>
                                <img src='../img/star.png' className={mainSt.profilestar}></img>
                            </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <p className={mainSt.slidetxt}>
                            "<br /> I can't believe how easy it was to find and compare different software solutions. And the savings calculator helped us make the best decision for our budget.
                        </p>
                        <div className={mainSt.profilegroup}>
                            <img src='../img/profile.png' className={mainSt.slideprofile}></img>
                        <div className={mainSt.review}>
                            <p className={mainSt.name}>Mary Smith</p>
                            <div className={mainSt.star}>
                                <img src='../img/star.png' className={mainSt.profilestar}></img>
                            </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <p className={mainSt.slidetxt}>
                            "<br /> I can't believe how easy it was to find and compare different software solutions. And the savings calculator helped us make the best decision for our budget.
                        </p>
                        <div className={mainSt.profilegroup}>
                            <img src='../img/profile.png' className={mainSt.slideprofile}></img>
                        <div className={mainSt.review}>
                            <p className={mainSt.name}>Mary Smith</p>
                            <div className={mainSt.star}>
                                <img src='../img/star.png' className={mainSt.profilestar}></img>
                            </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <p className={mainSt.slidetxt}>
                            "<br /> I can't believe how easy it was to find and compare different software solutions. And the savings calculator helped us make the best decision for our budget.
                        </p>
                        <div className={mainSt.profilegroup}>
                            <img src='../img/profile.png' className={mainSt.slideprofile}></img>
                        <div className={mainSt.review}>
                            <p className={mainSt.name}>Mary Smith</p>
                            <div className={mainSt.star}>
                                <img src='../img/star.png' className={mainSt.profilestar}></img>
                            </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <p className={mainSt.slidetxt}>
                            " <br />I can't believe how easy it was to find and compare different software solutions. And the savings calculator helped us make the best decision for our budget.
                        </p>
                        <div className={mainSt.profilegroup}>
                            <img src='../img/profile.png' className={mainSt.slideprofile}></img>
                        <div className={mainSt.review}>
                            <p className={mainSt.name}>Mary Smith</p>
                            <div className={mainSt.star}>
                                <img src='../img/star.png' className={mainSt.profilestar}></img>
                            </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <p className={mainSt.slidetxt}>
                            "<br /> I can't believe how easy it was to find and compare different software solutions. And the savings calculator helped us make the best decision for our budget.
                        </p>
                        <div className={mainSt.profilegroup}>
                            <img src='../img/profile.png' className={mainSt.slideprofile}></img>
                        <div className={mainSt.review}>
                            <p className={mainSt.name}>Mary Smith</p>
                            <div className={mainSt.star}>
                                <img src='../img/star.png' className={mainSt.profilestar}></img>
                            </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            {/* contact */}
            <div className={mainSt.contact}>
                <img src='../img/contact.png' className={mainSt.contactimg}></img>
                <div className={mainSt.contacttitle}>
                    <b> Contact Us</b>
                    <p className={mainSt.contacttxt}>Have questions or need assistance? We're here to help you find the perfect software solutions for your business.</p>
                    <form className={mainSt.contactPost}>
                        <input type='email' placeholder="EMAIL" autoComplete="off" className={mainSt.contactMail}></input>
                        <button type='submit' className={mainSt.contactSubmit}>Get Started</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Main