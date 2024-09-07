import React from 'react'
import './WhyUs.css'
import { BiSupport } from "react-icons/bi";
import { IoTimeOutline } from "react-icons/io5";
import { AiOutlineSafety } from "react-icons/ai";



const WhyUs = () => {
  return (
    <div className='big-container'id='whyus' >  
      <h1>WHY US</h1>
      <div className='boxes'>
        <div className='box'>
          <BiSupport className='icon' />
          <h2>FAST SUPPORT</h2>
        </div>

        <div className='box'>
          <IoTimeOutline className='icon' />
          <h2>SAVES TIME</h2>
        </div>


        <div className='box'>
          <AiOutlineSafety className='icon' />
          <h2>CREDIBILITY</h2>
        </div>




      </div>
    </div>
  )
}

export default WhyUs
