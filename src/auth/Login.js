import React from 'react'
import { useState } from 'react';



function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {

    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("users"))
    const isLoggedIn = user.password === password && user.email === email;


    if(isLoggedIn){

      console.log(`Hosgeldin ${user.name}`)

    }else{
      console.log("Email veya sifre hatali")
    }
   

  }

  return (
    <div>

      <h1>Login</h1>


      <form onSubmit={handleSubmit}>

        <div>
          <input type="email" placeholder='Email' onChange={e => setEmail(e.target.value)} />
        </div>
        <div>
          <input type="password" placeholder='Password' onChange={e => setPassword(e.target.value)} />
        </div>
        <button type="submit">Login</button>

      </form>

    </div>
  )
}

export default Login