"use client"
import React, { useState } from 'react'
import style from '../pages/blogs/blogs.module.scss';


function Blogs() {
    const [search,setSearch] = useState('');

    const filtersBologs = (blogs)=>{
      const lower = search.toLowerCase();
      return(
        blogs.title.toLowerCase().includes(lower) ||
        blogs.content.toLowerCase().includes(lower)
        );
    };

    const blogs = [
      {
        id: 1,
        image: '../../../blogs/blogs_featured.png',
        readTime: '10 min read',
        date: '12 Nov 23',
        title: 'Critical tools every company needs.',
        content: 'Gone are the days of scouring multiple websites, managing numerous subscriptions, and dealing with complex procurement processes...',
        writer: {
          name: 'Travis Scott',
          profileImage: '../../../blogs/Mask.png',
        },
        starImage: '../../../blogs/star.png',
      },
      {
        id: 1,
        image: '../../../blogs/blogs_featured.png',
        readTime: '10 min read',
        date: '12 Nov 23',
        title: 'Critical tools every company needs.',
        content: 'Gone are the days of scouring multiple websites, managing numerous subscriptions, and dealing with complex procurement processes...',
        writer: {
          name: 'Travis Scott',
          profileImage: '../../../blogs/Mask.png',
        },
        starImage: '../../../blogs/star.png',
      },
      {
        id: 1,
        image: '../../../blogs/blogs_featured.png',
        readTime: '10 min read',
        date: '12 Nov 23',
        title: 'Critical tools every company needs.',
        content: 'Gone are the days of scouring multiple websites, managing numerous subscriptions, and dealing with complex procurement processes...',
        writer: {
          name: 'Travis Scott',
          profileImage: '../../../blogs/Mask.png',
        },
        starImage: '../../../blogs/star.png',
      },
      {
        id: 1,
        image: '../../../blogs/blogs_featured.png',
        readTime: '10 min read',
        date: '12 Nov 23',
        title: 'Critical tools every company needs.',
        content: 'Gone are the days of scouring multiple websites, managing numerous subscriptions, and dealing with complex procurement processes...',
        writer: {
          name: 'Travis Scott',
          profileImage: '../../../blogs/Mask.png',
        },
        starImage: '../../../blogs/star.png',
      },
      {
        id: 1,
        image: '../../../blogs/blogs_featured2.png',
        readTime: '10 min read',
        date: '12 Nov 23',
        title: 'Critical tools every company needs.',
        content: `hey let's take a pickture`,
        writer: {
          name: 'Travis Scott',
          profileImage: '../../../blogs/Mask.png',
        },
        starImage: '../../../blogs/star.png',
      },
      {
        id: 1,
        image: '../../../blogs/blogs_featured2.png',
        readTime: '10 min read',
        date: '12 Nov 23',
        title: 'Critical tools every company needs.',
        content: 'Gone are the days of scouring multiple websites, managing numerous subscriptions, and dealing with complex procurement processes...',
        writer: {
          name: 'Travis Scott',
          profileImage: '../../../blogs/Mask.png',
        },
        starImage: '../../../blogs/star.png',
      },
    ]

    const filteredBlogs = blogs.filter(filtersBologs);


  return (
    <>
      <section className={style.blogs_section}>
        <article className={style.blogs_top}>
          <h3>Our Blogs</h3>
          <p>A center for all our resources and insights</p>
          <label>
            <img src='../../../blogs/view.png' />
            <input 
            name='keyword'
            placeholder='Search our blogs by topic or key word...' 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            />
          </label>
        </article>

        <article className={style.featured}>
          <div className={style.featured_flex1}>
            <div className={style.first_div}>
              <h1>Featured</h1>
            </div>

            <div className={style.second_div}>
              <div className={style.img_div}>
                <img src='../../../blogs/blogs_featured.png' />
              </div>
              <div className={style.contets_div}>
                <div>
                  <p className={style.state}>10 min read <span>12 Nov 23</span> </p>
                  <h3>Critical tools every company needs.</h3>
                  <p>Our curated marketplace features a vast collection of software solutions from leading providers, ensuring that businesses have access to the best tools available to address their unique needs and challenges. Whether you're seeking a robust productivity suite, a sophisticated design tool, or a specialized industry solution, our platform has something for every need. Our curated marketplace features a vast collection of software solutions from leading providers, ensuring that businesses have access to the best tools available to address their unique needs and challenges. Whether </p>
                </div>
                <div className={style.writer}>
                  <figure>
                    <img src='../../../blogs/Mask.png' /> <span>Travis Scott</span>
                  </figure>
                  <p><img src='../../../blogs/star.png'/></p>
                </div>
              </div>
            </div>
          </div>
        </article>

        <article className={style.menu}>
          <nav>
            <a>All</a>
            <a>Popular</a>
            <a>Trending</a>
          </nav>
          <div className={style.show_nav}>
          <ul className={style.nav_all}>
          { 
          filteredBlogs.map((blogs) => (
          <li key = {blogs.id}>
              <img src={blogs.image} />
              <p className={style.state}>{blogs.readTime}<span>{blogs.date}</span></p>
              <h3 className={style.title}>{blogs.title}</h3>
              <p>{blogs.content}</p>
              <div className={style.writer}>
                  <figure>
                    <img src={blogs.writer.profileImage} /> <span>{blogs.writer.name}</span>
                  </figure>
                  <p><img src={blogs.starImage}/></p>
              </div>
            </li>
          )  
            )}
          </ul>
          </div>
        </article>
      </section>
    </>
  )
}

export default Blogs
