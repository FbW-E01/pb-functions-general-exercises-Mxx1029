// # General exercises

// 1. Write a function that takes in one parameter and logs that parameter 3 times into the console.

const writeParameterThreeTimes = a => {
    for (i = 0; i < 3; i++) {
        console.log(a);
    };
};

writeParameterThreeTimes("I'm a parameter!");

// 2. Write a function that takes in one parameter and returns that parameter repeated five times. For the input "Cat" it would return "CatCatCatCatCat"

const writeParameterFiveTimes = a => {
    let string = "";
    for (i = 0; i < 5; i++) {
        string += a;
    };
    return string;
};

console.log(writeParameterFiveTimes("Dog"));

// 3. Write a function that takes in two parameters, the first one should be a number and the 2nd one should be a string. The functions returns the 2nd argument repeated as many times as the 1st argument defins. For the inputs `3` and "Woah" it should return `WoahWoahWoah`

const repeatStringNtimes = (number, string) => {
    let resultString = "";
    for (i = 0; i < number; i++) {
        resultString += string;
    };
    return resultString;
};

console.log(repeatStringNtimes(10, "LoopeyLuie"));

// 4. Write a function that takes in an array of numbers as a parameter. It should return the largest number in the array. For the input `[1,6,83,91,0,-4,1337,5]` it should return `1337`
const numArray = [1, 6, 83, 91, 2.56, -4, 1367, 5];


const findLargestNum = (array) => {
    let largestNum = 0; 
    // both solutions found on freecodecamp, shortest first: 
    // largestNum = Math.max.apply(null, array);

    // OR for loop: 
    for (i = 0; i < array.length; i++) {
        if (typeof array[i] !== "number") {
            return "There's something not numerical in your array, check your data.";
        } 
        if (array[i] > largestNum) {
            largestNum = array[i];
        };
    };
    return largestNum;
};

console.log(findLargestNum(numArray));

// 5. This question has 2 parts

//     Part a) write a function that takes in a number and does a `console.log("Even 10!")` if the number is evenly divisable by 10. Examples:

//     -  printIfDivisibleByTen(1) --> no output
//     -  printIfDivisibleByTen(2) --> no output
//     -  printIfDivisibleByTen(32) --> no output
//     -  printIfDivisibleByTen(10) --> "Even 10!" into the console
//     -  printIfDivisibleByTen(30) --> "Even 10!" into the console
//     -  printIfDivisibleByTen(90000) --> "Even 10!" into the console

const printIfDivisibleByTen = (number) => {
    if (number % 10 === 0) {
        return "Even 10!";
    };
};

console.log(printIfDivisibleByTen(90000));

//     Part b) write a for-loop that runs 125 times, each time calling the function you created in part a with the current iteration number.

for (i = 1; i <= 125; i++) {
    console.log(`Iteration # ${i}: ${printIfDivisibleByTen(30)}`);
};

// 6. Write an arrow function that takes in 5 numbers as its parameters and returns the largest one

const findLargestNumAgain = (...args) => {
    let largestNum = 0;
    for (i = 0; i < args.length; i++) {
        if (args[i] > largestNum) {
            largestNum = args[i];
        };
    };
    return largestNum;
};

console.log(findLargestNumAgain(2, 581181, 9.5, -4, 3.1111, 8, 20111));

// 7. Write an arrow function that takes in one parameter and returns true if that parameter is a string.

const isString = (parameter) => (typeof parameter === "string") ? true : false;

// OR if you don't want a false as output:
// const isString = (parameter) => {
//     if (typeof parameter === "string") {
//         return true;
//     };
// };

console.log(isString("miau"));

// 8. Write an arrow function that takes in two parameters and returns true if both of them are strings.

const checkIfStrings = (a, b) => (typeof a === "string" && typeof b === "string") ? true : false;

console.log(checkIfStrings("wuff", 3));

// 9. Write an arrow function that takes in one string. The function should return the first word in the string that was given to it. Examples:
//     - getFirstWord("Internetting is hard") --> "Internetting"
//     - getFirstWord("Hello World") --> "Hello"
//     - getFirstWord("Hello") --> "Hello"

const getFirstWord = string => {
    // const firstWord = string.split(" ")[0];
    // return firstWord;
    // OR: 
    let firstWord = "";
    for (i = 0; i < string.length; i++) {
        if (string[i] !== " " && string[i] !== "," && string[i] !== "." && string[i] !== "!") {
            firstWord += string[i];
        } else {
            return firstWord;
        };
    };
};

console.log(getFirstWord("Hello,"));

// 10. *HARD* Write an arrow function that takes in one string.
// The function should return a new string that where each word in the input string is repeated by the amount of words in the input string. Examples:
//     - wordRepeater("bunny") --> "bunny"
//     - wordRepeater("Cat food") --> "Cat Cat food food"
//     - wordRepeater("I am groot") --> "I I I am am am groot groot groot"
//     - wordRepeater("O M G ?") --> "O O O O M M M M G G G ? ? ? ?"

const wordRepeater = string => {
    let array = string.split(" ");
    let newString = "";
    for (i = 0; i < array.length; i++) {
        for (j = 0; j < array.length; j++)
            newString += array[i] + " ";
    };
    return newString;
};

console.log(wordRepeater("I am groot"));

// 11. Write a short (single line) arrow function that takes in one string and returns the first character of that string. Examples:
//     - firstLetter("cat") --> "c"
//     - firstLetter("quylthulg") --> "q"

const firstLetter = string => string[0];

console.log(firstLetter("quylthulg"));

// 12. Write an arrow function that takes in one string and returns a new string. The new string needs to be made from the first letter of each of the words in the input. Examples:
//     - firstLetters("cat") --> "c"
//     - firstLetters("What the fruit") --> "Wtf"
//     - firstLetters("MongoDB Express Node React") --> "MERN"
//     - firstLetters("What You See Is What You Get") --> "WYSIWYG"

const firstLetters = (string) => {
    let newString = string[0];
    for (i = 0; i < string.length; i++) {
        if (string[i] === " ") {
            newString += string[i + 1];
        };
    };
    return newString;
};

console.log(firstLetters("What You See Is What You Get"));

// 13. Write an arrow function that takes in one variable. If that variables is a string, it will return the length of the string. If that variable is an array, it returns the length of the array. If it is something else, it will return null. You might need to search Google to find out how can you identify if the parameter is an array - but there are other ways to solve this too!

const getLength = a => {
    if (typeof a === "string") {
        return a.length;
    }
    if (typeof a === "object") {
        return a.length;
    }
    return null;
};

console.log(getLength(["tomato", "olive", "banana", "mango"]));

// 14. Write an arrow function that takes in one variable. If the variable is not a string, return null. If it is a string, return an array where each of the characters of that string is in individual array entry. Examples:
//     - explode("Cat") --> ["C", "a", "t"]
//     - explode(41) --> null
//     - explode("") --> []
//     - explode("R & D") --> ["R", " ", "&", " ", "D"]

const explode = (a) => {
    if (typeof a !== "string") {
        return null;
    };
    let array = [];
    for (i = 0; i < a.length; i++) {
        array.push(a[i]);
    };
    return array;
};

console.log(explode("Come one, potato!"));

// 15. Reverse engineering challenge 1. Write a function that does this (*BONUS*: write it as a short (one line) arrow function):
//     - foo("") -> false
//     - foo("a") -> false
//     - foo("o") -> true
//     - foo("Cat") -> false
//     - foo("Tomato") -> true
//     - foo("Potato") -> true
//     - foo("Blanket") -> false
//     - foo("1") -> false

const checkForOs = foo => foo.toLowerCase().includes("o") ? true : false;

console.log(checkForOs("Oettinger"));

// 16. Reverse engineering challenge 2. Write a function that does this (*BONUS*: write it as a short (one line) arrow function):
//     - bar("") --> "Cat"
//     - bar("x") --> "Cat"
//     - bar("Cat") --> "Catt"
//     - bar("Foobar") --> "Catobar"
//     - bar("Potato") --> "Cattato"
//     - bar("Tomato") --> "Catmato"
//     - bar("International Space Station") --> "Catternational Space Station"

const replaceFirstTwoLettersWithCat = bar => (bar.length === 0 || bar.length === 1 ) ? "Cat" : bar.replace(bar[0] + bar[1], "Cat");

console.log(replaceFirstTwoLettersWithCat("International Space Station"));