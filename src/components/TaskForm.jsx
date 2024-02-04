// import PropTypes from "prop-types";
import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";


function TaskForm() {
  // console.log(createTask);
  const [tittle, setTittle] = useState('')
  const [description, setDescription] = useState('')
  const { createTask } = useContext(TaskContext)
  const getData = (e) => {
    e.preventDefault()
    createTask({
      tittle, description
    });
    setTittle('')
    setDescription('')
  }

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={getData} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white mb-3 text-center">Crea una tarea</h1>
        <input id="tittle" placeholder="escribe tarea"
          className="bg-slate-300 p-3 w-full mb-2"
          onChange={(e) => setTittle(e.target.value)}
          value={tittle} autoFocus
        ></input>
        <textarea id="desc" placeholder="Agrega descripcion de la tarea"
          className="bg-slate-300 p-3 w-full mb-2"
          onChange={(e) => setDescription(e.target.value)} value={description}
        ></textarea>
        <button
          className="bg-indigo-500 px-3 py-1 rounded-md"
          onClick={getData}> Guardar</button>
      </form>
    </div>
  )
}

// TaskForm.propTypes = {
//   createTask: PropTypes.func.isRequired
// }



export default TaskForm