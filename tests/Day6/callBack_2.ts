 function userProfile(name) {
    console.log("Hello, " + name + "!");
}
const double = (number:number) => number * 2;
console.log(double(20));


 setTimeout(function() {
    console.log("This message is delayed by 2 seconds");
}, 2000);
function getUserData(callback) {
    setTimeout(() => {
        const user = {
            name: "Ranjini",
            gender: "Female"
        };
        callback(user);
    }, 1000);
}
getUserData(function(user) {
    console.log("Name: " + user.name + ", Gender: " + user.gender);
});