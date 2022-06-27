<script setup>
import { storeToRefs } from 'pinia'
import { useCounterStore } from '@/stores/counter'
import { ref } from '@vue/reactivity'
import { get } from '../libs/request'
const counterStore = useCounterStore()
const { count } = storeToRefs(counterStore)
const onClick = () => {
  counterStore.increment()
}
defineProps({
  msg: String,
})
const size = ref(0)
const baseurl = import.meta.env.VITE_BaseUrl
const env = import.meta.env.VITE_NODE_ENV
const owner = import.meta.env.VITE_OWNER
const info = ref('')
const todayOnHistory = () => {
  get('/get', {
    param: owner,
  }).then((res) => {
    info.value = res.args.param
    console.log('res', res)
  })
}
todayOnHistory()
</script>

<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
  <a-radio-group v-model:value="size">
    <a-radio-button value="large">Large</a-radio-button>
    <a-radio-button value="default">Default</a-radio-button>
    <a-radio-button value="small">Small</a-radio-button>
  </a-radio-group>
  <div>count = {{ count }}</div>
  <a-button type="primary" primary @click="onClick">+</a-button>
  <hr />
  <h1>当前环境:{{ env }}</h1>
  <h1>baseURL:{{ baseurl }}</h1>
  <p>{{ info }}</p>
</template>

<style scoped lang="scss">
.gg {
  color: cyan;
}
</style>
