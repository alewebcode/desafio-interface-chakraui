import * as faker from 'faker';


// eslint-disable-next-line import/no-anonymous-default-export
export default (req, res) => {
    const customers = [...new Array(10)].map((_, index) => {
        return {
            index,
            continent: "America do Sul",
            country: faker.address.country(),
            city: faker.address.city(),
        }
    })

    console.log(JSON.stringify(customers))

    res.status(200).json(JSON.stringify(customers))
}