import {addFriends, calc, copySt, deepCopySt, restParams, StudentsType, StudentType, sum} from "./tasks";

test('sum of two numbers',()=>{
    //1 тестовые данные
    const a:number = 6
    const b:number = 8
    //2выполнение тестируемого кода с тестовыми данными
    const result = sum(a, b)
    //3. Проверка ожидаемого результата
    expect(result).toBe(14)
})
test('sum of some numbers',()=>{
    //1 тестовые данные
    const a:number = 6
    const b:number = 8
    const c:number = 2
    const d:number = 4
    //2выполнение тестируемого кода с тестовыми данными
    const result = restParams(a, b, c, d)
    const result1 = restParams( b, c)
    const result2 = restParams(a, d)
    //3. Проверка ожидаемого результата
    expect(result).toBe(20)
    expect(result1).toBe(10)
    expect(result2).toBe(10)
})

test('copy student', ()=>{
    //1 Тестовые данные
    const stud:StudentType = {
        name: 'Oleg',
        isStudent: true,
        friends: ['Victor', 'Sasha', 'Angelina']
    }
    //2выполнение тестируемого кода с тестовыми данными
    const copyStud = copySt(stud)
    //3. Проверка ожидаемого результата
    expect(copyStud === stud).toBe(false)
    expect(copyStud.friends === stud.friends).toBe(true)
})
test('deepCopy student', ()=>{
    //1 Тестовые данные
    const stud:StudentType = {
        name: 'Oleg',
        isStudent: true,
        friends: ['Victor', 'Sasha', 'Angelina']
    }
    //2выполнение тестируемого кода с тестовыми данными
    const deepCopyStud = deepCopySt(stud)
    //3. Проверка ожидаемого результата
    expect(deepCopyStud === stud).toBe(false)
    expect(deepCopyStud.friends === stud.friends).toBe(false)
})

test('calc test', ()=>{
    expect(calc(2, 4, 'sum')).toBe(6)
    expect(calc(2, 4, 'mult')).toBe(8)
    expect(calc(8, 4, 'dev')).toBe(2)
    expect(calc(4, 4, 'sub')).toBe(0)
})
test('addFriends func', ()=>{
    const students = [
        {
            name: "Bob",
            age: 22,
            isMarried: true,
            scores: 85
        },
        {
            name: "Alex",
            age: 21,
            isMarried: true,
            scores: 90
        },
        {
            name: "Nick",
            age: 20,
            isMarried: false,
            scores: 120
        },
        {
            name: "John",
            age: 19,
            isMarried: false,
            scores: 100
        },
        {
            name: "Helen",
            age: 20,
            isMarried: false,
            scores: 110
        },
        {
            name: "Ann",
            age: 20,
            isMarried: false,
            scores: 105
        },
    ];
    const studentsWithFriends = addFriends(students)
    expect(studentsWithFriends.length).toBe(6)
    expect(studentsWithFriends[0].friends.length).toBe(5)
    expect(studentsWithFriends[0].friends[0]).toBe('Alex')
    expect(studentsWithFriends[0].friends[4]).toBe('Ann')
    expect(studentsWithFriends === students ).toBe(false)
    expect(studentsWithFriends[0] === students[0] ).toBe(false)
    expect(studentsWithFriends[0].name === students[0].name ).toBe(true)
})