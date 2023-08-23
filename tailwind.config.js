/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      sans: ['Public Sans'],
      serif: ['sans-serif']
    },
    colors: {
      DarkBlue: 'hsl(233, 26%, 24%)',
      LimeGreen: 'hsl(136, 65%, 51%)',
      BrightCyan: 'hsl(192, 70%, 51%)',
      GrayishBlue: 'hsl(233, 8%, 62%)',
      LightGrayish: 'hsl(220, 16%, 96%)',
      VeryLightGrayish: 'hsl(0, 0%, 98%)',
      White: 'hsl(0, 0%, 100%)'
    },
    extend: {
      backgroundImage: {
        patternBg: "url('./src/assets/images/bg-intro-desktop.svg')",
        mobilePatternBg: "url('./src/assets/images/bg-intro-mobile.svg')",
        mockupsBg: "url('./src/assets/images/image-mockups.png')",
        currencyImg: "url('./src/assets/images/image-currency.jpg')",
        restaurantImg: "url('./src/assets/images/image-restaurant.jpg')",
        planeImg: "url('./src/assets/images/image-plane.jpg')",
        confettiImg: "url('./src/assets/images/image-confetti.jpg')"
      }
    }
  },
  plugins: []
}
