<script setup lang="ts">

import 'swiper/css';
import 'swiper/css/navigation';
import './assets/main.css'
import '@popperjs/core';
import 'bootstrap';
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
