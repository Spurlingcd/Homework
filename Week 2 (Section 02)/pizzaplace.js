let pizzaPlace = "Carmelo's";
let numberOfToppings = 18;

console.log(pizzaPlace, typeof pizzaPlace, numberOfToppings, typeof numberOfToppings);

console.log(`I love going to ${pizzaPlace}, because they have ${numberOfToppings} different toppings!`);

if (numberOfToppings < 10) {
  console.log("Quality, not quantity.");
} else {
  console.log("A whole lot of pizza.");
}

//Have the variables reference the name of your Pizza Place and the number of toppings your Pizza Place offers.
//Print the variables and their types.
//Print a template literal that uses both variables to construct a short sentence about your Pizza Place.
//Construct an if statement that prints "Quality, not quantity." if you offer less than 10 toppings, or "A whole lot of pizza." if you offer 10 or more toppings.
//Add, commit, and push your JS file to your GitHub repo.
//Send your TA a link to your GitHub Homework repo when finished.
;

for (let counter = 1; counter <= numberOfToppings; counter ++ )
 if ((counter%2 === 0)) {
  console.log(counter);
}
//Use a loop to print all of the even numbers from 1 to numberOfToppings (or 10)

//An example of the output you want for in this assignment is:

//The House of Pizza string 8 number At The House of Pizza, we have 8 toppings. Quality, not quantity.
