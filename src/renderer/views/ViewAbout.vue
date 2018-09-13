<template>
  <div class="view">
    <div class="viewLeft">
      <div class="item">
        <div class="header"><span>VERSION</span></div>
        <div class="box">
          <div class="versionNumber">2.1.4</div>
          <div class="versionCode">Luminous Path</div>
        </div>
      </div>
      <div class="item">
        <div class="header"><span>CHANGELOG</span></div>
        <div class="box">
          <ul>
            <li>Automatisches Update</li>
            <li>Beschreibung und Keywords getauscht</li>
            <li>Löschen Button eingefügt</li>
            <li>Wörter werden nun richtiger gezählt</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="viewRight">
      <div class="item">
        <div class="header"><span>ENTWICKLUNG &amp; GESTALTUNG</span></div>
        <div class="box">
          <div class="textBig">Andreas Heimann</div>
          <div>
            <a href="mailto:andreas.heimann@websmart.de" target="_blank">E-Mail</a>
            <a href="https://andreas-heimann.com" target="_blank">Webseite</a>
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
  background: #f9a51b;
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
}
.header span {
  position: relative;
  z-index: 2;
  background: #f1f1f1;
  padding: 0px 15px;
}
.textBig {
  font-size: 26px;
  line-height: 1;
  font-weight: 300;
}
.box a {
  background: #f9a51b;
  border: 2px solid transparent;
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 12px;
  display: inline-block;
  padding: 5px 18px;
  border-radius: 6px;
  transition: 0.15s ease all;
}
.box a:hover {
  background: #fff;
  border-color: #f9a51b;
  color: #f9a51b;
}
.box a:active {
  background: #f1f1f1;
}
.box {
  background: #fff;
  box-shadow: 0px 4px 8px rgba(0,0,0,0.15);
  border-radius: 6px;
  padding: 25px;
  display: grid;
  align-items: flex-start;
  grid-gap: 15px;
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
