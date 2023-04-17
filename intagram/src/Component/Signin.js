import React, { useState } from 'react'
import '../Component/Login.css'
import Swal from 'sweetalert2'
// import Swal from 'sweetalert2/dist/sweetalert2.js'

// import 'sweetalert2/src/sweetalert2.scss'

export default function Signin() {
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [admin, setadmin] = useState([
        {
            email:'admin1@gmail.com',
            password:123
        },
        {
            email:'admin2@gmail.com',
            password:1234
        },
        {
            email:'admin3@gmail.com',
            password:12345
        }
    ])
    let hendalemail = (event) =>{
        setEmail(event.target.value)
    }
    let hendalpassword = (event) =>{
        setPassword(event.target.value)
    }
    let login = () => {
        var temp = admin.filter(item=>item.email==Email && item.password==Password)
       
        if (temp.length>=1)
        {
              Swal.fire(
                'Login Done!',
                'Welcome to Instagram!',
                'success'
              )
        }
        else {
            
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                
              })
        }
        setEmail('')
        setPassword('')
        
    }
  return (
    <>
             <div>
                <input className="logipage__text" type="text" placeholder="Phone number, username, or email" onChange={hendalemail} value={Email} />
                <input className="logipage__text" type="password" placeholder="Password" onChange={hendalpassword} value={Password} />
                <button className="login__button" onClick={login} >Log In</button>
              </div>
    </>
  )
}
