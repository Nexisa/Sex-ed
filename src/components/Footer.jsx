// import React from 'react'
import footerImg from '../assets/sex-education1-1@2x.png'

const Footer = () => {
  return (
    <div className='mb-10 w-11/12 mx-auto'>
        <div className='relative'>
            <p className="font-inter text-white md:text-3xl footer">
                Always seek accurate information, respect your boundaries and others', and
                remember that asking questions is the key to understanding and making healthy choices.
            </p>
            <img src={footerImg} alt="" className='w-28 h-7 md:w-60 md:h-12 absolute right-2 bottom-[-5] md:bottom-[-2]'/>
        </div>
        <br />
        <br />
        <br />
        <p className='text-center md:text-xl font-semibold text-gray-700'>© Copyright Nexisa All Rights Reserved</p>
    </div>
  )
}

export default Footer