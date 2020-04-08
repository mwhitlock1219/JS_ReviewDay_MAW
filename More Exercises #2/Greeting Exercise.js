// let name = prompt('Enter Name:')

// function greet(name){
// 	console.log ('Hello, '+ name);
// }
// greet();

function btnPrompt() {
  var person = prompt("Enter Name: ", "Name...");
  if (person != null) {
    document.getElementById("name").innerHTML =
    "Hello " + person + "! How are you today?";
  }
}