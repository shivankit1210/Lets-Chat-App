import React from 'react'

export const Navbar = () => {
  return (
    <div className='Navbar'>
      <span className='logo'>LET CHAT</span>
      <div className="user">
        <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        <span>shivankit</span>
        <button>Log out</button>
      </div>
    </div>
  )
}
