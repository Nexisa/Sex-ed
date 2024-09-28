// import React from 'react'

import HeadComp from "../components/HeadComp"
import ReproductiveBody from "../components/ReproductiveBody"

const Reproductive = () => {
  const data = {
    title:'Reproductive Health and Protection',
    body:'Reproductive health is an essential part of growing up, and understanding how to protect yourself is crucial for your well-being. This blog will guide you through some basic concepts of reproductive health, including safe practices, the importance of sexual health, and an overview of contraception.'
  }
  return (
    <div className="max-w-screen container mx-auto p-8 mb-8 overflow-x-hidden bg-[#F7F2F2] 
    rounded-xl shadow-xl space-y-10">
        <HeadComp title={data.title} body={data.body} />
        <ReproductiveBody />
    </div>
  )
}

export default Reproductive