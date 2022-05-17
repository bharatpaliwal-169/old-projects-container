import React, { Component } from 'react'
import style from '../../styles/forgot.module.css'

export default class reset extends Component {
    render() {
        return (
            <div>
                 <div className={style.forgot_top}>
                    <div className={style.forgot_inner1}>
                        <h6>Create New Password</h6>
                        <form action="/Login">
                        <input type="password" name="password" placeholder="New Password" autoComplete="off" id={style.email1} />
                        <input type="password" name="password1" placeholder="Confirm password" autoComplete="off" id={style.email1} />
                        <div className={style.submitform}><button type="submit">Submit</button> </div>
                        </form>
                    </div>

            </div>
            </div>
        )
    }
}
