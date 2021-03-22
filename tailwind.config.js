/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 **
 ** DEFAULTS: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js

 ** Get shades: https://javisperez.github.io/tailwindcolorshades/#/ 
 **
 ** TODO: Palette https://coolors.co/123478-ff645c-ffffff-24cf73-fbe74b-166bb6-cc0a00
 **
 **   Colors: navy-500, pink-500, green-500, yellow-500, orange-500, green-500
 */

// const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      colors: {
        // primary: defaultTheme.colors.green,
        primarygreen: {
          50: '#f8fcfc',
          100: '#f1f9f9',
          200: '#ddf1ef',
          300: '#c8e9e5',
          400: '#9ed8d2',
          500: '#75c7be',
          600: '#69b3ab',
          700: '#58958f',
          800: '#467772',
          900: '#39625d',
        },
        primaryblue: {
          50: '#f8fbfe',
          100: '#f1f8fd',
          200: '#dbedf9',
          300: '#c5e1f5',
          400: '#9acbee',
          500: '#6eb5e7',
          600: '#63a3d0',
          700: '#5388ad',
          800: '#426d8b',
          900: '#365971',
        },
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/forms')],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
      // TypeScript
      'plugins/**/*.ts',
      'nuxt.config.ts',
    ],
  },
}
