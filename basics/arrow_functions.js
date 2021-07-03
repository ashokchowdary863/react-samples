const myFunc = () => {
  console.log("logging stuff...");
};

myFunc();

const myFuncWithVar = (name) => {
  console.log(name);
};
myFuncWithVar("ashok");

const myFuncWithVars = (name, age) => {
  console.log(name);
  console.log(age);
};

myFuncWithVars("ashok", 23);

//Shorthand

const add = (num1, num2) => num1 + num2;

console.log(add(1, 2));
