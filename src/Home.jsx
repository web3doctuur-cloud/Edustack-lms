import { useEffect } from 'react';
import React, { useState } from 'react';
import Img1 from './assets/Img1.jpg';
import Img2 from './assets/Img2.jpg';
import Img3 from './assets/Img3.jpg';
import Img4 from './assets/Img4.jpg';
import Nav from './Nav.jsx';

const homes = [
    {
        id: 1,
        img: Img1,
        words: 'Bringing school Home',
    },
    {
        id: 2,
        img: Img2,
        words: 'The best time to start is now',
    },
    {
        id: 3,
        img: Img3,
        words: 'Work hard, pays Hard',
    },
    {
        id: 4,
        img: Img4,
        words: "Education is the best Legacy",
    },
];

const Home = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to move to the next home
    const nextHome = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % homes.length);
    };

    // Automatically slide the homes every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            nextHome();
        }, 3000); // Slide every 3 seconds
        return () => clearInterval(interval); // Clean up interval on unmount
    }, []);

    return (
        <div className='bg-gray-200 overflow-hidden h-screen w-screen relative' id='home'>
            <Nav />
            <div className='w-screen flex flex-col md:flex-row'>
                {/* Left Column - Text Content */}
                <div className='flex-1 h-screen flex justify-center items-center'>
                    <div className='bg-gray-200 mx-5 md:m-20 h-auto justify-center items-center flex hidden md:flex md:h-screen rounded-lg flex-col'>
                        <button className='ml-14 bg-green-700 p-5 justify-center w-96 flex items-center rounded-lg shadow-lg'>
                            <h2 className='text-white text-2xl font-bold'>{homes[currentIndex].words}</h2>
                        </button>
                        <p className='italic font-bold p-6 text-lg text-black text-center'>
                            There is nothing serious about this website. Contact the developer for future collaboration.
                            Check the <span><a href='#service' className='underline font-bold text-green-700'>Services</a></span> we offer that make us stand out; we ensure premium satisfaction.
                        </p>
                        <div className='flex flex-row items-center justify-center mt-2'>
                            <a
                                href="#reviews"
                                className='font-bold bg-green-700 text-white mx-2 mb-2 hover:text-black hover:bg-transparent border hover:border-orange-500 transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-lg'
                            >
                                Reviews
                            </a>
                            <a
                                href='#footer'
                                className='font-bold bg-orange-500 text-white mx-2 mb-2 hover:text-black hover:bg-transparent border hover:border-green-900 transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-lg'
                            >
                                Contact
                            </a>
                        </div>
                    </div>
                </div>

                {/* Mobile View Content */}
                <div className='bg-transparent mx-5 m-5 md:m-20 h-auto z-40 relative flex md:hidden justify-center items-center flex-col'>
                    <button className='p-2 m-10 border-2 bg-green-700 border-orange-500 rounded-lg shadow-lg'>
                        <h2 className='text-white text-2xl font-bold'>{homes[currentIndex].words}</h2>
                    </button>
                    <p className='italic bg-opacity-80 bg-white font-bold p-6 text-lg text-black text-center'>
                        There is nothing serious about this website. Contact the developer for future collaboration.
                        Check the <span><a href='#service' className='underline font-bold text-green-700'>Services</a></span> we offer that make us stand out; we ensure premium satisfaction.
                    </p>
                    <div className='flex flex-row items-center justify-center mt-5'>
                        <a
                            href="#reviews"
                            className='font-bold bg-green-700 text-white mx-2 mb-2 hover:text-black hover:bg-transparent border hover:border-orange-500 transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-lg'
                        >
                            Reviews
                        </a>
                        <a
                            href='#footer'
                            className='font-bold bg-orange-500 text-white mx-2 mb-2 hover:text-black hover:bg-transparent border hover:border-green-900 transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-lg'
                        >
                            Contact
                        </a>
                    </div>
                </div>

                {/* Right Column - Image */}
                <div className='flex-1 h-[50vh] md:h-screen flex justify-center hidden md:block items-center'>
                    <img
                        src={homes[currentIndex].img}
                        alt={`Slide ${homes[currentIndex].id}`}
                        className="object-contain max-w-full max-h-full"
                    />
                </div>
                <div className='flex-1 h-[100vh] w-screen absolute flex md:hidden justify-center items-center'>
                    <img
                        src={homes[currentIndex].img}
                        alt={`Slide ${homes[currentIndex].id}`}
                        className="object-contain max-w-full max-h-full"
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
