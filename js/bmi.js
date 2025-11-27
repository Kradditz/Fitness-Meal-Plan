document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("bmiForm");
  if (!form) return; // page safety

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const heightCm = parseFloat(document.getElementById("height").value);
    const weightKg = parseFloat(document.getElementById("weight").value);
    const age = parseInt(document.getElementById("age").value, 10);
    const activity = parseFloat(document.getElementById("activity").value);
    const sex = document.querySelector('input[name="sex"]:checked')?.value || "male";

    if (!heightCm || !weightKg || !age) {
      alert("Please fill in height, weight and age.");
      return;
    }

    // BMI (height in meters, decimals allowed)
    const heightM = heightCm / 100;
    const bmi = weightKg / (heightM * heightM);

    let bmiCategory = "";
    if (bmi < 18.5) bmiCategory = "Underweight";
    else if (bmi < 25) bmiCategory = "Normal";
    else if (bmi < 30) bmiCategory = "Overweight";
    else bmiCategory = "Obese";

    // Mifflin-St Jeor BMR
    let bmr;
    if (sex === "female") {
      bmr = 10 * weightKg + 6.25 * heightCm - 5 * age - 161;
    } else {
      bmr = 10 * weightKg + 6.25 * heightCm - 5 * age + 5;
    }

    const maintenance = bmr * activity;
    const fatLoss = maintenance - 300;
    const muscleGain = maintenance + 250;

    const bmiResult = document.getElementById("bmiResult");
    const calorieResult = document.getElementById("calorieResult");

    bmiResult.innerHTML =
      `<strong>BMI:</strong> ${bmi.toFixed(1)} (${bmiCategory})`;

    calorieResult.innerHTML =
      `<strong>Estimated daily calories:</strong><br>
       Maintenance: ${Math.round(maintenance)} kcal<br>
       Fat loss: ~${Math.round(fatLoss)} kcal<br>
       Muscle gain: ~${Math.round(muscleGain)} kcal`;
  });
});
