import React from 'react'
import Suscr from '../assets/subscribe.jpg'

const Sus = () => {
  return (
    <div name="sus" className="w-full  text-white text-center ">
      <img
        src={Suscr}
        className="object-cover h-[100vh] lg:h-[70vh]  w-full -z-10 absolute"
        alt=""
      />
      <div className="py-16">
        <h1>
          Join Our <span className="text-pblue">DEFI</span> Community
        </h1>
        <div className="flex py-4 justify-center">
          <input
            className="mr-5 rounded-xl"
            type="email"
            placeholder=" Enter email..."
          />
          <button className="px-10">Sign Up</button>
        </div>
        <div className=" flex  gap-1 py-4 justify-center">
          <input className='mb-5 ml-2' type="checkbox" name="" id="" /> 
          <p>
            Yes, I agree to receive email communications from{" "}
            <span className="text-pblue">Defi</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sus