# Repository Guidelines

This repository contains a Node.js script for extracting structured data from SERFF PDFs. Follow these guidelines when modifying files in this repo.

## General Goals
- Keep the parsing logic in `main` readable and maintainable.
- Verify that the parser continues to work after each change.
- Use small, descriptive commits.

## Coding Style
- Use **2 spaces** for indentation.
- Terminate JavaScript statements with semicolons.
- Prefer `const`/`let` over `var`.

## Testing
Before committing changes, run the provided batch test script to ensure the parser works with the sample inputs:

```bash
node batch_test.js testinput.json testinput2.json testinput_disapproved.json
```

The script writes `*.out.json` files next to each input. Check that the command completes without errors and that the output files look reasonable.

If you add new features or fix bugs, consider adding new sample input files under the repository root and include them in the batch test command.


