import React from 'react';
import AboutImage from '../assets/maiHoo.jpg';

function About() {
    return (
        <div className='bg-black text-white py-20' id='about'>
            <div className='container mx-auto px-8 md:py-16 lg:px-24'>
                <h2 className='text-4xl font-bold text-center mb-12'>About Me</h2>
                <div className='flex flex-col md:flex-row items-center md:space-x-12'>
                    <img src={AboutImage} alt=""
                        className='w-72 h-80 rounded object-cover mb-8 md:mb-0' />
                    <div className='flex-1'>
                        <p className='text-1g mb-8'>I'm a passionate student of Mathematics and Computing driven by the thrill of coding and the endless possibilities of web development. With a keen eye for problem-solving and a love for elegant solutions. I immerse myself in the world of algorithms and software engineering.</p>
                        <div className='space-y-4'>
                            <div className='flex items-center'>
                                <label htmlFor="htmlandcss" className='w-2/12'>HTML & CSS</label>
                                <div className='grow bg-gray-800 rounded-full h-2.5'>
                                    <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-trasnform duration-300 hover:scale-105 w-10/12'>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center'>
                                <label htmlFor="htmlandcss" className='w-2/12'>Java Script</label>
                                <div className='grow bg-gray-800 rounded-full h-2.5'>
                                    <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-trasnform duration-300 hover:scale-105 w-9/12'>

                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center'>
                                <label htmlFor="htmlandcss" className='w-2/12'>React JS</label>
                                <div className='grow bg-gray-800 rounded-full h-2.5'>
                                    <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-trasnform duration-300 hover:scale-105 w-5/12'>

                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center'>
                                <label htmlFor="htmlandcss" className='w-2/12'>C++</label>
                                <div className='grow bg-gray-800 rounded-full h-2.5'>
                                    <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-trasnform duration-300 hover:scale-105 w-10/12'>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center'>
                                <label htmlFor="htmlandcss" className='w-2/12'>C</label>
                                <div className='grow bg-gray-800 rounded-full h-2.5'>
                                    <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-trasnform duration-300 hover:scale-105 w-7/12'>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center'>
                                <label htmlFor="htmlandcss" className='w-2/12'>Competitive Programming</label>
                                <div className='grow bg-gray-800 rounded-full h-2.5'>
                                    <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-trasnform duration-300 hover:scale-105 w-4/12'>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center'>
                                <label htmlFor="htmlandcss" className='w-2/12'>Content Writing</label>
                                <div className='grow bg-gray-800 rounded-full h-2.5'>
                                    <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-trasnform duration-300 hover:scale-105 w-11/12'>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About