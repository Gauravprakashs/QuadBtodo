// src/components/TaskList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../store/actions';
import { List, ListItem, ListItemText, IconButton, ListItemSecondaryAction } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import './taskList.css'
const TaskList = () => {
    const tasks = useSelector((state) => state.tasks);
    const dispatch = useDispatch();

    return (
        <List className='task-list'>
            {tasks.map((task, index) => (
                <ListItem key={index} className='task-item' divider>
                    <ListItemText primary={task} />
                    <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="delete" onClick={() => dispatch(deleteTask(index))}>
                            <DeleteIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            ))}
        </List>
    );
};

export default TaskList;