import React, { useState } from 'react';
import * as Icons from 'react-bootstrap-icons';

const Accord = () => {
  const [openPanel, setOpenPanel] = useState(null);

  const togglePanel = (panel) => {
    setOpenPanel(openPanel === panel ? null : panel);
  };

  return (
    <div className="w-full max-w-lg mx-auto mt-5 md:mt-10 p-5 md:p-10 " id='accord'>
      <h1 className='flex text-orange-500 justify-center mb-3 items-center text-xl md:text-2xl font-bold'>Frequently Asked Questions</h1>
      <p className='italic bg-gray-300 bg-opacity-30 font-bold p-4 md:p-6 text-sm md:text-base text-black'>
        There is nothing serious about this website. Contact the developer for future collaboration.
        Check the <span><a href='#service' className='underline text-green-700'>Services</a></span> we offer that make us stand out. We ensure premium satisfaction.
      </p>
      {/* Accordion Item 1 */}
      <div className="border border-orange-500 rounded-lg mb-2">
        <h2 className="bg-green-700 p-3 md:p-4 rounded-t-lg cursor-pointer" onClick={() => togglePanel(1)}>
          <button className="flex font-bold text-slate-900 justify-between w-full text-left">
            <Icons.Code width={20} height={20} className='text-orange-500'/> Question one
            <span className='text-orange-500 font-bold text-lg md:text-xl'>{openPanel === 1 ? '<' : '>'}</span>
          </button>
        </h2>
        <div className={`overflow-hidden transition-all duration-300 ${openPanel === 1 ? 'max-h-96' : 'max-h-0'}`}>
          <div className="p-3 md:p-4 text-black">
            <strong>Answers to Question Four</strong>
          </div>
        </div>
      </div>

      {/* Accordion Item 2 */}
      <div className="border border-gray-300 rounded-lg mb-2">
        <h2 className="bg-green-700 p-3 md:p-4 rounded-t-lg cursor-pointer" onClick={() => togglePanel(2)}>
          <button className="flex font-bold text-slate-900 justify-between w-full text-left">
            <Icons.Code width={20} height={20} className='text-orange-500'/> Question Two
            <span className='text-orange-500 font-bold text-lg md:text-xl'>{openPanel === 2 ? '<' : '>'}</span>
          </button>
        </h2>
        <div className={`overflow-hidden transition-all duration-300 ${openPanel === 2 ? 'max-h-96' : 'max-h-0'}`}>
          <div className="p-3 md:p-4 text-black">
            <strong>Answers to Question Four</strong>
          </div>
        </div>
      </div>

      {/* Accordion Item 3 */}
      <div className="border border-gray-300 rounded-lg mb-2">
        <h2 className="bg-green-700 p-3 md:p-4 rounded-t-lg cursor-pointer" onClick={() => togglePanel(3)}>
          <button className="flex font-bold text-slate-900 justify-between w-full text-left">
            <Icons.Code width={20} height={20} className='text-orange-500'/> Question Three
            <span className='text-orange-500 font-bold text-lg md:text-xl'>{openPanel === 3 ? '<' : '>'}</span>
          </button>
        </h2>
        <div className={`overflow-hidden transition-all duration-300 ${openPanel === 3 ? 'max-h-96' : 'max-h-0'}`}>
          <div className="p-3 md:p-4 text-black">
            <strong>Answers to Question Four</strong>
          </div>
        </div>
      </div>

      {/* Accordion Item 4 */}
      <div className="border border-gray-300 rounded-lg mb-2">
        <h2 className="bg-green-700 p-3 md:p-4 rounded-t-lg cursor-pointer" onClick={() => togglePanel(4)}>
          <button className="flex font-bold text-slate-900 justify-between w-full text-left">
            <Icons.Code width={20} height={20} className='text-orange-500'/> Question Four
            <span className='text-orange-500 font-bold text-lg md:text-xl'>{openPanel === 4 ? '<' : '>'}</span>
          </button>
        </h2>
        <div className={`overflow-hidden transition-all duration-300 ${openPanel === 4 ? 'max-h-96' : 'max-h-0'}`}>
          <div className="p-3 md:p-4 text-black">
            <strong>Answers to Question Four.</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accord;
