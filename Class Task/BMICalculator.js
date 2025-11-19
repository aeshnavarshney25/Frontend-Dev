// ===== BMI CALCULATOR ===== 
// Demonstrates: arithmetic operators, comparison operators, DOM manipulation

// Get DOM elements
const bmiForm = document.getElementById('bmiForm');
const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const resultsSection = document.getElementById('resultsSection');
const bmiValueDisplay = document.getElementById('bmiValue');
const bmiLabelDisplay = document.getElementById('bmiLabel');
const progressIndicator = document.getElementById('progressIndicator');
const recommendationBox = document.getElementById('recommendationBox');
const displayWeight = document.getElementById('displayWeight');
const displayHeight = document.getElementById('displayHeight');
const displayBMI = document.getElementById('displayBMI');
const displayCategory = document.getElementById('displayCategory');

// Add event listener to form submission
bmiForm.addEventListener('submit', function(event) {
    event.preventDefault();
    calculateBMI();
});

// Main BMI calculation function
function calculateBMI() {
    // ===== GET INPUT VALUES =====
    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value);

    // Validation
    if (weight <= 0 || height <= 0 || isNaN(weight) || isNaN(height)) {
        alert('Please enter valid weight and height values');
        return;
    }

    // ===== ARITHMETIC OPERATOR: BMI FORMULA =====
    // BMI = weight / (height * height)
    const bmi = weight / (height * height);

    // ===== COMPARISON OPERATORS: DETERMINE CATEGORY =====
    let category = '';
    let categoryClass = '';
    let recommendation = '';

    // Use comparison operators to determine BMI category
    if (bmi < 18.5) {
        category = 'Underweight';
        categoryClass = 'underweight';
        recommendation = '💪 You may need to gain weight. Consult with a nutritionist and consider a balanced diet with regular exercise to achieve a healthy weight.';
    } else if (bmi >= 18.5 && bmi < 25) {
        category = 'Normal Weight';
        categoryClass = 'normal';
        recommendation = '✅ Great! You have a healthy weight. Keep maintaining your current lifestyle with balanced diet and regular exercise.';
    } else if (bmi >= 25 && bmi < 30) {
        category = 'Overweight';
        categoryClass = 'overweight';
        recommendation = '⚠️ You are overweight. Consider increasing physical activity and following a balanced diet. Consult a doctor for personalized advice.';
    } else if (bmi >= 30) {
        category = 'Obese';
        categoryClass = 'obese';
        recommendation = '🚨 Your health may be at risk. Please consult with a healthcare professional or dietitian to develop a weight management plan.';
    }

    // ===== UPDATE DISPLAY =====
    displayResults(bmi, category, categoryClass, weight, height, recommendation);
}

// Function to display results on screen
function displayResults(bmi, category, categoryClass, weight, height, recommendation) {
    // Update BMI value display
    bmiValueDisplay.textContent = bmi.toFixed(1);
    
    // Update category label with color coding
    bmiLabelDisplay.textContent = category;
    bmiLabelDisplay.className = 'bmi-label ' + categoryClass;

    // Update progress bar indicator position
    // Map BMI value to percentage (0-100)
    // Underweight: 0-18.5 (0-23%)
    // Normal: 18.5-25 (23-52%)
    // Overweight: 25-30 (52-77%)
    // Obese: 30+ (77-100%)
    let indicatorPosition = 0;

    if (bmi < 18.5) {
        indicatorPosition = (bmi / 18.5) * 23; // 0-23%
    } else if (bmi < 25) {
        indicatorPosition = 23 + ((bmi - 18.5) / 6.5) * 29; // 23-52%
    } else if (bmi < 30) {
        indicatorPosition = 52 + ((bmi - 25) / 5) * 25; // 52-77%
    } else {
        indicatorPosition = 77 + Math.min((bmi - 30) / 10, 1) * 23; // 77-100%
    }

    progressIndicator.style.left = indicatorPosition + '%';

    // Update details box
    displayWeight.textContent = weight.toFixed(1);
    displayHeight.textContent = height.toFixed(2);
    displayBMI.textContent = bmi.toFixed(1);
    displayCategory.textContent = category;

    // Update recommendation box
    recommendationBox.textContent = recommendation;
    recommendationBox.className = 'recommendation-box ' + categoryClass;

    // Show results section with animation
    resultsSection.classList.remove('hidden');

    // Scroll to results smoothly
    resultsSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Function to reset calculator
function resetCalculator() {
    bmiForm.reset();
    resultsSection.classList.add('hidden');
    weightInput.focus();
}

// Optional: Allow Enter key to calculate
document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter' && document.activeElement === heightInput) {
        calculateBMI();
    }
});
