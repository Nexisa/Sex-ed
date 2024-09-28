// import React from 'react'
import anatomyHead from '../assets/sex-education-5@2x.png'

// eslint-disable-next-line react/prop-types
const HeadComp = ({title, body}) => {
  return (
    <div>
        <h1 className="text-[#FC1E00] text-3xl font-extrabold">
                {title}
        </h1>
        <div className='flex md:flex-row flex-col-reverse font-acme gap-6 mt-3 md:mt-0'>
            <div className='md:w-[65%] w-11/12 mx-auto flex justify-center items-center'>
                <p>
                    {body}
                </p>
            </div>
            <div className='md:w-[35%] w-11/12 mx-auto flex justify-center items-center'>
                <img src={anatomyHead} alt="homeHeader" className='h-64'/>
            </div>
        </div>
    </div>
  )
}

export default HeadComp