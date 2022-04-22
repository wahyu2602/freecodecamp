//  Membuat JavaScript Object Dasar --------------------
let dog = {
  name: "Aclice",
  numLegs: 2
};


// Mengambil value dari sebuah Object --------------------
let dogs = {
  name: "Spot",
  numLegs: 4
};
// Only change code below this line
// console.log(dogs.name);
// console.log(dogs.numLegs);


let dogss = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function () { return "This dog has " + dogss.numLegs + " legs." }
};
// console.log(dogss.sayLegs());

let testing = Object.values(dog);
// console.log(testing);

// -------------------------------------------------------

// tabs is an array of titles of each site open within the window
const Window = function (tabs) {
  this.tabs = tabs; // We keep a record of the array inside the object
};

// When you join two windows into one window
Window.prototype.join = function (otherWindow) {
  this.tabs = this.tabs.concat(otherWindow.tabs);
  return this;
};

// When you open a new tab at the end
Window.prototype.tabOpen = function (tabs) {
  this.tabs.push('new tab'); // Let's open a new tab for now
  return this;
};

// When you close a tab
Window.prototype.tabClose = function (index) {

  // Only change code below this line

  const tabsBeforeIndex = this.tabs.slice(0, index); // Get the tabs before the tab
  const tabsAfterIndex = this.tabs.slice(index + 1); // Get the tabs after the tab

  this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together
  // console.log(tabsBeforeIndex);
  // console.log(tabsAfterIndex);
  // Only change code above this line

  return this;
};

// Let's create three browser windows
const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Entertainment sites

// Now perform the tab opening, closing, and other operations
const finalTabs = socialWindow
  .tabOpen() // Open a new tab for cat memes
  .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
  .join(workWindow.tabClose(1).tabOpen());
// console.log(finalTabs.tabs);


//  -----------------------------------------------------
// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(arr, bookName) {

  let newBook = [...arr]
  newBook.push(bookName);
  return newBook;

  // Change code above this line
}

// Change code below this line
function remove(arr, bookName) {
  let removeBook = [...arr]
  const book_index = bookList.indexOf(bookName);
  if (book_index >= 0) {

    removeBook.splice(removeBook.indexOf(bookName), 1);
    return removeBook;

    // Change code above this line
  }
}

let newBookList = add(bookList, 'A Brief History of Time');
let newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
let newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');


// --------------------------------------------------------
// The global variable
const s = [23, 65, 98, 5];
const b = [1, 2, 3, 4, 5,];

Array.prototype.myMap = function (callback) {
  const newArray = [];
  // Only change code below this line
  this.forEach(a => newArray.push(callback(a)));
  // Only change code above this line
  // console.log(newArray);
  return newArray;
};

const new_s = b.myMap(function (item) {
  return item * 2;
});


//  ---------------------------------------------------------
const squareList = arr => {
  // Only change code below this lin
  return arr
    .filter(num => num > 0 && num % parseInt(num) === 0)
    .map(num => Math.pow(num, 2));
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
// console.log(squaredIntegers);


// -----------------------------------------------------------
const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  let newArray = [];
  // Only change code below this line
  arr.map(num => newArray.push(num))
  return newArray.sort((a, b) => a - b);
  // Only change code above this line
}

let test = nonMutatingSort(globalArray);
let test2 = nonMutatingSort([1, 30, 4, 21, 100000]);
// console.log(test2)


// ----------------------------------------------------------
// Only change code below this line
function urlSlug(title) {
  return title.trim().split(/\s+/).join('-').toLowerCase();

}
// Only change code above this line
let testOne = urlSlug(" Winter Is  Coming");
// console.log(testOne);


// ---------------------------------------------------------
// 1 + 2 = 3 + 3 = 6 + 4 = 10
// 5 + 5 = 10 + 6 = 16 + 7 = 23 + 8 = 31 + 9 = 40 
function sumAll(arr) {
  let hasil = 0
  arr.sort((a, b) => a - b);
  let num = arr[0];
  let limit = arr[1];
  for (let i = num; i <= limit; i++) {
    hasil += i
  }
  return hasil
}
let testTwo = sumAll([5, 10]);
// console.log(testTwo);


// ---------------------------------------------------------
function diffArray(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter(num => !arr1.includes(num) || !arr2.includes(num))
}
let testThree = diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
// console.log(testThree);


// --------------------------------------------------------
function destroyer(arr, ...num) {
  return arr.concat(num).filter(a => !arr.includes(a) || !num.includes(a));
}
let testFour = destroyer([1, 2, 3, 1, 2, 3], 2, 3);
// console.log(testFour);


// ---------------------------------------------------------
function whatIsInAName(collection, source) {
  // Only change code below this line
  const keySource = Object.keys(source);
  return collection.filter(data => keySource.every(key => data.hasOwnProperty(key) && data[key] === source[key]));

  // Only change code above this line
}
let testFive = whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
// console.log(testFive);


// ----------------------------------------------------------
function spinalCase(str) {
  var regex = /\s+|_+/g;

  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");

  // Replace space and underscore with -
  return str.replace(regex, "-").toLowerCase();
}
let testSix = spinalCase('Teletubbies say Eh-oh');
// console.log(testSix);


// ---------------------------------------------------------
// ambil kalimat yang hurufnya diawali dengan vowel(aeiou) maka dibalik dan taruh dibelakang kalimat dan tambahkan "way"
function translatePigLatin(str) {
  return str.replace(/^[aeiou]\w*/, "$&way").replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
}
let testSeven = translatePigLatin("consonant");
// console.log(testSeven);
