import {useEffect} from "react";
import { Certificate } from './ComponentCertificates';
import { PreHeader } from './PreHeader';
import { Slider } from './Slider';
import { Ticker } from './Ticker';

export function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (
    <>
      <PreHeader />
      <Slider />
      <Ticker />
      <Certificate />
    </>
  );
}
