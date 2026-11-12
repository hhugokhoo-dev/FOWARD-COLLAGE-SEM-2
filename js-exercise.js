
// # Exercise 2: Counting Even Numbers (for loop + if)

// # Scenario: You need to list out numbers, but you only want to highlight the even ones.
// - Task: Write a for loop that counts from 1 up to 10 (inclusive).
// - Rules:
//   - Inside the loop, use an if statement and the remainder operator (%) to check if the current number is even.
//   - Print only the even numbers to the console (2, 4, 6, 8, 10).

for (let number = 1; number <= 10; number++) {
    if (number % 2 === 0) {
        console.log(number)
    }
}

// # Exercise 3: Blast Off Countdown (while loop)

// # Scenario: Simulate a rocket launch countdown.
// - Task: Create a variable called counter and set it to 5.
// - Rules:
// 	- Use a while loop that runs as long as counter is greater than 0.
// 	- Inside the loop, print the current value of counter and then decrease it by 1.
// 	- After the loop finishes entirely, print "Blast off! 🚀".


let counter = 5;
while (counter > 0) {
    console.log(counter)
    counter --
}
console.log("Blast off! 🚀")