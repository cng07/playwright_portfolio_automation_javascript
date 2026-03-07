# Playwright Portfolio Automation (JavaScript)

End-to-end UI and API smoke tests for the Carlos Ng portfolio site using Playwright and the Page Object Model (POM).

Target site: `https://carlosng07.vercel.app`

## Coverage

- Home page UI validation
- About, Contact, Education, Experience, Projects, Resume, and Certifications page UI validation
- API response checks for internal links and selected external links
- Resume PDF download validation

## Tech Stack

- Node.js
- `@playwright/test`
- `@fast-csv/parse`

## Prerequisites

- Node.js LTS (18+ recommended)
- npm

## Installation

```bash
npm install
npx playwright install
```

## Running Tests

Run all tests on all configured browsers (`chromium`, `firefox`, `webkit`):

```bash
npx playwright test
```

Run on a specific browser:

```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

Run a specific test file:

```bash
npx playwright test tests/home.test.js
```

Run tests by title pattern:

```bash
npx playwright test --grep "API links"
```

Run in headed mode:

```bash
npx playwright test --headed
```

Run in debug mode:

```bash
npx playwright test --debug
```

Run in CI mode locally (PowerShell):

```powershell
$env:CI='1'; npx playwright test
```

## Test Results

Open the HTML report:

```bash
npx playwright show-report
```

Notes:
- Local runs generate an HTML report.
- CI runs also generate `test-results/results.json` and `test-results/junit.xml`.

## Project Structure

```text
.
|-- .github/
|   `-- workflows/
|       `-- playwright.yml
|-- page-objects/
|   |-- aboutPage.js
|   |-- certificationsPage.js
|   |-- contactPage.js
|   |-- educationPage.js
|   |-- experiencePage.js
|   |-- helper.js
|   |-- homePage.js
|   |-- projectsPage.js
|   `-- resumePage.js
|-- tests/
|   |-- about.test.js
|   |-- certifications.test.js
|   |-- contact.test.js
|   |-- education.test.js
|   |-- experience.test.js
|   |-- home.test.js
|   |-- projects.test.js
|   `-- resume.test.js
|-- playwright.config.js
|-- package.json
`-- README.md
```

## Playwright Configuration Highlights

- `testDir`: `./tests`
- `fullyParallel`: `true`
- `retries`: `2` in CI, `0` locally
- `workers`: `4` in CI
- Browsers: Desktop Chrome, Firefox, and Safari profiles
- `headless`: `false` locally, `true` in CI
- `trace`: `on-first-retry`
- `screenshot`: `only-on-failure`
- `video`: `retain-on-failure` in CI

## CI

GitHub Actions workflow: `.github/workflows/playwright.yml`

Triggers:
- Push to `main` or `master`
- Pull requests to `main` or `master`

Main CI steps:
1. `npm ci`
2. `npx playwright install --with-deps`
3. `npx playwright test`
4. Upload `playwright-report/` as an artifact

## Notes

- Tests run against the deployed live site, so internet connectivity is required.
- Page navigation URLs are currently hardcoded in the page object classes.

## License

MIT License.
