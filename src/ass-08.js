import { createInterface } from "node:readline";

const rl = createInterface(process.stdin, process.stdout);

function mod(n, m) {
    return ((n % m) + m) % m;
}

rl.question('Input size: ', (nText) => {
    const n = parseInt(nText);

    if(n <= 0) {
        rl.close();
        return;
    }

    const fn = 2 * n - 1;
    const rn = (n * fn) - (n - 1);

    for(let j = 0; j < rn; j++) {
        let line = '';
        for(let i = 0; i < rn; i++) {
            line +=
                (
                    (
                        mod((mod(i, fn - 1) - mod(j, fn - 1)) + (n - 1), 2 * (fn - 1)) <= fn - 1 &&
                        mod((mod(i, fn - 1) + mod(j, fn - 1)) + (n - 2), 2 * (fn - 1)) >= fn - 2
                    ) ||
                    n === 1
                )? '*' : ' '
        }
        console.info(line);
    }

    rl.close();
});
