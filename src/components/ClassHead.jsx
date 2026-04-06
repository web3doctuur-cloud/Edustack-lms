import React from 'react'

const ClassHead = () => {
  return (
    <div className='bg-gray-200 p-10 justify-center'>
        <div className='flex flex-col p-5  md:p-20  items-center justify-center'>
        <h1 className='text-black text-3xl md:text-4xl'>Welcome to <span className='font-bold text-orange-500'>Class Room</span></h1>
        <p className='italic text-align text-sm  md:p-10 md:text-lg text-black'>
              There is nothing serious about this website.Contact the developer for future Collaboration.
              check the <span><a href='#contact' className='underline font-bold text-green-700'>Contact</a></span> we offer that makes us stands out,we ensure premium--satisfaction</p>
      </div>
    </div>
  )
}

export default ClassHead