/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
export const preset = 'ts-jest';
export const testEnvironment = 'node';
export const setupFilesAfterEnv = ['<rootDir>/jest.setup.js'];
export const moduleNameMapper = {
  '\\.(css)': 'identity-obj-proxy',
};
