//Make an array of pizza toppings

const toppings = ['Cheese', 'Pepperoni', 'Garlic', 'Peppers.'];

//Create function that can be called to create string "A delicious pizza with Cheese and Pepperoni and Garlic and Peppers."

function description (toppings){

	return ('A delicious pizza with ' + toppings.join(' and ' ));
};

//Log function to console then Call function and pass array through function

console.log(description(toppings));


// //***** Another Method to Answer Question *****

// //Created a function to return array as a string.

// function description (){
// 	var addtoppings = toppings.join(' and ');
// 	return addtoppings;
// }
// //logs to array to console

// console.log(description());


// // Modifying the function above to retunr string and another string.

// function description (){
// 	var addtoppings = toppings.join(' and ');
// 	return 'A delicious pizza that has ' + addtoppings;
// }
// //logs to array to console with both strings

// console.log(description());