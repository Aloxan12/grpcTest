import {FilterValueType, TodoListType} from "../App";
import {v1} from "uuid";
import {InferActionsTypes} from "./store";

const todolistId1 = v1()
const todolistId2 = v1()

const initialState: Array<TodoListType> = [
    {id: todolistId1, title: 'What to learn', filter: 'all'},
    {id: todolistId2, title: 'What to buy', filter: 'all'}
]


export const todoListsReducer = (state = initialState, action: ActionsType)=>{
    switch (action.type){
        case 'ADD-TODOLIST':{
            const newTodos = [{id:v1(), title: action.title, filter:'all'}]
            return [...state, newTodos]
        }
        case 'REMOVE-TODOLIST':
            return state.filter(t => t.id !== action.id)
        case "CHANGE-TODOLIST-TITLE":{
            const todoList = state.find(t=> t.id === action.id)
            if(todoList){
                todoList.title = action.title
            }
            return [...state]
        }
        case "CHANGE-TODOLIST-FILTER":
            const todoList = state.find(t=> t.id === action.id)
            if(todoList){
                todoList.filter = action.filter
            }
            return [...state]
        default:
            return state
    }
}

const actions = {
    removeTodolistAC: (todolistId: string) => ({ type: 'REMOVE-TODOLIST', id: todolistId}as const),
    addTodolistAC: (title: string) =>({ type: 'ADD-TODOLIST', title: title, todolistId: v1()}as const),
    changeTodolistTitleAC: (id: string, title: string) =>({ type: 'CHANGE-TODOLIST-TITLE', id: id, title: title}as const),
    changeTodolistFilterAC: (id: string, filter: FilterValueType) => ({ type: 'CHANGE-TODOLIST-FILTER', id: id, filter: filter}as const)
}


type ActionsType = InferActionsTypes< typeof actions>