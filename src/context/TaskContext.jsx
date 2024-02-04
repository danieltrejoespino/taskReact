import { createContext,useState,useEffect } from "react";
import { tareas as data } from "../components/data/tasks";

export const TaskContext = createContext()

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([])
  
  function createTask(task) {
    setTasks([...tasks, {
      tittle: task.tittle,
      id: tasks.length,
      description: task.description
    }])
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter(task=>task.id !==taskId))    
  }

  
  useEffect(() => {
    setTasks(data)
  }, [])
  
  return (
    <TaskContext.Provider
    value={{
      tasks,
      createTask,
      deleteTask
    }}>
      {props.children}
    </TaskContext.Provider>
  )
}

