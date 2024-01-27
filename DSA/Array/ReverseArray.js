/*Initialize Variables:

Set clientName to "Ajay".
Initialize an empty array called arrayOfCharacters. */
let clientName = "Ajay";
let arrayOfCharacters = [];

/* Convert String to Array of Characters Using a For Loop:

Use a for loop to iterate over each character in the clientName.
Inside the loop, push each character to the arrayOfCharacters. */

for (let i = 0; i < clientName.length; i++) {
  arrayOfCharacters.push(clientName[i]);
}
console.log(arrayOfCharacters);

/* Reverse the Array Using a For Loop:

Initialize an empty array called reversedArray.
Use a for loop to iterate over the elements of arrayOfCharacters in reverse order.
Inside the loop, push each element to the reversedArray.
Log the reversedArray to the console. */
let reversedArray = [];
for (let i = arrayOfCharacters.length - 1; i >= 0; i--) {
  reversedArray.push(arrayOfCharacters[i]);
}
console.log(reversedArray);
/* Output:

Run the script to see the output in the console.
The final script looks like this:
When executed, this script will log the original array (['A', 'j', 'a', 'y']) 
and the reversed array (['y', 'a', 'j', 'A']) to the console.

 */



