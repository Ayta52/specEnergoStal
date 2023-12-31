import { useState, useEffect } from 'react';
import {
  SCREEN_SM, SCREEN_MD, SCREEN_LG, SCREEN_XL, SCREEN_HEAD, SCREEN_FOOT, SCREEN_BIG_MD, SCREEN_PREHEADER_BR, SCREEN_PREHEADER_BR_400
} from './Breakpoints';

export const useResize = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = (event) => {
      setWidth(event.target.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
   
  }, []);
  return {
    width,
    isScreenSm: width >= SCREEN_SM,
    isScreenMd: width <= SCREEN_MD,
    isScreenLg: width >= SCREEN_LG,
    isScreenXl: width >= SCREEN_XL,
    isScreenHEAD: width <= SCREEN_HEAD,
    isScreenFOOT: width <= SCREEN_FOOT,
    isScreenBigMd: width >= SCREEN_BIG_MD,
    isScreenPreheaderBR: width <= SCREEN_PREHEADER_BR,
    isScreenPreheaderBR400: width <= SCREEN_PREHEADER_BR_400
  };
};