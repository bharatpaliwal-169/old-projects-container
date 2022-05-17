import React from 'react'
import style from '../../styles/forgot.module.css'
const Forgot = () => {
    return (
        <div>
            <div className={style.forgot_top}>
                    <div className={style.forgot_inner}>
                        <h6 className='display-2'>Verify Your Email</h6>
                        <form action="/forgot/verify">
                            <input type="text" name="email" placeholder="Username or email" autoComplete="off" id={style.email1} />
                            <  div className={style.submitform}><button type="submit">Submit</button></div>
                        </form>
                    </div>

            </div>
        </div>
    )
}

export default Forgot
