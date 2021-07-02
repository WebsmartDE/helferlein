<template>
  <div class="view">
    <div class="viewLeft">
      <div class="item">
        <div class="header"><span>VERSION</span></div>
        <div class="box">
          <div class="versionNumber">2.6.2</div>
          <div class="versionCode">S2E6 - Der Aufstand</div>
        </div>
      </div>
      <div class="item">
        <div class="header"><span>CHANGELOG</span></div>
        <div class="box">
          <ul>
            <li>MXToolbox ist nun in der Navigation zu finden!</li>
			<li>Anpassungen für den Dark-Mode</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="viewRight">
      <div class="item">
        <div class="header"><span>ENTWICKLUNG &amp; GESTALTUNG</span></div>
        <div class="box">
          <div class="textBig">Laura Heimann</div>
          <div>
            <a href="mailto:hello@laura.media" target="_blank">E-Mail</a>
            <a href="https://laura.media" target="_blank">Webseite</a>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="header"><span>GENUTZTE TOOLS</span></div>
        <div class="box">
          <ul>
            <li>NodeJS</li>
            <li>Electron</li>
            <li>WebPack</li>
            <li>VueJS</li>
            <li>VueRouter</li>
            <li>MaterialDesignIcons</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'view-about',
    components: {}
  }
</script>

<style scoped>
.view {
  padding: 25px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 25px;
  align-items: flex-start;
}
.view > div {
  display: grid;
  grid-gap: 25px;
}
.textBig {
  font-size: 26px;
  line-height: 1;
  font-weight: 300;
}
.box a {
  background: var(--colorPrimary);
  border: 2px solid transparent;
  color: var(--colorPrimaryText);
  text-transform: uppercase;
  font-weight: 600;
  font-size: 12px;
  display: inline-block;
  padding: 5px 18px;
  border-radius: 6px;
  transition: 0.15s ease all;
}
.box a:hover {
  background: transparent;
  border-color: var(--colorPrimary);
  color: var(--colorPrimary);
}
.box a:active {
  background: var(--colorPrimary);
  color: var(--colorPrimaryText);
}
.box ul {
  padding: 0px 15px;
  margin: 0;
  line-height: 1.5;
}
.versionNumber {
  font-size: 36px;
  font-weight: 300;
  line-height: 1;
}
.versionCode {
  line-height: 1;
  font-weight: bold;
  margin-top: -5px;
  text-transform: uppercase;
  color: #f9a51b;
}
</style>
