import React from 'react';
import AcceptTask from './AcceptTask';
import NewTask from './NewTask';
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';

const TaskList = ({data}) => {
     console.log(data);
     
  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap py-5 w-full mt-10 rounded-l-xl'>
        {data.tasks.map( (element, idx) => {
            if (element.active){
              return <AcceptTask key = {idx} data={element}/>
            }
            if (element.newTask){
              return <NewTask key = {idx} data={element}/>
            }
            if (element.completed){
              return <CompleteTask key = {idx} data={element}/>
            }
            if (element.failed){
              return <FailedTask key = {idx} data={element}/>
            }

        })}  
    </div>
  );
};

export default TaskList;