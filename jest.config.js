const nextJest = require('next/jest')

const createJestConfig = nextJest({ dir: '.'})

const  customJestConfig= {
    testEnvironment: 'jsdom',
    clearMocks: true,
    moduleDirectories: ['node_modules', 'src'],
    setupFilesAfterEnv: ['<rootDir>/setupTest.ts']
}

module.exports  = createJestConfig(customJestConfig)