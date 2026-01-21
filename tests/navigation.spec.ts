import { test, expect } from '@playwright/test';

/**
 * Portfolio Website Navigation Tests
 * Automated test cases for Ram Patel's Portfolio
 * Feature: Portfolio Website Navigation
 */

test.describe('Portfolio Website Navigation', () => {
  
  test.beforeEach(async ({ page }) => {
    // Given I am on the portfolio website
    await page.goto('/');
    // And the website is fully loaded
    await page.waitForLoadState('networkidle');
  });

  /**
   * Test Case 1: Navigate to Home page
   * Scenario: Navigate to Home page
   *   When I click on the "Home" navigation link
   *   Then I should be redirected to the home page at path "/"
   *   And I should see the professional headline
   *   And I should see "Ram Patel" as the name
   *   And I should see "Senior Automation Test Engineer" as the role
   */
  test('Navigate to Home page', async ({ page }) => {
    // When I click on the "Home" navigation link
    await page.click('a[href="/"], nav a:has-text("Home")');
    
    // Then I should be redirected to the home page at path "/"
    await expect(page).toHaveURL('/');
    
    // And I should see the professional headline
    const headline = page.locator('h1, .hero-title, .page-title').first();
    await expect(headline).toBeVisible();
    
    // And I should see "Ram Patel" as the name
    await expect(page.locator('text=Ram Patel').first()).toBeVisible();
    
    // And I should see "Senior Automation Test Engineer" as the role
    await expect(page.locator('text=Senior Automation Test Engineer').first()).toBeVisible();
    
    // Additional validation: Verify tagline is visible
    await expect(page.locator('text=/Transforming Quality Assurance/').first()).toBeVisible();
    
    // Verify experience is mentioned
    await expect(page.locator('text=/10\\+\\s*Years?/').first()).toBeVisible();
    
    console.log('✓ Test Case 1: Navigate to Home page - PASSED');
  });

  /**
   * Test Case 2: Navigate to About page
   * Scenario: Navigate to About page
   *   When I click on the "About" navigation link
   *   Then I should be redirected to the about page at path "/about"
   *   And I should see the page title "About Me"
   *   And I should see professional background information
   *   And I should see career highlights listed
   */
  test('Navigate to About page', async ({ page }) => {
    // When I click on the "About" navigation link
    await page.click('a[href="/about"], nav a:has-text("About")');
    
    // Then I should be redirected to the about page at path "/about"
    await expect(page).toHaveURL('/about');
    
    // Wait for page content to load
    await page.waitForLoadState('networkidle');
    
    // And I should see the page title "About Me"
    const pageTitle = page.locator('h1:has-text("About"), .page-title:has-text("About")');
    await expect(pageTitle).toBeVisible();
    
    // And I should see professional background information
    // Verify introduction section is present
    await expect(page.locator('text=/decade of experience/').first()).toBeVisible();
    await expect(page.locator('text=/test automation/').first()).toBeVisible();
    
    // And I should see career highlights listed
    // Verify multiple highlights are visible
    await expect(page.locator('text=/10\\+\\s*years of hands-on experience/i').first()).toBeVisible();
    await expect(page.locator('text=/50\\+\\s*automation frameworks/i').first()).toBeVisible();
    await expect(page.locator('text=/10,000\\+\\s*test cases/i').first()).toBeVisible();
    
    // Verify contact information is present
    await expect(page.locator('text=ram.patel@example.com').first()).toBeVisible();
    await expect(page.locator('text=/Mumbai,\\s*India/').first()).toBeVisible();
    
    console.log('✓ Test Case 2: Navigate to About page - PASSED');
  });

});

/**
 * Additional helper test to verify the application is running
 */
test.describe('Application Health Check', () => {
  test('Application loads successfully', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Ram Patel|Portfolio/i);
    await expect(page.locator('body')).toBeVisible();
    console.log('✓ Application health check - PASSED');
  });
});
