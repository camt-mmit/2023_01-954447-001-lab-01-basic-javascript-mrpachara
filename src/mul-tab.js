const n = parseInt(process.argv[2]);

for(let j = 1; j <= 12; j++) {
    let line = '';
    for(let i = 2; i <= n; i++) {
        // line += (i * j) + ' ';
        line += `${i * j}`.padStart(5, ' ');
    }
    console.info(line);
}