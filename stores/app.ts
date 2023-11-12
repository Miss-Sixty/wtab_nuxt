import { defineStore } from 'pinia'

export default defineStore('storeApp', () => {
  const baseSetting = ref(false)


  return { baseSetting }
})
