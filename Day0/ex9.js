let weight = 75;
let height = 1.75;
let BMI = weight / (height * height);

if (BMI < 18.5)
    console.log(`BMI: ${BMI} is underweight`);
else if (BMI >= 25)
    console.log(`BMI: ${BMI} is overweight`);
else
    console.log(`BMI: ${BMI} is normal`);