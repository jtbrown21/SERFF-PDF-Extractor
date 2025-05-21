# SERFF-PDF-Extractor

The main extraction logic lives in `main`. The script expects an array of items on
`stdin` and writes the parsed results to `stdout`.

`testinput.json` contains an example payload extracted from a SERFF PDF. It can
be used to try the parser locally.

## Running locally

Make sure you have Node.js installed. Then run the script with the example
input and redirect the output to a file:

```bash
node main < testinput.json > output.json
```

The command reads the JSON from `testinput.json`, processes the file, and writes
an array of objects to `output.json`. Each object represents data extracted for
a company in the input PDF. If the parser encounters an error, the output will
contain a single item with `parse_error` describing the issue.
