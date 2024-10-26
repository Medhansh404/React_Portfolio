import React from 'react'
import { Link } from 'react-router-dom'

import MindConnect from '/images/projectsImages/MindConnect.jpg'
import CrazyBus from '/images/projectsImages/acciovocabulary.jpg'
import CyberGuard from '/images/projectsImages/CyberGuard.jpg'
import MedicalUnit from '/images/projectsImages/behance-6712d1fd9e0ce.jpg'
import FloodFill from '/images/projectsImages/OIP.jpg'
import WebTools from '/images/projectsImages/WebTools.jpg'
import YT_Scribe from '/images/projectsImages/YTscribe.jpg'
import DeepLearning from '/images/projectsImages/DeepLearning.jpg'
const AllProjects = () => {

    const projects = [
        {
            id: 1,
            src:  MindConnect,
            code: 'https://github.com/diegotellezc/EasyShop'
        },
        {
            id: 2,
            src: CrazyBus,
            code: 'https://github.com/diegotellezc/landing-accio-vocabulary'
        },
        {
            
            id: 3,
            src: CyberGuard,
            code: 'https://github.com/Medhansh404/RP_Hacks'
        },
        {
            id: 4,
            src: YT_Scribe,
            code: 'https://github.com/Medhansh404/YT-Scribe'
        },

        {
            id: 5,
            src: MedicalUnit,
            code: 'https://github.com/Medhansh404/Design_Patterns'
        },
        {
            id: 6,
            src: WebTools,
            code: 'https://github.com/Medhansh404/dev_Mini-Projects'
        },
        {
            id: 7,
            src: FloodFill,
            code: 'https://github.com/Medhansh404/Flood_fill'
        },
        {
            id: 8,
            src: DeepLearning,
            code: 'https://github.com/Medhansh404/Flood_fill'
        }


    ]



    const handleClickCode = (codeUrl) => {
        const newWindow = window.open(codeUrl, '_blank');
        newWindow.opener = null;
        newWindow.rel = 'noopener noreferrer';
    }
    

    return (
        <section name="Projects" className='relative w-full text-white md:min-h-screen mt-24 mb-10'>
        
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <h2 className='text-4xl font-bold inline border-b-4 border-primary-color/40 sm:text-5xl'>Projects</h2>
                    <p className='py-6'>Check out my best web applications here.</p>
                </div>

                <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-8'>
                    {
                        projects.map(({ id, src,  code }) => (
                                <div key={id} className='shadow-md shadow-gray-600 rounded-lg max-w-md mx-auto'>
                                    <img loading='lazy' src={src} alt="project card" className='rounded-md duration-200 hover:scale-105' />
                                    <div className='flex items-center justify-center'>
                                        <button onClick={() => handleClickCode(code)} className='w-1/2 px-6 py-2 m-4 duration-200 hover:scale-125'>Code</button>
                                    </div>
                                </div>
                        ))
                    }
                </div>
            </div>

            <div className='flex justify-center'>
                <Link to='/' className='text-black font-semibold text-[16px] w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-t from-green-400 to-primary-color cursor-pointer mx-auto md:mx-0 self-end mt-8 hover:scale-110 duration-300'>
                    <span className=''><i className='bx bx-home-heart mr-2'></i></span>
                    Go back
                </Link>
            </div>
        </section>
    )
}

export default AllProjects
