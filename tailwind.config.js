/** @type {import('tailwindcss').Config} */
module.exports = {
  // ...existing config...
  theme: {
    extend: {
      fontFamily: {
        'eras': ['Eras Light ITC', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif'],
        'raleway': ['Raleway', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      // ...other existing theme extensions...
    },
  },
  // ...rest of config...
}