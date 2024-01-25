import React from 'react'
import add from "../images/add.png";
import cam from "../images/cam.png";
import more from "../images/more.png";
import { Messages } from './Messages'
import { Input } from './Input'

export const Chat = () => {
  return (
    <div className='chat'>
      <div className="chatinfo">
        <span>shivankit</span>
        <div className="chaticons">
          <img src={cam} alt="" />
          <img src={add} alt="" />
          <img src={more} alt="" />
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}
