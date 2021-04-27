// Boolean
let b: boolean = false;

// Number
let num: number = 1 + 0b1 + 0o1 + 0x1;

// String
const hello: string = 'Hello';
const world: string = "World";
const helloWorld = `
    ${hello}
    ${world}
`

// Null and Undefined
let n: null = null;
let u: undefined = undefined;

let someNumber: number = null;

function uppercaseFirstLetter(str: string | null) {
    // add check : 
    // if given str in not null (truthy - if it is a string)
    if (str) {
        return str[0].toUpperCase() + str.substr(1);
    }
}

console.log(uppercaseFirstLetter('hello'));
uppercaseFirstLetter(null);  //error => change tsconfig.json

// Object
type primitiveTypes = boolean | number | string | symbol | null | undefined;
// object: not primitiave types, => array, object, map etc
const myObj: object = new Map();

// Void
function log(message: string): void {
    console.log(message);
}

// Array
let array1: string[] = ['x', 'y']
let array2: Array<string> = array1;

// Tuple : array with fixed number of elements
let tuple: [string, number] = ['str', 1];

// Enum - a set of choice
enum Color {
    Yellow = 2,
    Orange,
    Purple
}

let myFavoriteColor1: Color = Color.Yellow;
console.log(Color.Yellow, Color.Orange, Color.Purple);  // 2, 3, 4
console.log(Color[2]); // Red

// Enum - a set of choice
enum Color {
    Red = 'red',
    Green = 'green',
    Blue = 'blue'
}

let myFavoriteColor: Color = Color.Blue;
console.log(Color.Red, Color.Green, Color.Blue);  // red, green, blue
console.log(Color['red']); // undefined

// Any - we can assign anything 
let ANY: any;
ANY = 'a string';
ANY = 1;
ANY = true;

// Type Assertions
const email = document.getElementById('email');

if (email) {
    email.addEventListener('change', e => {
        const input = e.currentTarget as HTMLInputElement;
        console.log(input.value);
    })
}
