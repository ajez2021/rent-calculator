function calculate() {
  const income = parseFloat(document.getElementById('income').value);
  const multiplier = parseFloat(document.getElementById('multiplier').value);

  if (!income) {
    document.getElementById('output').innerText = "Please enter a valid income.";
    return;
  }

  const monthlyIncome = income / 12;
  const maxRent = (monthlyIncome / multiplier).toFixed(2);

  document.getElementById('output').innerHTML =
    `Max Affordable Rent: <strong>$${maxRent}</strong> per month`;
}
