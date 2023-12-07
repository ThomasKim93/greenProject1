import React from 'react'
import style from '../pages/blogs/detail/detail.module.scss'
import blogData from './blog.json';


function Detail(blogData) {
    return (
        <>
            <section className={style.detail_section}>
                <article className={style.detail_top}>
                    <img src='../../../blogs/blogs_detail.png' />
                    <h3>Critical tools every company needs.</h3>
                </article>

                <article className={style.writer}>
                    <figure>
                        <img src='../../../blogs/Mask.png' />
                        <span>Travis Scott</span>
                        <p><img src='../../../blogs/star.png' /></p>
                    </figure>
                    <p>10 min read<span>12 Nov 23</span></p>
                </article>

                <article className={style.text}>
                    <div>
                        <p>
                            Our curated marketplace features a vast collection of software solutions from leading providers, ensuring that businesses have access to the best tools available to address their unique needs and challenges. Whether you're seeking a robust productivity suite, a sophisticated design tool, or a specialized industry solution, our platform has something for every need. Our curated marketplace features a vast collection of software solutions from leading providers, ensuring that businesses have access to the best tools available to address their unique needs and challenges. Whether Our curated marketplace features a vast collection of software solutions from leading providers, ensuring that businesses have access to the best tools available to address their unique needs and challenges. Whether you're seeking a robust productivity suite, a sophisticated design tool, or a specialized industry solution, our platform has something for every need. Our curated marketplace features a vast collection of software solutions from leading providers, ensuring that businesses have access to the best tools available to address their unique needs and challenges. Whether Our curated marketplace features a vast collection of software solutions from leading providers, ensuring that businesses have access to the best tools available to address their unique needs and challenges. Whether you're seeking a robust productivity suite, a sophisticated design tool, or a specialized industry solution, our platform has something for every need. Our curated marketplace features a vast collection of software solutions from leading providers, ensuring that businesses have access to the best tools available to address their unique needs and challenges. Whether Our curated marketplace features a vast collection of software solutions from leading providers, ensuring that businesses have access to the best tools available to address their unique needs and challenges. Whether you're seeking a robust productivity suite, a sophisticated design tool, or a specialized industry solution, our platform has something for every need. Our curated marketplace features a vast collection of software solutions from leading providers, ensuring that businesses have access to the best tools available to address their unique needs and challenges. Whether Our curated marketplace features a vast collection of software solutions from leading providers, ensuring that businesses have access to the best tools available to address their unique needs and challenges. Whether you're seeking a robust productivity suite, a sophisticated design tool, or a specialized industry solution, our platform has something for every need. Our curated marketplace features a vast collection of software solutions from leading providers, ensuring that businesses have access to the best tools available to address their unique needs and challenges. Whether Our curated marketplace features a vast collection of software solutions from leading providers, ensuring that businesses have access to the best tools available to address their unique needs and challenges. Whether you're seeking a robust productivity suite, a sophisticated design tool, or a specialized industry solution, our platform has something for every need. Our curated marketplace features a vast collection of software solutions from leading providers, ensuring that businesses have access to the best tools available to address their unique needs and challenges. Whether
                        </p>
                    </div>
                </article>
            </section>
        </>
    )
}

export default Detail
