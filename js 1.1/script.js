var numbers = [];
var tArr = [];
var count = 1;

function callArr(){
    for(var i=0; i<5; i++){

        tArr[i] = prompt("Input 5 numbers");
    }
return tArr;
}

callArr();

    for(var i = 0; i < 5; i++){

        if(tArr[i].includes('5')){
            store = tArr[i];
            alert("!!!! " + " there is a 5 in this array ");
            
            count--;
        }
    }

    if (count != 0){
        alert("5 does not exist in this array.");
    }




