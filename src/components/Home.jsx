import React, { useState, useEffect } from 'react';
import CourseCard from './CourseCard';
import Img1 from '../assets/Img1.jpg';
import Img2 from '../assets/Img2.jpg';
import Img3 from '../assets/Img3.jpg';

const homes = [
    { id: 1, img: Img1, words: 'Master the World of Web3' },
    { id: 2, img: Img2, words: 'Learn from Industry Experts' },
    { id: 3, img: Img3, words: 'Build Real-World Projects' },
];

const Home = () => {
    // 1. Expanded Course Data
    const allCourses = [
        { id: 1, title: "Frontend Web3 Mastery", price: 49, instructor: "Hadizah", image: Img1, category: "Development", rating: 4.8, students: 120 },
        { id: 2, title: "Solidity Fundamentals", price: 59, instructor: "Web3Doctuur", image: Img2, category: "Blockchain", rating: 4.9, students: 85 },
        { id: 3, title: "UI/UX for Developers", price: 29, instructor: "Tijani", image: Img3, category: "Design", rating: 4.7, students: 210 },
        { id: 4, title: "Advanced React Patterns", price: 45, instructor: "Hadizah", image: Img1, category: "Development", rating: 4.9, students: 95 },
        { id: 5, title: "Ethereum Smart Contracts", price: 69, instructor: "Web3Doctuur", image: Img2, category: "Blockchain", rating: 5.0, students: 40 },
        { id: 6, title: "Tailwind CSS Mastery", price: 19, instructor: "Hadizah", image: Img3, category: "Design", rating: 4.6, students: 300 },
    ];

    const [courses, setCourses] = useState(allCourses);
    const [searchTerm, setSearchTerm] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");
    const [currentIndex, setCurrentIndex] = useState(0);

    const categories = ["All", "Development", "Blockchain", "Design"];

    useEffect(() => {
        const filtered = allCourses.filter(course => {
            const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCategory = activeCategory === "All" || course.category === activeCategory;
            return matchesSearch && matchesCategory;
        });
        setCourses(filtered);
    }, [searchTerm, activeCategory]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % homes.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='bg-white w-full' id='home'>
            {/* HERO SECTION */}
            <div className='w-full h-[85vh] flex flex-col md:flex-row relative overflow-hidden bg-green-900'>
                <div className='flex-1 flex justify-center items-center z-20 px-6'>
                    <div className='bg-white/10 backdrop-blur-lg border border-white/20 p-10 rounded-3xl text-center shadow-2xl max-w-2xl'>
                        <span className="text-orange-400 font-bold tracking-widest uppercase text-sm mb-4 block">Future-Proof Your Career</span>
                        <h2 className='text-white text-4xl md:text-6xl font-black mb-6 leading-tight'>
                            {homes[currentIndex].words}
                        </h2>
                        <div className="flex gap-4 justify-center">
                            <button className="bg-orange-500 text-white px-8 py-3 rounded-full font-bold hover:bg-orange-600 transition shadow-lg">Get Started</button>
                            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-green-900 transition">View Courses</button>
                        </div>
                    </div>
                </div>
                <div className='absolute inset-0 md:relative md:flex-1 h-full'>
                    <img src={homes[currentIndex].img} alt="Slider" className="w-full h-full object-cover opacity-30 md:opacity-80 transition-all duration-1000 transform scale-105" />
                </div>
            </div>

            {/* --- NEW FEATURE: STATS BAR --- */}
            <div className="bg-white py-12 border-b">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div><h4 className="text-4xl font-black text-green-700">10k+</h4><p className="text-gray-500 font-medium">Students</p></div>
                    <div><h4 className="text-4xl font-black text-green-700">50+</h4><p className="text-gray-500 font-medium">Expert Tutors</p></div>
                    <div><h4 className="text-4xl font-black text-green-700">100+</h4><p className="text-gray-500 font-medium">Courses</p></div>
                    <div><h4 className="text-4xl font-black text-green-700">4.9</h4><p className="text-gray-500 font-medium">Rating</p></div>
                </div>
            </div>

            {/* SEARCH & FILTER */}
            <div className="py-20 px-6 md:px-20 max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div className="max-w-md">
                        <h2 className="text-4xl font-black text-gray-900 mb-4">Jump back in!</h2>
                        <p className="text-gray-500 text-lg">The best skills for today's market are just one click away.</p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        {categories.map(cat => (
                            <button 
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-6 py-2 rounded-full font-bold transition ${activeCategory === cat ? 'bg-orange-500 text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* COURSE GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                    {courses.map((course) => (
                        <CourseCard key={course.id} {...course} />
                    ))}
                </div>
            </div>

            {/* --- NEW FEATURE: NEWSLETTER --- */}
            <div className="bg-gray-900 py-20 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Stay ahead of the curve</h2>
                    <p className="text-gray-400 mb-10 text-lg">Get notified about new courses, Web3 trends, and exclusive discounts.</p>
                    <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                        <input type="email" placeholder="Enter your email" className="flex-grow px-6 py-4 rounded-xl focus:outline-none" />
                        <button className="bg-green-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-green-700 transition">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;