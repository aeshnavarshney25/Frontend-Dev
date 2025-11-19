console.log("===== Q1: Personalized Login Greeting =====\n");

const userName = "Aeshna"; // User's name
const currentHour = new Date().getHours(); // Get current hour (0-23)

// Determine greeting based on time of day
let greeting;

if (currentHour < 12) {
    greeting = `Good Morning ${userName}!`;
} else if (currentHour >= 12 && currentHour < 17) {   
    greeting = `Good Afternoon ${userName}!`;
} else {
    greeting = `Good Evening ${userName}!`;
}

console.log(`Current Hour: ${currentHour}:00`);
console.log(`Greeting: ${greeting}\n`);

console.log("===== Testing with different times =====");

function getGreetingForTime(name, hour) {
    if (hour < 12) {
        return `Good Morning ${name}!`;
    } else if (hour >= 12 && hour < 17) {
        return `Good Afternoon ${name}!`;
    } else {
        return `Good Evening ${name}!`;
    }
}

console.log(`[9:00 AM] ${getGreetingForTime("Aeshna", 9)}`);
console.log(`[2:30 PM] ${getGreetingForTime("Aeshna", 14)}`);
console.log(`[8:00 PM] ${getGreetingForTime("Aeshna", 20)}`);
