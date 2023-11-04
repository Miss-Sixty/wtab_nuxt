import type { Config } from 'tailwindcss'

function withOpacityValue(variable: string) {
  return `rgba(var(${variable}),1)`
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
    },
  },
  plugins: [],
  content: [],
}
