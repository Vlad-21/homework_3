// Task 1: Створіть функцію яка клонує об'єкти
function createClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

let testObjectParrent = {
    name: "Parrent",
    age: 50,
}

let childeObj = createClone(testObjectParrent);

childeObj.name = "Willi",
childeObj.age = "20"

console.log("Parent =>", testObjectParrent);
console.log("childe =>", childeObj);


// Task 2: Створіть функцію яка порівнює два об'єкти
//First option
function equalObj(firstObj, secondObj) {
    return JSON.stringify(firstObj) === JSON.stringify(secondObj);
}

let obj1 = {
    name: "Ivan",
    surname: null,
    age: 28,
    skills: {
        driving: true,
        sing: true,
        flying: false
    }
}

let obj2 = {
    name: "Ivan",
    surname: null,
    age: 28,
    skills: {
        driving: true,
        sing: true,
        flying: false
    }
};

console.log("First option =>", equalObj(obj1, obj2));

//Task 3
const storageRoom = {
    cannedFood: {
        name: "Canned Food",
        count: 96,
        pricePerUnit: 14,
    },
    bread: {
        name: "Bread",
        count: 1000,
        pricePerUnit: 5,
    },
    milk: {
        name: "Milk",
        count: 30,
        pricePerUnit: 10,
    },
    water: {
        name: "Water",
        count: 245,
        pricePerUnit: 20,
    },
    coffee: {
        name: "Coffee",
        count: 199,
        pricePerUnit: 12,
    }
}

function getTotalPrise(product) {
    console.log(`Total prise for ${product.name}: ${product.count * product.pricePerUnit}`);
}

getTotalPrise(storageRoom.coffee);
getTotalPrise(storageRoom.bread);
getTotalPrise(storageRoom.cannedFood);

// Task 4
function createBook(name, author, publication) {
    return {
        name: name,
        author: author,
        publication: publication,
        getInfo: function () {
            console.log(`Book: ${this.name}, author: ${this.author}, publication: ${this.publication}`);
        }
    }
};

let book1 = new createBook("Harry Potter: Part 1", "Joanne Rowling", '1997');
let book2 = new createBook("The Lord of the Rings", "John Ronald Reuel Tolkien", '1954');
let book3 = new createBook("The Lion, the Witch and the Wardrobe", "Clive Staples Lewis", '1950');
console.log("Book1 =>", book1)
book1.getInfo();
console.log("Book2 =>", book2)
book2.getInfo();
console.log("Book3 =>", book3)
book3.getInfo();


//Task 5

function isPrime(number) {
    if (number < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

console.log("Number =>", isPrime(139));


// Task 6

function getFactorial(value) {
    let result = 1;
    for (let i = 1; i <= value; i++) {
        result *= i;
    }
    return result;
}

console.log("Factorial =>", getFactorial(10));


// Task 7

function isPalindrome(str) {
    str = str.toLowerCase().replace(/\s/g, '');
    let reversed = str.split('').reverse().join('');
    return str === reversed;
}

console.log("Is palindrome =>", isPalindrome("кит на морі романтик"));


// Task 8

function upperCase(str) {
    return str.toUpperCase();
}

console.log("To upper case =>", upperCase("кит на морі романтик"));

// Task 9

function deleteDuplicate(array) {
    return Array.from(new Set(array));
}

const numberArray = [
    'hello',
    'world',
    'foo',
    'bar',
    'hello',
    'baz',
    'qux',
    'world',
    'foo',
    'hello'
];

console.log("Delete duplicate =>", deleteDuplicate(numberArray));

//Task 10
function changeTimeFormat(time) {
        return time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
}

console.log("Date =>", changeTimeFormat(new Date(2023, 3, 9, 9, 30)));
console.log("Date =>", changeTimeFormat(new Date(2023, 3, 9, 20, 30)));





