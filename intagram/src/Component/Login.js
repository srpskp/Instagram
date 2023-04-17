import React from 'react'
import '../Component/Login.css'
import inst_image from '../Component/home-phones.png'
import insta_logo from '../Component/logoinsta.png'
import appstore from '../Component/google_play.png'
import playstore from '../Component/microsoft.png'
import fb from '../Component/fb.png'
import ss1 from '../Component/ss1.png'
import Signin from './Signin'

export default function Login() {
  
  return (
    <>
      <div className="loginpage__main">
        <div className='left__side'>
          <img src={inst_image} alt='insta_img' width="460px" />
          <div className='animation' >
          </div>
          
        </div>
        <div>
          <div className="loginpage_rightcomponent">
            <img className="loginpage__logo__1" src={insta_logo} />
            <div className="loginPage__signin">

              {/* <div>
                <input className="logipage__text" type="text" placeholder="Phone number, username, or email" />
                <input className="logipage__text" type="password" placeholder="Password" />
                <button className="login__button" >Log In</button>
              </div> */}

              <Signin/>
             

              <div className="login__ordiv">
                <div className="login__dividor"></div>
                <div className="login__or">OR</div>
                <div className="login__dividor"></div>
              </div>

              <div className="login__fb">
                <img src={fb} width="15px" style={{ "marginRight": "5px" }} />
                <span style={{marginLeft:'1%'}}>Log in with Facebook</span>
              </div>
              <div className="login_forgt"> Forgot password?</div>
            </div>
          </div>

          <div className="loginpage__signupoption">
           
                <div className="loginPage__signup">
                  Don't have an account? <span  style={{  color: "#0395F6",fontWeight: 600 }}>Sign up</span>
                </div> 
               
           
          </div>

          <div className="loginPage__downloadSection">
            <div>
              Get the app.
            </div>
            <div className="loginPage__option">
              <img className="loginPage_dwimg" src={appstore} width="134px" />
              <img className="loginPage_dwimg" src={playstore} width="111px" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
