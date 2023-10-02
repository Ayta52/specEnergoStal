// import React from "react";
import { Certificate } from './ComponentCertificates';
import { PreHeader } from './PreHeader';
import { Slider } from './Slider';
import { Ticker } from './Ticker';

export function Home() {
  return (
    <>
      <PreHeader />
      <Slider />
      <Ticker />
      <Certificate />
    </>
  );
}
