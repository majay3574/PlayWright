function studentScore(score) {
    switch (true) {
        case (score >= 80 && score <= 100):
            return "A+";
        case (score > 65 && score <= 80):
            return 'A';
        case (score > 50 && score <= 65):
            return 'B';
        case (score > 40 && score <= 50):
            return 'C';
        default:
            return 'F';
    }
}

// Test cases
let score = 85;
console.log(studentScore(score)); // Output: A+
score = 40;
console.log(studentScore(score)); // Output: F
score = 67;
console.log(studentScore(score)); // Output: A
