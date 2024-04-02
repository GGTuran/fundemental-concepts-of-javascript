// declaring one with parameters
// function square (number){
//     console.log(number);
// }
// square(8);

// function doubleIt (number){
//     const double = number*2;
//     console.log(number, double); 
// }

// doubleIt(24);

// spread and rest operators

// const myArray = [1,2,3];
// const myCopiedArray = [...myArray];
// myArray.push(4);
// myCopiedArray.push(5);
// console.log(myArray);
// console.log(myCopiedArray);

// rest operator

// const addFunction = (...params) =>{
//     console.log(params);
//     let sum = 0;
//     params.forEach(num => {
//         sum = sum + num;
//     });
//     console.log(sum)
// }

// addFunction(1,2,3,4,5,6,7,8,9);


const greetNew = (name) =>{
    const greetMsg = `Hello ${name}, welcome to the club `;
    console.log(greetMsg);
}
// greetNew("GG");

export default greetNew;
