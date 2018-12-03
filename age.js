var readline = require('readline-sync');

ageFunc = () => {
    let age = readline.question("What is your age");
    if (typeof (age) == Number && age > 1 || age < 120) {
        console.log("Your age is: ", age)
    } else {
        console.log("Please enter your age")
        ageFunc();
    }
}

ageFunc();
