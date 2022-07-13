import React from 'react'
import './Topbar.css'
import {BsFillPersonFill} from 'react-icons/bs'
import {AiOutlineSearch} from 'react-icons/ai'
import {IoMdNotifications} from 'react-icons/io'
import {AiFillMessage} from 'react-icons/ai'

const Topbar = () => {
  return (
    <div className='topbarContainer'>
      <div className='topbarleft'>
        <h1>Facebook</h1>
      </div>
      <div className='topbarCenter'>
        <AiOutlineSearch  className='search'/>
        <input type='text' placeholder='Enter Name' />
      </div>

      <div className='topbarRight'>
        <div className='timeline'>
            <p>Timeline</p>
            <p>Homepage</p>
        </div>

       <div className="linksIcon">
       <div className='links'>
        <BsFillPersonFill className='notify'/>
        <span>1</span>
        </div>

        <div className='links'>
        <AiFillMessage className='notify'/>
        <span>1</span>
        </div>

        <div className='links'>
        <IoMdNotifications className='notify'/>
        <span>1</span>
        </div>
       </div>

       <div className="profile">
        <img src='/assets/img/profile.jpg' alt='Profile'/>
       </div>
      </div>
    </div>
  )
}

export default Topbar
