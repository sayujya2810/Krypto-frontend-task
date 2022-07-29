import React, { useEffect, useState } from 'react'
import "../styles/forms.css"
import ProductGrid from './ProductGrid'

const LoginPage = () => {

  // useEffect(()=> {
  //   setLoggedStatus(false)
  // }, [])
  
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loggedStatus, setLoggedStatus] = useState(false)

  const handleSubmit = (e) => {

    e.preventDefault()

    let mail = JSON.parse(localStorage.getItem(email)).email
    let pass = JSON.parse(localStorage.getItem(email)).password

    if(email === "" || password === ""){
      alert("Fields cannot be empty!");
      return;
    }
    else{
      if(mail === email && pass === password){
        // turn of the login flag
        alert("Voila")
        setLoggedStatus(true)
        // localStorage.setItem("log_status", true);
      }
    }
  }

  return (
    <>
      {

        // localStorage.getItem("log_status") 
          !loggedStatus

        ?

        <div className='form-container'>
            <div className='form-wrapper'>
                <div className='form-head-container'><p className='form-head'>LOGIN</p></div>
                <form className='main-form-login'>
                    <input className='inputs' onChange={e => setEmail(e.target.value)} type="text" id='login-email' placeholder='Email' />
                    <input className='inputs' onChange={e => setPassword(e.target.value)} type="password" id='login-password' placeholder='Password' />
                    <button className='inputs form-btn' onClick={handleSubmit} >Login</button>
                    <a className='dont-have' href='/'>Don't have account? Sign in</a>
                </form>
            </div>
        </div>

        : 

        <ProductGrid email={email} />
      }    
    
    
    </>
  )
}

export default LoginPage