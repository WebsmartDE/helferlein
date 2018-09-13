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
@import url('https://cdn.materialdesignicons.com/2.5.94/css/materialdesignicons.min.css');

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
  grid-template-rows: auto 1fr;
}
main {
  height: 100%;
  background: #f1f1f1;
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
</style>
