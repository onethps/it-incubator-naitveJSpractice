export type courseType = {
    id:number,
    course:string,
    count: number
}

test("sholud be courser cheaper", () => {



    const cources = [
        {id:1, course:'JS', count:344},
        {id:1, course:'JSS', count:12},
        {id:1, course:'CSS', count:512},
        {id:1, course:'HTML', count:112},
        {id:1, course:'PHP', count:236},
    ]

    const chipPred = (value:courseType) => {
        return value.count > 150
    }

    let chipRes = cources.filter(chipPred)


    expect(chipRes.length).toBe(3)

})


