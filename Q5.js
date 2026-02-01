function correctfn(string, wrong, correct) {
  return string.replace(wrong, correct);
}

let sentence = "I love JavScript programming";
let output = correctfn(sentence, "JavScript", "JavaScript");

console.log(output);
