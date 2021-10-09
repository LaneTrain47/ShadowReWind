// Get starting values from the input field on the page
// Controller function
function getString() {
    //Get the user's input
    let userString = document.getElementById("userString").value;
    //Version 2 - Test the user's input for length

    //Reverse the user's input - this is a separate function
    let revString = reverseString(userString);

    //Display the result - this is a separate function
    displayString(revString);
}

function reverseString(userString) {
    let startValue = userString.length - 1;
    let endValue = 0;

    //User input = Frank
    //Frank is a string AND an array of characters
    //[F, r, a, n, k]

    let revString = "";

    //Since this is a decremented for loop, the startValue must be higher than the endValue
    for (let i = startValue; i >= endValue; i--) {
        revString += userString[i];
    };

    //Loop 1 - "k"
    //Loop 2 - "kn"
    //Loop 3 - "kna"
    //Loop 4 - "knar"
    //Loop 5 - "knarF"
    return revString;

}

function displayString(revString) {
    let output = document.getElementById("results");

    output.innerHTML = revString;
}