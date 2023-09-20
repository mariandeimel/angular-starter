/** @type {import("prettier").Config} */
module.exports = {
  tabWidth: 2,
  useTabs: false,
  singleQuote: true,
  semi: false,
  bracketSpacing: true,
  arrowParens: 'avoid',
  trailingComma: 'es5',
  bracketSameLine: true,
  printWidth: 80,
  endOfLine: 'auto',
  plugins: ['prettier-plugin-tailwindcss'],
}
