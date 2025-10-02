let input = prompt("Input integer number").trim();
let number = Number(input);

if (!Number.isInteger(number)) {
    alert(`You entered: ${input}\nPlease enter a valid integer number`);
} else if (number === 0) {
    alert(`You entered: ${number}\nzero integer number`);
} else if (number % 2 === 0) {
    alert(`You entered: ${number}\neven integer number`);
} else {
    alert(`You entered: ${number}\nodd integer number`);
}
