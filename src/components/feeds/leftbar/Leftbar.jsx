import React from 'react'
import './leftbar.css'
import {FaUserFriends} from 'react-icons/fa'
import { users } from '../../../Dummydata'
import CloseFriends from '../../../closefriends/CloseFriends'


const Leftbar = () => {
  return (
    <div className='leftbarContainer'>
    
    <div className="friends">
      <FaUserFriends/>
      <h3>Marketplace</h3>
    </div>

    <div className="friends">
      <FaUserFriends/>
      <h3>Marketplace</h3>
    </div>
    
    <div className="friends">
      <FaUserFriends/>
      <h3>Marketplace</h3>
    </div>

    <div className="friends">
      <FaUserFriends/>
      <h3>Marketplace</h3>
    </div>

    <div className="friends">
      <FaUserFriends/>
      <h3>Marketplace</h3>
    </div>

    <div className="friends">
      <FaUserFriends/>
      <h3>Marketplace</h3>
    </div>

    <div className='button'>
      <button>See More</button>
      <hr />
    </div>
    
    <div className='online'>
      {users.map((p)=> {
        <CloseFriends key={p.id} user={p}/>
      })}
    </div>

    </div>
  )
}

export default Leftbar