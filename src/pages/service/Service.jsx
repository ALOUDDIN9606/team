import React from 'react'
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'
import img4 from '../../assets/img4.png'
import img5 from '../../assets/img5.png'
const Service = () => {
  return (
    <div>
      <div class="services_features">
  <div class="container flex flex-col gap-28 pt-28 ">
 
{/* __________________________________ */}
<div class="bg-peach p-10 md:p-16 flex flex-col md:flex-row items-center justify-between">
  <div class="max-w-lg">
    <h5 class="text-sm font-semibold uppercase text-gray-500">Our Services</h5>
    <h1 class="text-3xl md:text-4xl font-bold text-gray-800 leading-snug mt-4">
      We Build Software <br />
      Solutions that Solve Clients <br />
      Business Challenges
    </h1>
    <p class="text-gray-600 mt-6">
      Through True Rich Attended does no end it his mother since favourable
      real had half every him case in packages enquire we up ecstatic.
    </p>
    <button
      class="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 flex items-center gap-2"
    >
      Request A Quote
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        class="w-5 h-5"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M17 8l4 4m0 0l-4 4m4-4H3"
        />
      </svg>
    </button>
  </div>
   <div class="flex flex-col text-gray-800 mt-10 md:mt-0 md:ml-10 space-y-4">
    <p class="text-lg font-semibold">Technical support</p>
    <p class="text-lg font-semibold flex items-center">
      Development <span class="ml-2 text-blue-600">→</span>
    </p>
    <p class="text-lg font-semibold">AWS/Azure</p>
    <p class="text-lg font-semibold">Consulting</p>
    <p class="text-lg font-semibold">Information Technology</p>
  </div>
</div>
{/* _________________________________ */}



{/* <div class="bg-gray-50 py-16 px-6">
 
  <div class="text-center max-w-2xl mx-auto">
    <h5 class="text-sm font-semibold uppercase text-gray-500">Our Process</h5>
    <h1 class="text-3xl md:text-4xl font-bold text-gray-800 leading-snug mt-4">
      The process we are working <br />
      With Our client Worldwide
    </h1>
    <p class="text-gray-600 mt-4">
      Through True Rich Attended does no end it his mother since real had half every
      him case in packages enquire we up ecstatic unsatiable.
    </p>
  </div>


  <div class="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
 
    <div class="bg-white p-6 shadow rounded-md flex flex-col items-start relative">
      <div class="bg-gray-100 p-3 rounded-full">
        <img src="https://via.placeholder.com/24" alt="Light Bulb Icon" />
      </div>
      <h3 class="text-lg font-bold mt-4">Discover</h3>
      <p class="text-gray-600 mt-2">
        We aim to attain the greatest satisfaction for our clients and be one of the
        prominent.
      </p>
      <div class="absolute top-4 right-4 text-2xl font-bold text-gray-200">01</div>
      <div class="w-full mt-4 h-1 bg-gradient-to-r from-orange-500 to-blue-500"></div>
    </div>


    <div class="bg-white p-6 shadow rounded-md flex flex-col items-start relative">
      <div class="bg-gray-100 p-3 rounded-full">
        <img src="https://via.placeholder.com/24" alt="Design Icon" />
      </div>
      <h3 class="text-lg font-bold mt-4">Designing</h3>
      <p class="text-gray-600 mt-2">
        We aim to attain the greatest satisfaction for our clients and be one of the
        prominent.
      </p>
      <div class="absolute top-4 right-4 text-2xl font-bold text-gray-200">02</div>
    </div>

    <div class="bg-white p-6 shadow rounded-md flex flex-col items-start relative">
      <div class="bg-gray-100 p-3 rounded-full">
        <img src="https://via.placeholder.com/24" alt="Code Icon" />
      </div>
      <h3 class="text-lg font-bold mt-4">Development</h3>
      <p class="text-gray-600 mt-2">
        We aim to attain the greatest satisfaction for our clients and be one of the
        prominent.
      </p>
      <div class="absolute top-4 right-4 text-2xl font-bold text-gray-200">03</div>
    </div>

   
    <div class="bg-white p-6 shadow rounded-md flex flex-col items-start relative">
      <div class="bg-gray-100 p-3 rounded-full">
        <img src="https://via.placeholder.com/24" alt="Testing Icon" />
      </div>
      <h3 class="text-lg font-bold mt-4">Testing</h3>
      <p class="text-gray-600 mt-2">
        We aim to attain the greatest satisfaction for our clients and be one of the
        prominent.
      </p>
      <div class="absolute top-4 right-4 text-2xl font-bold text-gray-200">04</div>
    </div>


    <div class="bg-white p-6 shadow rounded-md flex flex-col items-start relative">
      <div class="bg-gray-100 p-3 rounded-full">
        <img src="https://via.placeholder.com/24" alt="Rocket Icon" />
      </div>
      <h3 class="text-lg font-bold mt-4">Deployment</h3>
      <p class="text-gray-600 mt-2">
        We aim to attain the greatest satisfaction for our clients and be one of the
        prominent.
      </p>
      <div class="absolute top-4 right-4 text-2xl font-bold text-gray-200">05</div>
    </div>

    
    <div class="bg-white p-6 shadow rounded-md flex flex-col items-start relative">
      <div class="bg-gray-100 p-3 rounded-full">
        <img src="https://via.placeholder.com/24" alt="Maintenance Icon" />
      </div>
      <h3 class="text-lg font-bold mt-4">Maintenance</h3>
      <p class="text-gray-600 mt-2">
        We aim to attain the greatest satisfaction for our clients and be one of the
        prominent.
      </p>
      <div class="absolute top-4 right-4 text-2xl font-bold text-gray-200">06</div>
      <div class="w-full mt-4 h-1 bg-gradient-to-r from-orange-500 to-blue-500"></div>
    </div>
  </div>
</div> */}


{/* ____________________________________________________ */}




    <div class="box flex flex-col md:flex-row-reverse items-center gap-10 lg:gap-16">
      <div class="box_media w-full h-80 md:w-6/12 lg:h-[400px]">
        <img src={img1} alt="Digitalization" />
      </div>
      <div class="box_content flex-1 flex flex-col gap-6">
        <h2 class="text-2xl font-semibold">Best in class tech support for your company. We become your tech backbone </h2>
        <p class="text-gray-600">
          Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. Through True Rich Attended does no end it his mother since real had half every.
        </p>
      </div>
    </div>


    {/*  */}


       <div class="box flex flex-col md:flex-row items-center gap-10 lg:gap-16">
      <div class="box_media w-full h-80 md:w-6/12 lg:h-[400px]">
        <img src={img2} alt="Business Strategy" />
      </div>
      <div class="box_content flex-1 flex flex-col gap-6">
        <h2 class="text-2xl font-semibold">Bring your ideas to reality with certified team of developers, working with latest technologies </h2>
        <p class="text-gray-600">
          Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. Through True Rich Attended does no end it his mother since real had half every.
        </p>
        {/* <ul class="list-disc list-inside">
          <li>Cost strategy</li>
          <li>Differentiated product or service strategy</li>
          <li>Focus on a niche strategy</li>
        </ul> */}
      </div>
    </div>


    {/*  */}

  

   
{/*  */}


      <div class="box flex flex-col md:flex-row-reverse items-center gap-10 lg:gap-16">
      <div class="box_media w-full h-80 md:w-6/12 lg:h-[400px]">
        <img src={img3} alt="Artificial Intelligence" />
      </div>
      <div class="box_content flex-1 flex flex-col gap-6">
        <h2 class="text-2xl font-semibold">We help you deploy, manage and secure your application on leading web services</h2>
        <p class="text-gray-600">
          Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. Through True Rich Attended does no end it his mother since real had half every.
        </p>
      </div>
    </div>

    {/*  */}

     
    <div class="box flex flex-col md:flex-row items-center gap-10 lg:gap-16">
      <div class="box_media w-full h-80 md:w-6/12 lg:h-[400px]">
        <img src={img4} alt="Risk Assessment" />
      </div>
      <div class="box_content flex-1 flex flex-col gap-6">
        <h2 class="text-2xl font-semibold">Get advice from world class professionals </h2>
        <p class="text-gray-600">
          Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. Through True Rich Attended does no end it his mother since real had half every.
        </p>
        {/* <ul class="list-disc list-inside">
          <li>Cost strategy</li>
          <li>Differentiated product or service strategy</li>
          <li>Focus on a niche strategy</li>
        </ul> */}
      </div>
    </div>


    {/*  */}
    <div class="box flex flex-col md:flex-row-reverse items-center gap-10 lg:gap-16">
      <div class="box_media w-full h-full md:w-6/12 ">
        <img src={img5} alt="Smart Contracts" />
      </div>
      <div class="box_content flex-1 flex flex-col gap-6">
        <h2 class="text-2xl font-semibold">We want to get local identification in every corner of the world in this era of global citizenship.</h2>
        <p class="text-gray-600">
          Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. Through True Rich Attended does no end it his mother since real had half every.
        </p>
        {/* <ul class="list-disc list-inside">
          <li>Cost strategy</li>
          <li>Differentiated product or service strategy</li>
          <li>Focus on a niche strategy</li>
        </ul> */}
      </div>
    </div>


    {/*  */}
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
</div>

    </div>
  )
}

export default Service