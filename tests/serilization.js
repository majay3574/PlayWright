const user = { name: "Mike", age: 25, role: "SDET" };
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

  