// module.exports = {
//   root: true,
//   env: { browser: true, es2020: true },
//   extends: [
//     "eslint:recommended",
//     "plugin:react/recommended",
//     "plugin:react/jsx-runtime",
//     "plugin:react-hooks/recommended",
//   ],
//   ignorePatterns: ["dist", ".eslintrc.cjs"],
//   env: { node: true },
//   parserOptions: { ecmaVersion: "latest", sourceType: "module" },
//   settings: { react: { version: "18.2" } },
//   plugins: ["react-refresh"],
//   rules: {
//     "react-refresh/only-export-components": [
//       "warn",
//       { allowConstantExport: true },
//     ],
//     "no-unused-vars": "warn",
//     "react/prop-types": "off",
//   },
//   parserOptions: {
//     ecmaVersion: 9,
//     sourceType: "module",
//     ecmaFeatures: {
//       jsx: true,
//       modules: true,
//     },
//   },
//   env: {
//     browser: true,
//     es6: true,
//   },
//   extends: "eslint:recommended",
//   parser: "babel-eslint",
// };
module.exports = {
    root: true,
    env: {
      browser: true,
      es2020: true,
      node: true, // Combined the two "env" properties into one
    },
    extends: [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:react/jsx-runtime",
      "plugin:react-hooks/recommended",
    ],
    ignorePatterns: ["dist", ".eslintrc.cjs"],
    parserOptions: {
      ecmaVersion: 2022, // Updated to a specific version
      sourceType: "module",
      ecmaFeatures: {
        jsx: true,
      },
      parser: "babel-eslint", // Moved to the correct location
    },
    settings: {
      react: {
        version: "18.2",
      },
    },
    plugins: ["react-refresh"],
    rules: {
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "no-unused-vars": "warn",
      "react/prop-types": "off",
    },
  };
  