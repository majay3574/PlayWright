function calculateGrade(score) {
    let grade;
    switch (score) {
        case (score >= 90 && score <= 100):
            grade = 'A';
            break;
        case (score >= 80 && score < 90):
            grade = 'B';
            break;
        case (score >= 70 && score < 80):
            grade = 'C';
            break;
        case (score >= 60 && score < 70):
            grade = 'D';
            break;
        case (score >= 0 && score < 60):
            grade = 'F';
            break;
        default:
            grade = 'Invalid score';
    }
    return grade;
}

// Test the function
const score = 85;
console.log(`Score: ${score}, Grade: ${calculateGrade(score)}`);
