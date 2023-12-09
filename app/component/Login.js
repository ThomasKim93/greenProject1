import React from 'react'
import style from '../pages/login/login.module.scss';

function Login() {
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
                    <form>
                        <label>
                            <p>Email</p>
                            <input />
                        </label>
                        <label>
                            <p>Password</p>
                            <input />
                        </label>
                        <label >
                            <div>
                            <input type='checkbox'/>
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
                    <button><img src='../../../login/google.png'/>Google</button>
                    <button><img src='../../../login/microsoft.png'/>Microsoft</button>
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
