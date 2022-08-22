import React, { useState } from 'react'
import  {AiOutlineMenuFold,AiOutlineClose} from 'react-icons/ai'
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () =>{
        setNav(!nav)
    }
    const handClo = () => setNav(!nav);
  return (
    <div className="w-full h-[90px] bg-black">
      <div className="max-w-[1240px] mx-auto items-center h-full px-4 flex justify-between">
        <div className="text-pblue">
          <h1 className=" hover:cursor-pointer">DEFI</h1>
        </div>
        <div className="hidden md:flex">
          <ul className="text-white text-xl flex items-center">
            <li className="hover:cursor-pointer hover:scale-150 duration-500 transition-all ease-in-out">
              <Link smooth={true} to="home" offset={-10} duration={900}>
                Platform
              </Link>
            </li>
            <li className="hover:cursor-pointer hover:scale-150 duration-500 transition-all ease-in-out">
              <Link smooth={true} to="powers" duration={500}>
                Developers
              </Link>
            </li>
            <li className="hover:cursor-pointer hover:scale-150 duration-500 transition-all ease-in-out">
              <Link smooth={true} to="sus" duration={500}>
                Community
              </Link>
            </li>
            <li className="hover:cursor-pointer hover:scale-150 duration-900 transition-all ease-in-out">
              <Link smooth={true} to="about" duration={500}>
                About
              </Link>
            </li>
            <button className="px-7 ml-4">Use Defi</button>
          </ul>
        </div>
        <div onClick={handleNav} className="block md:hidden">
          {nav ? (
            <AiOutlineClose className="text-white text-2xl" />
          ) : (
            <AiOutlineMenuFold className="text-white text-2xl" />
          )}
        </div>
        <div
          className={
            nav
              ? "bg-black top-[90px] absolute left-0  w-full  flex justify-center text-center text-white"
              : "absolute left-[-100%]"
          }
        >
          <ul>
            <li className=" text-2xl hover:cursor-pointer hover:scale-150 duration-100 transition-all ease-in-out">
              <Link onClick={handClo} smooth={true} to="home" duration={500}>
                Platform
              </Link>
            </li>
            <li className=" text-2xl hover:cursor-pointer hover:scale-150 duration-100 transition-all ease-in-out">
              <Link onClick={handClo} smooth={true} to="home" duration={500}>
                Developers
              </Link>
            </li>
            <li className=" text-2xl hover:cursor-pointer hover:scale-150 duration-100 transition-all ease-in-out">
              <Link onClick={handClo} smooth={true} to="home" duration={500}>
                Community
              </Link>
            </li>
            <li className=" text-2xl hover:cursor-pointer hover:scale-150 duration-100 transition-all ease-in-out">
              <Link onClick={handClo} smooth={true} to="home" duration={500}>
                About
              </Link>
            </li>
            <button className="px-7 m-8 ">Use Defi</button>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar