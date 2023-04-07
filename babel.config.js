const babelConfig = {
  presets: ['next/babel'],
  plugins: [['styled-components', { ssr: true }]],
}

module.exports = babelConfig
