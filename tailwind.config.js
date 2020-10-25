module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ['./src/**/*.html', './src/**/*.ts'],
  theme: {
    extend: {
      colors: {
        primary: {
          lighter: '#FDDFC8',
          default: '#F48024'
        },
        gold: {
          lighter: '#ffcc0159',
          default: '#FFCC01'
        }
      }
    }
  },
  variants: {},
  plugins: [],
}
