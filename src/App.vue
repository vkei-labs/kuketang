<script setup lang="ts">
import 'bootstrap';
import 'swiper/css';
import 'swiper/css/navigation';
import '@popperjs/core';
import './assets/main.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css';
import TitleRow from './components/TitleRow.vue'
import MainRow from './components/MainRow.vue'
import CopyRight from './components/CopyRight.vue'
import ContentRow from './components/ContentRow.vue'
</script>

<template>
  <TitleRow />
  <MainRow />
  <ContentRow />
  <CopyRight />
</template>
