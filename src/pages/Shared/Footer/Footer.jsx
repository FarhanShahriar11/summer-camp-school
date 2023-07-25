import React from 'react';


import imgLogo from '../../../assets/banner/logo.png'
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPhone  } from 'react-icons/fa';
import { HiMail  } from 'react-icons/hi';
import { MdOutlineArrowForwardIos, MdLocationOn, MdWatchLater  } from 'react-icons/md';


const Footer = () => {
    return (
        <div className="bannerImg bg-gray-300">
            <div className='py-20 w-10/12 mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center md:text-left'>
                    <div className='text-black space-y-7'>
                        <div className='flex justify-center md:justify-start'>
                            <img className='w-40' src={imgLogo} alt="" />
                        </div>

                        <p>World class academy coaches and player development team. World class / elite competition. World class match, training and learning experiences.</p>

                        <div className='flex justify-center md:justify-start space-x-4'>
                            <div className='bg-rose-900 w-8 h-8 rounded-full text-white flex justify-center items-center hover:-translate-y-2 duration-200 cursor-pointer'>
                                <FaFacebookF></FaFacebookF>
                            </div>

                            <div className='bg-rose-900 w-8 h-8 rounded-full text-white flex justify-center items-center hover:-translate-y-2 duration-200 cursor-pointer'>
                                <FaTwitter></FaTwitter>
                            </div>

                            <div className='bg-rose-900 w-8 h-8 rounded-full text-white flex justify-center items-center hover:-translate-y-2 duration-200 cursor-pointer'>
                                <FaInstagram></FaInstagram>
                            </div>

                            <div className='bg-rose-900 w-8 h-8 rounded-full text-white flex justify-center items-center hover:-translate-y-2 duration-200 cursor-pointer'>
                                <FaYoutube></FaYoutube>
                            </div>
                        </div>
                    </div>

                    <div className="ml-0 lg:ml-12">
                        <h2 className="text-2xl font-bold text-lime-400 mt-0 md:mt-3">Help</h2>
                        
                        <div className='flex justify-center md:justify-start'>
                            <div className="flex flex-col space-y-2 mt-5">
                                <a className="space-x-2 flex items-center">
                                    <MdOutlineArrowForwardIos className='text-lime-500'></MdOutlineArrowForwardIos> 
                                    <span className='cursor-pointer text-rose-900 hover:text-lime-500 duration-200 hover:translate-x-3'>Services</span>
                                </a>

                                <a className="space-x-2 flex items-center">
                                    <MdOutlineArrowForwardIos className='text-lime-500'></MdOutlineArrowForwardIos> 
                                    <span className='cursor-pointer text-rose-900 hover:text-lime-500 duration-200 hover:translate-x-3'>Help</span>
                                </a>

                                <a className="space-x-2 flex items-center">
                                    <MdOutlineArrowForwardIos className='text-lime-500'></MdOutlineArrowForwardIos> 
                                    <span className='cursor-pointer text-rose-900 hover:text-lime-500 duration-200 hover:translate-x-3'>Information</span>
                                </a>

                                <a className="space-x-2 flex items-center">
                                    <MdOutlineArrowForwardIos className='text-lime-500'></MdOutlineArrowForwardIos> 
                                    <span className='cursor-pointer text-rose-900 hover:text-lime-500 duration-200 hover:translate-x-3'>Team</span>
                                </a>

                                <a className="space-x-2 flex items-center">
                                    <MdOutlineArrowForwardIos className='text-lime-500'></MdOutlineArrowForwardIos> 
                                    <span className='cursor-pointer text-rose-900 hover:text-lime-500 duration-200 hover:translate-x-3'>Advertisement</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="ml-0">
                        <h2 className="text-2xl font-bold text-lime-400 mt-0 md:mt-3">Information</h2>
                            
                        <div className='flex justify-center md:justify-start'>
                        <div className="flex flex-col space-y-2 mt-5">
                            <a className="space-x-2 flex items-center">
                                <MdOutlineArrowForwardIos className='text-lime-500'></MdOutlineArrowForwardIos> 
                                <span className='cursor-pointer text-rose-900 hover:text-lime-500 duration-200 hover:translate-x-3'>About us</span>
                            </a>

                            <a className="space-x-2 flex items-center">
                                <MdOutlineArrowForwardIos className='text-lime-500'></MdOutlineArrowForwardIos> 
                                <span className='cursor-pointer text-rose-900 hover:text-lime-500 duration-200 hover:translate-x-3'>Contact Us</span>
                            </a>

                            <a className="space-x-2 flex items-center">
                                <MdOutlineArrowForwardIos className='text-lime-500'></MdOutlineArrowForwardIos> 
                                <span className='cursor-pointer text-rose-900 hover:text-lime-500 duration-200 hover:translate-x-3'>Privacy Policy</span>
                            </a>

                            <a className="space-x-2 flex items-center">
                                <MdOutlineArrowForwardIos className='text-lime-500'></MdOutlineArrowForwardIos> 
                                <span className='cursor-pointer text-rose-900 hover:text-lime-500 duration-200 hover:translate-x-3'>Shipping Details</span>
                            </a>

                            <a className="space-x-2 flex items-center">
                                <MdOutlineArrowForwardIos className='text-lime-500'></MdOutlineArrowForwardIos> 
                                <span className='cursor-pointer text-rose-900 hover:text-lime-500 duration-200 hover:translate-x-3'>Refunds and Returns</span>
                            </a>
                        </div>
                        </div>
                    </div>

                    <div className="ml-0">
                        <h2 className="text-2xl font-bold text-lime-400 mt-0 md:mt-3">Contact Us:</h2>
                        <div className="flex flex-col space-y-3 mt-5">
                            <div className='flex items-center justify-center md:justify-start space-x-2'>
                                <MdWatchLater className='text-xl text-lime-500'></MdWatchLater>
                                <p className='text-rose-900'>9 AM - 5 PM, <p>Monday - Saturday</p></p>
                            </div>

                            <div className='flex items-center justify-center md:justify-start space-x-2'>
                                <MdLocationOn className='text-xl text-lime-500'></MdLocationOn>
                                <p className='text-rose-900'>1203, Town Center Drive FL 33458</p>
                            </div>

                            <div className='flex items-center justify-center md:justify-start space-x-2'>
                                <FaPhone className=' text-lime-500'></FaPhone>
                                <p className='text-rose-900'>+841 123 *** ***</p>
                            </div>

                            <div className='flex items-center justify-center md:justify-start space-x-2'>
                                <HiMail className='text-lg text-lime-500'></HiMail>
                                <p className='text-rose-900'>info@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className='border-1 border-gray-600 mt-14 mb-10' />

                <div className='text-gray-500 text-sm flex flex-col md:flex-row text-center justify-between'>
                    <div>
                        <p><span className='font-bold text-white'>Fit<span className='text-lime-500'>Zone</span></span> School & Sports Club by <span className='font-bold italic'>Farhan</span></p>
                    </div>

                    <div>
                        <p>Copyright &copy; 2023, All Rights Reserved</p>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Footer;