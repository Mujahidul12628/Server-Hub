/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useState, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { ToastContainer, toast } from "react-toastify";
import './Home.css'
import slider1 from '../../images/slider1.jpg'
import slider2 from '../../images/slider2.jpg'
import slider3 from '../../images/slider3.jpg'

import g1 from '../../images/gallery/g1.jpg'
import g2 from '../../images/gallery/g2.jpg'
import g3 from '../../images/gallery/g3.jpg'
import g4 from '../../images/gallery/g4.jpg'
import g5 from '../../images/gallery/g5.jpg'
import g6 from '../../images/gallery/g6.jpg'
import DynamicTittle from '../Hook/DynamicTittle';


import { Link } from 'react-router-dom';

const Home = () => {

    DynamicTittle('Home')

    const [activeTab, setActiveTab] = useState(0);

    const handleClick = () => {
        toast.success("Hello World!");
    };

    const handleTabChange = (index) => {
        setActiveTab(index === activeTab ? -1 : index);
    };

    const [tabData, setTabData] = useState([]);

    useEffect(() => {
        fetch("https://toys-galaxy-server-mujahidul12628.vercel.app/toysData")
            .then(response => response.json())
            .then(data => setTabData(data))
            .catch(error => console.error('Error fetching JSON data:', error));
    }, []);
    return (
        <div>

            <div className="flex flex-col-reverse md:flex-row border-2 border-fuchsia-300  ">
                <div className='w-full md:w-2/5 border-2 border-fuchsia-300  text-left bg-fuchsia-100 p-4 flex flex-col justify-center items-center content-center gap-2'>
                    <h2 className='p-2 font-bold m-2 text-lg md:text-2xl'>Ignite Your Adventure with Toys</h2>
                    <p className=' text-justify text-sm md:text-base'>The Ultimate Destination for Car Toy Collectors. Dive into Our Exclusive Collection of Exquisite Cars, from Classic Beauties to Racing Legends. Ignite Your Passion for Cars and Start Your Collection Today!
                    </p>
                    <button onClick={handleClick} className="mt-2 px-4 py-2  text-white hover:font-semibold rounded-md transition duration-300 ease-in-out transform hover:-translate-y-1 button-bg">
                        <Link to='/'>Buy Now</Link>
                    </button>
                </div>

                <div className="carousel w-full md:w-3/5">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src={slider3} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src={slider2} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src={slider1} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="best-sell">
                <h1 className='text-3xl font-semibold my-5'>Best selling product</h1>
                <div className="container mx-auto p-2 w-full ">
                    <div
                        className="carousel carousel-center rounded-box " id='box-shad'
                        showThumbs={false}
                        autoPlay
                        infiniteLoop
                        transitionTime={500}
                        interval={3000}
                        showStatus={false}
                        swipeable
                        emulateTouch
                        showArrows
                        renderIndicator={() => null}
                    >
                        <div className="carousel-item border border-violet-100 rounded-lg p-5 w-1/2 lg:w-1/4" >
                            <img
                                src="https://i.ibb.co/HHRQj23/vintage8.jpg"
                                alt="zip"
                                className="carousel-image w-50"
                            />
                        </div>
                        <div className="carousel-item border border-violet-100 rounded-lg p-5 w-1/2 lg:w-1/4">
                            <img
                                src="https://i.ibb.co/JHTRznb/formula3.jpg"
                                alt="Pizza"
                                className="carousel-image w-50"
                            />
                        </div>
                        <div className="carousel-item border border-violet-100 rounded-lg p-5 w-1/2 lg:w-1/4">
                            <img
                                src="https://i.ibb.co/Mf2LzM9/vintage.jpg"
                                alt="Pizza"
                                className="carousel-image w-50"
                            />
                        </div>
                        <div className="carousel-item border border-violet-100 rounded-lg p-5 w-1/2 lg:w-1/4">
                            <img
                                src="https://i.ibb.co/k4QYCcY/zip5.jpg"
                                alt="Pizza"
                                className="carousel-image w-50"
                            />
                        </div>
                        <div className="carousel-item border border-violet-100 rounded-lg p-5 w-1/2 lg:w-1/4">
                            <img
                                src="https://i.ibb.co/yQFh0jC/vintage1.jpg"
                                alt="Pizza"
                                className="carousel-image w-50"
                            />
                        </div>
                        <div className="carousel-item border border-violet-100 rounded-lg p-5 w-1/2 lg:w-1/4">
                            <img
                                src="https://i.ibb.co/HDPXVzL/formula7.jpg"
                                alt="Pizza"
                                className="carousel-image w-50"
                            />
                        </div>
                        <div className="carousel-item border border-violet-100 rounded-lg p-5 w-1/2 lg:w-1/4">
                            <img
                                src="https://i.ibb.co/Yh9DVBP/vintage4.jpg"
                                alt="Pizza"
                                className="carousel-image w-50"
                            />
                        </div>
                    </div>
                </div>

            </div>

            {/* <div>
                <h1 className='text-center mt-5 text-2xl font-medium '>Shop by category</h1>

                <div className="container mx-auto p-4">
                    <Tabs selectedIndex={activeTab} onSelect={handleTabChange}>
                        <TabList className="flex  max-w-fit mb-8 p-2 shadow-xl rounded-md">
                            {tabData.map((tab, index) => (
                                <Tab
                                    key={index}
                                    className={`mr-2 px-4 py-2 border border-slate-600 ${activeTab === index ? 'bg-purple-500 text-white border-2 border-purple-600 rounded-md justify-center ' : 'bg-gray-200 rounded-md '
                                        } cursor-pointer`}
                                    onClick={() => handleTabChange(index)}
                                >
                                    {tab.category}
                                </Tab>
                            ))}
                        </TabList>

                        {tabData.map((tab, index) => (
                            <TabPanel key={index}>
                                {activeTab === index && (
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 shadow-sm">
                                        {tab.vehicles.map((vehicle, vIndex) => (
                                            <div
                                                key={vIndex}
                                                className="card card-compact bg-base-100 box-shadow-card"
                                            >
                                                <figure>
                                                    <img
                                                        src={vehicle.image}
                                                        alt={vehicle.name}
                                                        className="w-64 h-56 md:w-80 md:h-64"
                                                    />
                                                </figure>
                                                <div className="card-body">
                                                    <h2 className="text-center text-xl font-semibold">{vehicle.name}</h2>
                                                    <p>Price: {vehicle.price}</p>
                                                    <p>Rating: {vehicle.rating}</p>
                                                    <div className="card-actions justify-start">
                                                        <button className=" mx-auto">Buy Now</button>
                                                    </div>

                                                    <Link to={`/toysData/${vehicle?.id}`}>
                                                        <button className="mt-3 px-6 py-3  text-white hover:font-semibold rounded-md transition duration-300 ease-in-out transform hover:-translate-y-1 button-bg">
                                                            View Details
                                                        </button>
                                                    </Link>

                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </TabPanel>
                        ))}
                    </Tabs>
                </div>

            </div> */}

            <div>
                <h1 className='text-center mt-5 text-2xl font-medium '>React Tab</h1>

                <div className="container mx-auto p-4">
                    <Tabs selectedIndex={activeTab} onSelect={handleTabChange}>
                        <TabList className="flex  max-w-fit mb-8 p-2 shadow-xl rounded-md">
                            {tabData.map((tab, index) => (
                                <Tab
                                    key={index}
                                    className={`mr-2 px-4 py-2 border border-slate-600 ${activeTab === index ? 'bg-purple-500 text-white border-2 border-purple-600 rounded-md justify-center ' : 'bg-gray-200 rounded-md '
                                        } cursor-pointer`}
                                    onClick={() => handleTabChange(index)}
                                >
                                    {tab.category}
                                </Tab>
                            ))}
                        </TabList>

                        {tabData.map((tab, index) => (
                            <TabPanel key={index}>
                                {activeTab === index && (
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 shadow-sm">
                                        {tab.vehicles.map((vehicle, vIndex) => (
                                            <div
                                                key={vIndex}
                                                className="card card-compact bg-base-100 box-shadow-card"
                                            >
                                                <figure>
                                                    <img
                                                        src={vehicle.image}
                                                        alt={vehicle.name}
                                                        className="w-64 h-56 md:w-80 md:h-64"
                                                    />
                                                </figure>
                                                <div className="card-body">
                                                    <h2 className="text-center text-xl font-semibold">{vehicle.name}</h2>
                                                    <p>Price: {vehicle.price}</p>
                                                    <p>Rating: {vehicle.rating}</p>
                                                    <div className="card-actions justify-start">
                                                        <button className=" mx-auto">Buy Now</button>
                                                    </div>

                                                    <Link to={`/toysData/${vehicle?.id}`}>
                                                        <button className="mt-3 px-6 py-3  text-white hover:font-semibold rounded-md transition duration-300 ease-in-out transform hover:-translate-y-1 button-bg">
                                                            View Details
                                                        </button>
                                                    </Link>

                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </TabPanel>
                        ))}
                    </Tabs>
                </div>

            </div>


            <div className="gallery">
                <h1 className='text-3xl font-semibold my-5'>Toys Gallery</h1>
                <div className="grid grid-cols-3 w-full mx-auto m-3 h-4/5 " id='box-shad'>
                    <div className="aspect-w-1 aspect-h-1 overflow-hidden row-span-2 border-2 border-fuchsia-200">
                        <img
                            className="object-cover w-full h-full transform duration-300 hover:scale-110 animate-image"
                            src={g1}
                            alt="Image 1"
                        />
                    </div>
                    {/* <div className="aspect-w-2 aspect-h-2 overflow-hidden border border-gray-500 col-span-2">
                        <img
                            className="object-cover w-full h-full transform duration-300 hover:scale-110 animate-image block md:hidden"
                            src={g2}
                            alt="Image 2"
                        />
                    </div> */}
                    <div className="aspect-w-1 aspect-h-1 overflow-hidden border-2 border-fuchsia-200">
                        <img
                            className="object-cover w-full h-full transform duration-300 hover:scale-110 animate-image"
                            src={g3}
                            alt="Image 3"
                        />
                    </div>
                    <div className="aspect-w-1 aspect-h-1 overflow-hidden border-2 border-fuchsia-200">
                        <img
                            className="object-cover w-full h-full transform duration-300 hover:scale-110 animate-image"
                            src={g4}
                            alt="Image 4"
                        />
                    </div>
                    {/* <div className="aspect-w-1 aspect-h-1 overflow-hidden border border-gray-500">
                        <img
                            className="object-cover w-full h-full transform duration-300 hover:scale-110 animate-image"
                            src={g5}
                            alt="Image 5"
                        />
                    </div> */}
                    <div className="aspect-w-1 aspect-h-1 overflow-hidden border-2 border-fuchsia-200 col-span-2">
                        <img
                            className="object-cover w-full h-full transform duration-300 hover:scale-110 animate-image"
                            src={g6}
                            alt="Image 6"
                        />
                    </div>
                </div>


            </div>

            <div className="review">
                <h1 className='text-3xl font-semibold my-5'>User Review</h1>
                <div className="carousel w-full">
                    <div id="item1" className="carousel-item w-full sm:w-1/2 lg:w-1/3">
                        <div className='flex flex-col justify-between shadow-2xl p-8 border-2 border-purple-100 '>
                            <div className='flex justify-Start items-center'>
                                <img src="https://i.ibb.co/PxzDzcR/1053244.png" className="w-8" />
                                <div>
                                    <h1 className='text- px-2 font-semibold'>Javi Allonso</h1>
                                </div>
                            </div>
                            <div>
                                <p className='text-justify p-2 max-w-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi error laudantium dicta veritatis minus deserunt soluta ab voluptate sunt sapiente!</p>
                            </div>
                            <div className="rating px-2">
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" checked />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            </div>

                        </div>
                    </div>
                    <div id="item1" className="carousel-item w-full sm:w-1/2 lg:w-1/3">
                        <div className='flex flex-col justify-between shadow-2xl p-8 border-2 border-purple-100 '>
                            <div className='flex justify-Start items-center'>
                                <img src="https://i.ibb.co/PxzDzcR/1053244.png" className="w-8" />
                                <div>
                                    <h1 className='text- px-2 font-semibold'>Roston Chase</h1>
                                </div>
                            </div>
                            <div>
                                <p className='text-justify p-2 max-w-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi error laudantium dicta veritatis minus deserunt soluta ab voluptate sunt sapiente!</p>
                            </div>
                            <div className="rating px-2">
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" checked />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" checked />

                            </div>

                        </div>
                    </div>
                    <div id="item1" className="carousel-item w-full sm:w-1/2 lg:w-1/3">
                        <div className='flex flex-col justify-between shadow-2xl p-8 border-2 border-purple-100 '>
                            <div className='flex justify-Start items-center'>
                                <img src="https://i.ibb.co/PxzDzcR/1053244.png" className="w-8" />
                                <div>
                                    <h1 className='text- px-2 font-semibold'>Allen Walker</h1>
                                </div>
                            </div>
                            <div>
                                <p className='text-justify p-2 max-w-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi error laudantium dicta veritatis minus deserunt soluta ab voluptate sunt sapiente!</p>
                            </div>
                            <div className="rating px-2">
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            </div>

                        </div>
                    </div>
                    <div id="item2" className="carousel-item w-full sm:w-1/2 lg:w-1/3">
                        <div className='flex flex-col justify-between shadow-2xl p-8 border-2 border-purple-100 '>
                            <div className='flex justify-Start items-center'>
                                <img src="https://i.ibb.co/PxzDzcR/1053244.png" className="w-8" />
                                <div>
                                    <h1 className='text- px-2 font-semibold'>Allen Walker</h1>
                                </div>
                            </div>
                            <div>
                                <p className='text-justify p-2 max-w-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi error laudantium dicta veritatis minus deserunt soluta ab voluptate sunt sapiente!</p>
                            </div>
                            <div className="rating px-2">
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" checked />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            </div>

                        </div>
                    </div>
                    <div id="item2" className="carousel-item w-full sm:w-1/2 lg:w-1/3">
                        <div className='flex flex-col justify-between shadow-2xl p-8 border-2 border-purple-100 '>
                            <div className='flex justify-Start items-center'>
                                <img src="https://i.ibb.co/PxzDzcR/1053244.png" className="w-8" />
                                <div>
                                    <h1 className='text- px-2 font-semibold'>Allen Walker</h1>
                                </div>
                            </div>
                            <div>
                                <p className='text-justify p-2 max-w-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi error laudantium dicta veritatis minus deserunt soluta ab voluptate sunt sapiente!</p>
                            </div>
                            <div className="rating px-2">
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" checked />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            </div>

                        </div>
                    </div>
                    <div id="item2" className="carousel-item w-full sm:w-1/2 lg:w-1/3">
                        <div className='flex flex-col justify-between shadow-2xl p-8 border-2 border-purple-100 '>
                            <div className='flex justify-Start items-center'>
                                <img src="https://i.ibb.co/PxzDzcR/1053244.png" className="w-8" />
                                <div>
                                    <h1 className='text- px-2 font-semibold'>Allen Walker</h1>
                                </div>
                            </div>
                            <div>
                                <p className='text-justify p-2 max-w-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi error laudantium dicta veritatis minus deserunt soluta ab voluptate sunt sapiente!</p>
                            </div>
                            <div className="rating px-2">
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" checked />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            </div>

                        </div>
                    </div>

                    <div id="item3" className="carousel-item w-full sm:w-1/2 lg:w-1/3">
                        <div className='flex flex-col justify-between shadow-2xl p-8 border-2 border-purple-100 '>
                            <div className='flex justify-Start items-center'>
                                <img src="https://i.ibb.co/PxzDzcR/1053244.png" className="w-8" />
                                <div>
                                    <h1 className='text- px-2 font-semibold'>Allen Walker</h1>
                                </div>
                            </div>
                            <div>
                                <p className='text-justify p-2 max-w-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi error laudantium dicta veritatis minus deserunt soluta ab voluptate sunt sapiente!</p>
                            </div>
                            <div className="rating px-2">
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" checked />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            </div>

                        </div>
                    </div>
                    <div id="item3" className="carousel-item w-full sm:w-1/2 lg:w-1/3">
                        <div className='flex flex-col justify-between shadow-2xl p-8 border-2 border-purple-100 '>
                            <div className='flex justify-Start items-center'>
                                <img src="https://i.ibb.co/PxzDzcR/1053244.png" className="w-8" />
                                <div>
                                    <h1 className='text- px-2 font-semibold'>Chris Walks</h1>
                                </div>
                            </div>
                            <div>
                                <p className='text-justify p-2 max-w-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi error laudantium dicta veritatis minus deserunt soluta ab voluptate sunt sapiente!</p>
                            </div>
                            <div className="rating px-2">
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" checked />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            </div>

                        </div>
                    </div>
                    <div id="item3" className="carousel-item w-full sm:w-1/2 lg:w-1/3">
                        <div className='flex flex-col justify-between shadow-2xl p-8 border-2 border-purple-100 '>
                            <div className='flex justify-Start items-center'>
                                <img src="https://i.ibb.co/PxzDzcR/1053244.png" className="w-8" />
                                <div>
                                    <h1 className='text- px-2 font-semibold'>Emma Rica</h1>
                                </div>
                            </div>
                            <div>
                                <p className='text-justify p-2 max-w-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi error laudantium dicta veritatis minus deserunt soluta ab voluptate sunt sapiente!</p>
                            </div>
                            <div className="rating px-2">
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" checked />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            </div>

                        </div>
                    </div>

                    <div id="item4" className="carousel-item w-full sm:w-1/2 lg:w-1/3">
                        <div className='flex flex-col justify-between shadow-2xl p-8 border-2 border-purple-100 '>
                            <div className='flex justify-Start items-center'>
                                <img src="https://i.ibb.co/PxzDzcR/1053244.png" className="w-8" />
                                <div>
                                    <h1 className='text- px-2 font-semibold'>Allen Walker</h1>
                                </div>
                            </div>
                            <div>
                                <p className='text-justify p-2 max-w-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi error laudantium dicta veritatis minus deserunt soluta ab voluptate sunt sapiente!</p>
                            </div>
                            <div className="rating px-2">
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" checked />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            </div>

                        </div>
                    </div>
                    <div id="item4" className="carousel-item w-full sm:w-1/2 lg:w-1/3">
                        <div className='flex flex-col justify-between shadow-2xl p-8 border-2 border-purple-100 '>
                            <div className='flex justify-Start items-center'>
                                <img src="https://i.ibb.co/PxzDzcR/1053244.png" className="w-8" />
                                <div>
                                    <h1 className='text- px-2 font-semibold'>Chris Walks</h1>
                                </div>
                            </div>
                            <div>
                                <p className='text-justify p-2 max-w-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi error laudantium dicta veritatis minus deserunt soluta ab voluptate sunt sapiente!</p>
                            </div>
                            <div className="rating px-2">
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" checked />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            </div>

                        </div>
                    </div>
                    <div id="item4" className="carousel-item w-full sm:w-1/2 lg:w-1/3">
                        <div className='flex flex-col justify-between shadow-2xl p-8 border-2 border-purple-100 '>
                            <div className='flex justify-Start items-center'>
                                <img src="https://i.ibb.co/PxzDzcR/1053244.png" className="w-8" />
                                <div>
                                    <h1 className='text- px-2 font-semibold'>Emma Rica</h1>
                                </div>
                            </div>
                            <div>
                                <p className='text-justify p-2 max-w-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi error laudantium dicta veritatis minus deserunt soluta ab voluptate sunt sapiente!</p>
                            </div>
                            <div className="rating px-2">
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" checked />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            </div>

                        </div>
                    </div>

                </div>
                <div className="flex justify-center w-full py-2 gap-2">
                    <a href="#item1" className="btn btn-xs">1</a>
                    <a href="#item2" className="btn btn-xs">2</a>
                    <a href="#item3" className="btn btn-xs">3</a>
                    <a href="#item4" className="btn btn-xs">4</a>
                </div>

            </div>

        </div>
    );
};

export default Home;