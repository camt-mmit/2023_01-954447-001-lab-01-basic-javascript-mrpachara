import { createInterface } from "node:readline";

const rl = createInterface(process.stdin, process.stdout);

function mod(n, m) {
    return ((n % m) + m) % m;
}

rl.question('Input size: ', (nText) => {
    const n = parseInt(nText);

    for(let j = 0; j < n; j++) {
        let line = '';
        for(let i = 0; i < n; i++) {
            line +=
                (
                    mod(i, n - 1) === 0 ||
                    mod(j, n - 1) === 0 ||
                    n === 1
                )? '*' : ' '
        }
        console.info(line);
    }

    rl.close();
});
