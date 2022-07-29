import React from 'react'
import "../styles/forms.css"

const SigninPage = () => {
  return (
    <div className='form-container'>
        <div className='form-wrapper'>
            <div className='form-head-container'><p className='form-head'>SIGNUP</p></div>
            <form className='main-form'>
                <div>
                    <input className='inputs sp' type="text" id='signup-fname' placeholder='First Name' />
                    <input className='inputs sp' type="text" id='signup-lname' placeholder='Last Name' />
                </div>
                <input className='inputs' type="text" id='signup-email' placeholder='Email' />
                <input className='inputs' type="password" id='signup-password' placeholder='Password' />
                <input className='inputs' type="password" id='signup-confirm-password' placeholder='Confirm Password' />
                <button className='inputs form-btn' > Sign In</button>
                <a className='dont-have' href='/login'>Already an User? Login</a>
            </form>
        </div>
    </div>
  )
}

export default SigninPage