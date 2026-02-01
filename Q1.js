// Array of Indian states
let states = [
  "Andhra Pradesh",
  "Bihar",
  "Odisha",
  "Uttar Pradesh",
  "Maharashtra",
  "Assam",
  "Punjab",
  "Kerala",
  "Rajasthan",
  "Gujarat",
  "unnao"
];

// Remove states starting with vowels
let result = states.filter(state => {
  let firstChar = state[0].toLowerCase();
  return !["a", "e", "i", "o", "u"].includes(firstChar);
});

console.log(result);
