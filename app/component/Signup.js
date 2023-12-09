import React from 'react'
import style from '../pages/signup/signup.module.scss';
function Signup() {
    return (
        <>
            <section className={style.signup_section}>
                <article>
                    <div>
                        <h3>Welcome!</h3>
                        <p>Please enter details to sign up</p>
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
                                    <input type='checkbox' />
                                    <p>Remember me</p>
                                </div>
                                <a href="#">Forgot Password?</a>
                            </label>
                            <input type="submit" value="Sign Up"></input>
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

                <article className={style.log_in}>
                    <div>
                        <p>Already have an account ?</p>
                        <a href='#'> Log in</a>
                    </div>
                </article>


            </section>
        </>
    )
}

export default Signup
