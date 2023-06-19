import { createInterface } from "node:readline";

const rl = createInterface(process.stdin, process.stdout);

rl.question('Input score: ', (scoreText) => {
    const score = parseFloat(scoreText);

    const grade =
        (score >= 80)? 'A' :
        (score >= 70)? 'B' :
        (score >= 60)? 'C' :
        (score >= 50)? 'D' :
        'F';

    console.info(`Your grade is ${grade}.`);

    rl.close();
});
