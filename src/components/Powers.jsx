import React from 'react'
import im from '../assets/terminal.png'
const Powers = () => {
  return (
    <div name='powers' className="text-white  w-full bg-black">
      <div className="px-4 py-6 md:flex max-w-[1600px] mx-auto   gap-3 ">
        <div>
          <h1>Superpowers for DEFI developers.</h1>
          <p>
            {" "}
            Lorem ipsum dolor sit amet,
            <span className="text-pblue">consectetur</span> and{" "}
            <span className="text-pblue">adipisicing</span> elit. Hic a nostrum
            velit quod nesciunt, similique et, amet asperiores maxime,
            voluptates ratione nobis aperiam laudantium., amet asperiores
            maxime, voluptates ratione nobis aperiam laudantium.
          </p>
        </div>
        <div className="flex items-center justify-center lg:py-0 py-12">
          <img
            className="shadow-lg shadow-cyan-500/50  max-w-[250px]"
            src={im}
            alt=""
          />
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Powers