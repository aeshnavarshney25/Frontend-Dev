console.log("===== Q7: Smart Guessing Game (Number Range) =====\n");

// Function to play the guessing game
function playGuessingGame(userGuess) {
    // Generate a random secret number between 1-50
    const secretNumber = Math.floor(Math.random() * 50) + 1;

    console.log(` Game Started!`);
    console.log(`Your Guess: ${userGuess}`);
    console.log(`Secret Number: ${secretNumber}\n`);

    let result;
    let emoji;

    // Check if guess is correct
    if (userGuess === secretNumber) {
        result = " Correct guess!";
        emoji = "✅";
    }
    // Check if guess is within ±3 of secret number
    else if (userGuess > secretNumber - 3 && userGuess < secretNumber + 3) {
        result = " Very close!";
        emoji = "📍";
        console.log(`  (Secret: ${secretNumber}, Difference: ${Math.abs(userGuess - secretNumber)})`);
    }
    // Check if guess is too high
    else if (userGuess > secretNumber) {
        result = "⬇  Too high";
        emoji = "📉";
        console.log(`  (Your guess is ${userGuess - secretNumber} more than secret)`);
    }
    // Check if guess is too low
    else if (userGuess < secretNumber) {
        result = "⬆ Too low";
        emoji = "📈";
        console.log(`  (Your guess is ${secretNumber - userGuess} less than secret)`);
    }

    console.log(`${emoji} ${result}\n`);
    return { guess: userGuess, secret: secretNumber, result: result };
}

// Test cases with different guesses
console.log("===== Playing Multiple Rounds =====\n");

// Round 1: Test with a fixed guess
console.log("--- Round 1 ---");
const game1 = playGuessingGame(25);

// Let's simulate with a known secret for demonstration
console.log("--- Round 2: Simulated Game ---");
function playWithKnownSecret(userGuess, secretNumber) {
    console.log(`Game with Secret: ${secretNumber}`);
    console.log(`Your Guess: ${userGuess}\n`);

    let result;
    let difference;

    if (userGuess === secretNumber) {
        result = " Correct guess!";
    } else if (Math.abs(userGuess - secretNumber) <= 3) {
        result = " Very close!";
        difference = Math.abs(userGuess - secretNumber);
        console.log(`  Within range of ±3 (difference: ${difference})`);
    } else if (userGuess > secretNumber) {
        result = "⬇  Too high";
        difference = userGuess - secretNumber;
        console.log(`  Too high by ${difference}`);
    } else {
        result = "⬆  Too low";
        difference = secretNumber - userGuess;
        console.log(`  Too low by ${difference}`);
    }

    console.log(`${result}\n`);
    return result;
}

// Test scenarios with known secrets
const testScenarios = [
    { secret: 25, guess: 25, desc: "Exact match" },
    { secret: 25, guess: 27, desc: "Very close (within ±3)" },
    { secret: 25, guess: 22, desc: "Very close (within ±3)" },
    { secret: 25, guess: 40, desc: "Too high" },
    { secret: 25, guess: 10, desc: "Too low" },
    { secret: 35, guess: 50, desc: "Way too high" }
];

testScenarios.forEach((scenario, index) => {
    console.log(`--- Scenario ${index + 1}: ${scenario.desc} ---`);
    playWithKnownSecret(scenario.guess, scenario.secret);
});

// Statistics summary
console.log("===== Game Statistics =====\n");

console.log("Range Feedback System:");
console.table({
    "Feedback": ["Correct guess", "Very close (±3)", "Too high", "Too low"],
    "Emoji": ["🎉", "🔥", "⬇️", "⬆️"],
    "Condition": ["Guess === Secret", "|Guess - Secret| ≤ 3", "Guess > Secret", "Guess < Secret"]
});

console.log("\nRandom Number Generation:");
console.log("Formula: Math.floor(Math.random() * 50) + 1");
console.log("Generates: Random integer from 1 to 50");

// Show some random numbers generated
console.log("\n5 Random Numbers Generated:");
for (let i = 1; i <= 5; i++) {
    const randomNum = Math.floor(Math.random() * 50) + 1;
    console.log(`  ${i}. ${randomNum}`);
}
