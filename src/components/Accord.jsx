import React, { useState } from 'react';
import { Plus, Dash, PatchCheckFill } from 'react-bootstrap-icons';

const faqData = [
  {
    id: 1,
    question: "How do I transition from Web2 to Web3?",
    answer: "Our curriculum is designed to bridge the gap. We start with advanced React and TypeScript before moving into Solidity, Ethers.js, and Smart Contract security."
  },
  {
    id: 2,
    question: "Is there a certificate upon completion?",
    answer: "Yes! Every graduate receives a verifiable NFT certificate on the Polygon network, proving your skills to future employers in the blockchain space."
  },
  {
    id: 3,
    question: "Do I need prior coding experience?",
    answer: "While our 'Foundation' modules are beginner-friendly, our core 'EduStackPro' tracks require a basic understanding of HTML, CSS, and JavaScript."
  },
  {
    id: 4,
    question: "Can I access the classroom on mobile?",
    answer: "Absolutely. Our platform is fully responsive, allowing you to learn on the go, whether you're using a smartphone, tablet, or laptop."
  }
];

const Accord = () => {
  const [openPanel, setOpenPanel] = useState(null);

  const togglePanel = (id) => {
    setOpenPanel(openPanel === id ? null : id);
  };

  return (
    <div className="w-full max-w-3xl mx-auto py-16 px-6" id='accord'>
      {/* Header Section */}
      <div className="text-center mb-12">
        <span className="text-orange-500 font-bold tracking-widest uppercase text-sm">Support Center</span>
        <h2 className="text-3xl md:text-4xl font-black text-green-900 mt-2 mb-4">
          Common Questions
        </h2>
        <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-r-xl inline-flex items-center text-left">
          <PatchCheckFill className="text-green-600 mr-3 shrink-0" size={24} />
          <p className="text-sm text-green-800">
            Need more help? <a href="mailto:support@edustackpro.com" className="font-bold underline hover:text-orange-600 transition">Contact our developer team</a> for dedicated support.
          </p>
        </div>
      </div>

      {/* Accordion Items */}
      <div className="space-y-4">
        {faqData.map((item) => (
          <div 
            key={item.id} 
            className={`border-b border-gray-200 transition-all duration-300 ${openPanel === item.id ? 'bg-white' : ''}`}
          >
            <button 
              className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
              onClick={() => togglePanel(item.id)}
            >
              <span className={`text-lg font-bold transition-colors duration-300 ${openPanel === item.id ? 'text-green-700' : 'text-gray-800 group-hover:text-green-600'}`}>
                {item.question}
              </span>
              <span className={`p-2 rounded-full transition-all duration-300 ${openPanel === item.id ? 'bg-orange-500 text-white rotate-180' : 'bg-gray-100 text-gray-500'}`}>
                {openPanel === item.id ? <Dash size={20} /> : <Plus size={20} />}
              </span>
            </button>

            <div 
              className={`overflow-hidden transition-all duration-500 ease-in-out ${openPanel === item.id ? 'max-h-60 pb-6' : 'max-h-0'}`}
            >
              <p className="text-gray-600 leading-relaxed text-base">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accord;