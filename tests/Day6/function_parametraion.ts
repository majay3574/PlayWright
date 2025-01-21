function signup1(username: string, password: string) {
    console.log("Signing up with username:", username);
    console.log("Signing up with password:", password);
}

function signup2(email: string) {
    console.log("Signing up with email:", email);
}

signup1("majay@gmail.com", "pass"); // Calls signup1
signup2("majay3574@gmail.com"); // Calls signup2
