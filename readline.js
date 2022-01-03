const readline = require("readline"); // import readline library
const rl = readline.createInterface(process.stdin, process.stdout);

rl.question("What is your Name? ", (name) => {
  console.log("Your name is: " + name);
  rl.question("What is your age? ", (age) => {
    console.log("Your age is: " + age);
    rl.close();
  });
});
