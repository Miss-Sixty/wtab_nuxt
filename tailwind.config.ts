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
          default: withOpacityValue('--color-primary'),
          1: withOpacityValue('--color-primary-1'),
          2: withOpacityValue('--color-primary-2'),
          3: withOpacityValue('--color-primary-3'),
          4: withOpacityValue('--color-primary-4'),
          5: withOpacityValue('--color-primary-5'),
          dark: withOpacityValue('--color-primary-dark'),
        },
        danger: {
          1: '#f56c6c',
          2: '#FFEBEB'
        }
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
