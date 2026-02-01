//Q2) let str = 'I love my India'   output expected = 'India my love I'  Write code for this.

let str = "I love my India";

let output = str
  .split(" ")   // split sentence into words
  .reverse()    // reverse word order
  .join(" ");   // join back into string

console.log(output);

