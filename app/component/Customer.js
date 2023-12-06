import React from 'react'
import style from '../pages/customer/customer.module.scss';


function Customer() {
  return (
    <>
    <section className={style.customer_section}>
    <article className={style.customer1}>
      <h3>Customers</h3>
      <p>We are proud to serve a diverse range of businesses across various industries. Our clients come in all sizes, from startups to enterprises, and they all share a common need: to leverage the power of technology to achieve their goals.  </p>
      <div></div>
    </article>

    <article className={style.customer2}>
    <ul>
      <li>
        <img src='../../../customers/mang.png'/>
        <span>Sarah Jones</span>
        <p>This platform is a lifesaver! It has taken the stress out of managing our software subscriptions.</p>
        <div className={style.star}>별점</div>
      </li> 
    </ul>
    </article>
    </section>
      
    </>
  )
}

export default Customer
