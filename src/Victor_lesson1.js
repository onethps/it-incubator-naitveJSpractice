///


const num = 1
const num2 = 2


let rar = [6, 7, 8, 98, 446]
console.log(rar.sort((a, b) => a - b)[0])


const hey1 = {} // <-- создаёт ссылку на ячейку памяти и это ЛИТТЕРАЛ ОБЬЕКТА
const hey2 = {}

//полное копирование  deepcopy
//lodash - библиотека для дипкопи


let ttt = {
    name: 'EEEE',
    address: {street: '545455', number: 5}
}

let studens = [
    {
        name: 'vitya',
        surname: 'harinotonv'
    },

    {
        name: 'Bob',
        surname: 'Marley'
    },

    {
        name: 'Elton',
        surname: 'John'
    },

    {
        name: 'Elvis',
        surname: 'Presley'
    },
]


const fullDeetCopy = {...ttt, address: {...ttt.address}}

//вариант полной копии масива
const deepCOpybyMap = studens.map(s => ({...ttt}))

//ВСЕ МАСИВЫ ЭТО ОБЬЕКТЫ


const customMap = (array, callblack) => {
    const newArr = []
    for (let i = 0; i < array.length; i++) {
        newArr[i] = callblack(array[i])

    }
    return newArr
}


console.log(customMap(studens, s => s.name))










