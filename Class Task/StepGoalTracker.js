// ===== GET DOM ELEMENTS =====
const stepForm = document.getElementById('stepForm');
const stepsInput = document.getElementById('steps');
const resultsSection = document.querySelector('.results-section');
const circleFilm = document.querySelector('.circle-fill');
const stepsValue = document.querySelector('.steps-value');
const statusIcon = document.getElementById('statusIcon');
const statusText = document.getElementById('statusText');
const statusMessage = document.querySelector('.status-message');
const percentageText = document.getElementById('percentageText');
const progressFill = document.querySelector('.progress-fill');
const displaySteps = document.getElementById('displaySteps');
const stepsRemaining = document.getElementById('stepsRemaining');
const displayProgress = document.getElementById('displayProgress');
const achievementBox = document.querySelector('.achievement-box');
const motivationalBox = document.querySelector('.motivational-box');
const btnReset = document.querySelector('.btn-reset');

// ===== GOAL CONSTANT =====
const GOAL = 10000;
const CIRCUMFERENCE = 565.48; // 2 * Math.PI * 90 (for SVG circle radius 90)

// ===== FORM SUBMISSION EVENT =====
stepForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const steps = parseFloat(stepsInput.value);
    
    // Validation
    if (isNaN(steps) || steps < 0) {
        alert('Please enter a valid number of steps (0 or more)');
        return;
    }
    
    // ===== COMPARISON & TERNARY OPERATOR =====
    const isGoalAchieved = steps >= GOAL;
    const statusMsg = isGoalAchieved ? 'Goal Achieved! 🎉' : 'Keep Going! 👟';
    const statusIcon_text = isGoalAchieved ? '🎉' : '👟';
    
    // Calculate percentage (capped at 100%)
    const percentage = Math.min((steps / GOAL) * 100, 100);
    
    // Calculate remaining steps (minimum 0)
    const remaining = Math.max(0, GOAL - steps);
    
    // ===== UPDATE CIRCULAR PROGRESS =====
    const strokeDashoffset = CIRCUMFERENCE - (percentage / 100) * CIRCUMFERENCE;
    circleFilm.style.strokeDashoffset = strokeDashoffset;
    
    // ===== UPDATE DISPLAY VALUES =====
    stepsValue.textContent = steps.toLocaleString();
    statusIcon.textContent = statusIcon_text;
    statusText.textContent = statusMsg;
    percentageText.textContent = `${Math.round(percentage)}%`;
    
    // Update progress bar
    progressFill.style.width = `${percentage}%`;
    
    // Update details box
    displaySteps.textContent = steps.toLocaleString();
    stepsRemaining.textContent = remaining.toLocaleString();
    displayProgress.textContent = `${Math.round(percentage)}%`;
    
    // ===== UPDATE STATUS MESSAGE STYLING =====
    statusMessage.classList.remove('achieved', 'keeping');
    if (isGoalAchieved) {
        statusMessage.classList.add('achieved');
    } else {
        statusMessage.classList.add('keeping');
    }
    
    // ===== SHOW/HIDE ACHIEVEMENT BOX =====
    if (isGoalAchieved) {
        achievementBox.classList.remove('hidden');
        motivationalBox.classList.add('hidden');
    } else {
        achievementBox.classList.add('hidden');
        motivationalBox.classList.remove('hidden');
    }
    
    // ===== SHOW RESULTS SECTION =====
    resultsSection.classList.remove('hidden');
    
    // Scroll to results smoothly
    setTimeout(() => {
        resultsSection.scrollIntoView({ behavior: 'smooth' });
    }, 100);
});

// ===== RESET BUTTON EVENT =====
btnReset.addEventListener('click', function() {
    stepForm.reset();
    stepsInput.focus();
    resultsSection.classList.add('hidden');
    circleFilm.style.strokeDashoffset = CIRCUMFERENCE;
    statusMessage.classList.remove('achieved', 'keeping');
    achievementBox.classList.add('hidden');
    motivationalBox.classList.add('hidden');
});

// ===== OPTIONAL: ALLOW ENTER KEY TO SUBMIT =====
stepsInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        stepForm.dispatchEvent(new Event('submit'));
    }
});

// ===== CONSOLE LOGS FOR VERIFICATION =====
console.log('Step Goal Tracker initialized successfully!');
console.log('Goal: ' + GOAL + ' steps');
console.log('Ternary Operator Pattern: steps >= ' + GOAL + ' ? "Goal Achieved" : "Keep Going"');
