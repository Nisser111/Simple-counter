const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");
const reset = document.getElementById("reset");
const display = document.getElementById("display").value;

let counter = 0;

increment.addEventListener("click", function(){
    counter++;
    document.getElementById("display").value = counter;
});

decrement.addEventListener("click", function(){
    if(document.getElementById("negativ-num-flag").checked) {
        counter--;
        document.getElementById("display").value = counter;
    }else if(counter == 0){
        return false;
    }else {
        counter--;
        document.getElementById("display").value = counter;
    }
});

reset.addEventListener("click", function(){
    counter = 0;
    document.getElementById("display").value = counter;
});

