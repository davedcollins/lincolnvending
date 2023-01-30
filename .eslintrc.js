module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: 'standard',
  overrides: [
  ],
  ignorePatterns: [
    'node_modules/',
    'assets/'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
  },
  plugins: [
    'html'
  ],
  settings: {
    'html/indent': 'tab' // indentation is one tab at the beginning of the line.
  }
}
