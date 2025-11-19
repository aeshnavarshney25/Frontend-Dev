console.log("===== Q10: Citizen Eligibility Validator =====\n");

// Function to validate citizenship eligibility
function checkCitizenEligibility(age, isCitizen) {
    console.log(`Age: ${age} years`);
    console.log(`Citizen: ${isCitizen ? "Yes ✓" : "No ✗"}\n`);

    let eligibilityStatus;
    let services = [];

    // Use nested if-else with logical operators
    if (isCitizen && age >= 18) {
        // Citizen and adult (18+)
        eligibilityStatus = " Eligible for all services.";
        services = [
            "✓ Vote in elections",
            "✓ Drive (with license)",
            "✓ Apply for passport",
            "✓ Work in government jobs",
            "✓ Serve in military/police"
        ];
    }
    else if (isCitizen && age >= 10 && age < 18) {
        // Citizen but minor (10-17)
        eligibilityStatus = " Eligible to vote only (with parental consent).";
        services = [
            "✓ Vote (with parent/guardian approval)",
            "✗ Drive (must be 18+)",
            "✗ Apply for passport (must be 18+)",
            "  Can apply for student documents"
        ];
    }
    else if (!isCitizen && age >= 18) {
        // Non-citizen but adult
        eligibilityStatus = " Only age criteria met.";
        services = [
            "✗ Vote (must be citizen)",
            "✗ Drive (local license requires citizenship)",
            "✗ Apply for passport (must be citizen)",
            " Can hold visitor/work visa",
            " Must apply for citizenship first"
        ];
    }
    else {
        // Non-citizen and minor
        eligibilityStatus = "  Not eligible for services.";
        services = [
            "✗ Vote (must be 18+ and citizen)",
            "✗ Drive (must be 18+)",
            "✗ Apply for passport (must be citizen)",
            " Wait until age 18 and apply for citizenship"
        ];
    }

    console.log(`Status: ${eligibilityStatus}\n`);
    console.log("Eligible Services:");
    services.forEach(service => console.log(`  ${service}`));

    return {
        age: age,
        isCitizen: isCitizen,
        status: eligibilityStatus,
        services: services
    };
}

// Test Case 1: Adult Indian citizen
console.log("===== Test Case 1: Adult Citizen =====");
checkCitizenEligibility(25, true);

console.log("\n" + "=".repeat(50) + "\n");

// Test Case 2: Minor Indian citizen
console.log("===== Test Case 2: Minor Citizen =====");
checkCitizenEligibility(15, true);

console.log("\n" + "=".repeat(50) + "\n");

// Test Case 3: Adult non-citizen
console.log("===== Test Case 3: Adult Non-Citizen =====");
checkCitizenEligibility(22, false);

console.log("\n" + "=".repeat(50) + "\n");

// Test Case 4: Minor non-citizen
console.log("===== Test Case 4: Minor Non-Citizen =====");
checkCitizenEligibility(12, false);

// Comprehensive eligibility matrix
console.log("\n\n===== Eligibility Matrix =====\n");

const testCases = [
    { age: 35, isCitizen: true, desc: "Adult citizen" },
    { age: 45, isCitizen: false, desc: "Adult non-citizen" },
    { age: 18, isCitizen: true, desc: "Just turned adult (citizen)" },
    { age: 16, isCitizen: true, desc: "Teenager (citizen)" },
    { age: 10, isCitizen: true, desc: "Child (citizen)" },
    { age: 8, isCitizen: false, desc: "Child (non-citizen)" }
];

const eligibilityMatrix = [];

testCases.forEach((testCase, index) => {
    const result = checkCitizenEligibility(testCase.age, testCase.isCitizen);
    
    // Extract voting eligibility
    const canVote = result.status.includes("Eligible") && testCase.isCitizen;
    const canDrive = result.services.some(s => s.includes("✓ Drive"));
    const canApplyPassport = result.services.some(s => s.includes("✓ Apply for passport"));

    eligibilityMatrix.push({
        "Test Case": testCase.desc,
        "Age": testCase.age,
        "Citizen": testCase.isCitizen ? "Yes" : "No",
        "Can Vote": canVote ? "Yes ✓" : "No ✗",
        "Can Drive": canDrive ? "Yes ✓" : "No ✗",
        "Can Get Passport": canApplyPassport ? "Yes ✓" : "No ✗"
    });
});

console.table(eligibilityMatrix);

// Decision Logic Summary
console.log("\n===== Decision Logic =====\n");

const logicRules = [
    {
        Condition: "isCitizen AND age ≥ 18",
        Status: "Eligible for all services",
        Services: "Vote, Drive, Passport"
    },
    {
        Condition: "isCitizen AND age < 18",
        Status: "Eligible to vote only",
        Services: "Vote (with consent)"
    },
    {
        Condition: "NOT isCitizen AND age ≥ 18",
        Status: "Only age criteria met",
        Services: "None (needs citizenship)"
    },
    {
        Condition: "NOT isCitizen AND age < 18",
        Status: "Not eligible",
        Services: "None"
    }
];

console.table(logicRules);

// Age boundaries explanation
console.log("\n===== Age Boundaries =====\n");

console.log("Key Age Milestones:");
console.log("  ✓ 10+ years: Can vote (if citizen, with parental consent)");
console.log("  ✓ 16+ years: Can get driving license (in most regions)");
console.log("  ✓ 18+ years: Adult - Full eligibility (if citizen)");
console.log("  ✓ 18+ years: Can vote without parental consent");

console.log("\nCitizenship Impact:");
console.log("  • Citizenship is PRIMARY requirement for voting and passport");
console.log("  • Age alone is NOT sufficient for voting/passport");
console.log("  • Must be citizen AND meet age requirements");
