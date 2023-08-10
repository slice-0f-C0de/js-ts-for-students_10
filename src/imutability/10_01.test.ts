import {UserType} from "./10_01";

function makeHairstyle(u: UserType, power: number) {

    const copy = {
        ...u
    }

    copy.hair = u.hair / power

    return copy
}

test("reference type test", () => {

    let user: UserType = {
        name: "Daniil",
        hair: 32,
        address: {
            title: "Astrakhan"
        }
    }

    const awesomeUser = makeHairstyle(user, 2)

    expect(user.hair).toBe(32)
    expect(awesomeUser.hair).toBe(16)
})