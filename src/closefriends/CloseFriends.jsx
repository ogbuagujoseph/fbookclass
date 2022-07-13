import React from 'react'

const CloseFriends = ({user}) => {
  return (
    <div className='online'>
      <img src={user.image} alt=""/>
      <h3>{user.name}</h3>
    </div>
  )
}

export default CloseFriends
