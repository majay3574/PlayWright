/* const user = { name: "Mike", age: 25, role: "SDET" };
const serializedData = JSON.stringify(user);
console.log(serializedData); 
// Output: '{"name":"Mike","age":25,"role":"SDET"}'

const person = {
    name: "Mike",
    age: 25,
    password: "secret123", // Should not be serialized
    toJSON() {
      return { name: this.name, age: this.age }; // Excludes `password`
    }
  };
  
  console.log(JSON.stringify(person)); 
  // Output: '{"name":"Mike","age":25}'

const jsonString = '{"name":"Mike","age":25}';
const userObject = JSON.parse(jsonString);
console.log(userObject.name); 
// Output: Mike

  
 */
//console.log([...new Set(num1)]);
let num1 = [1, 2, 3, 4, 5, 6,];
let num2 = [3, 4, 5, 6, 7, 8, 9]

let num3 = []

for (let i = 0; i < num1.length; i++) {
  for (let j = 0; j < num2.length; j++) {
    if (num1[i] == num2[j]) {
      num3.push(num1[i])
      break;
    }

  }
}
console.log(num3);