import React from "react";
import vid from "../assets/video.m4v";
const Hero = () => {
  return (
    <div name='home' className="w-full h-[90vh] top-[90px]">
      <video
        className="object-cover h-full w-full -z-10 absolute"
        src={vid}
        autoPlay
        loop
        muted
      />
      <div className=" max-w-[1240px] mx-auto h-[90%] flex  justify-center px-4 items-center text-center flex-col text-white">
        <h1 className="text-5xl">Decentralized</h1>
        <h1 className="text-4xl">
          {" "}
          <span className="text-pblue">Trading</span> Protocol
        </h1>
        <p className="text-xl py-4">
          Lorem ipsum dolor, s it amet consectetur adipisicing elit. Assumenda
          mollitia eos, voluptates iure explicabo ratione.it amet consectetur
          adipisicing elit. Assumenda mollitia eos, voluptates iure explicabo
          ratione.
        </p>
        <div className="flex  gap-3">
          <button className="px-10">Use Defi</button>
          <button className="px-10 bg-[transparent] ">FAQ</button>
        </div>
      </div>
      <div>
        <p className="text-white text-2xl text-center">
          Total Volume Secured :{" "}
          <span className="font-bold tracking-wide">$78,577,557.92</span>
        </p>
      </div>
    </div>
  );
};

export default Hero;
