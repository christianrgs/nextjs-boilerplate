module.exports = {
  // Type check TypeScript files
  '**/*.(ts|tsx)': () => 'yarn tsc --noEmit',

  // Lint then format TypeScript and JavaScript files
  '**/*.(ts|tsx|js)': filenames => [
    `yarn eslint --fix ${filenames.join(' ')}`,
    `yarn prettier --write ${filenames.join(' ')}`
  ],

  // Format MarkDown, YAML and JSON
  '**/*.(md|mdx|json|yml|yaml)': filenames => `yarn prettier --write ${filenames.join(' ')}`,

  // Test files
  'src/**/*.(ts|tsx|js)': () => 'yarn test --bail --findRelatedTests'
}
