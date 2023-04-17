import React from 'react'

export default function ProfileImg(props) {
  return (
    <>

       <div className="profile-pic">
           <img src={props.src} />
        </div>

    </>
  )
}
