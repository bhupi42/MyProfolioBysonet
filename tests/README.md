# Playwright Test Automation

This directory contains automated tests for Ram Patel's Portfolio using Playwright.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Install Playwright browsers (if not already installed):
   ```bash
   npx playwright install
   ```

## Running Tests

### Run all tests
```bash
npx playwright test
```

### Run tests in headed mode (see browser)
```bash
npx playwright test --headed
```

### Run specific test file
```bash
npx playwright test tests/navigation.spec.ts
```

### Run tests in UI mode (interactive)
```bash
npx playwright test --ui
```

### Run tests in debug mode
```bash
npx playwright test --debug
```

### Run tests on specific browser
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

## View Test Results

### Open HTML report
```bash
npx playwright show-report
```

### View traces for failed tests
```bash
npx playwright show-trace trace.zip
```

## Test Structure

```
tests/
├── navigation.spec.ts    # Navigation test cases (Top 2 automated scenarios)
└── README.md            # This file
```

## Automated Test Cases

### 1. Navigate to Home page
- Clicks on Home navigation link
- Verifies URL is "/"
- Validates "Ram Patel" name is visible
- Validates "Senior Automation Test Engineer" role is visible
- Checks professional tagline
- Verifies experience is mentioned

### 2. Navigate to About page
- Clicks on About navigation link
- Verifies URL is "/about"
- Validates page title "About Me"
- Checks professional background information
- Validates career highlights are listed
- Verifies contact information

## Configuration

Test configuration is in `playwright.config.ts`:
- Base URL: http://localhost:3000
- Browsers: Chromium, Firefox, WebKit
- Mobile: Pixel 5, iPhone 12
- Auto-start dev server before tests
- Screenshots on failure
- Video recording on failure
- Trace on retry

## CI/CD Integration

To run tests in CI/CD pipeline:
```bash
CI=true npx playwright test
```

## Best Practices

1. Always wait for page load before assertions
2. Use semantic locators (text, aria labels)
3. Add meaningful test descriptions
4. Take screenshots on failures
5. Use test fixtures for common setup
6. Run tests in parallel when possible

## Troubleshooting

### Tests fail to start
- Ensure dev server is not already running on port 3000
- Check if all dependencies are installed

### Element not found errors
- Verify selectors match actual DOM structure
- Check if elements are dynamically loaded
- Add appropriate wait conditions

### Timeout errors
- Increase timeout in playwright.config.ts
- Check network conditions
- Verify application starts correctly
