const readline = require('readline');

// Create interface for reading input from command line
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Display prompt to enter a number
rl.question('Enter a number: ', (number) => {
    // Parse input as a number
    number = parseInt(number);

    // Validate input
    if (isNaN(number)) {
        console.log('Please enter a valid number.');
        rl.close();
        return;
    }

    // Calculate and display times table
    console.log('Times Table:');
    for (let i = 1; i <= 9; i++) {
        const result = number * i;
        console.log(`${number} * ${i} = ${result}`);
    }

    // Close the readline interface
    rl.close();
});
