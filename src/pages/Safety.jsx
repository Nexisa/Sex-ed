// import React from 'react'
import HeadComp from '../components/HeadComp'
import SafetyBody from '../components/SafetyBody'

const Safety = () => {
  const data = {
    title: 'Safety and Online Behavior',
    body:'In today’s world, the internet plays a huge role in the lives of teens, offering a platform for learning, socializing, and entertainment. While the internet is a great resource, it also comes with risks. It’s important to understand how to navigate online spaces safely, protect your personal information, and recognize inappropriate content or behaviour.'
  }
  return (
    <div className="max-w-screen container mx-auto p-8 mb-8 overflow-x-hidden bg-[#F7F2F2] 
    rounded-xl shadow-xl space-y-10">
        <HeadComp title={data.title} body={data.body} />
        <SafetyBody />
    </div>
  )
}

export default Safety