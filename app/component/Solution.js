"use client"
import React, { useState,useEffect } from 'react'
import style from '../pages/solution/solution.module.scss';

function Solution() {

    const [selectedCategory, setSelectedCategory] = useState('all');
    const [checked,setChecked] = useState([]);


    const filterCategory = (category) => {
        setSelectedCategory(category.toLowerCase());
    };



    const data = [
        {
            id: 1,
            category: 'Development',
            image: '../../../solution/Group 689.png',
            description: 'For individuals, solopreneurs and freelance designers who want unlimited access to premium content, to create professional designs with ease and scale their productivity.',
            website: '#'
        },
        {
            id: 2,
            category: 'Cyber Security',
            image: '../../../solution/Group 689.png',
            description: 'For individuals, solopreneurs and freelance designers who want unlimited access to premium content, to create professional designs with ease and scale their productivity.',
            website: '#'
        },
        {
            id: 3,
            category: 'Development',
            image: '../../../solution/Group 689.png',
            description: 'For individuals, solopreneurs and freelance designers who want unlimited access to premium content, to create professional designs with ease and scale their productivity.',
            website: '#'
        },
        {
            id: 4,
            category: 'Development',
            image: '../../../solution/Group 689.png',
            description: 'For individuals, solopreneurs and freelance designers who want unlimited access to premium content, to create professional designs with ease and scale their productivity.',
            website: '#'
        },
        {
            id: 5,
            category: 'Cyber Security',
            image: '../../../solution/Group 689.png',
            description: 'For individuals, solopreneurs and freelance designers who want unlimited access to premium content, to create professional designs with ease and scale their productivity.',
            website: '#'
        },
        {
            id: 6,
            category: 'CRM',
            image: '../../../solution/Group 689.png',
            description: 'For individuals, solopreneurs and freelance designers who want unlimited access to premium content, to create professional designs with ease and scale their productivity.',
            website: '#'
        },
        {
            id: 7,
            category: 'Cyber Security',
            image: '../../../solution/Group 689.png',
            description: 'For individuals, solopreneurs and freelance designers who want unlimited access to premium content, to create professional designs with ease and scale their productivity.',
            website: '#'
        },
        {
            id: 8,
            category: 'Development',
            image: '../../../solution/Group 689.png',
            description: 'For individuals, solopreneurs and freelance designers who want unlimited access to premium content, to create professional designs with ease and scale their productivity.',
            website: '#'
        },
        {
            id: 9,
            category: 'Development',
            image: '../../../solution/Group 689.png',
            description: 'For individuals, solopreneurs and freelance designers who want unlimited access to premium content, to create professional designs with ease and scale their productivity.',
            website: '#'
        },
        {
            id: 10,
            category: 'CRM',
            image: '../../../solution/Group 689.png',
            description: 'For individuals, solopreneurs and freelance designers who want unlimited access to premium content, to create professional designs with ease and scale their productivity.',
            website: '#'
        },
        {
            id: 11,
            category: 'Cyber Security',
            image: '../../../solution/Group 689.png',
            description: 'For individuals, solopreneurs and freelance designers who want unlimited access to premium content, to create professional designs with ease and scale their productivity.',
            website: '#'
        },
        {
            id: 22,
            category: 'Cyber Security',
            image: '../../../solution/Group 689.png',
            description: 'For individuals, solopreneurs and freelance designers who want unlimited access to premium content, to create professional designs with ease and scale their productivity.',
            website: '#'
        },
        {
            id: 13,
            category: 'Cyber Security',
            image: '../../../solution/Group 689.png',
            description: 'For individuals, solopreneurs and freelance designers who want unlimited access to premium content, to create professional designs with ease and scale their productivity.',
            website: '#'
        },
        {
            id: 14,
            category: 'Cyber Security',
            image: '../../../solution/Group 689.png',
            description: 'For individuals, solopreneurs and freelance designers who want unlimited access to premium content, to create professional designs with ease and scale their productivity.',
            website: '#'
        },
        {
            id: 15,
            category: 'Cyber Security',
            image: '../../../solution/Group 689.png',
            description: 'For individuals, solopreneurs and freelance designers who want unlimited access to premium content, to create professional designs with ease and scale their productivity.',
            website: '#'
        },
        {
            id: 16,
            category: 'Cyber Security',
            image: '../../../solution/Group 689.png',
            description: 'For individuals, solopreneurs and freelance designers who want unlimited access to premium content, to create professional designs with ease and scale their productivity.',
            website: '#'
        },
        {
            id: 17,
            category: 'Cyber Security',
            image: '../../../solution/Group 689.png',
            description: 'For individuals, solopreneurs and freelance designers who want unlimited access to premium content, to create professional designs with ease and scale their productivity.',
            website: '#'
        },

    ]

    return (
        <>
            <section className={style.solution_section}>
                <article className={style.solution1}>
                    <h3>Explore Our Comprehensive Software Solutions</h3>
                    <p>Navigate our extensive collection of software solutions, meticulously organized into categories that reflect the diverse needs of modern businesses</p>
                </article>

                <article className={style.solution2}>
                    <nav>
                        <a className={selectedCategory === 'all' ? style.active : ''} onClick={() => filterCategory('All')}>All</a>
                        <a className={selectedCategory === 'cyber security' ? style.active : ''} onClick={() => filterCategory('Cyber Security')}>Cyber Security</a>
                        <a className={selectedCategory === 'crm' ? style.active : ''} onClick={() => filterCategory('CRM')}>CRM</a>
                        <a className={selectedCategory === 'development' ? style.active : ''} onClick={() => filterCategory('Development')}>Development</a>
                    </nav>
                </article>

                <article className={style.soultion3}>
                    <div>
                        <ul>
                            {data.map(item => (
                                <li key={item.id} style={{ display: selectedCategory === 'all' || selectedCategory === item.category.toLowerCase() ? 'flex' : 'none' }}>
                                    <img src={item.image} alt={item.category} />
                                    <span>{item.category}</span>
                                    <p>{item.description}</p>
                                    <a href={item.website}>Visit Website</a>
                                </li>
                            ))}
                            <li className={style.more}>
                                <img src='../../../solution/more.png' />
                                <span>More Coming Soon</span>
                                <p>We will add more software at your disposal</p>
                            </li>
                        </ul>
                    </div>
                </article>


                <article className={style.contact}>
                <img src='../../../aboutus/contact.png' className={style.contactimg}></img>
                <div className={style.contacttitle}>
                    <b> Contact Us</b>
                    <p className={style.contacttxt}>Have questions or need assistance? We're here to help you find the perfect software solutions for your business.</p>
                    <form className={style.contactPost}>
                        <input type='email' placeholder="EMAIL" autoComplete="off" className={style.contactMail}></input>
                        <button type='submit' className={style.contactSubmit}>Get Started</button>
                    </form>
                </div>
            </article>
            </section>
        </>
    )
}

export default Solution
