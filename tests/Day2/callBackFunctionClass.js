function getUserData(a) {  //--> get User FUnction
    setTimeout(() => {
        /* const user = {
            name: "John Doe",
            age: 30
        }; */
        let fname = "Diviya"
        a(fname)
        callback(fname);
    }, 3000);
}

getUserData(function (user) {
    console.log(`User's name is ${user.name} and age is ${user.age}`);
});
