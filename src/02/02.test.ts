import {sum} from "../01/01";
import {auto, autoType} from "./02";
import {cityType} from "./02_02";

let city: cityType;

beforeEach(() => {
    city = {
        title: 'Las Vegas',
        houses: [
            {
                buildedAt: 2012, repaired: false,
                address: {number: 100, street: {title: "Happy street"} }
            },
            {
                buildedAt: 2012, repaired: false,
                address: {number: 100, street: {title: "White street"} }
            },
            {
                buildedAt: 2012, repaired: false,
                address: {number: 100, street: {title: "White street"} }
            },
        ],
        governmentBuildings: [],
        citizensNumber: 10000

    }
})

test("check value of object", () => {

    expect(city.houses[0].buildedAt).toBe(2012)
    expect(city.houses[0].repaired).toBe(false)
    expect(city.houses[0].address.number).toBe(100)
    expect(city.houses[0].address.street.title).toBe("Happy street")



})

