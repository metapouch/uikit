module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-flow', ['@babel/preset-react', { runtime: 'automatic' }]],
  plugins: ['styled-components']
};
