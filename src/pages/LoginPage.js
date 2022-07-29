import React from 'react'
import "../styles/forms.css"

const LoginPage = () => {
  return (
    <div className='form-container'>
        <div className='form-wrapper'>
            <div className='form-head-container'><p className='form-head'>LOGIN</p></div>
            <form className='main-form-login'>
                <input className='inputs' type="text" id='login-email' placeholder='Email' />
                <input className='inputs' type="password" id='login-password' placeholder='Password' />
                <button className='inputs form-btn' >Login</button>
                <a className='dont-have' href='/signin'>Don't have account? Sign in</a>
            </form>
        </div>
    </div>
  )
}

export default LoginPage