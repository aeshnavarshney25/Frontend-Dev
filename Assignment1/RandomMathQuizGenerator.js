console.log("===== Q9: Random Math Quiz Generator =====\n");

// Function to generate random number between min and max
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to generate a random operator
function getRandomOperator() {
    const operators = ['+', '-', '*', '/'];
    return operators[Math.floor(Math.random() * operators.length)];
}

// Function to calculate the correct answer based on operator
function calculateAnswer(num1, num2, operator) {
    switch(operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            // Handle division by zero
            if (num2 === 0) {
                return "Undefined (division by zero)";
            }
            return num1 / num2;
        default:
            return null;
    }
}

// Function to generate and display a quiz question
function generateQuizQuestion() {
    // Generate two random numbers (1-20)
    const number1 = getRandomNumber(1, 20);
    const number2 = getRandomNumber(1, 20);
    
    // Generate random operator
    const operator = getRandomOperator();
    
    // Calculate correct answer
    let correctAnswer = calculateAnswer(number1, number2, operator);
    
    // Format division answers to 2 decimals
    if (operator === '/' && typeof correctAnswer === 'number') {
        correctAnswer = parseFloat(correctAnswer.toFixed(2));
    }
    
    // Display question
    const question = `${number1} ${operator} ${number2}`;
    
    return {
        question: question,
        num1: number1,
        num2: number2,
        operator: operator,
        correctAnswer: correctAnswer
    };
}

// Generate and display multiple quiz questions
console.log("===== Generated Quiz Questions =====\n");

const quizData = [];

for (let i = 1; i <= 10; i++) {
    const quiz = generateQuizQuestion();
    
    console.log(`Question ${i}: ${quiz.question}`);
    console.log(`Correct Answer: ${typeof quiz.correctAnswer === 'number' ? quiz.correctAnswer.toFixed(2) : quiz.correctAnswer}`);
    console.log();
    
    quizData.push({
        "Question #": i,
        "Expression": quiz.question,
        "Answer": typeof quiz.correctAnswer === 'number' ? quiz.correctAnswer.toFixed(2) : quiz.correctAnswer,
        "Operator": quiz.operator
    });
}

// Display all questions in a table
console.log("===== Quiz Summary Table =====\n");
console.table(quizData);

// Function to check user's answer
function checkAnswer(userAnswer, correctAnswer) {
    let isCorrect = false;
    
    if (typeof correctAnswer === 'number' && typeof userAnswer === 'number') {
        // Allow small floating point differences
        isCorrect = Math.abs(userAnswer - correctAnswer) < 0.01;
    } else {
        isCorrect = userAnswer === correctAnswer;
    }
    
    return isCorrect;
}

// Interactive quiz session
console.log("\n===== Interactive Quiz Session =====\n");

const interactiveQuizzes = [];

for (let i = 1; i <= 5; i++) {
    const quiz = generateQuizQuestion();
    
    // Simulate user answers (you can change these)
    let userAnswer;
    
    switch(i) {
        case 1:
            userAnswer = quiz.correctAnswer; // Correct
            break;
        case 2:
            userAnswer = quiz.correctAnswer + 1; // Incorrect
            break;
        case 3:
            userAnswer = quiz.correctAnswer; // Correct
            break;
        case 4:
            userAnswer = quiz.correctAnswer - 2; // Incorrect
            break;
        case 5:
            userAnswer = quiz.correctAnswer; // Correct
            break;
    }
    
    const isCorrect = checkAnswer(userAnswer, quiz.correctAnswer);
    
    console.log(`Question ${i}: ${quiz.question}`);
    console.log(`Your Answer: ${typeof userAnswer === 'number' ? userAnswer.toFixed(2) : userAnswer}`);
    console.log(`Correct Answer: ${typeof quiz.correctAnswer === 'number' ? quiz.correctAnswer.toFixed(2) : quiz.correctAnswer}`);
    console.log(`Result: ${isCorrect ? '✅ CORRECT' : '❌ WRONG'}\n`);
    
    interactiveQuizzes.push({
        "Question": quiz.question,
        "Your Answer": typeof userAnswer === 'number' ? userAnswer.toFixed(2) : userAnswer,
        "Correct Answer": typeof quiz.correctAnswer === 'number' ? quiz.correctAnswer.toFixed(2) : quiz.correctAnswer,
        "Result": isCorrect ? "✅" : "❌"
    });
}

// Quiz results
console.log("===== Quiz Results =====\n");
console.table(interactiveQuizzes);

const correctCount = interactiveQuizzes.filter(q => q.Result === "✅").length;
const totalQuestions = interactiveQuizzes.length;
const percentage = (correctCount / totalQuestions) * 100;

console.log(`\nScore: ${correctCount}/${totalQuestions} (${percentage.toFixed(1)}%)`);

if (percentage === 100) {
    console.log("🏆 Perfect Score! Excellent!");
} else if (percentage >= 80) {
    console.log("🎉 Great Job!");
} else if (percentage >= 60) {
    console.log("👍 Good Effort!");
} else {
    console.log("📚 Keep Practicing!");
}
