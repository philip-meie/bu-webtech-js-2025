let input = prompt("Input integer number");

let number = parseInt(input);

if (isNaN(number)) {
    alert("Please enter a valid integer number");
} else if (number === 0) {
    alert("zero integer number");
} else if (number % 2 === 0) {
    alert("even integer number");
} else {
    alert("odd integer number");
}
