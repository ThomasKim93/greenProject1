"use client"

import React from 'react'

import style from '../pages/loading/loading.module.scss';

function Loading() {

    return (
        <>
            <section className={style.loading_section}>
                <svg className={style.loading_animation}>
                    <circle className={style.circle1}
                        cx="50%" cy="50%" r="150" />

                    <circle className={style.circle2}
                        cx="50%" cy="50%" r="100"/>

                    <circle className={style.circle3}
                        cx="50%" cy="50%" r="50"/>
                </svg>

                <svg className={style.loading_animation2}>
                    <circle className={style.circle1}
                        cx="50%" cy="50%" r="130" />

                    <circle className={style.circle2}
                        cx="50%" cy="50%" r="90"/>

                    <circle className={style.circle3}
                        cx="50%" cy="50%" r="35"/>
                </svg>
            </section >
        </>
    )
}

export default Loading
