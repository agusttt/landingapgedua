/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      // Adding new custom colors with name "yellowtheme and code #E5C643"
      colors: {
        yellowtheme: "#E5C643",
        graycustom: "#F4F6F5"
        // Adding new custom colors with name "yellowtheme and code #E5C643"
      },
      container: {
        center: true,
      }
    },

    // jika melakukan property custom misal colors, container dll apabila kita tulis diluar extends maka sugestion name tailwindnya hanya muncul yg kita tulis diluar extends, sementara nama sugestion dr talwindnya ga akan muncul

    // jika melakukan property custom misal colors, container dll apabila kita tulis diluar extends maka sugestion name tailwindnya hanya muncul yg kita tulis diluar extends, sementara nama sugestion dr talwindnya ga akan muncul
  },
  plugins: [],
}
