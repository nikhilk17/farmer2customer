import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React from 'react';
import { useGSAP } from '@gsap/react';

const Footer = () => {
    // useGSAP(() => {
    //      gsap.from(".footer .foot .letter", {
    //         y: -100,
    //         opacity: 0,
    //         delay: 1,
    //         duration:5,
    //         animation: "ease-out",
    //         stagger: 0.3,
    //         scrollTrigger: {
    //             trigger: ".footer .foot",
    //             scroller: "body",   
    //             start: "top 75%",
    //             end: "bottom 100%",
    //             scrub: 7,
            
    //         }})})
    return (
        <div id="footer" className='footer bg-black font-josefin overflow-y-hidden justify-between'>
            <div className='flex flex-col gap-[105px] px-10 py-14 text-white max-sm:py-20 '>
                <div className='flex justify-between w-full h-[310px] flex-wrap'>
                    <div className='h-[150px] w-[280px] '>
                        <h1 className='text-3xl font-normal'>Relax. We've got you.</h1>
                    </div>
                    <div className='flex justify-between h-[150px] w-[311px]'>
                        <div className='text-lg'>
                            <p>Home</p>
                            <p>About</p>
                            <p>Services</p>
                            <p>Contact</p>
                        </div>
                        <div className='max-sm:pr-10 lg:pr-20'>
                            <p>Instagram</p>
                            <p>LinkedIn</p>
                        </div>
                    </div>
                </div>
                <div className='foot flex flex-col justify-between w-full h-[320px] lg:mt-[1vw]'>
                    <div className='flex justify-between h-[50px] w-full flex-wrap'>
                        <div className='text-lg sm:pl-2 inline-block'>
                            <p >Hyderabad--India</p>
                        </div>
                        <div className='flex gap-20 text-lg lg:pr-10'>
                        <a href="mailto:farmertowholesalecustomer@gmail.com">f2c@gmail.com</a>
                            <p>Legal ©2023</p>
                        </div>
                    </div>
                    <div className='h-[210px] w-full max-sm:py-20'>
                        <h1 className='text-[8.5vw] font-semibold'>
                            {"FARMER TO CUSTOMER".split("").map((char, index) =>
                                <span className='letter -tracking-[.1em]' key={index}>{char}</span>
                            )}
                        </h1>
                    </div>
                    <p className='-mt-5'>For enqueries contact <a href="tel:9063652368">91+ 9063652368</a></p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
