 // Create 4 digit pin with a function
 function createPin() {
    const getPin = Math.random() * 10000;
    const pinSplit = (getPin + "").split(".")[0];

    if (pinSplit.length === 4) {
        return pinSplit;
    }
    else {
        return createPin();
    }
}

function pinClick() {
    const input = document.getElementById("generatePin");
    input.value = createPin();
}

// Handle calculator button event
const buttonContainer = document.getElementById("digit-container");
buttonContainer.addEventListener("click", function(event){
    const digit = event.target.innerText;
    if(isNaN(digit)){

    }
    else{
        const typed = document.getElementById("type-pin");
        typed.value = typed.value + digit;
    }
})

// Check pin function
function checkPin(){
    const pin = document.getElementById("generatePin").value;
    const typedPin = document.getElementById("type-pin").value;
    if(pin === typedPin){
        const correct = document.getElementById("correct-pin");
        correct.style.display="block";
    }
    else{
        const correct = document.getElementById("incorrect-pin");
        correct.style.display="block";
    }

}
