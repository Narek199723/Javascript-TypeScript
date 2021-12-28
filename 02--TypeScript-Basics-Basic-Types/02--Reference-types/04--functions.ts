// !  Function Return Types & void

// * So here we need to understand that we are expecting to get returned value as a number, so add function will return number
// const add = (n1: number, n2: number): number => n1 + n2;

//* if we hover printResult function we will see it is showing void type, which means that this function doesn't return any value from it
// const printResult = (num: number) => {
//     console.log("Result: " + num);
// };
// printResult(add(5, 12));

//! Functions as Types

// let combineValues;
// combineValues = add;
// * So here we are assigning value to a combineValues to be a number but then calling it like a function so this is error so we need to fix this
// combineValues = 5;
// console.log(combineValues(8, 3));

// *  This menas that combineValues is going to take two parameters where each paramater's type is number and it returns a number
// let combineValues: (a: number, b: number) => number;
// combineValues = add;
//* so this will casue an error because we return nothing from printResult function
// combineValues = printResult;
// console.log(combineValues(8, 3));

// !  Function Types & Callbacks

const addAndHandle = (n1: number, n2: number, cb: (num: number) => void) => {
    const result = n1 + n2;
    cb(result);
};

addAndHandle(10, 20, result => {
    console.log(result);
    return result;
});

