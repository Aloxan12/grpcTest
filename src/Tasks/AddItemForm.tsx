import React, {ChangeEvent,KeyboardEvent, useState} from 'react';
import './ToDoList.css'
import {FilterValueType} from "../App";
import {Button, IconButton, TextField} from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

export type AddItemFormPropsType = {
    addItem:(title: string)=>void
}

export function AddItemForm (props: AddItemFormPropsType) {
    const [newTaskTitle, setNewTaskTitle] = useState('')
    const [error, setError] = useState<string | null>(null)
    const onNewTaskTitleChange = (e:ChangeEvent<HTMLInputElement>) =>{
        setNewTaskTitle(e.currentTarget.value)
    }
    const onNewItemKeyPress = (e: KeyboardEvent<HTMLInputElement>)=>{
        setError(null);
        if(e.charCode === 13){
            props.addItem(newTaskTitle);
            setNewTaskTitle('');
        }
    }
    const addItem = ()=>{
        if(newTaskTitle.trim() !== ''){
            props.addItem(newTaskTitle)
            setNewTaskTitle('')
        }else {
            setError('Title is required')
        }
    }
    return (
        <div>
            <div>
                <TextField
                    value={newTaskTitle}
                    variant={'outlined'}
                    label={'Type value'}
                    onChange={onNewTaskTitleChange}
                    onKeyPress={onNewItemKeyPress}
                    error={!!error}
                    helperText={error}
                />
                <IconButton onClick={addItem} color={"primary"} ><AddCircleOutlineIcon/></IconButton>
            </div>
        </div>
    );
}