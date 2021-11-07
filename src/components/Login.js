import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'
import { auth, provider } from '../firebase'
import { actionTypes } from './reducer'
import { useStateValue } from './StateProvider'

const Login = () => {
    const [{},dispatch] = useStateValue()

    const signIn = () =>{
        auth.signInWithPopup(provider)
        .then(result => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            })
        })
        .catch(error => alert(error.message))
    }
    return (
        <div className="login">
            <div className="login__container">
                <img src="https://i.pinimg.com/originals/a6/06/25/a60625748a61e88e4ae17d53bc286910.png" alt="whatsapp" />
                <div className="login__text">
                    <h1>CHAT ME</h1>
                </div>
                <Button onClick={signIn}>Sign In with Google</Button>
            </div>
            
        </div>
    )
}

export default Login
