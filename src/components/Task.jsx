import React from 'react';
import { CgClose, CgInfo } from 'react-icons/cg'
import { useNavigate } from 'react-router-dom';


import './Task.css'

const Task = ( { task, handleTaskClick, handleTaskRemove, handleTaskRemoveAPI} ) => {
	const history = useNavigate()

	const handleTaskDetailsClick = () => {
		history(`/${task.id}`)
	}
	return ( 
		<div className='task-container' style={task.completado ? {borderLeft:'6px solid chartreuse'} : {}}>
			<div className="task-title" onClick={() => handleTaskClick(task.id)}>
				{task.titulo}
			</div>
			<div className='buttons-container'>
				<button onClick={() => /* handleTaskRemove(task.id) */ handleTaskRemoveAPI(task.id)} className="remove-task-button"><CgClose/></button>
				<button className="see-task-details-button" onClick={handleTaskDetailsClick}>
					<CgInfo />
				</button>
			</div>
		</div>
	);
}
 
export default Task;