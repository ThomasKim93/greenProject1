"use client"

import React, { useState } from 'react'
import style from '../pages/login/login.module.scss';

function Login() {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    
        // 이메일과 비밀번호를 로컬 스토리지에 저장
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userPassword', password);
    
        // 콘솔에 데이터 출력
        console.log('Email:', email);
        console.log('Password:', password);}
        
    return (
        <>
            <section className={style.login_section}>
                <article>
                    <div>
                        <h3>Welcome back!</h3>
                        <p>Please enter your details</p>

                    </div>
                </article>

                <article className={style.labels}>
                    <div>
                        <form onSubmit={handleSubmit} >
                            <label>
                                <p>Email</p>
                                <input type='email' name='email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)} />
                            </label>
                            <label>
                                <p>Password</p>
                                <input type='password' name='password'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)} />
                            </label>
                            <label >
                                <div>
                                    <input type='checkbox' />
                                    <p>Remember me</p>
                                </div>
                                <a href="#">Forgot Password?</a>
                            </label>
                            <input type="submit" value="Login"></input>
                        </form>
                    </div>
                </article>

                <article className={style.seperate}>
                    <div>
                        <span></span>
                        <p>Or</p>
                        <span></span>
                    </div>
                </article>

                <article className={style.api}>
                    <div>
                        <button><img src='../../../login/google.png' />Google</button>
                        <button><img src='../../../login/microsoft.png' />Microsoft</button>
                    </div>
                </article>

                <article className={style.sign_up}>
                    <div>
                        <p>Don’t have an account ?</p>
                        <a href='#'> Sign up</a>
                    </div>
                </article>


            </section>
        </>
    )
}

export default Login
