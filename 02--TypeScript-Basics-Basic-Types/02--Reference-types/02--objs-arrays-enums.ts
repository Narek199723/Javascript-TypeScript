// ! Object Types

// when we say object is like TS will care if person is object or not, but in reality we dont do this
// const person: object = {
//   name: "Maximilian",
//   age: 30,
// };

// so this will cause an error because TS doesn't kno whether person has name property or not so we should say that person has a name property
// console.log(person.name);

// const person: {
//   name: string;
//   age: number;
// } = {
//   name: "Maximilian",
//   age: 30,
// };

//  So by doing this TS will help us with autocompletion as well
// console.log(person);

// ! Array Types
// const person = {
//   name: "Maximilian",
//   age: 30,
//   hobbies: ["Sports", "Cooking"],
// };

// what we say here that we are going to store an array of string
// let favoritActivities: string[];
// favoritActivities = ["Sports", "Development"];

//* when we add toUppercase TS recognises that and helps us with autocompletion
// for (const hobby of person.hobbies) {
//   console.log(hobby.toUpperCase());
//* this will cause error because TS knows that we have dont have an array and we cant use map on strings
//   console.log(hobby.map(() => {}));
// }

// !  Working with Tuples
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   * by adding number and stirng inside the array we say that first element of the array should be number second element should be astring, that is tuple,

// *  so this code down below tells TS that we want to have an array with exactly two elements where first is number second is string
//   role: [number, string];
// } = {
//   name: "Maximilian",
//   age: 30,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"],
// };

// person.role.push("admin");
// * So by using tuple above this will casue error because first element should be a number second should be a string, here we are assigning to a second element a number which is wrong
// person.role[1] = 10;

// ! Working enums

// const ADMIN = 0;
// const READ_ONLY = 1;

// * With enum we don't neccessary need to use const or let variables in this way it is easier faster to do things
enum Role {
    DEFAULTVALUE = 0,
    // if ADMIN is 8 then each element after that will increment a value
    ADMIN = 8,
    READ_ONLY,
    AUTHOR = "AUTHOR",
}

let x = Role;
console.log(x.ADMIN);

const person = {
    name: "Maximilian",
    age: 30,
    hobbies: ["Sports,Reading"],
    role: Role.ADMIN,
};


