import React from 'react'
import { useMediaQuery, Hidden } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
     <div className={isMobile ? 'flex flex-col items-center bg-[#ecf1e6] border-solid border-2 rounded-[35px] mt-3 ml-2 mr-2 mb-3' : 'flex bg-[#ecf1e6] border-solid border-2 rounded-[35px] mt-3 ml-10 mr-10 mb-3'}>
        <div className={isMobile ? 'w-full ml-4' : 'w-[500px] ml-16'}>
           <h1 className={isMobile ? 'text-[5vw] mt-24 ml-8 content-center font-merienda font-bold tracking-wide text-[#058A05] opacity-100' : 'text-[5vw] mt-64 content-center font-merienda font-bold tracking-wide text-[#058A05] opacity-100'}>Cultivating Connections:</h1>
            <br />
            <p className={isMobile ? 'ml-9 text-lg font-bold font-merienda' : 'ml-3 text-xl font-bold font-merienda'}>Connecting Farmers and Families!</p>
        </div>
        <div className={isMobile ? 'w-full' : ''}>
            <img src="https://i.postimg.cc/gkKYwqjW/hero.png" alt='hero' className={isMobile ? 'w-full h-auto mt-20' : 'h-[750px] w-[75vw]'} />
        </div>
     </div>
     </>
  )
}

export default Hero