import React from 'react'
import style from '../pages/customer/customer.module.scss';


function Customer() {
  return (
    <>
    <section className={style.customer_section}>
    <article>
      <h3>Customers</h3>
      <p>We are proud to serve a diverse range of businesses across various industries. Our clients come in all sizes, from startups to enterprises, and they all share a common need: to leverage the power of technology to achieve their goals.  </p>
      <div></div>
    </article>

    <ul>
      <li>
        <img src='../../../customers/mang.png'/>
        <span>name</span>
        <p>This platform is a lifesaver! It has taken the stress out of managing our software subscriptions.</p>
        <p className={style.star}>별점</p>
      </li>
    </ul>
    </section>
      
    </>
  )
}

export default Customer
