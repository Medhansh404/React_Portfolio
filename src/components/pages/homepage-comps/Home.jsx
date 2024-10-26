import React from 'react'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import { Link } from "react-scroll"
import MobileSocialLinks from './MobileSocialLinks';

const Home = () => {
    return (
      <section name="Home" className='relative w-full md:h-screen h-unset'>

        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 py-16 md:py-0 md:flex-row md:gap-8'>

          <div className='flex flex-col justify-center items-center h-[85%] md:h-full order-2 md:order-1 md:items-start'>
            
            <h1 className='text-4xl md:text-6xl font-bold text-white mb-2 mt-3 md:mt-0 md:mb-4'>I'm Medhansh</h1>
            <h2 className='rounded-md bg-primary-color/20 max-w-max px-6 inline text-xl md:text-3xl lg:text-4xl font-semibold text-white'>Web Developer | AI/ML Engineer</h2>
            <p className='text-gray-300 py-4 max-x-md text-justify'>Welcome to my portfolio! I’m a passionate developer with a strong interest in Python, web and software technologies, as well as AI and ML. Skilled in JavaScript, I'm excited to share my journey and projects with you!</p>

            <div className='hidden desktop:flex'>
              <Link to='About' smooth duration={500} className='group text-black font-semibold w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-t from-green-400 to-primary-color cursor-pointer mx-auto md:mx-0'>
                About me
                <span className='group-hover:rotate-90 duration-300'><MdOutlineKeyboardArrowRight size={25} className='ml-1' /></span>
              </Link>
            </div>

            <MobileSocialLinks />
          </div>
        </div>
      </section>
    );
}

export default Home
