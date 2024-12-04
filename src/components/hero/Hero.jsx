import React from 'react'
import { BsArrowRight } from "react-icons/bs";
import rasm from "../../assets/Header Image.png"
import rasm2 from "../../assets/Logo (1).png"
import rasm3 from "../../assets/Logo (2).png"
import rasm4 from "../../assets/Logo (3).png"
import rasm5 from "../../assets/Logo (4).png"
import rasm6 from "../../assets/Logo (5).png"

import image1 from "../../assets/Image 1.png"
import image2 from "../../assets/Image 2.png"
import image3 from "../../assets/Image 3.png"

import group1 from "../../assets/Group 1749.png"
import group2 from "../../assets/Group 1755.png"
import group3 from "../../assets/Group 1855.png"

import icon1 from "../../assets/Icon Div.png"
import icon2 from "../../assets/Icon Div (1).png"
import icon3 from "../../assets/Icon Div (2).png"
import icon4 from "../../assets/Icon Div (3).png"
import icon5 from "../../assets/Icon Div (4).png"
import icon6 from "../../assets/Icon Div (5).png"

import fon1 from "../../assets/Image 1 (1).png"
import fon2 from "../../assets/Image 2 (1).png"
import fon3 from "../../assets/Image 3 (1).png"
import fon4 from "../../assets/Logo (6).png"

import image4 from "../../assets/Image (8).png"
import image5 from "../../assets/Image (9).png"





const Hero = () => {
  return (
     <div>
        <div className='bg-blue-950 text-white'>
            <div className='container'>
                <div className="flex items-center justify-between pt-14">
                    <div className='w-[600px] flex flex-wrap gap-9'>
                        <div className='w-10 h-10 bg-slate-700'></div>
                        <h1 className='text-[63px] leading-tight'>Transform Your Idea Into Reality with Finsweet</h1>
                        <p className='text-[18px]'>The entire Finsweet team knows what's good with Webflow and you can too with 1 week and a good attitude.</p>
                        <button type="button" class="text-white flex items-center gap-2 text-[17px] bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium px-12 py-5 text-center me-2 mb-2">Request Quote <BsArrowRight/></button>
                    </div>
                    <div className="w-[563px] h-[632px]">
                        <img className='h-full' src={rasm} alt="" />
                    </div>
                </div>
                <div className="flex flex-wrap justify-between py-6">
                    <div className='flex flex-wrap flex-col justify-center w-[20%]'>
                        <p>Our Clients</p>
                        <h2 className='text-[18px]'>We've Worked with</h2>
                    </div>
                    <div className='flex flex-wrap justify-between w-[80%]'>
                        <div className="">
                            <img className='h-full' src={rasm2} alt="" /> 
                        </div>
                        <div className="">
                            <img className='h-full' src={rasm3} alt="" />  
                        </div>
                        <div className="">
                            <img className='h-full' src={rasm4} alt="" />  
                        </div>
                        <div className="">
                            <img className='h-full' src={rasm5} alt="" />  
                        </div>
                        <div className="">
                            <img className='h-full' src={rasm6} alt="" /> 
                        </div>
                    </div>
                </div>
            </div> 
        </div>
        <div className='bg-white text-black py-20'>
            <div className='container flex flex-wrap gap-14'>
                <div className='flex flex-wrap justify-between'>
                    <div className='w-[48%]'>
                        <p>ABOUT US</p>
                        <h2 className='text-[50px] leading-tight font-bold'>The company leads entire webdesign process from concept to delivery.</h2>
                    </div>
                    <div className='w-[48%]'>
                        <h2 className='text-[38px] font-bold py-6'>The Era Of Technology.</h2>
                        <p className='text-[18px] tracking-widest'>Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. </p>
                    </div>
                </div>
                <div className='grid grid-cols-3 gap-3'>
                    <img className='h-[446px]' src={image1} alt="" />
                    <img className='h-[446px]' src={image2} alt="" />
                    <img className='h-[446px]' src={image3} alt="" />
                </div>
                <div className='flex  flex-wrap items-center justify-between w-full'>
                    <div className='flex flex-wrap gap-20'>
                         <div>
                            <h2 className='text-[25px] font-bold'>1560+</h2>
                            <img className='py-2' src="src/assets/Group 1710.png" alt="" />
                            <p>Project Delivered</p>
                         </div>
                         <div>
                            <h2 className='text-[25px] font-bold'>100+</h2>
                            <img className='py-2' src="src/assets/Group 1710.png" alt="" />
                            <p>Professional</p>
                         </div>
                         <div>
                            <h2 className='text-[25px] font-bold'>950+</h2>
                            <img className='py-2' src="src/assets/Group 1710.png" alt="" />
                            <p>Happy Client</p>
                         </div>
                         <div>
                            <h2 className='text-[25px] font-bold'>10yrs</h2>
                            <img className='py-2' src="src/assets/Group 1710.png" alt="" />
                            <p>Experience</p>
                         </div>
                    </div>
                    <div>
                        <a className='flex items-center gap-4 text-red-700 text-[18px]' href="#">Read about us <BsArrowRight/></a>
                    </div>
                </div>
            </div>
        </div>
        <div className='bg-slate-100 py-24'>
            <div className='container flex flex-wrap justify-between items-center'>
                <div className='w-[50%]'>
                    <p>OUR EXPERTISE</p>
                    <h2 className='text-[48px] leading-tight font-bold py-6'>We want to get local identification in every corner of the world in this era of global citizenship</h2>
                    <p className='text-[18px] text-slate-600'>Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. </p>
                </div>
                <div className='w-[44%] flex flex-wrap gap-8'>
                    <div className='bg-white p-8 flex flex-wrap items-start gap-4 '>
                        <img className='' src="src/assets/Group 1749.png" alt="" />
                        <div className='w-[80%]'>
                            <h2 className='font-bold'>On Time Delivery</h2>
                            <p>Through True Rich Attended does no end it his mother since real had half every him.</p>
                        </div>
                    </div>
                    <div className='bg-white p-8 flex flex-wrap items-start gap-4 '>
                        <img className='' src="src/assets/Group 1755.png" alt="" />
                        <div className='w-[80%]'>
                            <h2 className='font-bold'>On Time Delivery</h2>
                            <p>Through True Rich Attended does no end it his mother since real had half every him.</p>
                        </div>
                    </div>
                    <div className='bg-white p-8 flex flex-wrap items-start gap-4 '>
                        <img className='' src="src/assets/Group 1855.png" alt="" />
                        <div className='w-[80%]'>
                            <h2 className='font-bold'>On Time Delivery</h2>
                            <p>Through True Rich Attended does no end it his mother since real had half every him.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='bg-orange-100 py-20'>
            <div className='container flex flex-wrap gap-16'>
                <div className='w-[60%] flex flex-wrap gap-6'>
                    <p>OUR SERVICES</p>
                    <p className='text-[48px] leading-tight font-bold'>We build software solutions that solve client's business challenges</p>
                    <button type="button" class="text-white flex items-center gap-2 text-[17px] bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium px-12 py-5 text-center me-2 mb-2">Request Quote <BsArrowRight/></button>
                </div>
                <div className='grid grid-cols-3 gap-6'>
                    <div className='bg-white p-10 flex flex-wrap flex-col gap-6'>
                        <img className='w-14' src={group1} alt="" />
                        <div>
                            <p className='text-[21px] font-bold'>Technical support</p>
                            <p className='text-[17px]'>We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it comes to world-class service</p>
                        </div>
                        <a className='flex items-center gap-4 text-red-700 text-[18px]' href="#">Read about us <BsArrowRight/></a>
                    </div>
                    <div className='bg-white p-10 flex flex-wrap flex-col gap-6'>
                        <img className='w-14' src={group2} alt="" />
                        <div>
                            <p className='text-[21px] font-bold'>Technical support</p>
                            <p className='text-[17px]'>We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it comes to world-class service</p>
                        </div>
                        <a className='flex items-center gap-4 text-red-700 text-[18px]' href="#">Read about us <BsArrowRight/></a>
                    </div>
                    <div className='bg-white p-10 flex flex-wrap flex-col gap-6'>
                        <img className='w-14' src={group3} alt="" />
                        <div>
                            <p className='text-[21px] font-bold'>Technical support</p>
                            <p className='text-[17px]'>We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it comes to world-class service</p>
                        </div>
                        <a className='flex items-center gap-4 text-red-700 text-[18px]' href="#">Read about us <BsArrowRight/></a>
                    </div>
                </div>
            </div>
             
        </div>
        <div className='bg-white py-20'>
            <div className='container flex flex-wrap gap-20'>
                <div className='w-[64%] flex flex-wrap gap-7'>
                    <p>OUR PROCESS</p>
                    <h2 className='text-[50px] leading-tight font-bold'>The process we are working With Our client Worldwide</h2>
                    <p className='text-[18px] text-slate-500'>Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable.</p>

                </div>
                <div className='grid grid-cols-3 gap-10'>
                    <div className='border flex flex-wrap gap-6 items-start p-8'>
                        <img src={icon1} alt="" />
                        <div className='w-[70%]'>
                            <p className='font-bold'>Discover</p>
                            <p>We aim to attain the greatest satisfaction for our clients and be one of the prominent.</p>
                        </div>
                    </div>
                    <div className='border flex flex-wrap gap-6 items-start p-8'>
                        <img src={icon2} alt="" />
                        <div className='w-[70%]'>
                            <p className='font-bold'>Discover</p>
                            <p>We aim to attain the greatest satisfaction for our clients and be one of the prominent.</p>
                        </div>
                    </div>
                    <div className='border flex flex-wrap gap-6 items-start p-8'>
                        <img src={icon3} alt="" />
                        <div className='w-[70%]'>
                            <p className='font-bold'>Discover</p>
                            <p>We aim to attain the greatest satisfaction for our clients and be one of the prominent.</p>
                        </div>
                    </div>
                    <div className='border flex flex-wrap gap-6 items-start p-8'>
                        <img src={icon4} alt="" />
                        <div className='w-[70%]'>
                            <p className='font-bold'>Discover</p>
                            <p>We aim to attain the greatest satisfaction for our clients and be one of the prominent.</p>
                        </div>
                    </div>
                    <div className='border flex flex-wrap gap-6 items-start p-8'>
                        <img src={icon5} alt="" />
                        <div className='w-[70%]'>
                            <p className='font-bold'>Discover</p>
                            <p>We aim to attain the greatest satisfaction for our clients and be one of the prominent.</p>
                        </div>
                    </div>
                    <div className='border flex flex-wrap gap-6 items-start p-8'>
                        <img src={icon6} alt="" />
                        <div className='w-[70%]'>
                            <p className='font-bold'>Discover</p>
                            <p>We aim to attain the greatest satisfaction for our clients and be one of the prominent.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='bg-fuchsia-50 py-24'>
            <div className='container flex flex-wrap justify-between'>
                <div className='w-[46%] flex flex-wrap flex-col gap-5'>
                    <div className='w-8 h-8 bg-blue-300'></div>
                    <p className='text-[48px] leading-tight font-bold'>Our customers love what we do</p>
                    <p className='text-[18px] font-bold'>Transform your idea into reality with finsweet</p>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    <div className='flex flex-wrap gap-4'>
                        <img src={fon1} alt="" />
                        <img src={fon2} alt="" />
                        <img src={fon3} alt="" />
                    </div>
                    <div>
                        <p className='font-bold'>30+ Customer Reviews</p>
                    </div>
                </div>
                <div className='w-[52%] bg-white p-10 flex flex-wrap gap-10'>
                    <p className='text-[35px] leading-tight font-bold'>Finsweet has been a wonderful partner to work with. I have been a customer now for the past few months now and I have had nothing but positive experiences!</p>
                    <div className='flex flex-wrap justify-between w-full'>
                        <div className='flex flex-wrap gap-4'>
                            <img src="src/assets/Image 3 (1).png" alt="" />
                            <div>
                                <p className='font-bold'>Johnny Andro</p>
                                <p>Director, Company</p>
                            </div>
                        </div>
                        <img className='w-36 h-10' src={fon4} alt="" />
                    </div>
                </div>
            </div>
        </div>
        <div className='bg-blue-50 py-20'>
            <div className='container flex flex-wrap gap-8'>
                <div>
                    <div className='w-8 h-8 bg-blue-900'></div>
                    <h2 className='text-[40px] font-bold'>Read our latest blogs & news</h2>
                </div>
                <div className='grid grid-cols-2 gap-8'>
                <div className='flex flex-wrap items-center'>
                        <div className='w-[40%] h-full'>
                            <img className='h-full' src={image4} alt="" />   
                        </div>
                        <div className='p-6 w-[60%] flex flex-wrap gap-3 bg-white'>
                            <p className='text-slate-500'>Jan 19, 2021</p>
                            <p className='text-[35px] leading-tight font-bold'>Todays best design trends for digital products</p>
                            <a className='flex flex-wrap items-center gap-4 text-blue-700' href="#">Read More <BsArrowRight/></a>
                        </div>
                    </div>
                    <div className='flex flex-wrap items-center'>
                        <div className='w-[40%] h-full'>
                            <img className='h-full' src={image5} alt="" />   
                        </div>
                        <div className='p-6 w-[60%] flex flex-wrap gap-3 bg-white'>
                            <p className='text-slate-500'>Jan 19, 2021</p>
                            <p className='text-[35px] leading-tight font-bold'>A practical guide to building a brand strategy</p>
                            <a className='flex flex-wrap items-center gap-4 text-blue-700' href="#">Read More <BsArrowRight/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='py-20'>
            <div className='container'>
                <div className='bg-blue-500 text-white flex flex-wrap items-center justify-between p-28'>
                    <div className='w-[50%] flex flex-wrap gap-4'>
                        <p>NEWSLETTER</p>
                        <p className='text-[40px] font-bold'>Subscribe our News Letter
                        to get Latest Updates.</p>
                    </div>
                    <form className='w-[40%]' action="#">
                        <input className='w-full px-4 py-4 text-black' type="text" name="" placeholder='Paresh@Pixeto.com'/>
                    </form>
                </div>
            </div>
        </div>
     </div>
  )
}

export default Hero
