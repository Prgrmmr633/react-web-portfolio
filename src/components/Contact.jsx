import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[url(./assets/bg.gif)] bg-cover bg-center flex justify-center items-center p-4'>
        <form method='POST' action="//placeholder" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#fec815] text-white'>Contact</p>
                <p className='text-white py-4'>Submit the form below or shoot me an email at airesmacalino09@gmail.com</p>
            </div>
            <input className='bg-white p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-white' type="email" placeholder='Email' name='email' />
            <textarea className='bg-white p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-[#fec815] hover:border-white hover:text-black px-4 py-3 my-8 mx-auto flex items-center duration-300'>Let's Talk!</button>
        </form>
    </div>
  )
}

export default Contact