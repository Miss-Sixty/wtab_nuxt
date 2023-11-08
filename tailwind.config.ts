import type { Config } from 'tailwindcss'

function withOpacityValue(variable: string) {
  return `rgb(var(${variable}))`
}
// Default are on https://tailwindcss.nuxtjs.org/tailwind/config#default-configuration
export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        base: {
          extralight: withOpacityValue('--color-primary-extralight'),
          light: withOpacityValue('--color-primary-light'),
          medium: withOpacityValue('--color-primary-medium'),
          default: withOpacityValue('--color-primary'),
          dark: withOpacityValue('--color-primary-dark'),
        },
      },
      keyframes: {
        pulseIn: {
          from: {
            transform: 'scale(0.3)',
            opacity: '0'
          },
          '50%': {
            transform: 'scale(1.03)',
            opacity: '1'
          },
          to: {
            transform: 'scale(1)'
          }
        },
        pulseOut: {
          to: {
            transform: ' scale(0.3)',
            opacity: '0'
          }
        }
      },
      animation: {
        'zoom-in': 'pulseIn 0.2s',
        'zoom-out': 'pulseOut 0.2s'
      },
      screens: {
        tablet: '600px'
      }
    },
  },
  plugins: [],
  content: [],
}
