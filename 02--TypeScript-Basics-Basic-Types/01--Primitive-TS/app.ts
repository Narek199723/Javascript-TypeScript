// const add = (n1: number, n2: number) => {
//   return n1 + n2;
// };

// // const number1 = "5";
// const number1 = 5;
// const number2 = 2.8;

// const result = add(number1, number2);

// console.log(result);

//  ! TypeScript Types vs Javascript Types
// ? THis is the javascript way of handling types, but during development we can avoid the error
// const add = (n1: number, n2: number) => {
//   if (typeof n1 !== "number" || typeof n2 !== "number") {
//     throw new Error("Incorrect input!");
//   }
//   return n1 + n2;
// };

// // const number1 = "5";
// const number1 = 5;
// const number2 = 2.8;

// const result = add(number1, number2);

// console.log(result);

// ! Working with Numbers,Strings,Booleans

// const add = (n1: number, n2: number, showResult: boolean, phrase: string) => {
//   const result = n1 + n2;
//   if (showResult) {
//     // console.log(phrase + n1 + n2);
//     console.log(phrase + result);
//   }
//   return n1 + n2;
// };

// // const number1 = "5";
// const number1 = 5;
// const number2 = 2.8;
// const printResult = true;
// const resultPhrase = "Result is: ";

// // Now Vs Code shows that there we don't expect a third argument at all
// add(number1, number2, printResult, resultPhrase);

// ! Type assignment Type Inference
//*  Type inference means that TS does its best to understand which type you have in a certain variable constant

// let number1: number;
// number1 = 8;

// const string1 = "String 1";
// string1 = 5;
