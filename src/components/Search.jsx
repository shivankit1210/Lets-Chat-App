import React from 'react'

export const Search = () => {
  return (
    <div className='search'>
      <div className="searchform">
        <input type="text" placeholder='Find a user' />
      </div>
      <div className="userchat">
        <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        <div className="userchatinfo">
          <span>shivankit </span>
        </div>
      </div>
    </div>
  )
}
