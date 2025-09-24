const dobInput = document.getElementById("dob");
const generateBtn = document.getElementById("generateBtn");
const resultDiv = document.getElementById("result");

generateBtn.addEventListener("click", () => {
  const dob = new Date(dobInput.value);
  const today = new Date();

  let years = today.getFullYear() - dob.getFullYear();
  let months = today.getMonth() - dob.getMonth();
  let days = today.getDate() - dob.getDate();

  if (days < 0) {
    months--;
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  resultDiv.textContent = `You are ${years} years and ${months} months old.`;
});
