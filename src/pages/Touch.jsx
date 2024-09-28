// import React from 'react'

import HeadComp from "../components/HeadComp"
import TouchBody from "../components/TouchBody"

const Touch = () => {
  const data = {
    title: 'Good and Bad Touch',
    body: 'Consent and boundaries are crucial concepts for maintaining healthy relationships and interactions, whether they’re with friends, family, or romantic partners. Understanding and respecting these elements allows individuals to feel safe, respected, and valued.'
  }
  return (
    <div className="max-w-screen container mx-auto p-8 mb-8 overflow-x-hidden bg-[#F7F2F2] 
    rounded-xl shadow-xl space-y-10">
      <HeadComp title={data.title} body={data.body}/>
      <TouchBody />
    </div>
  )
}

export default Touch
