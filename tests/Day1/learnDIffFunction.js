
[1, 2, 3].forEach(function (number) {
    console.log(number * 2);
});


[1, 2, 3].forEach(number => console.log(number * 2));

let num1 = [1, 2, 3, 4, 5];
let result = num1.map(number => Math.cbrt(number));
console.log(result);


function CreateUser(a) {
    setTimeout(() => {
        const user = {
            name: "Ajay"
        };
      a(user)
    }, 8000);
}

CreateUser((a)=>{
    console.log(a.name);
})
