console.log("===== Q4: Academic Performance Evaluator =====\n");

// Array of marks for 5 subjects
const marks = [78, 85, 92, 55, 88]; // Math, Science, English, Social Studies, History

console.log("Subject Marks:", marks);
console.log("\n");

// Check if any subject has marks < 35 (failing condition)
const hasFailingSubject = marks.some(mark => mark < 35);

console.log(`Checking for failing subjects (< 35):`);
marks.forEach((mark, index) => {
    const subjects = ["Math", "Science", "English", "Social Studies", "History"];
    console.log(`  ${subjects[index]}: ${mark} ${mark < 35 ? "❌ FAILING" : "✓"}`);
});

if (hasFailingSubject) {
    console.log("\n⚠️  Result: DETAINED (Any subject < 35)\n");
} else {
    // Calculate average and overall percentage
    const totalMarks = marks.reduce((sum, mark) => sum + mark, 0);
    const averageMarks = totalMarks / marks.length;
    const overallPercentage = (totalMarks / 500) * 100; // Assuming 100 marks per subject

    console.log(`\nTotal Marks: ${totalMarks}/500`);
    console.log(`Average Marks: ${averageMarks.toFixed(2)}`);
    console.log(`Overall Percentage: ${overallPercentage.toFixed(2)}%\n`);

    // Determine promotion status using logical operators
    let promotionStatus;

    if (overallPercentage >= 85) {
        // Distinction condition
        promotionStatus = " Promoted with Distinction";
    } else if (overallPercentage >= 50 && overallPercentage < 85) {
        // Regular promotion condition
        promotionStatus = " Promoted";
    } else if (overallPercentage < 50) {
        // Detention condition
        promotionStatus = "  Detained";
    }

    console.log(` Result: ${promotionStatus}`);

    // Display detailed evaluation
    console.log("\n===== Evaluation Details =====");
    console.table({
        "Total Marks": `${totalMarks}/500`,
        "Average": averageMarks.toFixed(2),
        "Percentage": `${overallPercentage.toFixed(2)}%`,
        "Status": promotionStatus,
        "Criteria Met": 
            overallPercentage >= 85 ? "Distinction (≥85%)" : 
            overallPercentage >= 50 ? "Pass (50-84%)" : 
            "Fail (<50%)"
    });
}

// Test function for multiple students
console.log("\n===== Testing with Different Scores =====\n");

function evaluateStudent(studentName, studentMarks) {
    console.log(`Student: ${studentName}`);
    console.log(`Marks: ${studentMarks}`);
    
    const hasFailing = studentMarks.some(m => m < 35);
    
    if (hasFailing) {
        console.log("Result: DETAINED ❌\n");
        return;
    }
    
    const total = studentMarks.reduce((sum, m) => sum + m, 0);
    const percentage = (total / 500) * 100;
    
    if (percentage >= 85) {
        console.log(`Result: Promoted with Distinction (${percentage.toFixed(2)}%) 🎓\n`);
    } else if (percentage >= 50) {
        console.log(`Result: Promoted (${percentage.toFixed(2)}%) \n`);
    } else {
        console.log(`Result: Detained (${percentage.toFixed(2)}%) \n`);
    }
}

evaluateStudent("Raj", [95, 88, 92, 90, 94]);
evaluateStudent("Priya", [60, 55, 65, 58, 62]);
evaluateStudent("Aman", [30, 50, 55, 40, 45]);
