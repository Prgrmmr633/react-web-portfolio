import React from 'react';
// import { HiArrowNarrowRight } from 'react-icons/hi';
import Pic from '../assets/logoanim.gif'
import UI from '../assets/ui.png'

const Home = () => {
  return (
    <div className='w-full h-full bg-[url(./assets/bg.gif)] bg-cover bg-center flex flex-col justify-center items-center'>
      <div name='home' className='flex flex-col lg:flex-row md:flex-col sm:flex-col justify-center pt-[11rem] lg:pt-[20rem]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-[5rem] flex flex-col justify-center h-full'>
        <img src={Pic} alt='Pic' style={{ width: '250px' }} className='sm:scale-110 md:scale-125'/>
      </div>
      <div className='max-w-[1500px] mx-auto px-5 flex flex-col justify-center h-full'>
        <p className='text-[white] font-bold text-2xl'>Hi, my name is</p>
        <h1 className='text-5xl sm:text-6xl md:text-7xl font-bold text-[#fec815] pt-5'>
          Aires Javan Macalino
        </h1>
        <h2 className='text-2xl sm:text-3xl md:text-4xl text-[white] pt-4'>
          I'm a <span className='text-[#fec815]'> <u>Full Stack Developer</u></span>
          <br></br>
          & <span className='text-[#fec815]'> <i>UI/UX Designer.</i></span>
        </h2>
        <p className='text-[white] max-w-[700px] pt-4'>
        with a passion for crafting seamless digital experiences. With expertise in both front-end and back-end technologies, I thrive on transforming innovative ideas into functional and visually compelling solutions.
        </p>
        {/* <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#fec815] hover:border-black hover:text-black duration-300'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div> */}
      </div>
      
    </div>
      <div className='pt-[10rem] lg:pt-[20rem]'>
        <img src={UI} alt='UI' style={{ width: '1920px' }} />
      </div>
    </div>
  );
};

export default Home;
