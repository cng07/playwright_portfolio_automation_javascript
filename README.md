# Playwright Portfolio Automation

A test automation project using Playwright to run end-to-end tests across multiple browsers.

## Prerequisites

- Node.js (v16 or higher)
- npm

## Installation

1. Clone or navigate to the project directory
2. Install dependencies:

```bash
npm install
```

3. Install Playwright browsers:

```bash
npx playwright install
```

## Running Tests

### Run all tests on all browsers (chromium, firefox, webkit):

```bash
npx playwright test
```

### Run tests on a specific browser:

```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

### Run tests in headed mode (see browser window):

```bash
npx playwright test --headed
```

### Run a specific test file:

```bash
npx playwright test tests/example.spec.js
```

### Run tests in debug mode:

```bash
npx playwright test --debug
```

## Viewing Test Results

After running tests, open the HTML report:

```bash
npx playwright show-report
```

## Project Structure

```
.
├── tests/              # Test files
├── playwright.config.js # Playwright configuration
├── playwright-report/  # Test results and reports
└── README.md           # This file
```

## Configuration

The project is configured to run tests on three browsers:
- **Chromium** - Desktop Chrome
- **Firefox** - Desktop Firefox
- **WebKit** - Desktop Safari

All tests run in non-headless mode by default. Modify `playwright.config.js` to change settings.

## License

See LICENSE file for details.
