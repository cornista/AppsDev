function myAddition(){
    var x = parseInt( document.getElementById("num1").value);
    var y = parseInt(  document.getElementById("num2").value);

    var result = x + y
    document.getElementById("answer").innerHTML = result;
    
}
function mySubstraction(){
    var x = parseInt( document.getElementById("num1").value);
    var y = parseInt(  document.getElementById("num2").value);

    var result = x - y
    document.getElementById("answer").innerHTML = result;
 
}
function myMultiplication(){
    var x = parseInt( document.getElementById("num1").value);
    var y = parseInt(  document.getElementById("num2").value);


    var result = x * y
    document.getElementById("answer").innerHTML = result;
  
}

function myDivision(){
    var x = parseInt( document.getElementById("num1").value);
    var y = parseInt(  document.getElementById("num2").value);


    var result = x / y
    document.getElementById("answer").innerHTML = result;

}
function darkMode(){
    var element = document.body;
   element.classList.toggle("dark-mode");
}