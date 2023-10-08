import React from 'react';
import { FaRegCopyright } from 'react-icons/fa';
import { MdOutlineCalendarMonth } from 'react-icons/md';
import { GrNotification } from 'react-icons/gr';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { RxCross2 } from 'react-icons/rx';

const Navbar = () => {
    return (
      <div className='flex justify-between  items-center  '>
        <div className='flex justify-between gap-32'>
             <div className='relative ml-2'> <input placeholder='Search for templates project etc' className='w-[500px] p-3 mt-1  border-2' type="text" /><span className='absolute right-2 top-5  '><p className='flex items-center justify-between gap-7'><AiOutlineMenuUnfold/> <RxCross2/></p> </span></div>
        <div className='gap-10 flex mt-2'>
        <h3 className='bg-[#754DE8] px-9 py-1 rounded-2xl text-white flex items-center '>Create content</h3>
          <h3 className='flex items-center gap-4 bg-[#F1EDFD] rounded-3xl font-semibold px-4'><span className='text-xl'><FaRegCopyright/></span> 20</h3>
        </div>
        </div>
        <div className='flex gap-20 bg-[#F1EDFD] items-center py-2 text-2xl '>
  <h3 className='ml-5'> <MdOutlineCalendarMonth/></h3>
  <h3><GrNotification/></h3>
  <h3 className='mr-6'><img className='w-12 h-12 rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_-Q0773g3Le4zRxvCLR1AciBv_MdwvPoShA&usqp=CAU" alt="" /></h3>
        </div>
      </div>
    );
};

export default Navbar;