const age = [15,6,21,31,16,19];
const age2 = [22,13,14,17,25];
const allAges = [...age, ...age2];
// console.log(allAges);

const business = 650;
const minister = 450;
const sochib = 350;

const allTakaWala = [450,632,584,596,];
// const maximum = Math.max(business,minister,sochib);
const maximum = Math.max(...allTakaWala);
console.log(maximum);