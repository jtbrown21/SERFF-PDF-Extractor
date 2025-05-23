const fs = require('fs');

const script = fs.readFileSync('./main', 'utf8');
const run = new Function('items', script);

if (process.argv.length <= 2) {
  console.error('Usage: node batch_test.js <input1.json> [input2.json ...]');
  process.exit(1);
}

for (const file of process.argv.slice(2)) {
  const data = JSON.parse(fs.readFileSync(file, 'utf8'));
  const items = data.map(o => ({ json: o }));
  const out = run(items);
  const outPath = file.replace(/\.json$/, '') + '.out.json';
  fs.writeFileSync(outPath, JSON.stringify(out, null, 2));
  console.log(`Processed ${file} -> ${outPath}`);
}
