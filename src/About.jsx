import React from "react";
import { SiHiveBlockchain, SiStrapi, SiFsecure } from "react-icons/si";
import { VscServerProcess } from "react-icons/vsc";

const About = () => {
  return (
    <div name="about" className="bg-black w-full  px-4 py-16">
      <div className="mx-auto text-center text-white ">
        <div>
          {" "}
          <div className="max-w-[1240px] mx-auto">
            <h1 className="text-3xl ">A Growing Protocol Ecosystem</h1>
            <p className="py-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
              voluptatum at quos est deserunt nam voluptate necessitatibus, ad
              enim! Consequuntur! Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Totam fuga officiis iure vitae earum cumque?
            </p>
          </div>
          <div className="grid max-w-[1600px] mx-auto sm:grid-cols-2 lg:grid-cols-4 gap-6  ">
            <div className="hover:scale-110 ease-in-out duration-500 transition-all  flex flex-col rounded-2xl py-12 px-7 border text-left   ">
              <div>
                <div className="bg-pblue inline-flex p-2 rounded-full ">
                  <SiHiveBlockchain className="text-gray-900" size={40} />
                </div>
                <h3 className="text-xl py-4 font-bold">
                  Lorem ipsum dolor sit consectetur.
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam dolor corporis placeat ut, labore alias omnis
                  blanditiis, tempora fugiat commodi quisquam?
                </p>
              </div>
            </div>
            <div className="hover:scale-110 ease-in-out duration-500 transition-all  flex flex-col rounded-2xl py-12 px-7 border text-left  ">
              <div>
                <div className="bg-pblue inline-flex p-2 rounded-full ">
                  <SiStrapi className="text-gray-900" size={40} />
                </div>
                <h3 className="text-xl py-4 font-bold">
                  Lorem ipsum dolor sit consectetur.
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam dolor corporis placeat ut, labore alias omnis
                  blanditiis, tempora fugiat commodi quisquam?
                </p>
              </div>
            </div>
            <div className="hover:scale-110 ease-in-out duration-500 transition-all  flex flex-col rounded-2xl py-12 px-7 border text-left  ">
              <div>
                <div className="bg-pblue inline-flex p-2 rounded-full ">
                  <SiFsecure className="text-gray-900" size={40} />
                </div>
                <h3 className="text-xl py-4 font-bold">
                  Lorem ipsum dolor sit consectetur.
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam dolor corporis placeat ut, labore alias omnis
                  blanditiis, tempora fugiat commodi quisquam?
                </p>
              </div>
            </div>
            <div className="hover:scale-110 ease-in-out duration-500 transition-all flex flex-col rounded-2xl py-12 px-7 border text-left  ">
              <div>
                <div className="bg-pblue inline-flex p-2 rounded-full ">
                  <VscServerProcess className="text-gray-900" size={40} />
                </div>
                <h3 className="text-xl py-4 font-bold">
                  Lorem ipsum dolor sit consectetur.
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam dolor corporis placeat ut, labore alias omnis
                  blanditiis, tempora fugiat commodi quisquam?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
