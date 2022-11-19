import React from 'react'

const UserReg = () => {
  return (
    <div className='user-reg'>
      <div className='user-reg-box'>
        <div className='user-reg-head'>
          <h1> Register Now !! </h1>
        </div>
        <div className='user-reg-inputs'>
          <div>
            <input 
              className='user-reg-inp' 
              type='text' 
              value={state.Fname}
              onChange={(e) =>setState({ ...state, Fname: e.target.value })}
              placeholder='First Name'/>

            <input 
              className='user-reg-inp' 
              type='text' 
              value={state.Lname}
              onChange={(e) =>setState({ ...state, Lname: e.target.value })}
              placeholder='Last Name'/>
          </div>

          <div>
            <input 
            className='user-reg-inp' 
            type='email' 
            value={state.email}
            onChange={(e) =>setState({ ...state, email: e.target.value })}
            placeholder='Email'/>

            <input 
            className='user-reg-inp' 
            type='number' 
            value={state.number}
            onChange={(e) =>setState({ ...state, number: e.target.value })}
            placeholder='Phone Number'/>
          </div>
          
          <div>
            <button 
              disabled={!walletAddress}
              onClick={onRegister} 
              className='user-reg-btn'>Register
            </button>

          </div>
          <p>By Clicking "Register", I agree to Udaan's Privacy Policy</p>
        </div>
      </div>
    </div>
  )
}

export default UserReg;