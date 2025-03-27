function getUserData(a) {
    setTimeout(() => {
        const user = {
            name: "John Doe",
            age: 30
        };
        a(user)
         callback(user);
    }, 3000);
}

getUserData(function(user) {
    console.log(`User's name is ${user.name} and age is ${user.age}`);
});
