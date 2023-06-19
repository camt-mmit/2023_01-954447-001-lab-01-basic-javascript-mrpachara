import { createInterface } from "node:readline";

const rl = createInterface(process.stdin, process.stdout);

rl.question('Input size: ', (nText) => {
    const n = parseInt(nText);

    for(let j = 0; j < n; j++) {
        let line = '';
        for(let i = 0; i < n; i++) {
            line +=
                (
                    i + j >= n - 1
                )? '*' : ' '
        }
        console.info(line);
    }

    rl.close();
});
