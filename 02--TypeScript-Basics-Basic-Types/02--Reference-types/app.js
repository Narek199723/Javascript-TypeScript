// ! The unknown Type
// * unknown means that we don't know yet what the user will enter in the input yet
// let userInput: unknown;
// let userName: string;
// userInput = 5;
// userInput = "Max";
// *  This is error because we don't know yet what type will be the userInput (because userinput's type is unknown)
// userName = userInput;
// *  But if we switch userInput's type from unknown to any error will be gone,so any is more flexible than the unknown,unknown is more restrictive
// let userInput1: any;
// let userName1: string;
// userInput1 = 8;
// userInput1 = "7";
// userName1 = userInput1;
// let userInput2: unknown;
// let userName2: string;
// userInput2 = 5;
// userInput2 = "Max";
// *  if we want to use it with unknown type we have to do this checking
// if (typeof userInput2 === "string") {
//     userName2 = userInput2;
// }
// ! The never Type
// const generateError = (message: string, code: number) => {
//     throw { message: message, errorCode: code };
// *  Another way of crashing our app that there will be returned the never value is the infinite loop
// while(true){}
// };
// const result = generateError("An error occured", 500);
// *  So because in the function we have throw it crashes our scripts, and the our console.log never being read by JS
// * so generateError never produces a value , it always crashes the script, so if we hover over the generateError function we will see that it is going to return a never value
// console.log(result);
