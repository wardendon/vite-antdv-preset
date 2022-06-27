import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(10)
  const increment = () => {
    count.value++
  }
  return { count, increment }
})

// Getters, 在Pinia如同computed一样
