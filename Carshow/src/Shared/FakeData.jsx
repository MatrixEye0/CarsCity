import { faker } from "@faker-js/faker";

function createRandomCarList() {
  return {
    name: faker.vehicle.vehicle(),
    fuelType: faker.vehicle.fuel(),
    model: faker.vehicle.model(),
    type: faker.vehicle.type(),
    speed:'250km/hr',
    image: 'https://spn-sta.spinny.com/blog/20220228142243/ezgif.com-gif-maker-98-5.jpg?compress=true&quality=80&w=576&dpr=2.6',
    miles: 1000,
    gearType: 'Automatic',
    price: faker.finance.amount(4000, 20000)
  };
}

const carList = faker.helpers.multiple(createRandomCarList, { count: 7 });

export default {
  carList
};
