let eeee = 123;

console.log('fwfwfwfw')


const todolistID1 = '5WF325ffff'
const todolistID2 = '768DSFewtwetg'


const todolist = [
    {
        id: todolistID1,
        title: 'What to leanr',
        filter: 'all',
        // tasks: [
        //     {id: 'gwgSS3', title: "HTML", isDone: true},
        //     {id: '32fs', title: "CSS", isDone: true},
        //     {id: '67sfsaf', title: "REACT", isDone: true},
        // ]
    },

    {
        id: todolistID2,
        title: 'What to DO',
        filter: 'all',
        // tasks: [
        //     {id: 'gwgSS3', title: "HTML", isDone: true},
        //     {id: '32fs', title: "CSS", isDone: true},
        //     {id: '67sfsaf', title: "REACT", isDone: true},
        // ]
    }

]

const tasks = {
    [todolistID1]: [
        {id: 'gwgSS3', title: "HTML", isDone: true},
        {id: '32fs', title: "CSS", isDone: true},
        {id: '67sfsaf', title: "REACT", isDone: true},
    ],
    [todolistID2]: [
        {id: 'gwgSS3', title: "HTML", isDone: true},
        {id: '32fs', title: "CSS", isDone: true},
        {id: '67sfsaf', title: "REACT", isDone: true},
    ]

}

console.log([...tasks[todolistID1], {id: '67sfsaf', title: "REACT", isDone: true}])

let num = [698, 6, 56, 85, 4]

console.log(num.reduce((a, b) => {
    return (
        a > b ? a : b)
}))


let studens = [
    {
        name: 'vitya',
        surname: 'harinotonv',
        score: 33
    },

    {
        name: 'Bob',
        surname: 'Marley',
        score: 55
    },

    {
        name: 'Elton',
        surname: 'John',
        score: 33
    },

    {
        name: 'Elvis',
        surname: 'Presley',
        score: 33
    },
]

let arrr = [3, 5, 6, 7, 8, 8, 9, 8, 8, 0, 0, 5, 4, 3]

let resEE = arrr.reduce((data, num) => {
    data[num] = num
    return data
}, {})
console.log(resEE)

const names = ["bob", "alex", "mix", "nick", "Bnoto"]
const numm = [4, 6, 7, 455, 23, 355, 41]

console.log(numm.sort((a, b) => a - b))


function RRR(arr) {

    return arr.map((a) => a > arr[a + 1] ? a : arr[a + 1]).filter(a => a)

}
console.log(RRR(numm))

// console.log(studens.reduce((a,b) => a.score > b.score ? a : b))
//
// console.log(studens.reduce((data, s) => {
//     data[s.name] = [s.surname]
//     return data
// }, {}))


let bubblearray = [-5, 54, 43, 23, 101]

function BubbleSort(arr) {
    debugger
    for (let i = 0; i < arr.length - 1; i++) {

        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {

                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }

    }

    return arr

}

console.log(BubbleSort(bubblearray))




function R(arr) {

    for (let i = 1; i < arr.length; i++)
        for (let j = 0; j < arr.length; j++)
            if (arr[i] < arr[j]) {
                let x = arr[i]
                arr[i] = arr[j]
                arr[j] = x
            }

    return arr

}


