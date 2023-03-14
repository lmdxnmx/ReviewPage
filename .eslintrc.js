module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        "no-use-before-define": ["off"],
      "max-lines-per-function": ["off"]
      },
    },
  ],
};
