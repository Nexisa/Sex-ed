// import React from 'react'
import something from '../assets/something-1@2x.png'

const AnatomyFooter = () => {
  return (
    <div className='font-abhaya'>
        <h1 className="font-extrabold text-[#FC1E00] text-xl mb-5">
            Taking Care of Your Reproductive Health
        </h1>
        <div className='flex md:flex-row flex-col-reverse gap-6'>
            <div className="space-y-5 w-11/12 mx-auto md:w-[65%] flex justify-center items-center">
                <div className="space-y-3">
                    <p>As your reproductive system matures, it’s important to take care of your body. Here are some tips for maintaining good reproductive health:</p>
                    <ul className="list-disc w-11/12 mx-auto">
                        <li>Personal Hygiene: Regularly wash your genitals with water to keep the area clean. Girls should change their menstrual products (pads, tampons, or menstrual cups) regularly to prevent infections.</li>
                        <li>Regular Checkups: It’s a good idea to see a healthcare provider for regular checkups, especially if you have concerns about your reproductive health.</li>
                        <li>Safe Practices: If you choose to be sexually active, it’s important to understand the risks of sexually transmitted infections (STIs) and pregnancy. Using condoms and other forms of contraception can help protect you.</li>
                    </ul>
                    <p>Ask Questions: If you have any concerns about your body or reproductive health, don’t hesitate to ask a trusted adult or healthcare provider. No question is too small, and it’s important to get reliable information.</p>
                </div>
            </div>
            <div className='md:w-[35%] w-11/12 mx-auto flex justify-center items-center'>
                <img src={something} alt="something" />
            </div>
        </div>
    </div>
  )
}

export default AnatomyFooter