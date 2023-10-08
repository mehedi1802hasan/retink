import React from 'react';
import { FaHome } from 'react-icons/fa';
import { BiBookContent } from 'react-icons/bi';
import { CiSettings } from 'react-icons/ci';
import { IoIosLogOut } from 'react-icons/io';
import { Outlet } from 'react-router-dom';
import { FiFramer } from 'react-icons/fi';


const Sidebar = () => {
    return (
       <div className=''>
         <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col  ">
    {/* Page content here */}
  <Outlet></Outlet>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="bg-[#F1EDFD] text-xl menu p-5 w-24 min-h-full text-base-content flex-col justify-between ">
      {/* Sidebar content here */}
      <div className='space-y-5'>

      <li className='transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-700 text-red-500'><a><FiFramer/></a></li>
      <li className='transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-700'><a><FaHome/></a></li>
      <li className='transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-700'><a><BiBookContent/></a></li>
      </div>
      <div className='space-y-5'>
      <li className='transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-700'><a><CiSettings/></a></li>
      <li className='transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-700'><a><IoIosLogOut/></a></li>
      </div>
    </ul>
  
  </div>
</div>
       </div>
    );
};

export default Sidebar;