"use client"
import React, { useEffect, useState } from 'react'
import style from '../pages/customer/customer.module.scss';
import { useRouter } from 'next/router'; 
import Loading from './Loading';
import Headers from '../component/Header'
import Footer from '../component/Footer'


function Customer() {

  const [loading,setLoading] = useState (true);

  useEffect(() => {
    const fetchData = async () => {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };
    fetchData();
  }, []); 
  
  return (
    <>
     <Headers/>
{loading ? (
        // 로딩 중이면 로딩 컴포넌트를 렌더링
        <Loading />
      ) : (
      <section className={style.customer_section}>
        <article className={style.customer1}>
          <h3>Customers</h3>
          <p>We are proud to serve a diverse range of businesses across various industries. Our clients come in all sizes, from startups to enterprises, and they all share a common need: to leverage the power of technology to achieve their goals.  </p>
        </article>
          <article className={style.ani}>
            <figure className={style.aniimg}>
              <img src='../../../customers/swiper1.png'></img>
              <img src='../../../customers/swiper2.png'></img>
              <img src='../../../customers/swiper3.png'></img>
              <img src='.../../../customers/swiper4.png'></img>
              <img src='.../../../customers/swiper5.png'></img>
              <img src='../../../customers/swiper6.png'></img>
              <img src='../../../customers/swiper7.png'></img>
              <img src='../../../customers/swiper8.png'></img>
              <img src='../../../customers/swiper9.png'></img>
            </figure>
          </article>
        <article className={style.customer2}>
          <ul className={style.numbox}>
            <li className={style.num1}>
              <img src='../../../customers/mang.png' />
              <span>Sarah Jones</span>
              <p>This platform is a lifesaver! It has taken the stress out of managing our software subscriptions.</p>
              <div className={style.star}><img src='../../../customers/star.png' /></div>
            </li>

            <li className={style.num2}>
              <img src='../../../customers/mang.png' />
              <span>Sarah Jones</span>
              <p>This platform is a lifesaver! It has taken the stress out of managing our software subscriptions.</p>
              <div className={style.star}><img src='../../../customers/star.png' /></div>
            </li>

            <li className={style.num2}>
              <img src='../../../customers/mang.png' />
              <span>Sarah Jones</span>
              <p>This platform is a lifesaver! It has taken the stress out of managing our software subscriptions.</p>
              <div className={style.star}><img src='../../../customers/star.png' /></div>
            </li>

            <li className={style.num1}>
              <img src='../../../customers/mang.png' />
              <span>Sarah Jones</span>
              <p>This platform is a lifesaver! It has taken the stress out of managing our software subscriptions.</p>
              <div className={style.star}><img src='../../../customers/star.png' /></div>
            </li>

            <li className={style.num1}>
              <img src='../../../customers/mang.png' />
              <span>Sarah Jones</span>
              <p>This platform is a lifesaver! It has taken the stress out of managing our software subscriptions.</p>
              <div className={style.star}><img src='../../../customers/star.png' /></div>
            </li>

            <li className={style.num3}>
              <img src='../../../customers/mang.png' />
              <span>Sarah Jones</span>
              <p>This platform is a lifesaver! It has taken the stress out of managing our software subscriptions.</p>
              <div className={style.star}><img src='../../../customers/star.png' /></div>
            </li>

            <li className={style.num1}>
              <img src='../../../customers/mang.png' />
              <span>Sarah Jones</span>
              <p>This platform is a lifesaver! It has taken the stress out of managing our software subscriptions.</p>
              <div className={style.star}><img src='../../../customers/star.png' /></div>
            </li>

            <li className={style.num1}>
              <img src='../../../customers/mang.png' />
              <span>Sarah Jones</span>
              <p>This platform is a lifesaver! It has taken the stress out of managing our software subscriptions.</p>
              <div className={style.star}><img src='../../../customers/star.png' /></div>
            </li>

            <li className={style.num2}>
              <img src='../../../customers/mang.png' />
              <span>Sarah Jones</span>
              <p>This platform is a lifesaver! It has taken the stress out of managing our software subscriptions.</p>
              <div className={style.star}><img src='../../../customers/star.png' /></div>
            </li>

            <li className={style.num2}>
              <img src='../../../customers/mang.png' />
              <span>Sarah Jones</span>
              <p>This platform is a lifesaver! It has taken the stress out of managing our software subscriptions.</p>
              <div className={style.star}><img src='../../../customers/star.png' /></div>
            </li>

            <li className={style.num1}>
              <img src='../../../customers/mang.png' />
              <span>Sarah Jones</span>
              <p>This platform is a lifesaver! It has taken the stress out of managing our software subscriptions.</p>
              <div className={style.star}><img src='../../../customers/star.png' /></div>
            </li>

            <li className={style.num1}>
              <img src='../../../customers/mang.png' />
              <span>Sarah Jones</span>
              <p>This platform is a lifesaver! It has taken the stress out of managing our software subscriptions.</p>
              <div className={style.star}><img src='../../../customers/star.png' /></div>
            </li>

            <li className={style.num3}>
              <img src='../../../customers/mang.png' />
              <span>Sarah Jones</span>
              <p>This platform is a lifesaver! It has taken the stress out of managing our software subscriptions.</p>
              <div className={style.star}><img src='../../../customers/star.png' /></div>
            </li>

            <li className={style.num1}>
              <img src='../../../customers/mang.png' />
              <span>Sarah Jones</span>
              <p>This platform is a lifesaver! It has taken the stress out of managing our software subscriptions.</p>
              <div className={style.star}><img src='../../../customers/star.png' /></div>
            </li>

            <li className={style.num1}>
              <img src='../../../customers/mang.png' />
              <span>Sarah Jones</span>
              <p>This platform is a lifesaver! It has taken the stress out of managing our software subscriptions.</p>
              <div className={style.star}><img src='../../../customers/star.png' /></div>
            </li>

            <li className={style.num3}>
              <img src='../../../customers/mang.png' />
              <span>Sarah Jones</span>
              <p>This platform is a lifesaver! It has taken the stress out of managing our software subscriptions.</p>
              <div className={style.star}><img src='../../../customers/star.png' /></div>
            </li>

            <li className={style.num1}>
              <img src='../../../customers/mang.png' />
              <span>Sarah Jones</span>
              <p>This platform is a lifesaver! It has taken the stress out of managing our software subscriptions.</p>
              <div className={style.star}><img src='../../../customers/star.png' /></div>
            </li>
          </ul>
        </article>
        <div className={style.contact}>
                <img src='../img/contact.png' className={style.contactimg}></img>
                <div className={style.contacttitle}>
                    <b> Contact Us</b>
                    <p className={style.contacttxt}>Have questions or need assistance? We're here to help you find the perfect software solutions for your business.</p>
                    <form className={style.contactPost}>
                        <input type='email' placeholder="EMAIL" autoComplete="off" className={style.contactMail}></input>
                        <button type='submit' className={style.contactSubmit}>Get Started</button>
                    </form>
                </div>
            </div>
      </section>
       )}
        <Footer/>
    </>
  )
}

export default Customer
