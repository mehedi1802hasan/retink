import React from 'react';
import { BiPencil } from 'react-icons/bi';
import { FaArrowTrendUp } from 'react-icons/fa6';
import { BiEdit } from 'react-icons/bi';
import { MdMovieEdit } from 'react-icons/md';


const MostPopularTools = () => {
    return (
        <div>
            <div className='my-3 p-3'>
            <h3 className='font-semibold text-xl '>Most Popular Tools</h3>
             <p className='text-base'>Explore the trending tools to create your copies fast</p>
            </div>
      <div className='bg-[#F4F3F6] p-3 mb-3'>

      <div className=' '>
                <h3 className='my-3 text-lg font-semibold'>Social media</h3>
                <div className='grid grid-cols-2 md:grid-cols-4  md:gap-x-4'>
                    <div className=' p-3 w-[300px] h-[192px] bg-[#FFFFFF] rounded-lg'>
                      <div className='flex justify-between mt-2 mb-4 '>  <span className='text-[#EA7E00]'><BiPencil/>  </span> <span><FaArrowTrendUp/></span></div>
                      <h3 className='text-2xl  font-semibold mb-1 '>Blog writing</h3>
                      <h3 className='text-lg'>Generate the best blog post to fit your audience with just few clicks of a button</h3>
                    </div>
                    <div className=' p-3 w-[300px] h-[192px] bg-[#FFFFFF] rounded-lg'>
                      <div className='flex justify-between  mt-2 mb-4 '>  <span className='text-[#00C48C]'><BiEdit/>  </span> <span><FaArrowTrendUp/></span></div>
                      <h3 className='text-2xl  font-semibold mb-1'>Product description</h3>
                      <h3 className='text-lg'>Instantly generate engaging product descriptions that sell</h3>
                    </div>
                    <div className=' p-3 w-[300px] h-[192px] bg-[#FFFFFF] rounded-lg'>
                      <div className='flex justify-between  mt-2 mb-4 '>  <span className='text-[#EA0022]'><MdMovieEdit/>  </span> <span><FaArrowTrendUp/></span></div>
                      <h3 className='text-2xl  font-semibold mb-1'>Article writer</h3>
                      <h3 className='text-lg'>Automatically create unique factual articles at the touch of a button</h3>
                    </div>
                    <div className=' p-3  w-[300px] h-[192px] bg-[#FFFFFF] rounded-lg'>
                      <div className='flex justify-between  mt-2 mb-4 '>  <span className='text-[#EA7E00]'><BiPencil/>  </span> <span><FaArrowTrendUp/></span></div>
                      <h3 className='text-2xl  font-semibold mb-1'>Blog writng</h3>
                      <h3 className='text-lg'>Generate the best blog post to fit your audience with just few clicks of a button</h3>
                    </div>
                </div>
            </div>
            <div className='mt-1'>
                <h3 className='my-3 text-lg font-semibold'>Social media</h3>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-x-4'>
                    <div className=' p-3 w-[300px] h-[192px] bg-[#FFFFFF] rounded-lg'>
                      <div className='flex justify-between mt-2 mb-4 '>  <span className='text-[#EA7E00]'><BiPencil/>  </span> <span><FaArrowTrendUp/></span></div>
                      <h3 className='text-2xl  font-semibold mb-1 '>Blog writing</h3>
                      <h3 className='text-lg'>Generate the best blog post to fit your audience with just few clicks of a button</h3>
                    </div>
                    <div className=' p-3 w-[300px] h-[192px] bg-[#FFFFFF] rounded-lg'>
                      <div className='flex justify-between  mt-2 mb-4 '>  <span className='text-[#00C48C]'><BiEdit/>  </span> <span><FaArrowTrendUp/></span></div>
                      <h3 className='text-2xl  font-semibold mb-1'>Product description</h3>
                      <h3 className='text-lg'>Instantly generate engaging product descriptions that sell</h3>
                    </div>
                    <div className=' p-3 w-[300px] h-[192px] bg-[#FFFFFF] rounded-lg'>
                      <div className='flex justify-between  mt-2 mb-4 '>  <span className='text-[#EA0022]'><MdMovieEdit/>  </span> <span><FaArrowTrendUp/></span></div>
                      <h3 className='text-2xl  font-semibold mb-1'>Article writer</h3>
                      <h3 className='text-lg'>Automatically create unique factual articles at the touch of a button</h3>
                    </div>
                    <div className=' p-3  w-[300px] h-[192px] bg-[#FFFFFF] rounded-lg'>
                      <div className='flex justify-between  mt-2 mb-4 '>  <span className='text-[#EA7E00]'><BiPencil/>  </span> <span><FaArrowTrendUp/></span></div>
                      <h3 className='text-2xl  font-semibold mb-1'>Blog writng</h3>
                      <h3 className='text-lg'>Generate the best blog post to fit your audience with just few clicks of a button</h3>
                    </div>
                </div>
            </div>

      </div>

        </div>
    );
};

export default MostPopularTools;