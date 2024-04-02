// array destructuring

const essentials = ["Tee", "Sweat", "Baggy", "Watch"];
const [main , thanda, trend, time   ] = essentials;
// console.log(main);
// console.log(thanda);
// console.log(trend);
// console.log(time);
// we can use any name while destructuring an array
// we can not use any name for object destructuring we have to use te exact name
//Array->
// 1.Variable name can be anything
// 2.Position can not be changed 
// Object->
// 1.VAriable names are fixed by the object property name
// 2.Position is independent




const need = {
    Main: "Tee",
    Thanda: "Sweat",
    Trend: "Baggy",
    Time: "Watch",
}
const {Main,Thanda} = need;
console.log(Thanda)