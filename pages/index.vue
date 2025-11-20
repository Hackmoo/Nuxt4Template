<template>
  <div class="text-red-900">
    <Header />
    <Test @change="testEmit"/>
    {{ string }}
    {{ testStore.goods }}
  </div>
</template>

<script setup lang="ts">
import Header from '~/pages/header.vue';
import Test from '~/components/test.vue';
import { useTestStore } from '~/stores/testStore';
const string = ref<string>('')
const testStore = useTestStore()
function testEmit(el: string) {
  string.value = el
}

onMounted(() => {
  testStore.getGoods()
})
</script>

<style>

</style>