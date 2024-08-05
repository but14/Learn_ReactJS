const numbers = [0, 3.14, 9.81, 98,6, 100]; //array of numbers
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion' ,'Carrot']; //array of string, vegetables
const animalProduct = ['Milk', 'meat', 'butter', 'yoghurt']; //array of string
const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB']; //Array of strign, tech


//print the array and its length

console.log('Numbers:', numbers);
console.log('Number of numbers:', numbers.length);




console.log('Vegetables: ', vegetables);
console.log('Number of Vegetables:', vegetables.length);

console.log('Animal Product:', animalProduct);
console.log('Number of Animal Product:', animalProduct.length);

console.log('Tech:', webTechs);
console.log('Number of Tech:', webTechs.length);


const arr = [
    'Asabenh',
    250,
    true,
    {country: 'Finland', city: 'Helsinki'},
    {skill: ['HTML', 'CSS', 'JS']},
]

console.log(arr);


let js = 'JavaScript';
const charsInJavaScript = js.split('');

console.log(charsInJavaScript)

let dcm = 'Document';
const charsInJavaScript2 = dcm.split('');
console.log(charsInJavaScript2);

const pt = 'Python';
const charsInJavaScript3 = pt.split('');
console.log(charsInJavaScript3);

let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle';
const companies = companiesString.split(',')
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
    'Spain',
    'France',
    'Canada',
    'Germany',
    'Australia',
    'VietNam',
    'USA',
    'UK',
];

console.log(countries);
console.log(countries.length);
console.log(countries[3])
let lastIndexCT = countries.length - 1;

console.log(countries[lastIndexCT]);

const shoppingCart = [
    'Milk',
    'Mango',
    'Tomato',
    'Potato',
    'Meat',
    'Eggs',
    'Sugar',
];

console.log(shoppingCart);
console.log(shoppingCart[3]);
console.log(shoppingCart.length);

let lastShoppingCart = shoppingCart.length - 1;
console.log(shoppingCart[lastShoppingCart]);
   
// Array Constructor

const arra = Array(); // create an an empty array
console.log(arra);

const eightEmptyValues = Array(8).fill('X');
console.log(eightEmptyValues);

const sixValues = Array(6).fill("6");
console.log(sixValues);

const firstList = [1, 2, 3, 4];
const secondList = [5,6,7,8];
const thirdList = firstList.concat(secondList);

console.log(thirdList);




//Getting array length

const numberss = [1,2,3,4,5,6];
console.log(numberss.indexOf(4));

const nameS = ["CR7", "Jack", "Messi"];
console.log(nameS.indexOf("CR7"));

//Check items in a list

const fruits = ['banana', 'orange', 'mango', 'lemon']; //array of string, fruits
let index = fruits.indexOf("orange");
const fruitsAndVeget = fruits.concat(vegetables);
console.log(fruitsAndVeget);
console.log(fruitsAndVeget[3]);

console.log('Fruits:', fruits);
console.log('Number of Fruits:', fruits.length);

let firstFruit = fruits[2];

console.log(firstFruit);

if (index != -1){
    console.log("Found at index " + index);
} else {
    console.log("Not found");
}

//we can use also ternary here

index != -1 ? console.log("Found at index " + index) : console.log("Not found");

// let us check if a avocado exist in the array

let indexOfAvocado = 