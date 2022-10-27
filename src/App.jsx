import React, { useEffect, useState } from "react"
import {v4 as uuidv4} from 'uuid'

import './App.css'

import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Header from "./components/Header"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import TaskDetails from "./components/TaskDetails"
import axios from "axios"

const App = () => {
  let [tasks,setTasks] = useState([
    /* {
      id:'1',
      titulo:'Estudar Programação',
      resumo:'A chave do sucesso esta na persistencia!',
      completado: true,
    },
    {
      id:'2',
      titulo:'Ler',
      resumo:'Ler é sempre bom, por isso manter na nossa rotina diaria é muito importante',
      completado: false,
    }, */
  ])

  useEffect(() => {
    const fetchTasks = async () => {
      const { data } = await axios.get('http://localhost:8000/tasks/?format=json')
      console.log(data)
      setTasks(data)
    }
    fetchTasks();
  },[])

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map(task => {
      if(task.id === taskId) return {
        ...task, completado: !task.completado
      }
      return task
    });
    setTasks(newTasks)
  }

  const handleTaskAdidition = (task) => {
		const novaTask = [...tasks, {
			titulo: task,
      id: uuidv4(),
      completado: false,
		}]
    setTasks(novaTask);
	}

  const handleTaskRemove = (taskId) => {
    const novaTasks = tasks.filter(task => task.id !== taskId)
    setTasks(novaTasks)
  }

  const handleTaskRemoveAPI = (taskId) => {
    axios.delete('http://localhost:8000/tasks/' + taskId).then(setTasks(axios.get('http://localhost:8000/tasks/?format=json')))
  }

  const handleTaskAdiditionAPI = (data) => {
    //axios.create()
    axios.post('http://localhost:8000/tasks/',{
      titulo:`${data.titulo}`,
      resumo: data.resumo ,
      completado:false
    }).then(setTasks())
    .catch(error => {console.log(error);})
  }

  return (
  <>
    <div className="container">
      <Header></Header>
      <Router>
        <Routes>                    {/* como retornar dois elementos aqui ? */}
          <Route path="/" exact element={
            <>
              <AddTask handleTaskAdidition={handleTaskAdidition} handleTaskAdiditionAPI={handleTaskAdiditionAPI}/>
              <Tasks handleTaskRemoveAPI={handleTaskRemoveAPI} handleTaskClick={handleTaskClick} handleTaskRemove={handleTaskRemove} tasks={tasks}/>
            </>
          }
          />
          <Route path="/:id" exact element={<TaskDetails/>}/>
        </Routes>
      </Router>
    </div>
  </>
  )
}

export default App
/* 
<AddTask handleTaskAdidition={handleTaskAdidition}></AddTask>
              <Tasks
              handleTaskClick={handleTaskClick}
              handleTaskRemove={handleTaskRemove}
              tasks={tasks}></Tasks> */