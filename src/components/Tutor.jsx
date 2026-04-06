import React from 'react';
import Tutor1 from "../assets/Tutor1.jpg";
import Tutor2 from "../assets/Tutor2.jpg";
import Tutor3 from "../assets/Tutor3.jpg";
import * as Icons from 'react-bootstrap-icons';

const tutorData = [
  {
    id: 1,
    name: "Tijani Habeeb",
    role: "CEO & Blockchain Lead",
    desc: "Over 10 years of experience in system architecture and decentralized finance (DeFi).",
    img: Tutor1,
    linkedin: "#",
    twitter: "#"
  },
  {
    id: 2,
    name: "Hadizah Yusuf",
    role: "Lead Frontend Engineer",
    desc: "Specialist in React, Next.js and Web3 integrations. Passionate about UI/UX excellence.",
    img: Tutor2,
    linkedin: "#",
    twitter: "#"
  },
  {
    id: 3,
    name: "Sarah Bolanle",
    role: "Senior Smart Contract Dev",
    desc: "Expert in Solidity and security audits. Ensuring robust code for the future of Web3.",
    img: Tutor3,
    linkedin: "#",
    twitter: "#"
  }
];

const Tutor = () => {
  return (
    <section className="bg-gray-50 py-24 px-6" id="tutor">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="text-orange-500 font-bold tracking-widest uppercase text-sm">Expert Guidance</span>
          <h2 className="text-4xl md:text-5xl font-black text-green-900 mt-3 mb-6">
            Meet Your <span className="text-orange-500">Mentors</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg leading-relaxed">
            Learn from industry veterans who have built products used by thousands. 
            Our tutors bring real-world experience directly to your screen.
          </p>
        </div>

        {/* Tutors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {tutorData.map((tutor) => (
            <div key={tutor.id} className="group bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              {/* Image Container */}
              <div className="relative w-48 h-48 mx-auto mb-6">
                <div className="absolute inset-0 bg-green-700 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                <img 
                  src={tutor.img} 
                  alt={tutor.name} 
                  className="relative inset-0 w-full h-full object-cover rounded-2xl shadow-lg border-2 border-white" 
                />
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{tutor.name}</h3>
                <p className="text-orange-500 font-bold text-sm mb-4 tracking-wide uppercase">{tutor.role}</p>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {tutor.desc}
                </p>
                
                {/* Social Links */}
                <div className="flex justify-center space-x-3">
                  <a href={tutor.linkedin} className="p-2 rounded-xl bg-gray-50 text-gray-400 hover:bg-green-700 hover:text-white transition-all duration-300">
                    <Icons.Linkedin size={18} />
                  </a>
                  <a href={tutor.twitter} className="p-2 rounded-xl bg-gray-50 text-gray-400 hover:bg-green-700 hover:text-white transition-all duration-300">
                    <Icons.TwitterX size={18} />
                  </a>
                  <a href="mailto:info@edustackpro.com" className="p-2 rounded-xl bg-gray-50 text-gray-400 hover:bg-green-700 hover:text-white transition-all duration-300">
                    <Icons.EnvelopeFill size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tutor;