//Vovel Consonent count in the given String of Character:

let str = "India is a beautiful country"; // 20+ characters

let vowels = 0;
let consonants = 0;

str = str.toLowerCase();

for (let ch of str) {
  if (ch >= 'a' && ch <= 'z') {        // check only letters
    if ("aeiou".includes(ch)) {
      vowels++;
    } else {
      consonants++;
    }
  }
}

console.log("Vowels:", vowels);
console.log("Consonants:", consonants);
