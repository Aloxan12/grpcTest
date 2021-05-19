import React, {useState} from 'react';
import './App.css';
import {TaskType, ToDoList} from './Tasks/ToDoList';
import {v1} from "uuid";
import {AddItemForm} from "./Tasks/AddItemForm";
import {AppBar, Button, Container, Grid, IconButton, Paper, Toolbar, Typography} from '@material-ui/core';
import {Menu} from "@material-ui/icons";

export type FilterValueType = "all" | "active" | "completed"
export type TaskStateType = {
    [key: string]: Array<TaskType>
}
type TodoListType = {
    id: string
    title: string
    filter: FilterValueType
}

function App() {
    const todolistId1 = v1()
    const todolistId2 = v1()
    const [todoLists, setTodoList] = useState<Array<TodoListType>>([
        {id: todolistId1, title: 'What to learn', filter: 'all'},
        {id: todolistId2, title: 'What to buy', filter: 'all'}
    ])

    let [tasks, setTasks] = useState<TaskStateType>({
        [todolistId1]: [
            {id: v1(), title: 'CSSandHtml', isDone: true},
            {id: v1(), title: 'Js', isDone: true},
            {id: v1(), title: 'React', isDone: false},
            {id: v1(), title: 'Redux', isDone: false}],
        [todolistId2]: [
            {id: v1(), title: 'Milk', isDone: true},
            {id: v1(), title: 'Bread', isDone: true},
            {id: v1(), title: 'Beer', isDone: true},
        ]
    });

    function addTodoList(title: string) {
        let newTodoListId = v1()
        let newTodoList: TodoListType = {id: newTodoListId, title: title, filter: 'all'}
        setTodoList([newTodoList, ...todoLists]);
        setTasks({
            ...tasks,
            [newTodoListId]: []
        })
    }

    function removeTask(id: string, todoListId: string) {
        //Достаем нужный массив с помощью todoListId
        let todoListTasks = tasks[todoListId]
        //перезапишем в этом обьекте массив для нужного тудулиста отфильтрованным массиввом
        tasks[todoListId] = todoListTasks.filter(t => t.id !== id)
        //засетаем в стейт копию объекта
        setTasks({...tasks});
    }

    function changeFilter(value: FilterValueType, todoListId: string) {
        let todoList = todoLists.find(tl => tl.id === todoListId)
        if (todoList) {
            todoList.filter = value
            setTodoList([...todoLists])
        }
    }

    function changeTasksTitle(taskId: string, newTitle: string, toDoListId: string) {
        const todoListTasks = tasks[toDoListId]

        const task = todoListTasks.find(t => t.id === taskId)
        if (task) {
            task.title = newTitle
            setTasks({...tasks})
        }
    }

    function addTask(title: string, todoListId: string) {
        let task = {id: v1(), title: title, isDone: false}
        //Достаем нужный массив с помощью todoListId
        let todoListTasks = tasks[todoListId]
        //перезапишем в этом объекте массив для нужного тудулиста копией добавив в начало новую
        tasks[todoListId] = [...todoListTasks, task]
        //сетаем в стейтт копию объекта, чтобы React отреагровал перересовкой
        setTasks({...tasks})
    }

    function changeStatusTask(id: string, isDone: boolean, todoListId: string) {
        //Достаем нужный массив с помощью todoListId
        let todoListTasks = tasks[todoListId]
        //ищем нужную таску
        let task = todoListTasks.find(t => t.id === id);
        //изменим таску, если она нашлась
        if (task) {
            task.isDone = isDone;
            setTasks({...tasks})
        }
    }

    function removeTodoList(todoListId: string) {
        setTodoList(todoLists.filter(tl => tl.id !== todoListId))
        delete tasks[todoListId]
        setTasks({...tasks})
    }

    function changeToDoListTitle(newTodoList: string, todoListId: string) {
        let todoList = todoLists.find(tl => tl.id === todoListId)
        if (todoList) {
            todoList.title = newTodoList
            setTodoList([...todoLists])
        }
    }

    const todoListComponents = todoLists.map(tdl => {
        let taskForToDoList = tasks[tdl.id]
        if (tdl.filter === "active") {
            taskForToDoList = taskForToDoList.filter(t => t.isDone === false)
        }
        if (tdl.filter === "completed") {
            taskForToDoList = taskForToDoList.filter(t => t.isDone === true)
        }
        return (
            <Grid item>
                <Paper style={ {padding: "10px" }}>
                    <ToDoList
                        todoListId={tdl.id}
                        title={tdl.title}
                        tasks={taskForToDoList}
                        removeTask={removeTask}
                        removeTodoList={removeTodoList}
                        changeFilter={changeFilter}
                        addTask={addTask}
                        changeStatusTask={changeStatusTask}
                        filter={tdl.filter}
                        changeTitle={changeTasksTitle}
                        changeToDoListTitle={changeToDoListTitle}
                    />
                </Paper>
            </Grid>
        )
    })

    return (
        <div className="app-wrapper">
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <Menu/>
                    </IconButton>
                    <Typography variant="h6">
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <Container fixed>
                <Grid container style={ {padding: "20px" }}>
                    <AddItemForm addItem={addTodoList}/>
                </Grid>
                <Grid container spacing={5}>
                    {todoListComponents}
                </Grid>
            </Container>
        </div>
    );
}

export default App;