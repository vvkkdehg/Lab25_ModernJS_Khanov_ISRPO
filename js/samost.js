const rates = {
  USD: 76.97,
  EUR: 90.01,
  GBP: 103.26,
  KZT: 0.1604,
  BYN: 26.74
};

function convert(amount, currency) {
  return (amount / rates[currency]).toFixed(2);
}

function getCurrencySymbol(currency) {
  const symbols = {
    USD: "$",
    EUR: "€",
    GBP: "£",
    KZT: "₸",
    BYN: "Br"
  };
  return symbols[currency] ?? currency;
}

function updateResult(amount, currency, convertedAmount) {
  const resultDiv = document.getElementById("result");
  const symbol = getCurrencySymbol(currency);
  resultDiv.textContent = `${amount} RUB = ${convertedAmount} ${symbol}`;
}

const convertBtn = document.getElementById("convertBtn");
const amountInput = document.getElementById("amount");
const currencySelect = document.getElementById("currency");

convertBtn.addEventListener("click", () => {
  const amount = parseFloat(amountInput.value);
  const currency = currencySelect.value;
  
  const converted = convert(amount, currency);
  updateResult(amount, currency, converted);
});