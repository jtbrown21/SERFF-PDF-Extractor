# SERFF-PDF-Extractor

The main extraction logic lives in `main`. The script expects an array of items on
`stdin` and writes the parsed results to `stdout`.

`testinput.json` contains an example payload extracted from a SERFF PDF. It can
be used to try the parser locally.

## Running locally

Make sure you have Node.js installed. Then run the script with the example
input using a single Node command:

```bash
node -e "const fs=require('fs');const items=JSON.parse(fs.readFileSync('testinput.json','utf8')).map(o=>({json:o}));const script=fs.readFileSync('./main','utf8');const run=new Function('items',script);console.log(JSON.stringify(run(items),null,2));" > output.json
```

The command reads the JSON from `testinput.json`, processes the file, and writes
an array of objects to `output.json`. Each object represents data extracted for
a company in the input PDF. If the parser encounters an error, the output will
contain a single item with `parse_error` describing the issue.

### Batch testing

To run the parser against multiple input files at once, use the provided
`batch_test.js` script. Pass one or more JSON files containing the extracted
text as arguments:

```bash
node batch_test.js testinput.json testinput2.json testinput_disapproved.json
```

The script writes a corresponding `*.out.json` file for each input and prints a
summary of the processed files.
