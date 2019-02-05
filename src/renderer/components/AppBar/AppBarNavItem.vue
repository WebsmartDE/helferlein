<template>
  <router-link :to="{ name: route }">
    <div class="appbar-nav-item" :title="text">
      <div class="icon">
        <i :class="'mdi mdi-' + icon"></i>
      </div>
      <div class="text" v-if="text">
        {{ text }}
      </div>
    </div>
  </router-link>
</template>

<script>
  export default {
    name: 'appbar-nav-item',
    components: {
    },
    props: ['icon', 'route', 'text']
  }
</script>

<style scoped>
  .appbar-nav-item {
    display: flex;
    color: var(--colorAppBarNavColor);
    justify-content: center;
    align-items: center;
    padding: 5px 10px;
    height: 40px;
    border-bottom: 2px solid transparent;
  }
  .appbar-nav-item i {
    opacity: 0.5;
    font-size: 24px;
  }
  .appbar-nav-item .icon {
    width: 28px;
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.15s ease all;
  }
  .appbar-nav-item .text {
    width: 0px;
    overflow: hidden;
    font-weight: bold;
    text-transform: uppercase;
    margin: 5px 0px;
    font-size: 14px;
    transition: 0.15s ease all;
  }
  .router-link-active .appbar-nav-item {
    border-color: var(--colorPrimary);
    color: var(--colorPrimary);
  }
  .router-link-active .appbar-nav-item i {
    opacity: 1;
  }
  .router-link-active .appbar-nav-item .text {
    width: auto;
    margin: 5px;
  }
</style>
