import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#353535]  text-white'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#fec815]'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1200px] w-full grid sm:grid-cols-2 gap-8 px-4 '>
            <div className='sm:text-right text-5xl font-bold'>
              <p>Hi there! I'm<br></br><span className='text-[#fec815]'>Aires Javan Macalino</span>, delighted to connect with you.</p>
            </div>
            <div className='text-xl'>
              <p>Feel free to explore my web portfolio. I channel my passion into crafting exceptional software solutions that elevate the daily experiences of individuals, small businesses, and large enterprises alike. Imagine having a dedicated software expert just a click away—what transformative possibilities would you explore?</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
