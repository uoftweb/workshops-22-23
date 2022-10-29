const TIP_VALUE = 15;

/**
 * Get the amount to pay from the amount input value
 * @returns {number | null}
 */
function getAmountInput() {
  const input = document.querySelector("#amount");
  if (input) {
    return parseFloat(input.value);
  } else {
    return null;
  }
}

/**
 * Calculate and return the total to be paid (amount + tip) based on given tip percentage
 * @param {number} amount The base amount to be paid
 * @param {number} tip_value The percentage tip to add to the bill
 * @returns {number} Total to pay including tip
 */
function calculateTip(amount, tip_value) {
  return amount * (1 + tip_value / 100);
}

/**
 * Display the calculated total on the site (in the <span> tag with id: 'total')
 * @param {number} total
 */
function setTotal(total) {
  const span = document.querySelector("#total");
  if (span) {
    span.innerText = total;
  }
}

/**
 * Runs the tip calculator and displays the result on the screen
 */
function runCalculator() {
  const amount = getAmountInput();
  if (amount) {
    const total = calculateTip(amount, TIP_VALUE);
    setTotal(total);
  }
}
