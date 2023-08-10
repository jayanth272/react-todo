import * as React from 'react';
import Tasks from './Tasks';
import { Task } from '../models/task.model';

interface ITasksListProps {
    tasks : Task[]
    setTasks : React.Dispatch<React.SetStateAction<Task[]>>
}

const TasksList: React.FunctionComponent<ITasksListProps> = ({tasks, setTasks}) => {
    const handleDelete = (id : string)=>{
        setTasks(tasks.filter(task=>task.id!==id))
    }
    const renderTasks = ():JSX.Element[] => {
        return tasks.map(task =>{
           return <Tasks key = {task.id} task ={task} handleDelete={handleDelete }/>
        })
    }   
  return (
    <>
    <h2 className="mt-3">Tasks</h2>
    <div> { renderTasks() } </div>
    </>
  );
};

export default TasksList;
function setTasks(arg0: Task[]) {
    throw new Error('Function not implemented.');
}

