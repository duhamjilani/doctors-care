import React from 'react'
import './WhyUs.css'
import { BiSupport } from "react-icons/bi";
import { IoTimeOutline } from "react-icons/io5";
import { AiOutlineSafety } from "react-icons/ai";
import { useTranslation } from 'react-i18next';



const WhyUs = () => {
  const {t}=useTranslation();
  return (
    <div className='big-container'id='whyus' >  
      <h1>{t('WHY US')}</h1>
      <div className='boxes'>
        <div className='box'>
          <BiSupport className='icon' />
          <h2>{t('FAST SUPPORT')}</h2>
        </div>

        <div className='box'>
          <IoTimeOutline className='icon' />
          <h2>{t('SAVES TIME')}</h2>
        </div>


        <div className='box'>
          <AiOutlineSafety className='icon' />
          <h2>{t('CREDIBILITY')}</h2>
        </div>




      </div>
    </div>
  )
}

export default WhyUs
