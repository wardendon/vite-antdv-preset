// import { ref } from 'vue'
import { defineStore } from 'pinia'
import { setItem, getItem } from '@/libs/util.js'

const TOKEN = 'token'

export const useUserStore = defineStore('user', () => {
  let token = getItem(TOKEN) || ''

  const setToken = (tok) => {
    token = tok
    setItem(TOKEN, token)
  }
  return { token, setToken }
})
