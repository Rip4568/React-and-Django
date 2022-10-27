import React, { useState } from 'react';

import './AddTask.css'
import Button from './Button'

const AddTask = ({handleTaskAdidition, handleTaskAdiditionAPI}) => {
	const [inputData, setInputData] = useState('')
	const [resumo, setResumo] = useState('')

	const handleAddTaskClick = () => {
		//handleTaskAdidition(inputData)
		handleTaskAdiditionAPI({titulo:inputData,resumo:resumo})
		setInputData('')
		setResumo('')
	}

	return (
		<div className='add-task-container'>
			<input value={inputData} onChange={(e) => setInputData(e.target.value) }
			 className='add-task-input'
			 type="text" 
			 placeholder='Titulo*'
			 required/>
			 <input value={resumo} onChange={(e) => setResumo(e.target.value) }
			 className='add-task-input'
			 type="text" 
			 placeholder='Resumo'/>
			<div className="add-task-button-container">
				<Button onClick={handleAddTaskClick}>Adicionar Task</Button>
			</div>
		</div>
	);
}
 
export default AddTask;