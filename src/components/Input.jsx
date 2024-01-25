import React from 'react'
import img from "../images/img.png"
import attach from "../images/attach.png"

export const Input = () => {
  return (
    <div className='input'>
      <input type="text " placeholder='Type message......' />
      <div className="send">
        <img src={img} alt="" srcset="" />
        <input type="file" id="file" style={{ display: "none" }} />
        <label htmlFor="file">
          <img src={attach} alt="" />
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}
