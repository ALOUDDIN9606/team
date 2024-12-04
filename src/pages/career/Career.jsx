import React from 'react';
import img from '../../assets/img.png'
const Career = () => {
  return (
    <div className="flex flex-col items-center text-center px-4 py-20 md:py-28">
      {/* Header Section */}
      <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
        Career at Finsweet
      </h4>
      <h2 className="text-3xl md:text-5xl font-bold mt-4 text-gray-800">
        We hired people who are
        <br />
        Always Passionate about
        <br />
        what they do
      </h2>
      <p className="mt-6 text-gray-600 text-lg max-w-2xl">
        Through True Rich Attended does no end it his mother since real had
        half every him case in packages enquire we up ecstatic unsatiable saw.
      </p>

      {/* "Careers" Text with Background Image */}
      <div className="relative w-full max-w-4xl h-64 overflow-hidden mt-4">
        <h1
          className="text-[8rem] md:text-[12rem] font-black text-transparent bg-clip-text bg-center bg-cover bg-no-repeat"
        >
          <div className="box_media w-full">
            <img src={img} alt="" className="object-cover w-full h-full" />
          </div>
          Careers
        </h1>
      </div>

      {/* Call to Action */}
      <div className="">
        <a
          href="#"
          className="text-lg text-blue-600 font-medium hover:underline flex flex-col items-center"
        >
          See Our Open Positions
          <span className="mt-2 text-2xl animate-bounce">👇</span>
        </a>
      </div>

      {/*  */}



{/* 
<div className="bg-blue-50 py-10">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      
      <div className="bg-white shadow-md rounded-lg p-4 lg:p-6">
        <h3 className="text-md lg:text-lg font-semibold text-gray-800">Full Stack Developer</h3>
        <p className="text-sm lg:text-gray-600 mt-2">Bengaluru · Full Time</p>
        <p className="text-sm lg:text-gray-600">10K - 18K · No equity</p>
        <a
          href="#"
          className="text-blue-600 font-medium mt-4 inline-flex items-center hover:underline text-sm lg:text-base"
        >
          Apply Now →
        </a>
      </div>

      <div className="bg-white shadow-md rounded-lg p-4 lg:p-6">
        <h3 className="text-md lg:text-lg font-semibold text-gray-800">Testing Engineer</h3>
        <p className="text-sm lg:text-gray-600 mt-2">Remote · Full Time</p>
        <p className="text-sm lg:text-gray-600">8K - 10K · No equity</p>
        <a
          href="#"
          className="text-blue-600 font-medium mt-4 inline-flex items-center hover:underline text-sm lg:text-base"
        >
          Apply Now →
        </a>
      </div>

      <div className="bg-white shadow-md rounded-lg p-4 lg:p-6">
        <h3 className="text-md lg:text-lg font-semibold text-gray-800">HR Manager</h3>
        <p className="text-sm lg:text-gray-600 mt-2">Mumbai · Full Time</p>
        <p className="text-sm lg:text-gray-600">8K - 10K · No equity</p>
        <a
          href="#"
          className="text-blue-600 font-medium mt-4 inline-flex items-center hover:underline text-sm lg:text-base"
        >
          Apply Now →
        </a>
      </div>

  
    </div>
  </div>
</div> */}






<div className="bg-blue-50 py-10">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center px-16">
      {/* Card 1 */}
      <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-sm">
        <h3 className="text-lg font-semibold text-gray-800">Full Stack Developer</h3>
        <p className="text-sm text-gray-600 mt-2">Bengaluru · Full Time</p>
        <p className="text-sm text-gray-600">10K - 18K · No equity</p>
        <a
          href="#"
          className="text-blue-600 font-medium mt-4 inline-flex items-center hover:underline text-sm"
        >
          Apply Now →
        </a>
      </div>

      {/* Card 2 */}
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-sm">
        <h3 className="text-lg font-semibold text-gray-800">Testing Engineer</h3>
        <p className="text-sm text-gray-600 mt-2">Remote · Full Time</p>
        <p className="text-sm text-gray-600">8K - 10K · No equity</p>
        <a
          href="#"
          className="text-blue-600 font-medium mt-4 inline-flex items-center hover:underline text-sm"
        >
          Apply Now →
        </a>
      </div>

      {/* Card 3 */}
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-sm">
        <h3 className="text-lg font-semibold text-gray-800">HR Manager</h3>
        <p className="text-sm text-gray-600 mt-2">Mumbai · Full Time</p>
        <p className="text-sm text-gray-600">8K - 10K · 4 to 5 Yrs Exp</p>
        <a
          href="#"
          className="text-blue-600 font-medium mt-4 inline-flex items-center hover:underline text-sm"
        >
          Apply Now →
        </a>
      </div>

      {/* Card 4 */}
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-sm">
        <h3 className="text-lg font-semibold text-gray-800">Product Designer</h3>
        <p className="text-sm text-gray-600 mt-2">Mumbai · Full Time</p>
        <p className="text-sm text-gray-600">8K - 10K · 4 to 5 Yrs Exp</p>
        <a
          href="#"
          className="text-blue-600 font-medium mt-4 inline-flex items-center hover:underline text-sm"
        >
          Apply Now →
        </a>
      </div>

      {/* Card 5 */}
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-sm">
        <h3 className="text-lg font-semibold text-gray-800">Wordpress Developer</h3>
        <p className="text-sm text-gray-600 mt-2">Mumbai · Full Time</p>
        <p className="text-sm text-gray-600">8K - 10K · 4 to 5 Yrs Exp</p>
        <a
          href="#"
          className="text-blue-600 font-medium mt-4 inline-flex items-center hover:underline text-sm"
        >
          Apply Now →
        </a>
      </div>

      {/* Card 6 */}
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-sm">
        <h3 className="text-lg font-semibold text-gray-800">Jr. QA Tester</h3>
        <p className="text-sm text-gray-600 mt-2">California, USA · Full Time</p>
        <p className="text-sm text-gray-600">14K - 23K · No equity</p>
        <a
          href="#"
          className="text-blue-600 font-medium mt-4 inline-flex items-center hover:underline text-sm"
        >
          Apply Now →
        </a>
      </div>

      {/* Card 7 */}
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-sm">
        <h3 className="text-lg font-semibold text-gray-800">Sr. UX Designer</h3>
        <p className="text-sm text-gray-600 mt-2">California, USA · Full Time</p>
        <p className="text-sm text-gray-600">14K - 23K · No equity</p>
        <a
          href="#"
          className="text-blue-600 font-medium mt-4 inline-flex items-center hover:underline text-sm"
        >
          Apply Now →
        </a>
      </div>

      {/* Card 8 */}
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-sm">
        <h3 className="text-lg font-semibold text-gray-800">Social Media Manager</h3>
        <p className="text-sm text-gray-600 mt-2">Kolkata, India · Full Time</p>
        <p className="text-sm text-gray-600">5K - 6K · Fresher</p>
        <a
          href="#"
          className="text-blue-600 font-medium mt-4 inline-flex items-center hover:underline text-sm"
        >
          Apply Now →
        </a>
      </div>

      {/* Card 9 */}
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-sm">
        <h3 className="text-lg font-semibold text-gray-800">Golang Developer</h3>
        <p className="text-sm text-gray-600 mt-2">Mumbai · Full Time</p>
        <p className="text-sm text-gray-600">8K - 10K · 4 to 5 Yrs Exp</p>
        <a
          href="#"
          className="text-blue-600 font-medium mt-4 inline-flex items-center hover:underline text-sm"
        >
          Apply Now →
        </a>
      </div>
      
    </div>
  </div>
  
</div>




{/*  */}



<div class="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 mt-14 max-w-screen-xl mx-auto">
  <div class="text-left max-w-4xl mx-auto">
    <h5 class="text-sm font-semibold uppercase text-gray-500 items-start justify-start">OUR WORK & CULTURE</h5>
    <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 leading-snug mt-4">
      Come and join a team of highly  <br />
      skilled professionals.
    </h1>
    <p class="text-gray-600 mt-4 text-sm sm:text-base">
     Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. 
    </p>
  </div>

  <div class="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    
    <div class="bg-white p-6 shadow rounded-md flex flex-col items-start relative">
      <div class="bg-gray-100 p-3 rounded-full">
        <img src="https://via.placeholder.com/24" alt="Light Bulb Icon" />
      </div>
      <h3 class="text-lg font-bold mt-4">Covid-19 insurance</h3>
      <p class="text-gray-600 mt-2 text-sm">
        We aim to attain the greatest satisfaction for our clients and be one of the
        prominent.
      </p>
      {/* <div class="absolute top-4 right-4 text-2xl font-bold text-gray-200">01</div> */}
      {/* <div class="w-full mt-4 h-1 bg-gradient-to-r from-orange-500 to-blue-500"></div> */}
    </div>


    <div class="bg-white p-6 shadow rounded-md flex flex-col items-start relative">
      <div class="bg-gray-100 p-3 rounded-full">
        <img src="https://via.placeholder.com/24" alt="Design Icon" />
      </div>
      <h3 class="text-lg font-bold mt-4">Flexible working time</h3>
      <p class="text-gray-600 mt-2 text-sm">
        We aim to attain the greatest satisfaction for our clients and be one of the
        prominent.
      </p>
      {/* <div class="absolute top-4 right-4 text-2xl font-bold text-gray-200">02</div> */}
    </div>

  
    <div class="bg-white p-6 shadow rounded-md flex flex-col items-start relative">
      <div class="bg-gray-100 p-3 rounded-full">
        <img src="https://via.placeholder.com/24" alt="Code Icon" />
      </div>
      <h3 class="text-lg font-bold mt-4">Work from home</h3>
      <p class="text-gray-600 mt-2 text-sm">
        We aim to attain the greatest satisfaction for our clients and be one of the
        prominent.
      </p>
      {/* <div class="absolute top-4 right-4 text-2xl font-bold text-gray-200">03</div> */}
    </div>

   
    <div class="bg-white p-6 shadow rounded-md flex flex-col items-start relative">
      <div class="bg-gray-100 p-3 rounded-full">
        <img src="https://via.placeholder.com/24" alt="Testing Icon" />
      </div>
      <h3 class="text-lg font-bold mt-4">Learning stipend</h3>
      <p class="text-gray-600 mt-2 text-sm">
        We aim to attain the greatest satisfaction for our clients and be one of the
        prominent.
      </p>
      {/* <div class="absolute top-4 right-4 text-2xl font-bold text-gray-200">04</div> */}
    </div>

    
    <div class="bg-white p-6 shadow rounded-md flex flex-col items-start relative">
      <div class="bg-gray-100 p-3 rounded-full">
        <img src="https://via.placeholder.com/24" alt="Rocket Icon" />
      </div>
      <h3 class="text-lg font-bold mt-4">Gym membership</h3>
      <p class="text-gray-600 mt-2 text-sm">
        We aim to attain the greatest satisfaction for our clients and be one of the
        prominent.
      </p>
      {/* <div class="absolute top-4 right-4 text-2xl font-bold text-gray-200">05</div> */}
    </div>

   
    <div class="bg-white p-6 shadow rounded-md flex flex-col items-start relative">
      <div class="bg-gray-100 p-3 rounded-full">
        <img src="https://via.placeholder.com/24" alt="Maintenance Icon" />
      </div>
      <h3 class="text-lg font-bold mt-4">Maintenance</h3>
      <p class="text-gray-600 mt-2 text-sm">
        We aim to attain the greatest satisfaction for our clients and be one of the
        prominent.
      </p>
      {/* <div class="absolute top-4 right-4 text-2xl font-bold text-gray-200">06</div> */}
      {/* <div class="w-full mt-4 h-1 bg-gradient-to-r from-orange-500 to-blue-500"></div> */}
    </div>
  </div>
</div>











{/*  */}


{/* 
<div class="bg-gray-50 py-16 px-6">
 
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











{/* <div className="bg-blue-50 py-10">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"> */}
{/*  */}
      {/* <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-800">Full Stack Developer</h3>
        <p className="text-gray-600 mt-2">Bengaluru · Full Time</p>
        <p className="text-gray-600">10K - 18K · No equity</p>
        <a
          href="#"
          className="text-blue-600 font-medium mt-4 inline-flex items-center hover:underline"
        >
          Apply Now →
        </a>
      </div> */}
{/*  */}
      {/* <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-800">Testing Engineer</h3>
        <p className="text-gray-600 mt-2">Remote · Full Time</p>
        <p className="text-gray-600">8K - 10K · No equity</p>
        <a
          href="#"
          className="text-blue-600 font-medium mt-4 inline-flex items-center hover:underline"
        >
          Apply Now →
        </a>
      </div> */}
{/*  */}
      {/* <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-800">HR Manager</h3>
        <p className="text-gray-600 mt-2">Mumbai · Full Time</p>
        <p className="text-gray-600">8K - 10K · No equity</p>
        <a
          href="#"
          className="text-blue-600 font-medium mt-4 inline-flex items-center hover:underline"
        >
          Apply Now →
        </a>
      </div> */}
{/*  */}

      {/* <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-800">HR Manager</h3>
        <p className="text-gray-600 mt-2">Mumbai · Full Time</p>
        <p className="text-gray-600">8K - 10K · No equity</p>
        <a
          href="#"
          className="text-blue-600 font-medium mt-4 inline-flex items-center hover:underline"
        >
          Apply Now →
        </a>
      </div> */}

{/*  */}
      {/* <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-800">HR Manager</h3>
        <p className="text-gray-600 mt-2">Mumbai · Full Time</p>
        <p className="text-gray-600">8K - 10K · No equity</p>
        <a
          href="#"
          className="text-blue-600 font-medium mt-4 inline-flex items-center hover:underline"
        >
          Apply Now →
        </a>
      </div> */}
{/*  */}

      {/* <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-800">HR Manager</h3>
        <p className="text-gray-600 mt-2">Mumbai · Full Time</p>
        <p className="text-gray-600">8K - 10K · No equity</p>
        <a
          href="#"
          className="text-blue-600 font-medium mt-4 inline-flex items-center hover:underline"
        >
          Apply Now →
        </a>
      </div> */}


{/*  */}
      {/* <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-800">HR Manager</h3>
        <p className="text-gray-600 mt-2">Mumbai · Full Time</p>
        <p className="text-gray-600">8K - 10K · No equity</p>
        <a
          href="#"
          className="text-blue-600 font-medium mt-4 inline-flex items-center hover:underline"
        >
          Apply Now →
        </a>
      </div> */}

{/*  */}
{/* 
      <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-800">HR Manager</h3>
        <p className="text-gray-600 mt-2">Mumbai · Full Time</p>
        <p className="text-gray-600">8K - 10K · No equity</p>
        <a
          href="#"
          className="text-blue-600 font-medium mt-4 inline-flex items-center hover:underline"
        >
          Apply Now →
        </a>
      </div> */}


{/*  */}
      {/* <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-800">HR Manager</h3>
        <p className="text-gray-600 mt-2">Mumbai · Full Time</p>
        <p className="text-gray-600">8K - 10K · No equity</p>
        <a
          href="#"
          className="text-blue-600 font-medium mt-4 inline-flex items-center hover:underline"
        >
          Apply Now →
        </a>
      </div> */}

{/*  */}
    {/* </div>
  </div>
</div> */}
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


      {/*  */}

    </div>
  );
};

export default Career;
