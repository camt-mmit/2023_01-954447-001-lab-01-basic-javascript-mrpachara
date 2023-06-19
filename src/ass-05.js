import { createInterface } from "node:readline";

const rl = createInterface(process.stdin, process.stdout);

function mod(n, m) {
    return ((n % m) + m) % m;
}

rl.question('Input size: ', (nText) => {
    const n = parseInt(nText);
    const fn = 2 * n - 1;

    for(let j = 0; j < fn; j++) {
        let line = '';
        for(let i = 0; i < fn; i++) {
            line +=
                (
                    mod(i + j, fn - 1) === n - 1 ||
                    mod(i - j, fn - 1) === n - 1 ||
                    n === 1
                )? '*' : ' '
        }
        console.info(line);
    }

    rl.close();
});
