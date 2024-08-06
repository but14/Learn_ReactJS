const numbers = [0, 3.14, 9.81, 98, 6, 100]; //array of numbers
const vegetables = ["Tomato", "Potato", "Cabbage", "Onion", "Carrot"]; //array of string, vegetables
const animalProduct = ["Milk", "meat", "butter", "yoghurt"]; //array of string
const webTechs = ["HTML", "CSS", "JS", "React", "Redux", "Node", "MongDB"]; //Array of strign, tech

//print the array and its length

console.log("Numbers:", numbers);
console.log("Number of numbers:", numbers.length);

console.log("Vegetables: ", vegetables);
console.log("Number of Vegetables:", vegetables.length);

console.log("Animal Product:", animalProduct);
console.log("Number of Animal Product:", animalProduct.length);

console.log("Tech:", webTechs);
console.log("Number of Tech:", webTechs.length);

const arr = [
  "Asabenh",
  250,
  true,
  { country: "Finland", city: "Helsinki" },
  { skill: ["HTML", "CSS", "JS"] },
];

console.log(arr);

let js = "JavaScript";
const charsInJavaScript = js.split("");

console.log(charsInJavaScript);

let dcm = "Document";
const charsInJavaScript2 = dcm.split("");
console.log(charsInJavaScript2);

const pt = "Python";
const charsInJavaScript3 = pt.split("");
console.log(charsInJavaScript3);

let companiesString = "Facebook, Google, Microsoft, Apple, IBM, Oracle";
const companies = companiesString.split(",");
console.log(companies);

let indexWebTech = webTechs[2];
console.log(indexWebTech);

// array number

console.log(numbers.length);
console.log(numbers);
console.log(numbers[2]);

let lastIndex = numbers.length - 1;
console.log(numbers[lastIndex]);

// array webtech

console.log(webTechs.length);
console.log(webTechs);

let lastIndexofWT = webTechs.length - 2;
console.log(webTechs[lastIndexofWT]);

const countries = [
  "Spain",
  "France",
  "Canada",
  "Germany",
  "Australia",
  "VietNam",
  "USA",
  "UK",
];

console.log(countries);
console.log(countries.length);
console.log(countries[3]);
let lastIndexCT = countries.length - 1;

console.log(countries[lastIndexCT]);

const shoppingCart = [
  "Milk",
  "Mango",
  "Tomato",
  "Potato",
  "Meat",
  "Eggs",
  "Sugar",
];

console.log(shoppingCart);
console.log(shoppingCart[3]);
console.log(shoppingCart.length);

let lastShoppingCart = shoppingCart.length - 1;
console.log(shoppingCart[lastShoppingCart]);

// Array Constructor

const arra = Array(); // create an an empty array
console.log(arra);

const eightEmptyValues = Array(8).fill("X");
console.log(eightEmptyValues);

const sixValues = Array(6).fill("6");
console.log(sixValues);

const firstList = [1, 2, 3, 4];
const secondList = [5, 6, 7, 8];
const thirdList = firstList.concat(secondList);

console.log(thirdList);

//Getting array length

const numberss = [1, 2, 3, 4, 5, 6];
console.log(numberss.indexOf(4));

const nameS = ["CR7", "Jack", "Messi"];
console.log(nameS.indexOf("CR7"));

//Check items in a list

const fruits = ["banana", "orange", "mango", "lemon"]; //array of string, fruits
let index = fruits.indexOf("orange");
const fruitsAndVeget = fruits.concat(vegetables);
console.log(fruitsAndVeget);
console.log(fruitsAndVeget[3]);

console.log("Fruits:", fruits);
console.log("Number of Fruits:", fruits.length);

let firstFruit = fruits[2];

console.log(firstFruit);

if (index != -1) {
  console.log("Found at index " + index);
} else {
  console.log("Not found");
}

//we can use also ternary here

index != -1 ? console.log("Found at index " + index) : console.log("Not found");

// let us check if a avocado exist in the array

let indexOfAvocado = fruits.indexOf("mango");
if (indexOfAvocado != -1) {
  console.log("In the array " + index);
} else {
  console.log("Not in the array");
}

// joining array elements

const number1 = [1, 2, 3, 4, 5];
console.log(number1.join());

const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
console.log(names.join());
console.log(names.join("/"));
console.log(names.join(" / * "));

console.log(number1);
console.log(number1.splice());
console.log(number1.splice(0, 1));
console.log(number1.splice(2, 0, "3"));

//Sorting

const webTech1 = ["HTML", "CSS", "JS", "REACT", "C++", "FLUTTER"];

webTech1.sort();
console.log(webTech1);

webTech1.reverse();
console.log(webTech1);

//EXERCISE

const countries1 = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const webTechs1 = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

// Declare an empty array
const array = Array();
// Declare an array with more than 5 number of elements
const array5number = Array(5);

//Find the length of your array
console.log(webTechs1.length);
console.log(countries1.length);
console.log(array5number);

//Get the first item, the middle item and the last item of the array
let firstWebTechs1 = webTechs1[0];
let lastWebTechs1 = webTechs1.pop();

const middleIndex = Math.floor(webTechs1.length / 2);
console.log(webTechs1[middleIndex]);
console.log(firstWebTechs1);
console.log(lastWebTechs1);

let firstCountries = countries1[0];
let lastCountries = countries1.pop();
const middleCoun = Math.floor(countries1.length /2);

console.log(firstCountries);
console.log(lastCountries);
console.log(countries1[middleCoun]);


// 5. Declare an array called mixedDataTypes, 
//put different data types in the array and 
//find the length of the array. 
//The array size should be greater than 5

// const arr = [
//   "Asabenh",
//   250,
//   true,
//   { country: "Finland", city: "Helsinki" },
//   { skill: ["HTML", "CSS", "JS"] },
// ];


const mixedDataTypes = [
  "Long",
  "20",
  "VietNam",
  true,
  250,
  { country: "VietNam", city: "HoChiMinh" },
]

console.log(mixedDataTypes);
console.log(mixedDataTypes.length);

// 6. Declare an array variable name itCompanies and assign initial values
// Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon

const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM","Oracle", "Amazon"];
console.log(itCompanies);

// 8. Print the array using console.log()
console.log(itCompanies.length);


// 9. Print the first company, middle and last company
console.log(itCompanies[0]);

let midC = Math.floor(itCompanies.length / 2);

console.log(itCompanies[midC]);

let lastCom = itCompanies.length - 1;
console.log(itCompanies[lastCom]);

// 10.  Print out each company
console.log("--------------");
console.log("Company");
console.log(itCompanies[0]);
console.log(itCompanies[1]);
console.log(itCompanies[2]);
console.log(itCompanies[3]);
console.log(itCompanies[4]);
console.log(itCompanies[5]);
console.log(itCompanies[6]);

// 16. Change each company name
// to uppercase one by one and print them out
itCompanies.reverse();
console.log(itCompanies);


// 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, 
//IBM,Oracle and Amazon are big IT companies. 

let sentence = itCompanies.slice(0, -1).join(',') + ', and' + itCompanies.slice(-1) + 'are big IT company';
console.log(sentence);