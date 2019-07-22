module.exports = {
  automock: false,
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  testRegex: '.*\\.test.(ts|tsx)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFiles: ['<rootDir>/src/setupTests.ts'],
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"]
  // collectCoverage: true,
  // collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}']
}