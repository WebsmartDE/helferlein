<template>
  <div id="app">
    <AppBar></AppBar>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
  import AppBar from '@/components/AppBar/AppBar'

  export default {
    name: 'helferlein',
    components: {
      AppBar
    }
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Concert+One|Oxygen:300,400,700|Raleway:700');
@import url('https://cdn.materialdesignicons.com/5.4.55/css/materialdesignicons.min.css');

:root {
  --colorAppBarBG: #fff;
  --colorAppBarBrand: #000;
  --colorAppBarNavColor: #000;

  --colorAppBarTooltipBG: #515151;
  --colorAppBarTooltipText: #fff;

  --colorAppBarToggleOff: #bbb;
  --colorAppBarToggleOn: #4caf50;

  --colorPrimary: #ffa500;
  --colorPrimaryText: #fff;

  --colorBase: #f1f1f1;
  --colorBoxBG: #fff;
  --colorBoxFont: #000;

  --colorHeaderText: #000;
  --colorShade: rgba(0,0,0,0.05);
  --colorInputOutlineGrey: #ddd;

  --colorSuccess: rgb(139, 195, 74);
  --colorWarning: rgb(234, 172, 0);
  --colorDanger: rgb(233, 30, 54);
}
:root[darkmode] {
  --colorAppBarBG: #3d3d3d;
  --colorAppBarBrand: #fff;
  --colorAppBarNavColor: #fff;

  --colorBase: #2D2D2D;
  --colorBoxBG: #3d3d3d;
  --colorBoxFont: #bfbfbf;

  --colorHeaderText: #fff;
  --colorShade: rgba(0,0,0,0.125);
  --colorInputOutlineGrey: #7d7d7d;
}

html {
  box-sizing: border-box;
  height: 100vh;
}
*, *:before, *:after {
  box-sizing: inherit;
}
body {
  margin: 0;
  width: 100%;
  height: 100%;
  font-family: 'Oxygen', sans-serif;
}
#app {
  width: 100%;
  height: 100%;
  display: grid;
  overflow: hidden;
  grid-template-rows: auto 1fr;
}
main {
  transition: 0.2s ease all;
  background: var(--colorBase);
  overflow-y: auto;
  overflow-x: hidden;
}
.view {
  min-height: 100%;
}
a {
  text-decoration: none;
  color: inherit;
}

.appbar-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 38px;
  color: var(--colorPrimary);
  position: relative;
  transition: 0.2s ease all;
}
.appbar-icon .activeIndicator {
  background: var(--colorAppBarToggleOff);
  width: 12px;
  height: 12px;
  position: absolute;
  bottom: 8px;
  right: 3px;
  border: 2px solid var(--colorAppBarBG);
  border-radius: 50%;
  transition: 0.2s ease all;
}
.appbar-icon .activeIndicator.isActive {
  background: var(--colorAppBarToggleOn);
}
.appbar-icon .tooltip {
  position: absolute;
  width: 160px;
  margin-left: -110px;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: bold;
  transition: 0.2s ease all;
  background: var(--colorAppBarTooltipBG);
  color: var(--colorAppBarTooltipText);
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

  border-left:10px solid var(--colorAppBarTooltipBG);
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
  color: var(--colorPrimary);
}
.header {
  overflow: hidden;
  position: relative;
  margin-top: 15px;
  padding-left: 30px;
  font-weight: 700;
  font-family: 'Raleway', sans-serif;
  font-size: 14px;
  letter-spacing: 0.2em;
  margin-bottom: 10px;
}
.header:after {
  content: "";
  height: 3px;
  margin-top: 6px;
  background: var(--colorPrimary);
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
}
.header span {
  position: relative;
  z-index: 2;
  transition: 0.2s ease all;
  background: var(--colorBase);
  color: var(--colorHeaderText);
  padding: 0px 15px;
}
.header button {
  position: absolute;
  z-index: 2;
  right: 30px;
  font-size: 10px;
  transition: 0.2s ease all;
  background: var(--colorPrimary);
  color: var(--colorPrimaryText);
  font-weight: bold;
  padding: 5px 15px;
  border-left: 15px solid var(--colorBase);
  border-right: 15px solid var(--colorBase);
  top: -4px;
  transition: 0.15s ease all;
}
.header button:hover {
  background: var(--colorPrimaryText);
  color: var(--colorPrimary);
  cursor: pointer;
}
.header button:active {
  background: var(--colorPrimary);
  color: var(--colorPrimaryText);
}
.header button:focus {
  outline: 0;
}
.box {
  transition: 0.2s ease all;
  background: var(--colorBoxBG);
  color: var(--colorBoxFont);
  box-shadow: 0px 4px 8px rgba(0,0,0,0.15);
  border-radius: 6px;
  padding: 25px;
  display: grid;
  align-items: flex-start;
  grid-gap: 15px;
}
.box input, .box textarea {
  transition: 0.2s ease all;
  border: 2px solid var(--colorInputOutlineGrey);
  background: transparent;
  color: var(--colorBoxFont);
  padding: 15px;
  font-family: 'Oxygen', sans-serif;
  font-size: 14px;
  border-radius: 6px;
  transition: 0.15s ease all;
}
.box input:focus, .box textarea:focus {
  border-color: var(--colorPrimary);
  outline: 0;
}
</style>
