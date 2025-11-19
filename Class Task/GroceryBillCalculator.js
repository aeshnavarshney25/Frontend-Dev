const billForm = document.getElementById('billForm');
const priceInput = document.getElementById('price');
const quantityInput = document.getElementById('quantity');
const resultsSection = document.getElementById('resultsSection');
const originalTotalDisplay = document.getElementById('originalTotal');
const finalAmountDisplay = document.getElementById('finalAmount');
const discountAmountDisplay = document.getElementById('discountAmount');
const discountItem = document.getElementById('discountItem');
const discountMessage = document.getElementById('discountMessage');

// Add event listener to form submission
billForm.addEventListener('submit', function(event) {
    event.preventDefault();
    calculateBill();
});

// Main calculation function
function calculateBill() {
    // ===== GET INPUT VALUES =====
    const price = parseFloat(priceInput.value);
    const quantity = parseInt(quantityInput.value);

    // Validation
    if (price < 0 || quantity < 0 || isNaN(price) || isNaN(quantity)) {
        alert('Please enter valid price and quantity');
        return;
    }

    // ===== ARITHMETIC OPERATORS =====
    // Calculate original total (multiplication)
    const originalTotal = price * quantity;

    // ===== COMPARISON OPERATOR & CONDITIONAL LOGIC =====
    // Check if total is greater than 1000
    let finalAmount = originalTotal;
    let discountApplied = false;
    let discountAmount = 0;

    if (originalTotal > 1000) {
        // Apply 10% discount (subtraction)
        discountAmount = originalTotal * 0.10;  
        finalAmount = originalTotal - discountAmount;  
        discountApplied = true;
    }
    
    displayResults(originalTotal, discountAmount, finalAmount, discountApplied);
}
// Function to display results on the screen
function displayResults(originalTotal, discountAmount, finalAmount, discountApplied) {
    
    originalTotalDisplay.textContent = originalTotal.toFixed(2);

    finalAmountDisplay.textContent = finalAmount.toFixed(2);

    if (discountApplied) {
        discountItem.classList.remove('hidden');
        discountMessage.classList.remove('hidden');
        discountAmountDisplay.textContent = discountAmount.toFixed(2);
    } else {
        discountItem.classList.add('hidden');
        discountMessage.classList.add('hidden');
    }

    resultsSection.classList.remove('hidden');

    resultsSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}


function resetCalculator() {
    billForm.reset();
    resultsSection.classList.add('hidden');
    priceInput.focus();
}


document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter' && document.activeElement === quantityInput) {
        calculateBill();
    }
});
