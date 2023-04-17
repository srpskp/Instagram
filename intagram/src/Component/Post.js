import React from 'react'
import '../Component/Story.css'
import profile from '../Component/peofile.jpg'
import notifications from '../Component/notifications.png'
import send from '../Component/send.png'
import comment from '../Component/comment.png'
import save from '../Component/save.png'
import smile from '../Component/smile.png'
import ss from '../Component/Screenshot_15.png'
import Name from './Name'
import ProfileImg from './ProfileImg'

export default function Post() {
  return (
    <>
     <div className="post">
            <div className="info">
                <div className="user">
                    <ProfileImg src={profile} />
                    <Name name='ovito_uzumaki'/>
                </div>
                <div className="dropdown">
                        <i className="fas fa-ellipsis-h">...</i>
                   
                  </div>
            </div>
            <img src={ss} className="post-image" alt=""/>
            <div className="post-content">
                <div className="reaction-wrapper">
                    <img src={notifications} className="icon" alt=""/>
                    <img src={comment} className="icon" alt=""/>
                    <img src={send} className="icon" alt=""/>
                    <img src={save} className="save icon" alt=""/>
                </div>
                <p className="likes">89 likes</p>
                <p className="description">Hey Its ovito_uzumaki</p>
                <p className="post-time">April 15</p>
            </div>
            <div className="comment-wrapper">
                <img src={smile} className="icon" alt=""/>
                <input type="text" class="comment-box" placeholder="Add a comment" />
                <button className="comment-btn">Post</button>
            </div>
        </div>
    </>
  )
}
