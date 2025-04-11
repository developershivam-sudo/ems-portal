import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const AllTask = () => {

      const [userData, setUserData] = useContext(AuthContext)
      
  return (
      
      
    <div className='bg-[#1C1C1C] p-5 rounded mt-5 h-100'>

      <div className='bg-red-400 border-2 border-white py-2 px-4 mb-2 flex justify-between rounded'>
             <h2 className='w-1/5 text-xl font-medium '>Employee Name</h2>
             <h5 className='w-1/5 text-xl font-medium '>New Task</h5>
             <h5 className='w-1/5 text-xl font-medium '>Active Task</h5>
             <h5 className='w-1/5 text-xl font-medium '>Completed</h5>
             <h5 className='w-1/5 text-xl font-medium '>Failed</h5>
      </div>

      <div className=''>
      {userData.map( (elem, idx) => {
             return <div key={idx} className='bg-gray-600 border-2 border-emerald-500 py-2 px-4 mb-2 flex justify-between rounded'>
             <h2 className='text-xl font-medium w-1/5'>{elem.firstName}</h2>
             <h5 className='text-xl font-medium w-1/5 text-blue-500'>{elem.taskCounts.newTask}</h5>
             <h5 className='text-xl font-medium w-1/5 text-yellow-400'>{elem.taskCounts.active}</h5>
             <h5 className='text-xl font-medium w-1/5 text-white'>{elem.taskCounts.completed}</h5>
             <h5 className='text-xl font-medium w-1/5 text-red-400'>{elem.taskCounts.failed}</h5>
            </div>
      })}
      </div>
      
    </div>
  );
};

export default AllTask;