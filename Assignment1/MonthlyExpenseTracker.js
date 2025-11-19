console.log("===== Q3: Monthly Expense Tracker =====\n");

const expenses = {
    food: 5000,      
    travel: 3500,    
    rent: 15000,     
    bills: 2500,     
    leisure: 2000    
};

console.log("Monthly Expenses by Category:");
console.log(expenses);
console.log("\n");

let totalExpense = 0;
totalExpense += expenses.food;
totalExpense += expenses.travel;
totalExpense += expenses.rent;
totalExpense += expenses.bills;
totalExpense += expenses.leisure;

console.log(`Total Expense (before tax): ₹${totalExpense.toFixed(2)}`);


// Calculate average expenses
const numberOfCategories = 5;
const averageExpense = totalExpense / numberOfCategories;

console.log(`Average Expense per Category: ₹${averageExpense.toFixed(2)}`);

// Add 10% tax to total
const taxRate = 0.10; 
const taxAmount = totalExpense * taxRate;
let finalAmount = totalExpense + taxAmount;

console.log(`\nTax Rate: ${(taxRate * 100).toFixed(0)}%`);
console.log(`Tax Amount: ₹${taxAmount.toFixed(2)}`);
console.log(`Final Amount (after 10% tax): ₹${finalAmount.toFixed(2)}`);

// Display detailed breakdown
console.log("\n===== Detailed Breakdown =====");
const breakdown = [
    { Category: "Food", Amount: expenses.food, Percentage: ((expenses.food / totalExpense) * 100).toFixed(2) + "%" },
    { Category: "Travel", Amount: expenses.travel, Percentage: ((expenses.travel / totalExpense) * 100).toFixed(2) + "%" },
    { Category: "Rent", Amount: expenses.rent, Percentage: ((expenses.rent / totalExpense) * 100).toFixed(2) + "%" },
    { Category: "Bills", Amount: expenses.bills, Percentage: ((expenses.bills / totalExpense) * 100).toFixed(2) + "%" },
    { Category: "Leisure", Amount: expenses.leisure, Percentage: ((expenses.leisure / totalExpense) * 100).toFixed(2) + "%" }
];

console.table(breakdown);

// Summary table
console.log("\n===== Summary =====");
console.table({
    "Total Expense": `₹${totalExpense.toFixed(2)}`,
    "Average per Category": `₹${averageExpense.toFixed(2)}`,
    "Tax (10%)": `₹${taxAmount.toFixed(2)}`,
    "Final Amount": `₹${finalAmount.toFixed(2)}`
});
