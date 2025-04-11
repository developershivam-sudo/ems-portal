import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {

    const [userData, setUserData] = useContext(AuthContext)

    const [taskTitle, setTaskTitle] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const [assignTo, setAssignTo] = useState('');
    const [taskCategory, setTaskCategory] = useState('');
    const [taskDescription, setTaskDescription] = useState('');''

    const [newTask, setNewTask] = useState({});

    const submitHandler = (e) => {
        e.preventDefault()
        // console.log(taskTitle, taskDate, taskCategory, taskDescription);
        setNewTask({taskTitle, taskDate, assignTo, taskCategory, taskDescription, active:false, newTask:true, failed:false, completed:false});
        

        const data = userData

        
        data.forEach((element) => {
            if(assignTo == element.firstName){
                element.tasks.push(newTask)
                element.taskCounts.newTask += 1    
            }
        });
        setUserData(data)
        console.log(data);
        
        
        setTaskTitle('')
        setTaskDate('')
        setAssignTo('')
        setTaskCategory('')
        setTaskDescription('')
    }


  return (
    <div className='p-5 bg-[#1C1C1C] mt-7 rounded'>
        <form 
        className='flex flex-wrap w-full items-start justify-between'>
            <div className='w-1/2'>
                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                    <input 
                    value={taskTitle}
                    onChange={(e) => {
                        setTaskTitle(e.target.value)
                    }}
                    className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]' type="text" placeholder='Make a UI design' />
                </div>
                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                    <input
                    value={taskDate}
                    onChange={(e) => {
                        setTaskDate(e.target.value)
                    }}
                    className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]' type="date" />
                </div>
                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
                    <input
                    value={assignTo}
                    onChange={(e) => {
                        setAssignTo(e.target.value)
                    }}
                    className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]' type="text" placeholder='employee name' />
                </div>
                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                    <input
                    value={taskCategory}
                    onChange={(e) => {
                        setTaskCategory(e.target.value)
                    }}
                    className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]' type="text" placeholder='design, dev, etc' />
                </div>
            </div>
                <div className='w-2/5 flex flex-col items-start'>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                    <textarea
                    value={taskDescription}
                    onChange={ (e) => {
                        setTaskDescription(e.target.value)
                    }}
                    className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400' name="" id="" cols="30" rows="10"></textarea>
                    <button 
                     onClick={ (e) => {
                        submitHandler(e)
                        console.log();
                        
                    }}
                    className='bg-emerald-500 py-3 px-5 hover:bg-emerald-600 rounded text-sm mt-4 w-full'>Create Task</button>
            </div>

        </form>
      </div>
  );
};

export default CreateTask;