import React, {ChangeEvent,KeyboardEvent, useState} from 'react';
import './ToDoList.css'
import {TextField} from "@material-ui/core";


export type EditableSpanType = {
    value: string
    changeTitle: (title: string)=>void
}

export function EditableSpan (props: EditableSpanType ) {
    const [editMode, setEditMode] = useState<boolean>(true)
    const [title, setTitle] = useState(props.value)
    const onEditMode = ()=>setEditMode(true)
    const offEditMode = ()=>{
        setEditMode(false)
        props.changeTitle(title)
    }
    const changeTitle=(e: ChangeEvent<HTMLInputElement>)=>{
        setTitle(e.currentTarget.value)
    }
    const onEnter = (e:KeyboardEvent<HTMLInputElement>)=> {
        if (e.charCode === 13) {
            setEditMode(false)
            props.changeTitle(title);
        }
    }
    return editMode
      ?<TextField value={title}
              onChange={changeTitle}
              onBlur={offEditMode}
              autoFocus
              onKeyPress={onEnter}
        />
      :<span onDoubleClick={onEditMode}>{props.value}</span>
}