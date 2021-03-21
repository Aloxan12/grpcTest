export function sum(a:number, b:number){
    return a + b
}
export function restParams(...number:Array<number>){
    return number.reduce((acc, el)=> acc + el)
}
export type StudentType = {
    name: string
    isStudent: boolean
    friends: Array<string>
}
export type StudentsType = {
    name: string,
    age: number,
    isMarried: boolean,
    scores: number
}
export function copySt (st:StudentType){
    return {...st}
}
export function deepCopySt (st:StudentType){
    return {...st, friends: [...st.friends]}
}

export function calc(a:number, b: number, action: string){
    switch (action){
        case 'sum':
            return a + b
        case 'mult':
            return a * b
        case 'dev':
            return a / b
        case 'sub':
            return a - b
        default:
            return 'Unknown type action'
    }
}

export const addFriends = (students: Array<StudentsType>) => students.map(st =>
    ({...st,
        friends: students
            .map(s => s.name)
            .filter(n => n !== st.name)
    }))
