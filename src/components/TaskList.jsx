
import TaskCard from "./TaskCard";
import { TaskContext  } from "../context/TaskContext";
import { useContext } from "react";

  function TaskList() {  

    const {tasks} = useContext(TaskContext)


    if (tasks.lenght === 0) {
      return <h1 className="text-white text-4xl font-bold text-center"> No hay tareas</h1>
    }    
  return (
    <div className="grid grid-cols-4 gap-2">
        {tasks.map((tasks)=>(            
         <TaskCard tasks={tasks} key={tasks.id}/>
        ))
        }
    </div>
  )
}
 

export default TaskList