<template>
    <div className="h-[5%]"><span>{{ currentPageTitle }}</span></div>
</template>

<script setup lang="ts">
import {computed} from 'vue'
import { useRoute,useRouter } from 'vue-router'
const route = useRoute()
const currentPageTitle = computed(() => route.meta.title || '')
</script>

<style scoped></style>