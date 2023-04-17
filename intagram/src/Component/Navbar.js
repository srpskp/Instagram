import React from 'react'
import insta_logo from '../Component/logoinsta.png'
import home from '../Component/home.png'
import messenger from '../Component/messenger.png'
import create from '../Component/create.png'
import explore from '../Component/explore.png'
import notifications from '../Component/notifications.png'
import reels from '../Component/reels.webp'
import '../Component/Navbar.css'

export default function Navbar() {
  return (
       <>
       <nav className="navbar">
        <div className="nav-wrapper">
        <img className="loginpage__logo" src={insta_logo} />
            <input type="text" className="search-box" placeholder="search"/>
            <div className="nav-items">
                <img src={home} className="home" alt=""/>
                <img src={explore} className="explore" alt=""/>
                <img src={reels} className="messenger" alt=""/>
                <img src={messenger} className="messenger" alt=""/>
                <img src={notifications} className="notifications" alt=""/>
                <img data-bs-toggle="modal" data-bs-target="#post-add-modal" src={create} className="create" alt=""/>
                <div className="icon user-profile">

                </div>
            </div>
        </div>
    </nav>
       </> 
  )
}
