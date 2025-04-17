const calculateBtn = document.querySelector('.calculate');
const bmiResult = document.querySelector('.show-result');

const suggest = document.querySelector('.give-suggestion');

function bmiCalc_55(height, weight) {
  return weight / (height * height);
}

function bmi_normal_low(height) {
  return 18.5 * height * height;
}

function bmi_normal_high(height) {
  return 24 * height * height;
}

function calculateBMI() {
  const weight = parseFloat(document.querySelector('.weight').value);
  const height = parseFloat(document.querySelector('.height').value) / 100;

  const bmi = bmiCalc_55(height, weight);
  const normal_low = bmi_normal_low(height);
  const normal_high = bmi_normal_high(height);

  let status;
  let suggestion;

  if (bmi < 18.5) {
    status = 'Underweight';
    suggestion = `
    add at least ${(normal_low - weight).toFixed(1)}kg to normal `;
  } else if (bmi <= 24) {
    status = 'normal';
    suggestion = ``;
  } else {
    status = 'Overweight';
    suggestion = `redua at least ${(weight - normal_high).toFixed(
      1
    )}kg to normal`;
  }

  bmiResult.innerHTML = `your bmi is${bmi.toFixed(1)}.${status}`;
  suggest.innerHTML = `${suggestion}`;
}

calculateBtn.addEventListener('click', calculateBMI);
