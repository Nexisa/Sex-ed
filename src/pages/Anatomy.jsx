// import React from 'react'

import AnatomyBody from "../components/AnatomyBody"
import AnatomyFooter from "../components/AnatomyFooter"
import HeadComp from "../components/HeadComp"

const Anatomy = () => {
  const data = {
    title: 'Anatomy and Reproduction',
    body: 'As you go through puberty, your body undergoes various physical changes, many of which are tied to your reproductive system. Understanding how your body works, especially the male and female reproductive systems, is key to making informed choices about your health and well-being. This guide covers the basics of both systems and the changes you can expect during adolescence.'
  }
  return (
    <div className="max-w-screen container mx-auto p-8 mb-8 overflow-x-hidden bg-[#F7F2F2] 
    rounded-xl shadow-xl space-y-10">
        <HeadComp title={data.title} body={data.body} />
        <AnatomyBody />
        <AnatomyFooter />
    </div>
  )
}

export default Anatomy