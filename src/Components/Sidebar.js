import React from 'react';
import { FiAlertCircle, FiUsers, FiSettings, FiActivity, FiAward, FiBarChart2, FiArchive, FiHelpCircle } from 'react-icons/fi';

const Sidebar = () => {
  return (
    <div className='sidebar bg-purple-700 h-screen  lg:w-65  md:w-64 py-4'>
         <ul className='space-y-8'>
        <li className='text-lg hover:text-blue-500 flex justify items-center'><FiAlertCircle className="mr-2" />Reported Threats</li>
        <li className='text-lg hover:text-blue-500  flex justify items-center'><FiUsers className="mr-2" />User Management</li>
        <li className='text-lg hover:text-blue-500 flex justify items-center'><FiSettings className="mr-2" />Campaign Creations</li>
        <li className='text-lg hover:text-blue-500 flex justify items-center'><FiActivity className="mr-2" />Active Campaigns</li>
        <li className='text-lg hover:text-blue-500 flex justify items-center'><FiAward className="mr-2" />LeaderBoard</li>
        <li className='text-lg hover:text-blue-500 flex justify items-center'><FiBarChart2 className="mr-2" />Campaign Results</li>
        <li className='text-lg hover:text-blue-500 flex justify items-center'><FiArchive className="mr-2" />Previous Campaigns</li>
        <li className='text-lg hover:text-blue-500 flex justify items-center'><FiHelpCircle className="mr-2" />Help</li>
      </ul>
</div>
  )
}

export default Sidebar;
  

