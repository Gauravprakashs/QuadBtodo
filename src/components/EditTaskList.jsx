// src/components/EditableTaskList.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, updateTask } from '../store/actions';
import {
    List,
    ListItem,
    ListItemText,
    IconButton,
    TextField,
    ListItemSecondaryAction,
    Box,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';

const EditableTaskList = () => {
    const tasks = useSelector((state) => state.tasks);
    const dispatch = useDispatch();
    const [editIndex, setEditIndex] = useState(null);
    const [editText, setEditText] = useState('');

    const handleEdit = (index, text) => {
        setEditIndex(index);
        setEditText(text);
    };

    const handleSave = (index) => {
        if (editText.trim()) {
            dispatch(updateTask(index, editText));
            setEditIndex(null);
            setEditText('');
        }
    };

    return (
        <List>
            {tasks.map((task, index) => (
                <ListItem key={index} divider>
                    {editIndex === index ? (
                        <Box sx={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                            <TextField
                                fullWidth
                                variant="outlined"
                                value={editText}
                                onChange={(e) => setEditText(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSave(index)}
                                sx={{ mr: 2 }}
                            />
                            <IconButton onClick={() => handleSave(index)} aria-label="save">
                                <SaveIcon />
                            </IconButton>
                        </Box>
                    ) : (
                        <>
                            <ListItemText primary={task} />
                            <ListItemSecondaryAction>
                                <IconButton edge="end" aria-label="edit" onClick={() => handleEdit(index, task)}>
                                    <EditIcon />
                                </IconButton>
                                <IconButton edge="end" aria-label="delete" onClick={() => dispatch(deleteTask(index))}>
                                    <DeleteIcon />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </>
                    )}
                </ListItem>
            ))}
        </List>
    );
};

export default EditableTaskList;
