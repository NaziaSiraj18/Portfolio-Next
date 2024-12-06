 'use client'
import React from 'react'
import Typewriter from 'typewriter-effect';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { SiTypescript } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiVisualstudiocode } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaFigma } from "react-icons/fa";


 export default function Home(){
  return(
    <main>
      <title> Nazia Siraj Portfolio </title>
      {/* Header */}
      <header className="text-gray-400 bg-gray-900 body-font">
    <div className="container flex  flex-col flex-wrap items-center p-5 mx-auto md:flex-row">

    <nav className="flex flex-wrap items-center text-base lg:w-2/5 md:ml-auto">
      <a className="mr-5 hover:text-red-700">Home</a>
      <a className="mr-5 hover:text-blue-700">About Us</a>
      <a className="mr-5 hover:text-green-700">Contact Us</a>
      <a className="hover:text-purple-700">Privacy Policy</a>
    </nav>

    {/*<a className="flex items-center order-first mb-4 font-medium text-white lg:order-none lg:w-1/5 title-font lg:items-center lg:justify-center md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 p-2 text-white bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span className="ml-3 text-xl xl:block lg:hidden">Nazia Siraj</span>
    </a>*/}
    <a className="flex items-center mb-4 font-medium text-white titlefont md:mb-0">
                <img
                  src="images/nazia pic.jpg"
                  alt="N logo"
                  className="w-10 h-10 rounded-full"
                />
                <span className="ml-3 text-xl text-slate-100 hover:text-blue-700"> Nazia Siraj </span>
              </a>
    <div className="inline-flex ml-5 lg:w-2/5 lg:justify-end lg:ml-0">
      <button className="inline-flex items-center px-3 py-1 mt-4 text-white bg-gray-700 border-0 rounded focus:outline-none hover:bg-red-600 md:mt-0">Github
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
  </div>
</header>

{/*Hero Section */}
<section className="text-gray-400 bg-gray-900 body-font">
  <div className="container flex flex-col items-center justify-center px-2 py-5 mx-auto">
{/*Image Tag*/}    
    <img className="object-cover object-center w-5/6 mb-10 rounded lg:w-2/6 md:w-3/6" alt="hero" src="images/nazia pic.jpg"/>
    <div className="flex flex-col items-center w-full mb-16 text-center md:w-2/3">
{/*Typewriter Effect*/}    
      <h1 className="mb-4 text-3xl font-medium text-yellow-500 title-font sm:text-4xl">
      <Typewriter
  options={{
    strings: ['Hello', 'Nazia Siraj', 'Digital Creator', 'WebDeveloper'],
    autoStart: true,
    loop: true,
  }}
/></h1>
      <p className="mb-8 leading-relaxed">I'm Nazia Siraj,a passionate web developer and digital creator with a strong interest in building dynamic and engaging websites.I enjoy exploring new technologies and tools to enhance my skills and create innovative digital solutions.My work reflects my dedication to crafting user-friendly experiences that combine creativity and functionality.</p>
      <div className="flex items-end justify-center w-full">
        <div className="relative w-2/4 mr-4 text-left lg:w-full xl:w-1/2 md:w-full">
          <label htmlFor="hero-field" className="text-sm leading-7 text-gray-400">Newsletter</label>
          <input type="text" id="hero-field" name="hero-field" className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500"/>
        </div>
        <button className="inline-flex px-6 py-2 text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600">Subscribe Now</button>
      </div>
      <p className="w-full mt-2 mb-8 text-sm text-gray-500"></p>
      <div className="flex text-gray-500">
        <button className="inline-flex items-center px-5 py-3 bg-gray-800 rounded-lg hover:bg-indigo-600 hover:text-white focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 512 512">
            <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
          </svg>
          <span className="flex flex-col items-start ml-4 leading-none">
            <span className="mb-1 text-xs text-gray-600">Visit Now</span>
            <span className="font-medium title-font">Github</span>
          </span>
        </button>
        <button className="inline-flex items-center px-5 py-3 ml-4 bg-gray-900 rounded-lg hover:bg-indigo-600 hover:text-white focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 305 305">
            <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
            <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
          </svg>
          <span className="flex flex-col items-start ml-4 leading-none">
            <span className="mb-1 text-xs text-gray-600">Visit Now</span>
            <span className="font-medium title-font">Linklin</span>
          </span>
        </button>
      </div>
    </div>
  </div>
</section>

{/*Feature Section*/}

{/*

Project features & Commands
Explore the essential features of each Typescript  Project and easily run them using the npx commands provided below:

npx run start: Calculator
npx run start: Atm
npx run start: Currency
npx run start: Todo-list
npx run start: Oop_bank
npx run start: Number-guessing-game


*/}

<section className="text-yellow-400 bg-gray-900 body-font">
  <div className="container px-2 py-8 mx-auto">
    <div className="text-center mb-20">
      <h1 className="sm:text-3xl text-2xl font-black text-center title-font text-yellow mb-4">Project features & Commands</h1>
      <p className="text-sky-400 leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Explore the essential features of each Typescript  Project and easily run them using the npx commands provided below:</p>
    </div>
    
    <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-800 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"stroke-width="3"
           className="text-yellow-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium text-white">npx run start: Calculator</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-800 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"
           className="text-yellow-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium text-white">npx run start: Atm</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-800 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" 
          className="text-cyan-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium text-white">npx run start: Currency</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-800 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"
           className="text-cyan-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium text-white">npx run start: Todo-list</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-800 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" 
          className="text-yellow-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium text-white">npx run start: Oop_bank</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-800 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"
           className="text-yellow-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium text-white">npx run start: Number-guessing-game</span>
        </div>
      </div>
    </div>
    {/*from button to custom to button*/}
    <button className="bg-yellow-500 flex mx-auto mt-16 py-3 px-5 rounded-lg items-center hover:bg-cyan-600 hover:bg-opacity-100 focus:outline-none">
    <img className="w-15 h-10 "src="images/github logo.png" alt="github logo" />

        <span className="ml-4 flex items-start flex-col leading-none">
          <span className="text-xs text-white mb-1">Git Hub</span>
          <span className="title-font font-bold text-black">@Miss Nazia Siraj</span>
        </span>
      </button>
  </div>
</section>

{/*Development Tools And Frame Icons*/}

<section className="text-teal-400  bg-gray-900 body-font">
  <div className="container px-2 py-8 mx-auto">
    <div className="flex flex-wrap w-full mb-20">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-teal-500">Unlocking My Skill Set's  The Hidden Talents!</h1>
        <div className="h-1 w-20 bg-indigo-500 rounded"></div>
      </div>
      <p className="lg:w-1/2 w-full leading-relaxed text-yellow-400 ">Highlights the range of skills and experties the impact and value brought to my projects</p>
    </div>
 </div>
{/* React Icons */}
<section className='text-green-700 bg-gray-900 body-font'>
<div className='container px-2 py-4 mx-auto flex flex-wrap justify-center items-center space-x-6 text-4xl  bg-gray-900 text-cyan-500'>  

{/* Typewriter Effect*/}

<Typewriter
  options={{
    strings: ['Programming Language'],
    autoStart: true,
    loop: true,
  }}
/>

<div className='flex flex-col items-center bg-white border-2 border-yellow-500 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110'>
<FaHtml5 className='text-blue-500 text-6xl '/>
<span className='mt-2 text-lg text-black'> HTML </span>
</div>

<div className='flex flex-col items-center bg-white border-2 border-yellow-500 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110'>

<TbBrandJavascript  className='text-yellow-500 text-6xl '/>
<span className='mt-2 text-lg text-black'> JavaScript </span>

</div>


<div className='flex flex-col items-center bg-white border-2 border-yellow-500 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110'>

<FaCss3Alt className='text-blue-500 text-6xl '/>
<span className='mt-2 text-lg text-black'> Css </span>

</div>

<div className='flex flex-col items-center bg-white border-2 border-yellow-500 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110'>

<SiTypescript className='text-yellow-500 text-6xl '/>
<span className='mt-2 text-lg text-black'> TypeScript </span>

</div>

<div className='flex flex-col items-center bg-white border-2 border-yellow-500 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110'>

<FaPython className='text-blue-500 text-6xl '/>
<span className='mt-2 text-lg text-black'> Python </span>

</div>

<br/>


<br/>

<br/>



<br/>



 
<div className='flex flex-col items-center bg-white border-2 border-yellow-500 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110'>

<SiVisualstudiocode  className='text-blue-500 text-6xl '/>
<span className='mt-2 text-lg text-black'> Visual Studio Code</span>

</div>

<div className='flex flex-col items-center bg-white border-2 border-yellow-500 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110'>

<FaGithub className='text-red-500 text-6xl '/>
<span className='mt-2 text-lg text-black'> Github </span>

</div>

<div className='flex flex-col items-center bg-white border-2 border-yellow-500 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110'>
<FaNodeJs className='text-yellow-500 text-6xl '/>
<span className='mt-2 text-lg text-black'> Node JS </span>
</div>

<div className='flex flex-col items-center bg-white border-2 border-yellow-500 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110'>
<SiTailwindcss className='text-red-500 text-6xl '/>
<span className='mt-2 text-lg text-black'> Tailwind css </span>
</div>


<div className='flex flex-col items-center bg-white border-2 border-yellow-500 p-4 transition-transform duration-300 ease-in-out transform hover:scale-110'>
<FaFigma className='text-red-500 text-6xl '/>
<span className='mt-2 text-lg text-black'> Figma </span>
</div>


{/* Typewriter Effect*/}
<Typewriter
  options={{
    strings: ['Development Tools and frame works'],
    autoStart: true,
    loop: true,
  }}
/>

  </div>
</section>
</section>

{/*Testimonal*/}

<section className="text-gray-400  bg-gray-900 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-8 h-8 text-gray-300 mb-8" viewBox="0 0 975.036 975.036">
        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
      </svg>
      <p className="leading-relaxed text-lg">NEXT JS LEARNING MADE EASY</p>
      <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
      <h2 className="text-gray-300 font-bold title-font tracking-wider text-sm">Happy Coding </h2>
      <p className="text-blue-500">SUBSCRIBE NOW</p>
    </div>
  </div>
</section>


{/* Our Team*/}
<section className="text-gray-400 bg-gray-900 body-font">
  <div className="container px-5 py-8 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="text-4xl font-black title-font mb-4 text-yellow-500 tracking-widest">Creative Innovators</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
        The Creative Innovators are a dynamic team of passionate professionals dedicated to delivering cutting-edge solutions with a perfect blend of creativity, technology, and precision. Comprising two talented developers, a visionary designer, and a meticulous quality assurance specialist, this team collaborates seamlessly to bring innovative ideas to life. With a commitment to excellence and a shared goal of exceeding client expectations, the Creative Innovators are at the forefront of delivering top-tier products that are both functional and visually stunning.
      </p>
    </div>

    <div className="flex flex-wrap -m-4">
      {/* Person 1 */}
      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img  alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4 border-2 border-yellow-500 hover:grayscale" src="https://t3.ftcdn.net/jpg/06/33/80/44/360_F_633804450_DWH5bj77LdDwlCSvMcqy6qVk4j9kchT3.jpg"/>
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-lg text-sky-400">Jawwad Ahmed</h2>
            <h3 className="text-yellow-500 mb-3"><Typewriter
  options={{
    strings: ['Lead Developer'],
    autoStart: true,
    loop: true,
  }}
/>
            </h3>
            <p className="mb-4 text-white">As the Lead Developer, he drives the technical vision and ensures that our projects are built with precision. With a deep understanding of coding best practices, he leads our development team, mentors junior developers, and collaborates closely with the design and product teams to deliver seamless user experiences.</p>
          </div>
        </div>
      </div>

      {/* Person 2 */}
      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4 border-2 border-yellow-500 hover:grayscale" src="https://img.freepik.com/premium-photo/portrait-male-software-developer-smiling-camera-while-sitting-workplace-office-copy-spac_236854-44706.jpg"/>
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-lg text-sky-400">Umair Ahmed</h2>
            <h3 className="text-yellow-500 mb-3"><Typewriter
  options={{
    strings: ['Project Manager'],
    autoStart: true,
    loop: true,
  }}
/>

            </h3>
            <p className="mb-4 text-white">The Project Manager oversees the planning, execution, and completion of our projects. With a keen eye for detail and a talent for keeping the team on track, he coordinates between clients and developers to ensure that timelines are met and goals are achieved, ensuring smooth operations from start to finish.</p>
          </div>
        </div>
      </div>

      {/* Person 3 */}
      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4 border-2 border-yellow-500 hover:grayscale" src="https://media.istockphoto.com/id/1171173195/photo/portrait-of-cheerful-female-programmer-enjoying-time-with-laptop-computer-and-distance-job.jpg?s=612x612&w=0&k=20&c=6vDQ8RF2fDHVhm5TT6YpOCn4cSjXzo9Jw22XO5WmWBQ="/>
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-lg text-sky-400">Javeria Kashif</h2>
            <h3 className="text-yellow-500 mb-3"><Typewriter
  options={{
    strings: ['UI/UX Designer'],
    autoStart: true,
    loop: true,
  }}
/>

            </h3>
            <p className="mb-4 text-white">As the UI/UX Designer, she brings creativity and user-centered design to the forefront of our projects. She is responsible for crafting visually stunning and intuitive interfaces that resonate with users, ensuring that our products are not only functional but also aesthetically pleasing and easy to navigate.</p>
          </div>
        </div>
      </div>

      {/* Person 4 */}
      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4 border-2 border-yellow-500 hover:grayscale" src="data:image/jpeg;base64,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"/>
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-lg text-sky-400">Aisha Akbar</h2>
            <h3 className="text-yellow-500 mb-3"><Typewriter
  options={{
    strings: ['Quality Assurance Speciality'],
    autoStart: true,
    loop: true,
  }}
/>

            </h3>
            <p className="mb-4 text-white">The Quality Assurance Specialist is dedicated to maintaining the highest standards of quality in our projects. She rigorously tests and analyzes each feature to ensure that our products are bug-free and perform flawlessly, helping us deliver reliable and polished results to our clients.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


{/* Contact Us */}

<section className='text-gray-400 bg-gray-900 body-font'>
 <div className='container px-5 py-5 mx-auto'>
  <div className='flex flex-col text-center w-full mb-20'>
    <h1 className='text-4xl font-black title-font mb-4 text-yellow-500 tracking-widest uppercase'>Contact Us</h1>
    <p className='lg:w-2/3 mx-auto leading-relative text-base'>Fill the form for any queries</p>
   </div>
  </div> 

<section className="container px-2 py-2 mx-auto text-gray-400  bg-gray-900 body-font relative ">
  <div className="absolute inset-0 bg-gray-900">
    <iframe title="map" width="100%" height="100%" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"/> 
  </div>
  <div className="container px-5 py-24 mx-auto flex">
    <div className="lg:w-1/3 md:w-1/2 bg-gray-900 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
      <h2 className="text-white text-lg mb-1 font-medium title-font">Feedback</h2>
      <p className="leading-relaxed mb-5 ">Please fill this form if you have any queeries or complains or if any message for us</p>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-400">Email</label>
        <input type="email" id="email" name="email" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-gray-400">Message</label>
        <textarea id="message" name="message" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
      <p className="text-xs text-gray-400 mt-3">Read our Privacy Policy for ant issues</p>
    </div>
  </div>
</section>
</section>


{/*Footer section*/}

<footer className="text-gray-400 bg-gray-900 body-font">

  <div className='container px-5 py-4 mx-auto'>
  </div>

  <div className="border-t border-gray-800">
    <div className="container px-5 py-8 flex flex-wrap mx-auto items-start">
      <div className="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
        <div className="relative sm:w-64 w-40 sm:mr-4 mr-2">

          <label htmlFor="footer-field" className="leading-7 text-sm text-gray-400">Newsletter</label>
          <input type="text" id="footer-field" name="footer-field" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:ring-2 focus:bg-transparent focus:ring-indigo-900 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Subscribe Now</button>
        <p className="text-gray-500 text-sm md:ml-6 md:mt-0 mt-2 sm:text-left text-center">
          <br className="lg:block hidden"/>
        </p>
      </div>
      
      <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
        <a className="text-sky-400">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-purple-800">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-amber-400">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a className="ml-3 text-blue-400">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" rx="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
  </div>
  </div>
  <div className="bg-gray-800 bg-opacity-75">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">

      <p className="text-gray-800 text-sm text-center sm:text-left">© 2024 Nazia Siraj —
        <a href="https://twitter.com/knyttneve" className="text-gray-500 ml-1" target="_blank" rel="noopener noreferrer">@portfolio</a>
      </p>
      <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-400 text-sm">Enamel pin tousled raclette tacos irony</span>
    </div>
  </div>
</footer>
</main>
  );
}

