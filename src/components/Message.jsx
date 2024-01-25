import React from 'react'
import myprofile from "../images/myprofile.jpg";
export const Message = () => {
  return (
    <div className='message owner'>
      <div className="messageinfo">
        <img src={myprofile} alt="" />
        <span>Just now</span>
        
      </div>
      <div className="messageContent">
          <p>Hellow</p>
          <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />

        </div>
    </div >
  )
}
