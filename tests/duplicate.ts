let num = [1, 2, 3, 4, 6];
let num2 = [5, 6, 7, 8, 9];

for (let index = 0; index < num.length; index++) {
   for (let i = 0; i < num2.length; i++) {
      if (num[index] === num2[i]) {
         let duplicate = num[index];  
         console.log(duplicate);      
      }
   }
}
