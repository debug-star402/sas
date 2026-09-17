let score = 0;
if (score >= 90 && score <= 100)
    console.log("A");
else if (score >= 80 && score < 90)
    console.log("B");
else if (score >= 70 && score < 80)
    console.log("C");
else if (score < 70 && score >= 0)
    console.log("F");
else
    console.log("Score is out of bounds!");