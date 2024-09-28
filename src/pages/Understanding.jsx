// import React from 'react'

import HeadComp from "../components/HeadComp"
import understanding from '../assets/image-1@2x.png'
import UnderstandingBody from "../components/UnderstandingBody"

const Understanding = () => {
  const data = {
    title: 'Understanding Puberty',
    body: 'Puberty is a crucial stage of life, marking the transition from childhood to adulthood. It’s a period filled with both physical and emotional changes, and while it may feel confusing or even overwhelming at times, it’s completely normal. Understanding what’s happening to your body and mind during this time can help you better navigate these changes and feel more comfortable with them. In this guide, we’ll break down what puberty is, when it happens, and what changes you can expect as you grow.'
  }
  return (
    <div className="max-w-screen container mx-auto p-8 mb-8 overflow-x-hidden bg-[#F7F2F2] 
    rounded-xl shadow-xl space-y-10">
      <HeadComp title={data.title} body={data.body}/>
      <div className="w-11/12 md:w-7/12 mx-auto">
        <img src={understanding} alt="understanding" className="w-full h-72 md:h-96 rounded-xl"/>
      </div>
      <UnderstandingBody />
    </div>
  )
}

export default Understanding