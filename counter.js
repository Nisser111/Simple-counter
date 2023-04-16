const increase = document.getElementById("increment");
const decrease = document.getElementById("decrement");
const reset = document.getElementById("reset");
const display = document.getElementById("display").value;
const negativNumSwich = document.getElementById("negativ-num-flag");

let counter = 0;

negativNumSwich.addEventListener("change", () => {
    if(negativNumSwich) {
        counter = 0;
        document.getElementById("display").value = counter;
    }
})

increase.addEventListener("click", () => {
    counter++;
    document.getElementById("display").value = counter;
});

decrease.addEventListener("click", () => {
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

reset.addEventListener("click", () => {
    counter = 0;
    document.getElementById("display").value = counter;
});

