addFunc= (a,b) => {return parseInt(a) + parseInt(b)};
subtractFunc= (a,b) => {return parseInt(a) - parseInt(b)};
multiplicationFunc= (a,b) => {return parseInt(a) * parseInt(b)};
divisionFunc =(a,b) => {return parseInt(a) / parseInt(b)};

var operation = parseInt(prompt ("Enter operation number:\n 1 for addition \n 2 for subtraction \n 3 for multiplication \n 4 for division"));
var x = prompt("Enter first number: ");
var y = prompt("Enter second number: ");

switch(operation){

    case 1:
        alert("The result is: " +addFunc(x,y)); 
        break;

    case 2:
        alert("The result is: " +subtractFunc(x, y)); 
        break;

    case 3:
        alert("The result is: " +multiplicationFunc(x, y)); 
        break;

    case 4:
        alert("The result is: " +divisionFunc(x,y)); 
        break;
}
