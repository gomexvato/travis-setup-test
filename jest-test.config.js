module.exports = {
  displayName: 'jest:test',
  testEnvironment: 'node',
  testPathIgnorePatterns: [
    'bootstrap', 'mocks', 'docs'
  ],
  testMatch: [
    '<rootDir>/tests/**/*.js'
  ],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{js}'
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  }
}
