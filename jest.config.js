module.exports = {
    coverageDirectory: 'coverage',
    globals: {
        'ts-jest': {
            tsConfig: {
                module: 'commonjs',
                paths: {
                    '@apestaartje/string/*': [
                        'src/*',
                    ],
                },
            },
        },
    },
    moduleNameMapper: {
        '^@apestaartje/string/(.*)$': '<rootDir>/src/$1',
    },
    preset: 'ts-jest',
};
