import React from 'react'
import style from '../pages/aboutus/aboutus.module.scss';


function Aboutus() {
  return (
    <>
      <section className={style.about_section}>
        <article className={style.about_start}>
          <h3>About Us</h3>
          <div className={style.about1}>
            <img src='../../../aboutus/about1.png' />
            <div className={style.text}>
              <p>We're here to help! Whether you have a question about our products or services,
                need assistance with your order, or simply want to learn more about our company,
                we're happy to hear from you. We're here to help! Whether you have a question about our products or services,
                need assistance with your order, or
                <br />
                <br /> simply want to learn more about our company,
                we're happy to hear from you.We're here to help! Whether you have a question about our products or services,
                need assistance with your order, or simply want to learn more about our company,  we're happy to hear from you.</p>
              <ul>
                <li>
                  8.5x
                  <p>Average ROI</p>
                </li>
                <li>
                  $ 1M+
                  <p>Customers savings</p>
                </li>
                <li>
                  35%
                  <p>Savings Upto</p>
                </li>
              </ul>
              <div>
                <button>Get In Touch</button>
              </div>
            </div>
          </div>
        </article>

        <article className={style.about_second}>
          <h3>Why Choose Us</h3>
          <div>
            <div>
              <img src='../../../aboutus/icon_1.png' />
              <span className={style.p}>Unrivaled Softwares</span>
              <p>We're here to help! Whether you have a question about our products or services, need assistance with your order, or simply want.</p>
            </div>
            <div >
              <img src='../../../aboutus/icon_2.png' />
              <span className={style.p}>Unparalleled Expertise</span>
              <p>We're here to help! Whether you have a question about our products or services, need assistance with your order, or simply want.</p>
            </div>
            <div >
              <img src='../../../aboutus/icon_3.png' />
              <span className={style.p}>Unmatched Savings</span>
              <p>We're here to help! Whether you have a question about our products or services, need assistance with your order, or simply want.</p>
            </div>
            <div >
              <img src='../../../aboutus/icon_4.png' />
              <p className={style.p}>Unwavering Support</p>
              <p>We're here to help! Whether you have a question about our products or services, need assistance with your order, or simply want.</p>
            </div>
          </div>
        </article>

        <article className={style.about_third}>
          <h3>Meet our team</h3>
          <p>We're here to help! Whether you have a question about our products or services, We're here to help! Whether you have a question about our products or services,</p>

          <div className={style.about_third_introduce}>
            <div>
              <ul className={style.social}>
                <li><a href='#'><img src='../../../aboutus/Facebook.png' /></a></li>
                <li><a href='#'><img src='../../../aboutus/Twitter.png' /></a></li>
                <li><a href='#'><img src='../../../aboutus/Instagram.png' /></a></li>
                <li><a href='#'><img src='../../../aboutus/Linkedin.png' /></a></li>
              </ul>
              <div className={style.show}>
                <img src='../../../aboutus/lakhendra.png' />
                <p>Lakhendra Kushwah</p>
                <span>CEO</span>
              </div>
            </div>
            <div>
              <ul className={style.social}>
                <li><a href='#'><img src='../../../aboutus/Facebook.png' /></a></li>
                <li><a href='#'><img src='../../../aboutus/Twitter.png' /></a></li>
                <li><a href='#'><img src='../../../aboutus/Instagram.png' /></a></li>
                <li><a href='#'><img src='../../../aboutus/Linkedin.png' /></a></li>
              </ul>
              <div className={style.show}>
                <img src='../../../aboutus/kaustubh.png' />
                <p>Kaustubh Rai</p>
                <span>CTO</span>
              </div>
            </div>
            <div>
              <ul className={style.social}>
                <li><a href='#'><img src='../../../aboutus/Facebook.png' /></a></li>
                <li><a href='#'><img src='../../../aboutus/Twitter.png' /></a></li>
                <li><a href='#'><img src='../../../aboutus/Instagram.png' /></a></li>
                <li><a href='#'><img src='../../../aboutus/Linkedin.png' /></a></li>
              </ul>
              <div className={style.show}>
                <img src='../../../aboutus/mahendra.png' />
                <p>Mahendra Kushwah</p>
                <span>COO</span>
              </div>
            </div>
          </div>
        </article>

        <article className={style.about_fourth}>
        <div>
          <div>
          <h3>Our Values</h3>
          <p>We're here to help! Whether you have a question about our products or services, We're here to help! Whether you have a question about our products or services,</p>
          </div>
          <ul>
            <li>Can I customize the software packages to fit my specific needs?<span>+</span></li>
            <li>How do you protect my company's data when it is stored on your platform?<span>+</span></li>
            <li> Can I customize the software packages to fit my specific needs?<span>+</span></li>
            <li>Can I control who has access to my company's data within your platform?<span>+</span></li>
          </ul>
        
        </div>


        </article>

      </section>
    </>
  )
}

export default Aboutus
