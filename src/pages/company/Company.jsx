import React from "react";
import Image1 from "../../assets/company1.svg";
import Image2 from "../../assets/company2.svg";
import Image3 from "../../assets/company3.svg";
import Image5 from "../../assets/Shape1.svg";
import Image6 from "../../assets/Shapes.svg";
import Image11 from "../../assets/Logo11.svg";
import Image22 from "../../assets/Logo22.svg";
import Image33 from "../../assets/Logo33.svg";
import Image44 from "../../assets/Logo44.svg";
import Image55 from "../../assets/Logo55.svg";
import kv from "../../assets/kvad.svg";
import clr from "../../assets/clr.svg";
import hele from "../../assets/hele.svg";
import nast from "../../assets/nast.svg";
import bab from "../../assets/bab.svg";

const Company = () => {
  return (
    <section className="py-12 px-6 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-wrap md:flex-nowrap justify-between items-center">
          <div className="md:w-1/2">
            <img src={Image5} alt="" />
            <h1 className="text-4xl md:text-xl mb-6 text-[#232536] leading-tight">
              Company
            </h1>
            <h2 className="text-4xl md:text-4xl font-bold mb-6 text-[#232536] leading-tight">
              Award-winning Company <br /> seen and used by millions <br />{" "}
              around the world.
            </h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              Maker is a decentralized.
            </p>
          </div>

          <div className="md:w-1/8 flex justify-center mb-auto ">
            <img src={Image6} alt="" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex justify-center">
            <img
              src={Image1}
              alt="Office meeting 1"
              className="w-full h-auto object-cover "
            />
          </div>
          <div className="flex justify-center">
            <img
              src={Image2}
              alt="Office meeting 2"
              className="w-full h-auto object-cover "
            />
          </div>
          <div className="relative w-full h-auto">
            <div className="absolute top-[-30px] left-0 w-full h-16 flex">
              <div className="bg-[#FFA115] w-1/3"></div>
              <div className="bg-[#FFD3Af] w-2/3"></div>
              <div className="bg-[#444CFC] w-1/3"></div>
            </div>

            <div className="relative flex justify-center items-center">
              <img
                src={Image3}
                alt=""
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="bg-[#FFFFF] py-12 px-15">
          <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <img src={kv} alt="" className="mt-12" />
              <h3 className="text-lg font-bold text-blue-500 flex items-center gap-2">
                <span className="w-3 h-3 bg-blue-500 rounded-full"></span> Our
                Story 👇
              </h3>
              <h2 className="mt-4 text-4xl font-bold text-[#232536]">
                From Startups to Titans of Industry
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Through True Rich Attended does no end it his mother since
                favourable real had half every him case in packages enquire we
                up ecstatic unsatiable saw his giving Remain expense of gay
                produce excited perceived do an a china mean its so ye when in
                explained Hearts am next over match mr partiality not shoud
                latter thus as out no passed forming middleton exercise up
              </p>
            </div>

            <div className="bg-[#FFE6D2] p-20  grid grid-cols-2 gap-10">
              <div className="text-center">
                <div className="text-4xl font-bold mb-5 text-[#232536]">
                  1560+
                </div>
                <img src={clr} className="ml-10 mb-2" alt="" />
                <div className="ml-5 text-gray-500">Project Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#232536] mr-2 mb-5">
                  100+
                </div>
                <img src={clr} className="ml-12 mb-2" alt="" />
                <div className="text-gray-500">Professional</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#232536] mb-5 mr-3">
                  950+
                </div>
                <img src={clr} alt="" className="ml-10 mb-2" />
                <div className="text-gray-500 mr-3">Happy Client</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-5 text-[#232536]">
                  10 yrs
                </div>
                <img src={clr} className="ml-12 mb-2" alt="" />
                <div className="text-gray-500 mr-3">Experience</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-[#FAFAFC] flex mb-20 justify-center gap-24">
          <div className="p-0">
            <img
              src={Image11}
              alt="Logo 1"
              className="w-36 h-36 object-contain"
            />
          </div>
          <div className="p-0.5">
            <img
              src={Image22}
              alt="Logo 2"
              className="w-36 h-36 object-contain"
            />
          </div>
          <div className="p-0.5 rounded-lg">
            <img
              src={Image33}
              alt="Logo 3"
              className="w-36 h-36 object-contain"
            />
          </div>
          <div className="p-0.5">
            <img
              src={Image44}
              alt="Logo 4"
              className="w-36 h-36 object-contain"
            />
          </div>
          <div className="p-0.5">
            <img
              src={Image55}
              alt="Logo 4"
              className="w-36 h-36 object-contain"
            />
          </div>
        </div>
        <div className="bg-[#E1F2FF] py-16">
          <div className="mx-auto max-w-7xl px-2 lg:px-12 flex flex-col lg:flex-row justify-between gap-8">
            <div className="text-center lg:text-left flex flex-col justify-center max-w-lg">
              <h2 className="text-xl  text-[#232536] leading-tight mb-10 ">
                Our expertise
              </h2>
              <h2 className="text-4xl font-bold text-[#232536] leading-tight">
                We want to get local identification in every <br />
                corner of the world in this <br />
                era of global citizenship
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Through True Rich Attended does no end it his mother since real
                had half every him case in packages enquire we up ecstatic
                unsatiable saw his giving Remain expense you position concluded.
              </p>
            </div>

            <div className="flex flex-col gap-6 lg:gap-8 w-full">
              <img src={kv} alt="" className="w-5 h-5 " />
              <div className="bg-white p-6 shadow-lg flex flex-row items-start gap-4">
                <img
                  src={hele}
                  alt="On Time Delivery Icon"
                  className="w-12 h-12"
                />
                <div>
                  <h3 className="text-xl font-semibold text-[#232536]">
                    On Time Delivery
                  </h3>
                  <p className="text-gray-500">
                    Through True Rich Attended does no end it his mother since
                    real had half every him.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6  shadow-lg flex flex-row items-start gap-4">
                <img src={nast} alt="Best Quality Icon" className="w-12 h-12" />
                <div>
                  <h3 className="text-xl font-semibold text-[#232536]">
                    Best Quality
                  </h3>
                  <p className="text-gray-500">
                    Through True Rich Attended does no end it his mother since
                    real had half every him.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6  shadow-lg flex flex-row items-start gap-4">
                <img
                  src={bab}
                  alt="Support Assist Icon"
                  className="w-12 h-12"
                />
                <div>
                  <h3 className="text-xl font-semibold text-[#232536]">
                    Support Assist
                  </h3>
                  <p className="text-gray-500">
                    Through True Rich Attended does no end it his mother since
                    real had half every him.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='py-20'>
            <div className='container'>
                <div className='bg-blue-500 text-white flex flex-wrap items-center justify-between p-28'>
                    <div className='w-[50%] flex flex-wrap gap-4'>
                        <p>NEWSLETTER</p>
                        <p className='text-[40px] font-bold'>Subscribe our News Letter
                        to get Latest Updates.</p>
                    </div>
                    <form className='w-[40%]' action="#">
                        <input className='w-full px-4 py-4 text-black' type="text" name="" placeholder='Paresh@Pixeto.com'/>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Company;
