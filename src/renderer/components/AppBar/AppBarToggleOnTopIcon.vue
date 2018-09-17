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

<style scoped>
  .appbar-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 38px;
    color: #f9a51b;
    position: relative;
    transition: 0.15s ease all;
  }
  .appbar-icon .activeIndicator {
    background: #bbb;
    width: 12px;
    height: 12px;
    position: absolute;
    bottom: 8px;
    right: 3px;
    border: 2px solid #fff;
    border-radius: 50%;
    transition: 0.2s ease background;
  }
  .appbar-icon .activeIndicator.isActive {
    background: #4caf50;
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
