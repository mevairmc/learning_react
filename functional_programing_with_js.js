// Javascript is Functional
/*
* you can use Javascript like it be a variable or a object.
* Also, we can return a function or use a function into a variable, even we sent a function like a parameter
* */

const log = message => {
  console.log(message);
}

const insideFn = logger => {
  logger('They can be sent to other functions as arguments')
}

insideFn(message => console.log(message))

//  We can use two arrow function (higher-order-functions)

const createScrean = logger => message => {
  logger(message.toUpperCase() + '!!!');
}
//  We can say that JS support functional programming because its functions are first-class citizens

/* IMPERATIVE VERSUS DECLARATIVE */

// Example of Declarative function
const string = "Restaurant in Hanalei"
const urlFriendly = string.replace(/ /g, "-")

console.log('urlFriendly')
/* the details of how space are detail with are abstracted away inside the replace function */
/* With vanilla js is difficult to use declarative functions when we try to build in the DOM */
/* React use declarative functions */

/* FUNCTIONAL CONCEPTS*/
// 1. IMMUTABILITY
// To be immutable is to be unchangeable => In a functional program, data is immutable. It never changes

let color_lawn = {
  title: "lawn",
  color: "#00FF00",
  rating: 0
};

const rateColor = function(color, rating) {
  return Object.assign({}, color, { rating: rating})
}

console.log(rateColor(color_lawn,5).rating)
console.log(color_lawn.rating)

/*Extra how to make a deep clone ? */

const obj1 = { a: 1, b: { c: 0 }}
let obj3 = JSON.parse(JSON.stringify(obj1))

/* Generate a immutable array */
let list = [{ title: "Rad Red" }, { title: "Lawn" }, { title: "Party Pink" }];

/*Bad way*/
const addColor = function (title, colors){
  colors.push({title:title})
  return colors
}

/* One alternative*/
const addColor2= (title, array) => array.concat({ title })
/* or */
const addColor3 = (title,list) => [...list, {title}]

console.log(addColor("Glam Green", list).length)
console.log(list.length)

// Pure Functions
/* Treat his data like a immutable functions */

const selfEducate = person => ({
  ...person, // spread operator generate a new object and the second and the third line setup some values of main object
  canRead:true,
  canWrite: true
})

/*  3 rules to write functions */

/*
* 1. The function should take in at least one argument
* 2. The function should return a value or another function
* 3.The function should not change or mutate any of its arguments
* */

/* Data transformation */
/* Functional programming is alla bout transforming data from one form to another */
/* We need a master in Array.map and Array.reduce */

const schools = ["Yorktown", "Washington & Liberty", "Wakefield"]
// school.join(", ") dont modify the array, this method generate a new array
// school.filter( school => school[0] === "W")  generate a new array

// Array.pop or Array.splice are not immutable
// Object.Keys returns a new array

// The last we need to use reduce
const ages = [21, 18, 41, 40, 64, 63, 31 ]

const maxAge = ages.reduce((max,age) =>{
  console.log(`${age} > ${max} = ${age > max}`)
  if(age > max) {
    return age
  } else {
    return max
  }
}, 0)

// Array.reduceRight start from the end
// Array.IndexOf(searchElement) if not found  return -1

// HIGHER ORDER FUNCTIONS
/* Higher order functions are functions that can manipulate other functions */
/* Currying is a functional technique that involves the use of higher-order functions*/

const userLogs = userName => message => console.log(`${userName} -> ${message}`)

const log = userLogs('grandpa23');
log("attempted to load 20 fake members")

/* Recursion  is a technique that involves creating functions that recall themself */

const countdown = (value, fn) => {
  fn(value);
  return value > 0 ? countdown( value - 1, fn) : value;
}

countdown(10, value => console.log(value))


/* Recursion is a good technique for searching data structures */
const dan = {
  type: "person",
  data: {
    gender: "male",
    info: {
      id: 22,
      fullname: {
        first: "Dan",
        last: "Deacon"
      }
    }
  }
};

const deepPick = (fields, object = {}) => {
  const [first, ...remaining] = fields.split(".")
  return remaining.length
    ? deepPick(remaining.join("."), object[first])
      : object[first]
}

deepPick("data.info.fullname.first", dan); // "Dan"

// COMPOSITIONS




// Vocabulary

//  comes up a lot = surge mucho
//  beef up = reforzar
//  prepended = precedido

