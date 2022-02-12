export type autoType = {
    name:string,
    model:string,
    color: string,
    manufacture: manufactureType,
    Skills: Array<skillsArray>
}

export type manufactureType = {
    name:string,
    country:string,
    number:string
}

export type skillsArray = {
    id:number,
    title: string
}

export const auto : autoType = {
    name: 'Mercedes AMG',
    model: 'CX700',
    color: 'red',
    manufacture: {
        name: 'Mercedes-Benz',
        country: 'Germany',
        number: '1D6GRF7'

    },
    Skills: [
        {
            id: 1,
            title: 'React'
        },
        {
            id: 2,
            title: 'CSS'
        },
        {
            id: 3,
            title: 'JS'
        }
    ]

}