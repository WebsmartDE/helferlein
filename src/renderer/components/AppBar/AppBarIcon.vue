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

<style scoped>
  .appbar-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 38px;
    color: #f9a51b;
    transition: 0.15s ease all;
  }
  .appbar-icon .tooltip {
    position: absolute;
    width: 160px;
    margin-left: -110px;
    font-size: 12px;
    text-transform: uppercase;
    font-weight: bold;
    background: #515151;
    color: #fff;
    padding: 8px 15px;
    border-radius: 6px;
    display: none;
  }
  .appbar-icon:hover .tooltip {
    display: block;
  }
  .appbar-icon .tooltip:before {
    content: "";
    position: absolute;
    right: -7px;
    top: 6px;
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;

    border-left:10px solid #515151;
  }
  .appbar-icon i {
    font-size: 24px;
  }
  .appbar-icon:hover i {
    opacity: 0.6;
    cursor: pointer;
  }
  .appbar-icon:active i {
    opacity: 1;
    color: #c17a05;
  }
</style>
