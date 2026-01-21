# Ram Patel - Portfolio Test Cases (Gherkin/BDD Format)
# Comprehensive test scenarios for the React Portfolio Application

Feature: Portfolio Website Navigation
  As a visitor
  I want to navigate through different sections of the portfolio
  So that I can explore Ram Patel's professional profile

  Background:
    Given I am on the portfolio website
    And the website is fully loaded

  Scenario: Navigate to Home page
    When I click on the "Home" navigation link
    Then I should be redirected to the home page at path "/"
    And I should see the professional headline
    And I should see "Ram Patel" as the name
    And I should see "Senior Automation Test Engineer" as the role

  Scenario: Navigate to About page
    When I click on the "About" navigation link
    Then I should be redirected to the about page at path "/about"
    And I should see the page title "About Me"
    And I should see professional background information
    And I should see career highlights listed

  Scenario: Navigate to Skills page
    When I click on the "Skills" navigation link
    Then I should be redirected to the skills page at path "/skills"
    And I should see the page title "Skills"
    And I should see skill categories displayed

  Scenario: Navigate to Projects page
    When I click on the "Projects" navigation link
    Then I should be redirected to the projects page at path "/projects"
    And I should see the page title "Projects"
    And I should see project cards displayed

  Scenario: Navigate to Experience page
    When I click on the "Experience" navigation link
    Then I should be redirected to the experience page at path "/experience"
    And I should see the page title "Experience"
    And I should see a professional timeline

  Scenario: Navigate to Contact page
    When I click on the "Contact" navigation link
    Then I should be redirected to the contact page at path "/contact"
    And I should see the page title "Get In Touch"
    And I should see a contact form

  Scenario: Navigate using browser back button
    Given I am on the "About" page
    When I navigate to the "Projects" page
    And I click the browser back button
    Then I should return to the "About" page

  Scenario: Direct URL access
    When I navigate directly to "/skills" URL
    Then I should see the Skills page
    And the navigation should highlight the "Skills" menu item


Feature: Home Page Functionality
  As a visitor
  I want to see an engaging home page
  So that I get a strong first impression

  Background:
    Given I am on the home page

  Scenario: View professional headline
    Then I should see "Ram Patel" displayed prominently
    And I should see "Senior Automation Test Engineer" as the role
    And I should see "10+ Years" of experience mentioned
    And I should see the tagline "Transforming Quality Assurance Through Intelligent Test Automation"

  Scenario: View call-to-action buttons
    Then I should see a "View My Work" button
    And I should see a "Contact Me" button

  Scenario: Click View My Work button
    When I click on "View My Work" button
    Then I should be redirected to the Projects page

  Scenario: Click Contact Me button
    When I click on "Contact Me" button
    Then I should be redirected to the Contact page

  Scenario: View professional summary
    Then I should see a summary section
    And the summary should mention "10 years of experience"
    And the summary should mention automation frameworks


Feature: About Page Functionality
  As a visitor
  I want to learn about Ram Patel's background
  So that I can understand his professional expertise

  Background:
    Given I am on the About page

  Scenario: View professional introduction
    Then I should see an introduction section
    And the introduction should mention "decade of experience"
    And the introduction should mention "test automation"

  Scenario: View career highlights
    Then I should see a highlights section
    And I should see "10+ years of hands-on experience" as a highlight
    And I should see "50+ automation frameworks" mentioned
    And I should see "10,000+ test cases" mentioned
    And I should see "CI/CD integration" mentioned

  Scenario: View professional approach
    Then I should see an approach section
    And the approach should mention "strategic approach"
    And the approach should mention "scalability" and "maintainability"

  Scenario: View personal information
    Then I should see email "ram.patel@example.com"
    And I should see phone number "+91 98765 43210"
    And I should see location "Mumbai, India"


Feature: Skills Page Functionality
  As a visitor
  I want to see Ram Patel's technical skills
  So that I can assess his expertise

  Background:
    Given I am on the Skills page

  Scenario: View automation tools skills
    Then I should see "Automation Tools" category
    And I should see "Selenium WebDriver" with skill level
    And I should see "Playwright" with skill level
    And I should see "Cypress" with skill level
    And I should see "Appium" with skill level
    And I should see "RestAssured" with skill level

  Scenario: View programming languages skills
    Then I should see "Programming Languages" category
    And I should see "Java" with skill level
    And I should see "C#" with skill level
    And I should see "TypeScript" with skill level
    And I should see "JavaScript" with skill level
    And I should see "Python" with skill level

  Scenario: View frameworks skills
    Then I should see "Frameworks" category
    And I should see "TestNG" with skill level
    And I should see "JUnit" with skill level
    And I should see "NUnit" with skill level
    And I should see "SpecFlow" with skill level
    And I should see "Cucumber" with skill level

  Scenario: View CI/CD tools skills
    Then I should see "CI/CD" category
    And I should see "Jenkins" with skill level
    And I should see "GitHub Actions" with skill level
    And I should see "Azure DevOps" with skill level
    And I should see "GitLab CI" with skill level

  Scenario: View testing types
    Then I should see "Testing Types" section
    And I should see "UI Automation" listed
    And I should see "API Testing" listed
    And I should see "Regression Testing" listed
    And I should see "Cross-Browser Testing" listed

  Scenario: View tools and technologies
    Then I should see "Tools" section
    And I should see "Git/GitHub" listed
    And I should see "JIRA" listed
    And I should see "Docker" listed
    And I should see "Maven" listed

  Scenario: Verify skill bars are displayed
    Then all skills should have visual skill bars
    And skill bars should display percentage levels
    And skill bars should have proper colors


Feature: Projects Page Functionality
  As a visitor
  I want to see Ram Patel's projects
  So that I can evaluate his work

  Background:
    Given I am on the Projects page

  Scenario: View project cards
    Then I should see multiple project cards displayed
    And each project card should have a title
    And each project card should have a description
    And each project card should show technologies used

  Scenario: View Enterprise E-commerce Automation Framework project
    Then I should see a project titled "Enterprise E-commerce Automation Framework"
    And the project should show technologies "Selenium, Java, TestNG, Maven, Jenkins"
    And the project should mention "Lead Automation Engineer" role
    And the project should show duration "12 months"

  Scenario: View Banking Application Test Suite project
    Then I should see a project related to banking automation
    And the project should show relevant technologies
    And the project should describe responsibilities

  Scenario: View Healthcare Portal Automation project
    Then I should see a project related to healthcare automation
    And the project should show technologies used
    And the project should show achievements

  Scenario: Expand project details
    When I click on a project card
    Then I should see expanded project details
    And I should see responsibilities listed
    And I should see achievements listed
    And I should see company information

  Scenario: Filter projects by technology (if implemented)
    Given multiple projects are displayed
    When I filter by "Selenium"
    Then only projects using Selenium should be displayed

  Scenario: View all projects
    Then I should see at least 3 project cards
    And all project cards should be properly formatted


Feature: Experience Page Functionality
  As a visitor
  I want to see Ram Patel's work experience
  So that I can understand his career progression

  Background:
    Given I am on the Experience page

  Scenario: View professional timeline
    Then I should see a timeline component
    And the timeline should display chronologically
    And the timeline should show multiple positions

  Scenario: View experience entries
    Then each timeline entry should have a job title
    And each timeline entry should have a company name
    And each timeline entry should have a date range
    And each timeline entry should have responsibilities

  Scenario: View Senior Automation Test Engineer position
    Then I should see "Senior Automation Test Engineer" position
    And the position should show relevant company
    And the position should show key responsibilities

  Scenario: View Automation Test Engineer position
    Then I should see "Automation Test Engineer" position
    And the position should show career progression
    And the position should list achievements

  Scenario: Timeline visual representation
    Then the timeline should have connecting lines
    And the timeline should have visual markers
    And the timeline entries should be clearly separated


Feature: Contact Page Functionality
  As a visitor
  I want to contact Ram Patel
  So that I can discuss potential opportunities

  Background:
    Given I am on the Contact page

  Scenario: View contact information
    Then I should see email "ram.patel@example.com"
    And I should see phone number "+91 98765 43210"
    And I should see location "Mumbai, India"
    And I should see LinkedIn profile link

  Scenario: View contact form
    Then I should see a contact form
    And the form should have a "Name" field
    And the form should have an "Email" field
    And the form should have a "Subject" field
    And the form should have a "Message" field
    And the form should have a "Send Message" button

  Scenario: Submit contact form successfully
    When I enter "John Doe" in the name field
    And I enter "john@example.com" in the email field
    And I enter "Job Opportunity" in the subject field
    And I enter "I would like to discuss a position" in the message field
    And I click the "Send Message" button
    Then I should see a success message
    And the form fields should be cleared
    And the success message should disappear after 5 seconds

  Scenario: Submit form with empty name field
    When I leave the name field empty
    And I enter "john@example.com" in the email field
    And I enter "Test Subject" in the subject field
    And I enter "Test message" in the message field
    And I click the "Send Message" button
    Then I should see a validation error for the name field
    And the form should not be submitted

  Scenario: Submit form with invalid email
    When I enter "John Doe" in the name field
    And I enter "invalid-email" in the email field
    And I enter "Test Subject" in the subject field
    And I enter "Test message" in the message field
    And I click the "Send Message" button
    Then I should see a validation error for the email field
    And the form should not be submitted

  Scenario: Submit form with empty message
    When I enter "John Doe" in the name field
    And I enter "john@example.com" in the email field
    And I enter "Test Subject" in the subject field
    And I leave the message field empty
    And I click the "Send Message" button
    Then I should see a validation error for the message field
    And the form should not be submitted

  Scenario: Click email link
    When I click on the email address link
    Then my default email client should open with "ram.patel@example.com" in the To field

  Scenario: Click phone link
    When I click on the phone number link
    Then it should initiate a call to "+91 98765 43210"

  Scenario: Click LinkedIn link
    When I click on the LinkedIn profile link
    Then I should be redirected to "https://www.linkedin.com/in/rampatel"
    And it should open in a new tab

  Scenario: Form submission loading state
    When I submit a valid contact form
    Then I should see a loading indicator
    And the submit button should be disabled
    And I should see status as "sending"


Feature: Header Component Functionality
  As a visitor
  I want to use the header navigation
  So that I can easily access different sections

  Background:
    Given I am on any page of the website

  Scenario: View header navigation
    Then I should see the header component
    And I should see "Ram Patel" or logo in the header
    And I should see navigation menu items

  Scenario: View all navigation links
    Then I should see "Home" navigation link
    And I should see "About" navigation link
    And I should see "Skills" navigation link
    And I should see "Projects" navigation link
    And I should see "Experience" navigation link
    And I should see "Contact" navigation link

  Scenario: Active navigation highlight
    Given I am on the "Skills" page
    Then the "Skills" navigation item should be highlighted
    And other navigation items should not be highlighted

  Scenario: Sticky header on scroll (if implemented)
    Given I am on a page with scrollable content
    When I scroll down the page
    Then the header should remain visible at the top

  Scenario: Mobile menu toggle (if implemented)
    Given I am viewing on a mobile device
    When I click the hamburger menu icon
    Then the mobile navigation menu should open
    And all navigation links should be visible


Feature: Footer Component Functionality
  As a visitor
  I want to see footer information
  So that I can access social links and copyright info

  Background:
    Given I am on any page of the website

  Scenario: View footer content
    Then I should see the footer component
    And I should see copyright information
    And I should see "Built with ❤️ using React" message

  Scenario: View social media links
    Then I should see social media links in the footer
    And I should see LinkedIn link
    And I should see GitHub link

  Scenario: Click social media links
    When I click on a social media link
    Then it should open in a new tab
    And it should navigate to the correct social profile


Feature: Responsive Design
  As a visitor using different devices
  I want the website to be responsive
  So that I have a good experience on any screen size

  Scenario: View on desktop (1920x1080)
    Given I am viewing on a desktop with resolution 1920x1080
    Then all components should be properly displayed
    And navigation should be horizontal
    And content should utilize available space

  Scenario: View on tablet (768x1024)
    Given I am viewing on a tablet with resolution 768x1024
    Then all components should adapt to tablet size
    And content should be readable
    And images should be properly scaled

  Scenario: View on mobile (375x667)
    Given I am viewing on a mobile device with resolution 375x667
    Then all components should adapt to mobile size
    And navigation should be mobile-friendly
    And text should be readable without zooming
    And buttons should be easily tappable

  Scenario: Test portrait and landscape orientations
    Given I am on a mobile or tablet device
    When I rotate the device to landscape
    Then the layout should adapt accordingly
    When I rotate back to portrait
    Then the layout should return to portrait mode

  Scenario: Test responsive breakpoints
    When I resize the browser window from 1920px to 320px
    Then the layout should smoothly transition at breakpoints
    And no horizontal scrolling should occur
    And all content should remain accessible


Feature: Component Reusability
  As a developer
  I want to ensure components are properly structured
  So that the code is maintainable

  Scenario: Button component usage
    Given I navigate through all pages
    Then Button components should be consistently styled
    And all buttons should have proper hover effects
    And button variants should be available (primary, secondary)

  Scenario: Card component usage
    Given I view pages with card components
    Then all cards should have consistent styling
    And cards should have proper shadows and borders
    And cards should be responsive

  Scenario: SkillBar component functionality
    Given I am on the Skills page
    Then each skill should use the SkillBar component
    And skill bars should animate on page load
    And skill levels should be displayed as percentages

  Scenario: ProjectCard component functionality
    Given I am on the Projects page
    Then each project should use the ProjectCard component
    And cards should display all required information
    And cards should have consistent layout

  Scenario: Timeline component functionality
    Given I am on the Experience page
    Then timeline should use the Timeline component
    And timeline entries should be properly formatted
    And timeline should have visual connectors


Feature: Performance and Loading
  As a visitor
  I want the website to load quickly
  So that I have a smooth experience

  Scenario: Initial page load
    When I visit the portfolio website for the first time
    Then the page should load within 3 seconds
    And all critical resources should be loaded
    And images should be optimized

  Scenario: Navigation between pages
    Given I am on the Home page
    When I navigate to the About page
    Then the transition should be smooth
    And the page should load instantly (SPA behavior)

  Scenario: Concurrent requests handling
    When multiple resources load simultaneously
    Then the page should handle requests efficiently
    And there should be no blocking requests


Feature: SEO and Accessibility
  As a visitor or search engine
  I want proper SEO and accessibility
  So that the website is discoverable and usable

  Scenario: Page titles
    When I navigate to different pages
    Then each page should have a unique title
    And the title should reflect the page content

  Scenario: Semantic HTML
    Given I inspect the page structure
    Then proper semantic HTML tags should be used
    And headings should be in logical order (h1, h2, h3)

  Scenario: Alt text for images (if images present)
    Then all images should have descriptive alt text
    And decorative images should have empty alt attributes

  Scenario: Keyboard navigation
    When I navigate using only the keyboard
    Then all interactive elements should be accessible
    And focus indicators should be visible
    And tab order should be logical

  Scenario: Screen reader compatibility
    When using a screen reader
    Then all content should be announced properly
    And navigation should be understandable
    And form fields should have proper labels


Feature: Error Handling
  As a visitor
  I want proper error handling
  So that I know what's happening when things go wrong

  Scenario: Invalid route access
    When I navigate to an invalid URL like "/invalid-page"
    Then I should see a 404 error message or be redirected to home
    And I should have options to navigate back

  Scenario: Form submission error
    Given I am on the Contact page
    When the form submission fails due to network error
    Then I should see an error message
    And I should be able to retry submission

  Scenario: JavaScript disabled (graceful degradation)
    Given JavaScript is disabled in the browser
    Then the website should still display basic content
    And a message about JavaScript requirement may be shown


Feature: Data Consistency
  As a visitor
  I want to see consistent data
  So that information is reliable

  Scenario: Personal info consistency across pages
    When I view contact information on About page
    And I view contact information on Contact page
    Then the email address should match
    And the phone number should match
    And the location should match

  Scenario: Skills data consistency
    When I view automation tools on Skills page
    Then tool names should match those mentioned in Projects
    And programming languages should align with project technologies

  Scenario: Experience timeline accuracy
    When I view the Experience page
    Then date ranges should be consistent
    And total years should match "10+ Years" claim
    And positions should be in chronological order


Feature: Cross-Browser Compatibility
  As a visitor using different browsers
  I want the website to work correctly
  So that I can access it from any browser

  Scenario: Chrome browser compatibility
    Given I am using Google Chrome
    Then all features should work correctly
    And styling should be rendered properly

  Scenario: Firefox browser compatibility
    Given I am using Mozilla Firefox
    Then all features should work correctly
    And styling should be rendered properly

  Scenario: Safari browser compatibility
    Given I am using Safari
    Then all features should work correctly
    And styling should be rendered properly

  Scenario: Edge browser compatibility
    Given I am using Microsoft Edge
    Then all features should work correctly
    And styling should be rendered properly

  Scenario: Older browser support
    Given I am using an older browser version
    Then I should see a message about browser compatibility
    Or the website should degrade gracefully


Feature: Build and Deployment
  As a developer
  I want to ensure the build process works
  So that the app can be deployed successfully

  Scenario: Development build
    When I run "npm start"
    Then the development server should start on port 3000
    And the application should open in the browser
    And hot-reloading should work for code changes

  Scenario: Production build
    When I run "npm run build"
    Then a production build should be created in the build folder
    And all files should be minified
    And assets should be optimized
    And the build should complete without errors

  Scenario: Build optimization
    When I create a production build
    Then JavaScript bundles should be optimized
    And CSS should be minified
    And images should be compressed
    And the bundle size should be reasonable


Feature: Animation and User Experience
  As a visitor
  I want smooth animations
  So that the website feels professional

  Scenario: Page transition animations
    When I navigate between pages
    Then I should see smooth transition effects
    And animations should not be jarring

  Scenario: Skill bar animations
    When I land on the Skills page
    Then skill bars should animate from 0 to their target level
    And animation should be smooth and gradual

  Scenario: Hover effects
    When I hover over interactive elements
    Then I should see visual feedback (color change, scale, etc.)
    And the transition should be smooth

  Scenario: Scroll animations (if implemented)
    When I scroll down a page
    Then elements should animate into view
    And animations should enhance rather than distract

  Scenario: Loading states
    When content is loading
    Then I should see appropriate loading indicators
    And loading states should be visually clear
