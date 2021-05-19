import React, {ChangeEvent,KeyboardEvent, useState} from 'react';
import './ToDoList.css'
import {FilterValueType} from "../App";
import {AddItemForm} from "./AddItemForm";
import {EditableSpan} from "./EditableSpan";
import {Button, Checkbox, IconButton} from "@material-ui/core";
import {Delete} from "@material-ui/icons";

export type TaskType = {
    id: string,
    title: string,
    isDone: boolean
}

export type ToDoListType = {
    todoListId: string
    title: string,
    tasks: Array<TaskType>
    removeTask: (id: string, todoListId: string)=> void
    removeTodoList: (todoListId: string)=> void
    changeFilter: (type:FilterValueType, todoListId: string)=> void
    addTask: (title: string, todoListId: string)=> void
    changeStatusTask:(id:string, isDone: boolean, todoListId: string)=> void
    filter:FilterValueType
    changeTitle: (taskId:string, newTitle:string, toDoListId: string)=> void
    changeToDoListTitle: (newTitle:string, toDoListId: string)=> void
}

export function ToDoList(props: ToDoListType) {

    const addTask = (title: string)=>{
        props.addTask(title, props.todoListId)
    }
    const removeTodoList = () => {
        props.removeTodoList(props.todoListId)
    }
    const onAllClickHandler = ()=>{props.changeFilter("all", props.todoListId)}
    const onActiveClickHandler = ()=>{props.changeFilter("active", props.todoListId)}
    const onCompletedClickHandler = ()=>{props.changeFilter("completed", props.todoListId)}
    const changeToDoListTitle = (title: string)=> props.changeToDoListTitle(title, props.todoListId)
    return (
        <div>
            <h3>
                <EditableSpan value={props.title} changeTitle={changeToDoListTitle}/>
                <IconButton onClick={removeTodoList}>
                    <Delete />
                </IconButton>
            </h3>
           <AddItemForm addItem={addTask}/>
            <ul>
                {
                    props.tasks.map(t => {
                        const onRemoveHandler=()=> {props.removeTask(t.id, props.todoListId)}
                        const onChangeStatus =(e:ChangeEvent<HTMLInputElement>)=>{
                            let newStatusValue = e.currentTarget.checked
                            props.changeStatusTask(t.id, newStatusValue, props.todoListId)
                        }
                        const onChangeTitle = (newTitle: string)=>{
                            props.changeTitle(t.id, newTitle, props.todoListId)
                        }
                        return <div className={t.isDone?'is-done': ''}>
                            <Checkbox onChange={onChangeStatus} checked={t.isDone} />
                        <EditableSpan value={t.title} changeTitle={onChangeTitle}/>
                            <IconButton onClick={onRemoveHandler}>
                                <Delete />
                            </IconButton>
                    </div>}
                    )
                }
            </ul>
            <div>
                <Button variant={props.filter ==='all' ?"contained": 'text'} onClick={onAllClickHandler }>All</Button>
                <Button variant={props.filter ==='active' ?"contained": 'text'} color={"primary"}  onClick={onActiveClickHandler }>Active</Button>
                <Button variant={props.filter ==='completed' ?"contained": 'text'} color={"secondary"} onClick={onCompletedClickHandler }>Completed</Button>
            </div>
        </div>
    );
}