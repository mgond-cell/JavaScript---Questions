let string = "INDIA";

let arr = string.split("");   // Convert string to array

// Insert O, N, E, S after "IND"
arr.splice(3, 0, "O", "N", "E", "S");

let output = arr.join("");    // Convert array back to string

console.log(output);
