// !  Union types

// * when we need two or more different types of types, like in this combine function. we have a function which is expected to take only numbers, but what if we want that the function will work with numbers and also with strings,what should we do? so we need Union types to combine two types and make our function work for strings and also for numbers

// const combine = (input1: number | string, input2: number | string) => {
//     let result;
//     if (typeof input1 === "number" && typeof input2 === "number") {
//         result = input1 + input2;
//     } else {
//         result = input1.toString() + input2.toString();
//     }
//     return result;
// };

// const combinedAges = combine(20, 40);
// console.log(combinedAges);

// const combinedNames = combine("Max", "Ann");
// console.log(combinedNames);

// ! Literal Types

//  * First way of dealing with Literal types
// const combine = (
//     input1: number | string,
//     input2: number | string,
//     resultConversion: string
// ) => {
//     let result;
//     if (typeof input1 === "number" && typeof input2 === "number") {
//         result = input1 + input2;
//     } else {
//         result = input1.toString() + input2.toString();
//     }
//     // if (resultConversion === "as-number") {
//     //     return +result;
//     // } else {
//     //     return result.toString();
//     // }
// };

// const combinedAges = combine(20, 40, "as-number");
// console.log(combinedAges);

// const combinedStringAges = combine("20", "40", "as-number");
// console.log(combinedStringAges);

// const combinedNames = combine("Max", "Ann", "as-text");
// console.log(combinedNames);

// *  Second way of dealing with Literal types

// const combine = (
//     input1: number | string,
//     input2: number | string,
//     resultConversion: "as-number" | "as-text"
// ) => {
//     let result;
//     if (
//         (typeof input1 === "number" && typeof input2 === "number") ||
//         resultConversion === "as-number"
//     ) {
//         result = +input1 + +input2;
//     } else {
//         result = input1.toString() + input2.toString();
//     }
//     return result;
// };

// const combinedAges = combine("20", "40", "as-number");
// console.log(combinedAges);

// const combinedNames = combine("Max", "Ann", "as-text");
// console.log(combinedNames);

// ! Type Aliases Custom Types

type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-text";

const combine = (
    input1: Combinable,
    input2: Combinable,
    resultConversion: ConversionDescriptor
) => {
    let result;
    if (
        (typeof input1 === "number" && typeof input2 === "number") ||
        resultConversion === "as-number"
    ) {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
};

const combinedAges = combine("20", "40", "as-number");
console.log(combinedAges);

const combinedNames = combine("Max", "Ann", "as-text");
console.log(combinedNames);

