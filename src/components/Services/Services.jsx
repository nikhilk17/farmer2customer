import { useGSAP } from '@gsap/react'
import React, { useEffect, useState } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap'

gsap.config({ nullTargetWarn: false });
gsap.registerPlugin(ScrollTrigger);

const Services = () => {
    const [isSmallDevice, setIsSmallDevice] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallDevice(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useGSAP(() => {
        gsap.to(".boxes .box", {
            x: '-84%',
            scrollTrigger: {
                trigger: ".boxes",
                scroller: "body",
                start: "top -5%",
                end: "top -250%",
                scrub: 6,
                pin: true,
            }
        })
    })

    return (
        <>
            {!isSmallDevice && (
                <div id="services" className='boxes bg-[#ECF1E6] overflow-hidden h-[120vh]'>
                    <h1 className='p-4 text-center text-6xl font-josefin underline decoration-2 text-green-400 tracking-wide mt-10' >Services</h1>
                    <div className='box flex w-[400vw] mt-[8rem] ml-[17rem] gap-[40rem]'>
                        {/* ... rest of the code ... */}
                           {/* first box */}
                <div className='flex h-[450px] w-[80vw] bg-[#89CFEF] rounded-[35px] border-solid border-2'>
                <div className='w-[25vw] rounded-[35px]'>
                    <img src="https://plus.unsplash.com/premium_photo-1664299985475-da416709c119?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className=' h-full p-2 rounded-[33px]'/>
                </div>
                <div className='flex flex-col w-[37vw] rounded-[35px] p-9'>
                    <h1 className='text-6xl  mt-4 underline decoration-2 font-josefin font-medium text-sky-900'>Fair Prices:</h1>
                    <br />
                    <p className='text-2xl font-josefin ml-2 text-sky-800'>
                    Fair trade is a global movement that seeks to promote fairness and equity in international trade. It aims to address the imbalance of power and wealth between producers in developing countries and buyers in wealthier nations by ensuring fair wages, safe working conditions, and sustainable practices.
                    </p>
                </div>
                </div>
                {/* second box */}
                <div className='flex h-[450px] w-[80vw] bg-red-300 rounded-[35px] border-solid border-2'>
                <div className='w-[25vw] rounded-[35px]'>
                    <img src="https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className=' h-full p-2 rounded-[33px]'/>
                </div>
                <div className='flex flex-col w-[37vw] rounded-[35px] p-9'>
                    <h1 className='text-6xl  mt-4 underline decoration-2 font-josefin font-medium text-red-900'>User Friendly:</h1>
                    <br />
                    <p className='text-2xl font-josefin ml-2 text-red-800'>
                    Creating a user-friendly website for connecting farmers with customers involves intuitive navigation with clear menus and search functionality, a responsive and accessible design, and clean layout. Farmer profiles should be detailed with information about their farms, practices, and products, including reviews and ratings.
                    </p>
                </div>
                </div>
                {/* third box */}
                <div className='flex h-[450px] w-[80vw] bg-[#F9E79F] rounded-[35px] border-solid border-2'>
                <div className='w-[25vw] rounded-[35px]'>
                    <img src="https://imgs.search.brave.com/XQZRbmI2qeJQKuyRva0Gi8yDCnXffcNukMPQFxOuYeQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzgyLzE2Lzkw/LzM2MF9GXzgyMTY5/MDY3X01EYWVPZTZj/UWpiRHhDVHlISmpw/OEJscXU3RHNhYUZt/LmpwZw" alt="" className=' h-full p-2 rounded-[33px]'/>
                </div>
                <div className='flex flex-col w-[37vw] rounded-[35px] p-9'>
                    <h1 className='text-6xl  mt-4 underline decoration-2 font-josefin font-medium text-yellow-900'>Quality Control:</h1>
                    <br />
                    <p className='text-2xl font-josefin ml-2 text-yellow-800'>
                    Quality control is a crucial process ensuring that products meet specific standards of quality and safety before reaching consumers. It involves systematic procedures for checking, testing, and inspecting products at various stages of production to identify and rectify defects. 
                    </p>
                </div>
                </div>
                {/* forth box */}
                <div className='flex h-[450px] w-[80vw] bg-green-300 rounded-[35px] border-solid border-2'>
                <div className='w-[25vw] rounded-[35px]'>
                    <img src="https://images.unsplash.com/photo-1556740720-776b84291f8e?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className=' h-full p-2 rounded-[33px]'/>
                </div>
                <div className='flex flex-col w-[37vw] rounded-[35px] p-6'>
                    <h1 className='text-6xl  mt-4 underline decoration-2 font-josefin font-medium text-green-900'>Secure Payment:</h1>
                    <br />
                    <p className='text-2xl font-josefin ml-1 text-green-800'>
                    Secure payment is essential for protecting customers’ financial information during online transactions. It involves using advanced encryption technologies and secure protocols to safeguard data against unauthorized access and fraud. Secure payment systems not only build customer trust and confidence but also help prevent financial losses and maintain the integrity of the online shopping experience.
                    </p>
                </div>
                </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Services;