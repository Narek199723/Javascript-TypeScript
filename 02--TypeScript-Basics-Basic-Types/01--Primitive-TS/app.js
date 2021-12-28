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
var add = function (n1, n2, showResult, phrase) {
    var result = n1 + n2;
    if (showResult) {
        // console.log(phrase + n1 + n2);
        console.log(phrase + result);
    }
    return n1 + n2;
};
// const number1 = "5";
var number1 = 5;
var number2 = 2.8;
var printResult = true;
var resultPhrase = "Result is: ";
// Now Vs Code shows that there we don't expect a third argument at all
add(number1, number2, printResult, resultPhrase);
