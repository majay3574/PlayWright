type User = {
    id: number;
    name: string;
};

function fetchUserData(userId: number): Promise<User> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId === 44) {
                resolve({ id: 44, name: "omayal" });  // Object literals
            } else {
                reject(new Error("user not found"));
            }
        }, 3000);
    });
}

// Consuming promises

fetchUserData(44)
    .then((user: User) => {
        console.log('User found:', user.name);
    })
    .catch((error: Error) => {
        console.log('Error:', error.message);  // Show the actual error message
    });
