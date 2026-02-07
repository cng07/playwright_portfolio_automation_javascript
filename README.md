# Playwright Portfolio Automation

A test automation project using Playwright to run end-to-end tests across multiple browsers for the Carlos Ng portfolio website. This project follows the Page Object Model (POM) pattern for maintainable and scalable test automation.

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
npx playwright test tests/home.spec.js
```

### Run tests with a specific tag:

```bash
npx playwright test --grep '@runSolo'
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
├── page-objects/           # Page Object Model classes
│   ├── helper.js           # Helper functions
│   ├── homePage.js         # Home page object
│   └── ResumePage.js       # Resume page object
├── tests/                  # Test files
│   ├── example.spec.js     # Example tests
│   └── home.spec.js        # Home and Resume tests
├── playwright.config.js    # Playwright configuration
├── playwright-report/      # Test results and reports
├── package.json            # Project dependencies
└── README.md               # This file
```

## Configuration

The project is configured to run tests on three browsers:
- **Chromium** - Desktop Chrome
- **Firefox** - Desktop Firefox
- **WebKit** - Desktop Safari

All tests run in non-headless mode by default. Modify `playwright.config.js` to change settings.

```

## Best Practices Used

- **Playwright Built-in Locators**: Uses `getByRole()` and `getByText()` for robust element selection
- **Page Object Model**: Encapsulates page elements and methods for better maintainability
- **Async/Await**: All methods are async for proper handling of asynchronous operations
- **Download Handling**: Properly waits for and validates file downloads
- **Assertions**: Uses Playwright's `expect()` for test validation

## Dependencies

- `@playwright/test` - Playwright testing library
- `fs` - Node.js file system module (for file operations)

## License

See LICENSE file for details.
