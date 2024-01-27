
function calculate() {
    let height = document.getElementById('height').value;
    let weight = document.getElementById('weight').value;

    const bmi = weight / height ** 2;
    let text = "";  
    if (bmi < 18.5) {
        text = 'You are too thin !';
    } else if (bmi < 24.9) {
        text ='You are good';
    } else if (bmi < 29.9) {
        text = 'You are overweight';
    } else if (bmi < 39.9) {
        text = 'You are obese';
    } else if (bmi > 39.9) {
        text = 'You are on severe obesity';
    }
    document.getElementById('text_area').innerText = text;
    
};