console.log("===== Q5: Weather Activity Planner =====\n");

// Create a function to determine activity based on weather
function getActivityAdvice(temperature, isRaining, windSpeed) {
    console.log(`Weather Status:`);
    console.log(`  Temperature: ${temperature}°C`);
    console.log(`  Is Raining: ${isRaining}`);
    console.log(`  Wind Speed: ${windSpeed} km/h\n`);

    let activity;

    // Check if it's raining first (highest priority)
    if (isRaining) {
        activity = "Stay indoors with hot coffee.";
    }
    // Check if it's very hot
    else if (temperature > 35) {
        activity = " Go swimming.";
    }
    // Check if it's cold and windy
    else if (temperature < 15 && windSpeed > 20) {
        activity = " Too cold and windy — stay home.";
    }
    // Perfect weather
    else {
        activity = "Perfect day for a walk.";
    }

    return activity;
}

// Test Case 1: Rainy weather
console.log("===== Test Case 1: Rainy Day =====");
const advice1 = getActivityAdvice(25, true, 10);
console.log(`Advice: ${advice1}\n`);

// Test Case 2: Very hot day
console.log("===== Test Case 2: Very Hot Day =====");
const advice2 = getActivityAdvice(38, false, 5);
console.log(`Advice: ${advice2}\n`);

// Test Case 3: Cold and windy
console.log("===== Test Case 3: Cold and Windy =====");
const advice3 = getActivityAdvice(8, false, 30);
console.log(`Advice: ${advice3}\n`);

// Test Case 4: Perfect weather
console.log("===== Test Case 4: Perfect Weather =====");
const advice4 = getActivityAdvice(22, false, 10);
console.log(`Advice: ${advice4}\n`);

// Test Case 5: Rainy and cold
console.log("===== Test Case 5: Rainy and Cold =====");
const advice5 = getActivityAdvice(12, true, 15);
console.log(`Advice: ${advice5}\n`);

// Additional comprehensive test
console.log("===== Comprehensive Weather Scenarios =====\n");

const weatherScenarios = [
    { temp: 5, raining: false, wind: 25, desc: "Winter with strong winds" },
    { temp: 28, raining: true, wind: 8, desc: "Moderate rain" },
    { temp: 40, raining: false, wind: 2, desc: "Summer heatwave" },
    { temp: 20, raining: false, wind: 8, desc: "Spring day" },
    { temp: 15, raining: false, wind: 22, desc: "Autumn cold wind" }
];

weatherScenarios.forEach((scenario, index) => {
    console.log(`Scenario ${index + 1}: ${scenario.desc}`);
    const advice = getActivityAdvice(scenario.temp, scenario.raining, scenario.wind);
    console.log(`${advice}\n`);
});
