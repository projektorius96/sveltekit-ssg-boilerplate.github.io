module.exports = {
    // daisyUI based on tailwindcss which subsequently based upon postcss yields the following error..
    // - [postcss] Cannot read properties of undefined (reading 'config') – the issue register on vite
    // - @https://github.com/sanity-io/sanity/issues/3884
    plugins: [require('tailwindcss'), require('autoprefixer')],
  };
  