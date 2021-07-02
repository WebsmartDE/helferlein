<template>
  <div class="appbar-icon" @click="clickToggle()">
    <div class="tooltip">{{ tooltip }}</div>
    <i :class="'mdi mdi-' + icon"></i>
    <div class="activeIndicator" :class="{ isActive: isOnTop == true }"></div>
  </div>
</template>

<script>
  import { remote } from 'electron';

  export default {
    name: 'appbar-icon',
    data: function() {
      return {
        isOnTop: false
      }
    },
    mounted: function() {
      if(localStorage.isOnTop == "true") {
        this.isOnTop = true;
      } else {
        this.isOnTop = false;
      }
      this.updateSetting();
    },
    methods: {
      clickToggle: function() {
        this.isOnTop = !this.isOnTop;
        localStorage.isOnTop = this.isOnTop;
        this.updateSetting();
      },
      updateSetting: function() {
        remote.getCurrentWindow().setAlwaysOnTop( this.isOnTop );
      }
    },
    props: ['icon', 'tooltip', 'method']
  }
</script>
