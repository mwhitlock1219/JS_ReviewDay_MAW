var fruits = ['apples', 'bananas', 'cherries', 'dates'];

// Goes through eat index item and capitalizes the whole word. USING FOR LOOP

// function capitalize (){
// 	for (let i = 0; i < fruits.length; i++){
// 		fruits[i] = fruits[i].toUpperCase();
// 		console.log(fruits[i]);
// 	}
// }

//Calls function above.

// capitalize();


// ********************* OR ***********************

// Creates function to capitalize an item.USING .MAP

// function capitalize(fruitItem){
// 	return fruitItem.toUpperCase();
// }

// Array items are passed through function and are capitalized and sent back as a new array.

// var fruitsCapitalized = fruits.map(capitalize);


// ********************* OR ***********************

// Same as above but everything is done in one line/function. USING.MAP

var fruitsCapitalized = fruits.map(function capitalize(fruitItem) {
    return fruitItem.toUpperCase();
});
console.log (fruitsCapitalized);