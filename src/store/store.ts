import { combineReducers, createStore} from "redux";
import {todoListsReducer} from "./todoLists-reducer";



const rootReducer = combineReducers({
    todoLists: todoListsReducer
})

export const store = createStore(rootReducer)


export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never
export type AppRootStateType = ReturnType<typeof rootReducer>