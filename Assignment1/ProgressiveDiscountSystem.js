console.log("===== Q6: Progressive Discount System =====\n");

// Function to calculate discount based on total purchase amount
function calculateDiscount(totalAmount) {
    console.log(`\n Purchase Amount: ₹${totalAmount.toFixed(2)}`);

    let discountPercentage = 0;
    let discountTier = "No Discount";

    // Apply discount tiers based on purchase amount
    if (totalAmount >= 10000) {
        discountPercentage = 25;
        discountTier = "Premium (≥ ₹10,000)";
    } else if (totalAmount >= 5000) {
        discountPercentage = 15;
        discountTier = "Gold (≥ ₹5,000)";
    } else if (totalAmount >= 2000) {
        discountPercentage = 5;
        discountTier = "Silver (≥ ₹2,000)";
    } else {
        discountPercentage = 0;
        discountTier = "Standard (< ₹2,000)";
    }

    // Calculate discount amount
    const discountAmount = totalAmount * (discountPercentage / 100);

    // Calculate final price after discount
    let finalPrice = totalAmount - discountAmount;

    // Round values using Math.round()
    const discountAmountRounded = Math.round(discountAmount * 100) / 100;
    const finalPriceRounded = Math.round(finalPrice * 100) / 100;

    // Display results
    console.log(` Discount Tier: ${discountTier}`);
    console.log(` Discount Percentage: ${discountPercentage}%`);
    console.log(` Discount Amount: ₹${discountAmountRounded.toFixed(2)}`);
    console.log(` Final Price: ₹${finalPriceRounded.toFixed(2)}`);
    console.log(` You saved: ₹${discountAmountRounded.toFixed(2)}`);

    return {
        originalTotal: totalAmount,
        discountPercentage: discountPercentage,
        discountAmount: discountAmountRounded,
        finalPrice: finalPriceRounded,
        tier: discountTier
    };
}

// Test cases with different purchase amounts
console.log("===== Testing Different Purchase Amounts =====");

const testAmounts = [1500, 2500, 5500, 7000, 10000, 15000, 25000];

testAmounts.forEach(amount => {
    calculateDiscount(amount);
});

// Summary table
console.log("\n\n===== Discount Tier Summary =====");

const discountTiers = [
    { Range: "₹0 - ₹1,999", Percentage: "0%", Example: "₹1,500" },
    { Range: "₹2,000 - ₹4,999", Percentage: "5%", Example: "₹2,500" },
    { Range: "₹5,000 - ₹9,999", Percentage: "15%", Example: "₹7,000" },
    { Range: "₹10,000+", Percentage: "25%", Example: "₹15,000" }
];

console.table(discountTiers);

// Interactive calculation
console.log("\n===== Detailed Calculation Example =====");

const exampleAmount = 12500;
console.log(`\nIf you buy items worth ₹${exampleAmount}:`);

const result = calculateDiscount(exampleAmount);

console.log(`\n You qualify for the ${result.tier} tier!`);
console.log(`Original amount: ₹${result.originalTotal.toFixed(2)}`);
console.log(`Discount: ${result.discountPercentage}% (₹${result.discountAmount.toFixed(2)})`);
console.log(`Pay only: ₹${result.finalPrice.toFixed(2)}`);
