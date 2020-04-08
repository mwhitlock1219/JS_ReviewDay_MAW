//Make an array of pizza toppings

const toppings = ['Cheese', 'Pepperoni', 'Garlic', 'Peppers.'];

//Create function that can be called to create string "A delicious pizza with Cheese and Pepperoni and Garlic and Peppers."

function description (toppings){

	return ('A delicious pizza with ' + toppings.join(' and ' ));
};

//Log function to console then Call function and pass array through function

console.log(description(toppings));