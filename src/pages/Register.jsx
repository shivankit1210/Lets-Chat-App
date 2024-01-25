import React from 'react'

export const Register = () => {
    return (
        <div className='formContainer'>
            <div className='formWrapper'>
                <span className='logo'>LET CHAT</span>
                <span className='title'> Register</span>
                <form action="">
                    <input type="text" placeholder='Display name' />
                    <input type="email" placeholder='email' />
                    <input type="password" placeholder='password' />
                    <input  type="file" placeholder='add avatar' id='file' />
                    <label htmlFor="file">Upload your Avatar here</label>
                    <button>Sign up</button>
                </form>
                <p>You do have an account? Login</p>
            </div>
        </div>

    )
}
