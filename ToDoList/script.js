
let inputList = document.getElementById('inputField');
let addButton = document.getElementById('addToDo');
let toDoList = document.getElementById('toDoContainer');

addButton.addEventListener('click', function(){
    var phrase = document.createElement('p');
    phrase.classList.add('paragraph-styling');
    phrase.innerText = inputList.value;
    toDoList.appendChild(phrase);
    inputList.value = "";

    phrase.addEventListener('click', function(){
        phrase.style.textDecoration = "line-through";
    })
    phrase.addEventListener('dblclick', function(){
        toDoList.removeChild(phrase);
    })
})