<template>
  <header>
    <div class="header-main">
      <div class="header-title">
        <span>Helferlein</span>
        <div class="version">v2.2.0</div>
      </div>

      <aside>
        <AppBarIcon icon="information" tooltip="Über diese App" route="view-about" />
      </aside>
    </div>
    <nav>
      <AppBarNavItem icon="home" route="view-hub" text="Hub" />
      <AppBarNavItem icon="tag" route="view-wordcounter" text="Wortzähler" />
      <AppBarNavItem icon="speedometer" route="view-googlepagespeed" text="Google PageSpeed" />
      <AppBarNavItem icon="message-text" route="view-loremipsum" text="LoremIpsum Generator" />
      <AppBarNavItem icon="palette" route="view-adobecolorcc" text="Adobe Color CC" />
    </nav>
  </header>
</template>

<script>
  import AppBarIcon from '@/components/AppBar/AppBarIcon';
  import AppBarNavItem from '@/components/AppBar/AppBarNavItem';

  export default {
    name: 'appbar-appbar',
    components: {
      AppBarIcon,
      AppBarNavItem
    }
  }
</script>

<style scoped>
  header {
    background: #fff;
    box-shadow: 0px 4px 8px rgba(0,0,0,0.2);
    position: relative;
    z-index: 100;
  }
  .header-main {
    display: grid;
    padding: 5px 25px;
    grid-template-columns: 1fr auto;
    grid-gap: 15px;
  }
  .header-main .header-title {
    padding: 10px 0px;
    display: flex;
  }
  .header-main .header-title span {
    font-size: 22px;
    font-family: 'Concert One', cursive;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 0.05em;
  }
  .header-main .header-title .version {
    background: #f9a51b;
    color: #fff;
    font-size: 12px;
    font-weight: bold;
    padding: 0px 15px;
    margin: 0px 12px;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  .header-main .header-title .version:before {
    content: "";
    position: absolute;
    left: -7px;
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;

    border-right:10px solid #f9a51b;
  }
  .header-main aside {
    display: grid;
    grid-auto-flow: column;
    grid-gap: 5px;
  }
  .header-main aside * {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  nav {
    display: flex;
    padding: 0px 25px;
  }
</style>
