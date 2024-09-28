// import React from 'react'
import teamwise from '../assets/sex-education1-1@2x.png'
import headerImg from '../assets/sex-education-4-1@2x.png'

const Header = () => {
  return (
    <div className="max-w-screen container mx-auto p-4 mt-12 mb-8 overflow-x-hidden bg-[#F7F2F2] 
    rounded-xl shadow-xl">
        <div className='p-5'>
            <img src={teamwise} alt="teamwise" className='w-40 h-10'/>
        </div>
        <div className='flex flex-col-reverse md:flex-row w-11/12 mx-auto gap-8'>
            <div className='md:w-[40%] w-11/12 mx-auto flex items-center'>
                <h1 className='font-bold text-3xl text-center'>
                    Helping teens navigate puberty, relationships, and self-discovery with trusted information.
                </h1>
            </div>
            <div className='md:w-[60%] w-11/12 mx-auto'>
                <img src={headerImg} alt="header image" className='w-full md:h-60' />
            </div>
        </div>
    </div>
  )
}

export default Header