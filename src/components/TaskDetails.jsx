import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from './Button';

import './TaskDetails.css'


const TaskDetails = ({task}) => {
    const [taskDetail, setTaskDetail] = useState('')
    const params = useParams('id')
    const history = useNavigate()
    const goBack = () => {
        history(-1)
    }

    useEffect(() => {
        const fetchTasks = async () => {
          const { data } = await axios.get('http://localhost:8000/tasks/' + params.id)//.then(data => {setTaskDetail(data)})
          setTaskDetail(data)
        }
        fetchTasks();
      },[params.id])


    return ( 
        <>
            <div className='back-button-container'>
                <Button onClick={goBack}>Voltar</Button>
            </div>
            <div className="task-detail-container">
                <h2 className='task-titulo'>{taskDetail.titulo}</h2>
                <p className='task-resumo'>{taskDetail.resumo}</p>
                <p>id: {taskDetail.id}</p>
            </div>
        </>
    );
}
 
export default TaskDetails;