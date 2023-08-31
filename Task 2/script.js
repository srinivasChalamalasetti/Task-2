document.addEventListener("DOMContentLoaded", function () {
  const convertBtn = document.getElementById("convertBtn");
  const celsiusInput = document.getElementById("celsius");
  const resultSpan = document.getElementById("result");

  convertBtn.addEventListener("click", function () {
    const celsiusValue = parseFloat(celsiusInput.value);
    if (!isNaN(celsiusValue)) {
      const fahrenheitValue = celsiusValue * 9 / 5 + 32;
      resultSpan.textContent = fahrenheitValue.toFixed(2);
    } else {
      resultSpan.textContent = "Invalid input";
    }
  });
});
