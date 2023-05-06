function addMessage(message) {
    document.getElementById('output').innerHTML += message + "<br>";
}


//Simple declaration of a number
let numberVar = 1;

addMessage("numberVar = " + numberVar);

//Simple declaration of a string
let stringVar = "Hello";

addMessage("stringVar = " + stringVar);


//Examples of let and var
try {
    undeclaredLet = 1;
    let undeclaredLet = 1;
    alert("How did this happen!");
} catch (error) {
    addMessage("Can not use a variable declared as let before let statement.  The error is: " + error);
}

try {
    undeclaredVar = 1;
    var undeclaredVar = 1;
    addMessage("But for var keyword this is ok");
} catch (error) {
    alert("How did this happen!");
}


//Examples of the difference between == and ===
let testNum = 1;

if (testNum === 1) {
    addMessage("Compares value if same type");
} else {
    alert("How did this happen!");
}

if (testNum === "1") {
    alert("How did this happen!");
} else {
    addMessage("This will not work");
}

if (testNum == "1") {
    addMessage("Compares value converting the type");
} else {
    alert("How did this happen!");
}


//Example of ternary operators
let ternaryTestVal = 1;
addMessage(ternaryTestVal === 1 ? "Example of the Ternary" : "this should not happen");


//Examples of functions
function functionOne() {
    addMessage("Function example one");
}

functionOne();

let functionExpression = function functionTwo() {
    addMessage("Function example two")
};

//This works now
functionExpression();

//But this does not
try {
    functionTwo();
    alert("How did this happen!");
} catch (error) {
    addMessage("If the function is assigned to a function expression you cannot use the name.");
}

//Function with argument
function addTwo(a, b) {
    if (a === undefined) {
        addMessage("First argument a undefined");
    } else if (b === undefined) {
        addMessage("First argument b undefined");
    } else {
        addMessage("Adding " + a + " + " + b + "=" + (a + b));
    }
}

//if you do not pass a value it succeeds but the missing argument is undefined
addTwo(1, 2);
addTwo(1);

//return values
function multiplyByTwo(a) {
    let returnVal = a * 2;
    return returnVal;
}
addMessage("Multiply 3 buy 2 :" + multiplyByTwo(3));

//this case the return is undefined
addMessage("Add two does not return anything: " + addTwo(1, 2));

//nesting functions and scope
let x = 10;

function x1() {
    addMessage("Pulling in x from outer scope, should be 10 " + x);

    let x2 = function () {
        let x = 100;
        addMessage("&nbsp;&nbsp;New x is defined, should be 100 " + x);
    }
    x2();

    addMessage("Back out of scope, should be 10 " + x);
}
x1();



/*
 * Looking at objects
 */

let person = {
    name: 'john',
    age: 32,
    partTime: false
}

//members can be read in dot notation and brackets
addMessage("Object Person");
addMessage("-name:" + person.name);
addMessage("-age: " + person['age']);

//Symbol can be used to hide info that is
//only accessable from this scope
function testSymbol() {
    let secretSymbol = Symbol();

    let person2 = {
        name: 'jane',
        age: 45,
        partTime: false,
        [secretSymbol]: "secret stuff"
    }

    addMessage("-In Function Scope name:" + person2.name);
    addMessage("-In Function Scope age:" + person2.age);
    addMessage("-In Function Scope secretSymbol:" + person2[secretSymbol]);
    return person2
}


let returnPerson2 = testSymbol();
addMessage("-Out of Function Scope name:" + returnPerson2.name);
addMessage("-Out of Function Scope age:" + returnPerson2.age);

try {
    addMessage("-Out of Function Scope secretSymbol:" + returnPerson2[secretSymbol]);
    alert("How did this happen");
} catch (error) {
    addMessage("-Cant access secretSymbol and should fail");
}


//Add a method

let person3 = {
    name: 'john',
    age: 32,
    partTime: false,
    showAge: function () {
        addMessage("Age " + this.age);
    }
}
person3.showAge();

//objects pass by reference.  This should increment the age by 1
let originalAge = person3.age;
function incrementAge(p) {
    p.age++;
}
incrementAge(person3);
if (originalAge === (person3.age - 1)) {
    addMessage("it worked");
} else {
    alert("How did we get here?");
}
person3.showAge();





//DOM interaction
const clickableText = document.getElementById("test_click");

clickableText.addEventListener("click", function () {
    addMessage("Clicky click click")
});

const revealSecret = document.getElementById("secret_click");

revealSecret.addEventListener("click", function () {
    const secretBlock = document.getElementById("hiddenBlock");

    if (secretBlock.classList.contains('d-none')) {
        secretBlock.classList.remove('d-none');
    } else {
        secretBlock.classList.add('d-none');
    }
});



//Arrays
let intArray = [10, 20, 30, 40, 50, 60];

addMessage("This array: " + intArray);
addMessage("-value 1:" + intArray[0]);
addMessage("-length:" + intArray.length);

intArray.push(55);
addMessage("Modified : " + intArray);
intArray[6] = 70;
addMessage("Modified : " + intArray);
intArray.pop();
addMessage("Modified : " + intArray);
intArray.shift();
addMessage("Modified : " + intArray);
intArray.unshift(10);
addMessage("Modified : " + intArray);

// take 20,30,40
addMessage("Slice : " + intArray.slice(1, 4));

// remove 30,40
let intArray2 = [10, 20, 30, 40, 50, 60];
intArray2.splice(2, 2)
addMessage("Splice : " + intArray2);

// replace 30,40 with 99
intArray2 = [10, 20, 30, 40, 50, 60];
intArray2.splice(2, 2, 99)
addMessage("Splice : " + intArray2)

// insert 99
intArray2 = [10, 20, 30, 40, 50, 60];
intArray2.splice(2, 0, 99)
addMessage("Splice : " + intArray2);

addMessage("[" + intArray + "].indexOf(40) = " + intArray.indexOf(40));
addMessage("[" + intArray + "].indexOf(99) = " + intArray.indexOf(99));
addMessage("[" + intArray + "].filter(/*records > 30*/) = " + intArray.filter(function (item) {
    return item > 30;
}));
addMessage("[" + intArray + "].find(/*records > 30*/) = " + intArray.find(function (item) {
    return item > 30;
}));
addMessage("[" + intArray + "].forEach(/*log*/) ");
intArray.forEach(function (item) {
    addMessage(">>>"+item);
});


//Rest Parameters or variable length parameters
function sendListNumbers(name, ...allNumbers) {
    addMessage("We have list :" + name);
    allNumbers.forEach(function (item) {
        addMessage(">>>" + item);
    });
};
sendListNumbers("Even", 2, 4, 6, 8, 10);


//destructuring arrays
let idList = [11, 22, 33];
let [id1, id2, id3] = idList;
addMessage("Deconstructed id2:" + id2);

let id4, remainingIds, remainingIds2;
[id4, ...remainingIds] = idList;
[, ...remainingIds2] = idList;
addMessage("Deconstructed restIDS: [" + remainingIds + "]");
addMessage("Deconstructed restIDS: [" + remainingIds2 + "]");

//destructuring objects
let car = { id: 500, style: 'convertible' };
let id, style;
({ id, style } = car);
addMessage("Destructured Object id:" + id + " style:" + style);

//and again in declaration
let car_2 = { id_2: 500, style_2: 'convertible' };
let { id_2, style_2 } = car_2;
addMessage("Destructured Object id:" + id_2 + " style:" + style_2);


//spread syntax
function print3(a, b, c) {
    addMessage(">" + a + "<>" + b + "<>" + c + "<");
}
let intArray3 = [1, 2, 3];
print3(...intArray3);
intArray3 = [1, 2, 3, 4];
print3(...intArray3);
let msg = "abc";
print3(...msg);


//typeof
addMessage("Type of :" + typeof (1)); // number
addMessage("Type of :" + typeof (false)); // boolean
addMessage("Type of :" + typeof ("Hello")); // string
addMessage("Type of :" + typeof (function () { })); // function
addMessage("Type of :" + typeof ({})); // object
addMessage("Type of :" + typeof (null)); // object
addMessage("Type of :" + typeof (undefined)); // undefined
addMessage("Type of :" + typeof (NaN)); // number

//parseing
addMessage("Parse :" + Number.parseInt("33"));