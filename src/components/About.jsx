import React from 'react'
import profileImage from '../assets/Image.jpg'
function About() {
    return (
        <section id="about" className='text-white font-sans mt-16 md:mt-24 lg:mt-32 bg-slate-900'>
            <div className='flex flex-col-reverse sm:flex-row justify-between items-center'>
                <div className='sm:w-[50%] ml-14 text-8xl justify-center items-center'>
                    <h1 className='text-8xl'>Hi, I am</h1>
                    <h2 className='text-purple-500 mt-4 flex font-semibold '>Dhruv Kumar</h2>
                    <p className='text-5xl mt-4 flex '>Full-Stack Developer </p>
                    <a href="https://drive.google.com/file/d/1RYf8tz63sQMQfLdmtkzdTdIYQ6Y3T9jw/view?usp=sharing" target='_blank'>
                        <div className='text-white w-40 h-10 items-center text-2xl border-2 border-purple-500 flex justify-center mt-6 hover:bg-purple-500 duration-200 shadow-sm shadow-purple-400'>My Resume</div>
                    </a>
                </div>
                <div className=' mt-2 flex justify-center sm:w-[50%]'>
                    <img src={profileImage} alt='Dhruv Kumar' className='w-[60%] mr-20 h-full rounded-full border-2 border-purple-500 object-cover '></img>
                </div>
            </div>
        </section>
    )
}

export default About
