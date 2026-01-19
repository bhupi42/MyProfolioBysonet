/**
 * Portfolio Data Configuration
 * Contains all content for Ram Patel's portfolio
 */

export const personalInfo = {
  name: "Ram Patel",
  role: "Senior Automation Test Engineer",
  experience: "10+ Years",
  tagline: "Transforming Quality Assurance Through Intelligent Test Automation",
  summary: "Seasoned Automation Test Engineer with over 10 years of experience in designing and implementing robust test automation frameworks. Specialized in Selenium, Playwright, Java, C#, and TypeScript. Proven track record of delivering high-quality solutions for global enterprise clients.",
  email: "ram.patel@example.com",
  phone: "+91 98765 43210",
  linkedin: "https://www.linkedin.com/in/rampatel",
  github: "https://github.com/rampatel",
  location: "Mumbai, India"
};

export const aboutMe = {
  introduction: "With over a decade of experience in software quality assurance and test automation, I specialize in building scalable, maintainable, and efficient automation frameworks that significantly reduce testing time while improving software quality.",
  highlights: [
    "10+ years of hands-on experience in automation testing",
    "Designed and implemented 50+ automation frameworks for global clients",
    "Successfully automated 10,000+ test cases across various domains",
    "Expert in both UI and API test automation",
    "Proven leadership in mentoring QA teams and establishing best practices",
    "Strong experience with CI/CD integration and DevOps practices"
  ],
  approach: "I believe in a strategic approach to test automation - focusing on maximum test coverage with minimal maintenance overhead. My frameworks are designed with scalability, reusability, and maintainability at their core."
};

export const skills = {
  automationTools: [
    { name: "Selenium WebDriver", level: 95 },
    { name: "Playwright", level: 90 },
    { name: "Cypress", level: 85 },
    { name: "Appium", level: 80 },
    { name: "RestAssured", level: 90 }
  ],
  programmingLanguages: [
    { name: "Java", level: 95 },
    { name: "C#", level: 90 },
    { name: "TypeScript", level: 88 },
    { name: "JavaScript", level: 85 },
    { name: "Python", level: 80 }
  ],
  frameworks: [
    { name: "TestNG", level: 95 },
    { name: "JUnit", level: 90 },
    { name: "NUnit", level: 90 },
    { name: "SpecFlow", level: 85 },
    { name: "Cucumber", level: 88 }
  ],
  cicd: [
    { name: "Jenkins", level: 92 },
    { name: "GitHub Actions", level: 88 },
    { name: "Azure DevOps", level: 85 },
    { name: "GitLab CI", level: 82 }
  ],
  testingTypes: [
    "UI Automation",
    "API Testing",
    "Regression Testing",
    "Smoke Testing",
    "Integration Testing",
    "End-to-End Testing",
    "Cross-Browser Testing",
    "Performance Testing"
  ],
  tools: [
    "Git/GitHub",
    "JIRA",
    "Postman",
    "Docker",
    "Maven",
    "Gradle",
    "Allure Reports",
    "ExtentReports"
  ]
};

export const projects = [
  {
    id: 1,
    title: "Enterprise E-commerce Automation Framework",
    description: "Designed and developed a comprehensive test automation framework for a leading e-commerce platform serving millions of users globally. The framework supports parallel execution, cross-browser testing, and generates detailed HTML reports.",
    technologies: ["Selenium", "Java", "TestNG", "Maven", "Jenkins"],
    role: "Lead Automation Engineer",
    responsibilities: [
      "Designed the framework architecture using Page Object Model",
      "Automated 1000+ test cases covering critical user journeys",
      "Integrated with Jenkins for continuous testing",
      "Reduced regression testing time from 5 days to 4 hours",
      "Mentored a team of 5 junior automation engineers"
    ],
    duration: "12 months",
    company: "Global E-commerce MNC",
    achievements: [
      "95% test coverage achieved",
      "Defect detection rate improved by 40%",
      "CI/CD pipeline integration reduced deployment time by 60%"
    ]
  },
  {
    id: 2,
    title: "Banking Application Test Automation",
    description: "Implemented end-to-end test automation for a core banking application with complex business logic. The solution includes UI automation, API testing, and security validation using modern tools and best practices.",
    technologies: ["Playwright", "TypeScript", "GitHub Actions", "RestAssured"],
    role: "Senior Automation Architect",
    responsibilities: [
      "Built automation suite using Playwright with TypeScript",
      "Implemented cross-browser testing (Chrome, Firefox, Safari, Edge)",
      "Automated API endpoints using RestAssured",
      "Created security and regression test suites",
      "Established coding standards and review processes"
    ],
    duration: "10 months",
    company: "Leading Banking Institution",
    achievements: [
      "800+ UI and API tests automated",
      "Zero production defects in last 6 months",
      "Cross-browser compatibility issues reduced by 85%"
    ]
  },
  {
    id: 3,
    title: "Healthcare Management System Automation",
    description: "Developed a robust automation framework for a healthcare management system handling sensitive patient data. Focus on accuracy, reliability, and compliance with healthcare regulations.",
    technologies: ["C#", "Selenium", "NUnit", "SpecFlow", "Azure DevOps"],
    role: "QA Lead",
    responsibilities: [
      "Created C# based Selenium automation framework",
      "Implemented BDD approach using SpecFlow",
      "Automated critical patient management workflows",
      "Integrated with Azure DevOps for CI/CD",
      "Ensured HIPAA compliance in test data management"
    ],
    duration: "14 months",
    company: "Healthcare Technology Provider",
    achievements: [
      "600+ BDD scenarios automated",
      "Compliance audit passed with zero findings",
      "Test execution time reduced by 70%"
    ]
  }
];

export const experience = [
  {
    id: 1,
    title: "Senior Automation Test Engineer",
    company: "Global Technology MNC",
    location: "Mumbai, India",
    duration: "2020 - Present",
    type: "Full-time",
    description: "Leading automation initiatives for enterprise-level applications serving global clients. Responsible for framework design, team mentorship, and quality strategy.",
    achievements: [
      "Led automation for 5+ enterprise projects",
      "Reduced overall testing costs by 45%",
      "Established center of excellence for test automation",
      "Mentored 15+ engineers in automation best practices"
    ]
  },
  {
    id: 2,
    title: "Automation Test Engineer",
    company: "Leading Financial Services Company",
    location: "Pune, India",
    duration: "2017 - 2020",
    type: "Full-time",
    description: "Designed and implemented automation frameworks for banking and financial applications. Worked closely with development teams to ensure quality throughout the SDLC.",
    achievements: [
      "Built Selenium-based framework from scratch",
      "Automated 500+ critical test scenarios",
      "Integrated automation with CI/CD pipeline",
      "Achieved 90% code coverage for critical modules"
    ]
  },
  {
    id: 3,
    title: "QA Engineer",
    company: "E-commerce Platform",
    location: "Bangalore, India",
    duration: "2015 - 2017",
    type: "Full-time",
    description: "Started journey in test automation, contributing to various automation projects. Gained expertise in multiple automation tools and technologies.",
    achievements: [
      "Transitioned from manual to automation testing",
      "Automated 200+ regression test cases",
      "Participated in framework enhancement initiatives",
      "Received 'Best Performer' award in 2016"
    ]
  },
  {
    id: 4,
    title: "Software Test Engineer",
    company: "IT Services Company",
    location: "Mumbai, India",
    duration: "2013 - 2015",
    type: "Full-time",
    description: "Beginning of professional career in software testing. Focused on manual testing, test case design, and quality assurance processes.",
    achievements: [
      "Executed 1000+ manual test cases",
      "Identified 200+ critical defects",
      "Created comprehensive test documentation",
      "Learned automation fundamentals"
    ]
  }
];

export const certifications = [
  {
    name: "ISTQB Advanced Test Automation Engineer",
    issuer: "ISTQB",
    year: "2021"
  },
  {
    name: "Certified Selenium Professional",
    issuer: "Selenium Academy",
    year: "2020"
  },
  {
    name: "Microsoft Certified: Azure DevOps Engineer Expert",
    issuer: "Microsoft",
    year: "2022"
  }
];

export const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Director of Engineering",
    company: "Global Tech Corp",
    feedback: "Ram's expertise in test automation has been instrumental in improving our product quality. His frameworks are robust, scalable, and have significantly reduced our testing cycle time."
  },
  {
    name: "Michael Chen",
    role: "Product Manager",
    company: "E-commerce Platform",
    feedback: "Working with Ram has been a great experience. His attention to detail and strategic approach to automation helped us achieve 99.9% uptime for our critical services."
  }
];
