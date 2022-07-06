import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'

function Register() {

  const [user, setUser] = useState({});


  const navigate = useNavigate();

  const handleRegister = (e) => {

    e.preventDefault();

    console.log(user);

    localStorage.setItem("users", JSON.stringify(user))


    navigate("/login", {replace:true});
    
  }

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
        <div>
          <input type="text" placeholder='Name' onChange={e => setUser({ ...user, name: e.target.value })} />
        </div>
        <div>
          <input type="email" placeholder='Email' onChange={e => setUser({ ...user, email: e.target.value })} />
        </div>
        <div>
          <input type="password" id='password' placeholder='Password' onChange={e => setUser({ ...user, password: e.target.value })} />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default Register