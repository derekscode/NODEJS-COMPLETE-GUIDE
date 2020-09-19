const name = "Max";
let age = 29;
const hasHobbies = true;

age = 30;

const summarizeUser = (userName, userAge, userHasHobby) => {
  return (
    "Name is " +
    userName +
    ", age is " +
    age +
    " and the user has hobbies: " +
    userHasHobby
  );
};

// const addOne = (a) => a + 1;
const addRandom = () => 1 + 2;

console.log(addRandom());
// console.log(addOne(1));
