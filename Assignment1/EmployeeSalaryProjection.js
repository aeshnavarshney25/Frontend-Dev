console.log("===== Q8: Employee Salary Projection =====\n");

// Declare current salary and annual increment rate
const currentSalary = 500000; // Current annual salary in rupees
const incrementRate = 0.08; // 8% annual increment

console.log(`Starting Salary: ₹${currentSalary.toLocaleString()}`);
console.log(`Annual Increment Rate: ${(incrementRate * 100).toFixed(1)}%\n`);

// Create an array to store salary projections for each year
const salaryProjection = [];

// Use a for loop to compute salary for each of 5 years
let salary = currentSalary;

for (let year = 1; year <= 5; year++) {
    // Apply increment (apply increment at the beginning of each year)
    if (year > 1) {
        salary = salary * (1 + incrementRate);
    }

    // Round salary to nearest rupee
    const roundedSalary = Math.round(salary);

    // Calculate increment amount for this year
    const increment = roundedSalary - (year === 1 ? currentSalary : Math.round(salary / (1 + incrementRate)));

    // Store in array
    salaryProjection.push({
        Year: year,
        "Annual Salary": `₹${roundedSalary.toLocaleString()}`,
        "Monthly Salary": `₹${Math.round(roundedSalary / 12).toLocaleString()}`,
        "Increment": year === 1 ? "-" : `₹${Math.round(increment).toLocaleString()}`,
        "Growth %": year === 1 ? "-" : `${(incrementRate * 100).toFixed(1)}%`
    });
}

// Display yearly salary in formatted console table
console.log("===== 5-Year Salary Projection =====\n");
console.table(salaryProjection);

// Calculate total earnings over 5 years
console.log("\n===== Financial Summary =====\n");

let totalEarnings = 0;
let currentProjectedSalary = currentSalary;

for (let year = 1; year <= 5; year++) {
    if (year > 1) {
        currentProjectedSalary = currentProjectedSalary * (1 + incrementRate);
    }
    const roundedSalary = Math.round(currentProjectedSalary);
    totalEarnings += roundedSalary;
}

const averageAnnualSalary = totalEarnings / 5;
const finalSalary = Math.round(salary);
const totalIncrement = finalSalary - currentSalary;

console.log(`Starting Annual Salary: ₹${currentSalary.toLocaleString()}`);
console.log(`Final Annual Salary (Year 5): ₹${finalSalary.toLocaleString()}`);
console.log(`Total Increment over 5 years: ₹${totalIncrement.toLocaleString()} (${((totalIncrement / currentSalary) * 100).toFixed(2)}%)`);
console.log(`Average Annual Salary: ₹${Math.round(averageAnnualSalary).toLocaleString()}`);
console.log(`Total Earnings (5 years): ₹${totalEarnings.toLocaleString()}`);

// Additional insights
console.log("\n===== Monthly Breakdown =====\n");

const monthlyBreakdown = [];
currentProjectedSalary = currentSalary;

for (let year = 1; year <= 5; year++) {
    if (year > 1) {
        currentProjectedSalary = currentProjectedSalary * (1 + incrementRate);
    }
    const roundedSalary = Math.round(currentProjectedSalary);
    const monthlySalary = Math.round(roundedSalary / 12);

    monthlyBreakdown.push({
        Year: year,
        "Annual": `₹${roundedSalary.toLocaleString()}`,
        "Monthly": `₹${monthlySalary.toLocaleString()}`,
        "Quarterly": `₹${Math.round(monthlySalary * 3).toLocaleString()}`
    });
}

console.table(monthlyBreakdown);

// Comparison with no increment
console.log("\n===== Comparison: With vs Without Increment =====\n");

const comparisonTable = [];
currentProjectedSalary = currentSalary;

for (let year = 1; year <= 5; year++) {
    if (year > 1) {
        currentProjectedSalary = currentProjectedSalary * (1 + incrementRate);
    }
    const withIncrement = Math.round(currentProjectedSalary);
    const withoutIncrement = currentSalary;

    comparisonTable.push({
        Year: year,
        "With 8% Increment": `₹${withIncrement.toLocaleString()}`,
        "Without Increment": `₹${withoutIncrement.toLocaleString()}`,
        "Difference": `₹${(withIncrement - withoutIncrement).toLocaleString()}`
    });
}

console.table(comparisonTable);
