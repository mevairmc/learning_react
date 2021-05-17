JavaScript for React

Arrow function don't generate new scopes in set time out

const sandwich = {
    bread: "dutch crunch",
    meat: "tuna"
}

const { bread } = sandwich

console.log(bread) // "ducth crunch"

const func = ({variable}){
    //code
}

const hash = {}
func(hash);

//Destructuring arrays

const [,,third] = ["a","b","c"]

// object literal

const name = "tallac";
const hash = { name }
//output
    {name: tallac}

we can use spread operator ...arr to create a new value


const morning = {
breakfast: "oatmeal",
lunch: "peanut butter and jelly"
};

const dinner = "mac and cheese";

const backpackingMeals = {
...morning,
dinner
};

console.log(backpackingMeals);

// {
//   breakfast: "oatmeal",
//   lunch: "peanut butter and jelly",
//   dinner: "mac and cheese"
// }


//more than one arrow is you are using high-order function
