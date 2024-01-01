// JSON Iteration:
// Using for loop

// console.log("Using for loop:");

const Data =
  '{"name": "Gokul", "age": 28, "contry": "Inida", "Nationality":"Indian"}';
const jsonObject = JSON.parse(Data);

for (let i = 0; i < Object.keys(jsonObject).length; i++) {
  const key = Object.keys(jsonObject)[i];
  console.log(key + ": " + jsonObject[key]);
}
// Using for...in loop

// const Data =
//   '{"name": "Gokul", "age": 28, "contry": "Inida", "Nationality":"Indian"}';
// const jsonObject = JSON.parse(Data);

// console.log("\nUsing for...in loop:");
// for (const key in jsonObject) {
//   if (jsonObject.hasOwnProperty(key)) {
//     console.log(key + ": " + jsonObject[key]);
//   }
// }

// Using for...of loop (not applicable for objects)
// console.log("\nUsing for...of loop (not applicable for objects):");

// Using forEach (not applicable for objects)
// console.log("\nUsing forEach (not applicable for objects):");
