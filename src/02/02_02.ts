export type cityType = {
    title:string,
    houses: Array<housesArray>,
    governmentBuildings: Array<string>,
    citizensNumber: number
}

export type housesArray = {
    buildedAt:number,
    repaired: boolean,
    address: addressType
}

export type addressType = {
    number: number,
    street: streetType
}

export type streetType = {
    title:string
}