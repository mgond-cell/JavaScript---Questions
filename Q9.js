//Q9) Write a function to count the number of words in a paragraph.

function countWords(paragraph) {
  return paragraph.trim().split(/\s+/).length;
}

let text = "India is a diverse and beautiful country with rich culture.";
console.log(countWords(text));
