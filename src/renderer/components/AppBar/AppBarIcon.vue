<template>
  <router-link :to="{ name: route }">
    <div class="appbar-icon">
      <div class="tooltip">{{ tooltip }}</div>
      <i :class="'mdi mdi-' + icon"></i>
    </div>
  </router-link>
</template>

<script>
  export default {
    name: 'appbar-icon',
    components: {
    },
    props: ['icon', 'tooltip', 'route']
  }
</script>
