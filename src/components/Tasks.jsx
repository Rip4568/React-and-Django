import React from "react"

import Task from './Task'

const Tasks = ({ tasks, handleTaskClick, handleTaskRemove, handleTaskRemoveAPI }) => {
	return (
	<div>
		{tasks.map(task => <Task task={task} handleTaskClick={handleTaskClick} handleTaskRemove={handleTaskRemove} handleTaskRemoveAPI={handleTaskRemoveAPI} />)}
	</div>
  )
}

export default Tasks