<template>
  <div class="view">
    <div v-if="hasUpdate == false" class="hub-grid">
      <div>
        <p>Willkommen in Helferlein, eine App um Bereiche der Produktion zu erleichtern. Neben einfachen Verlinkungen auf verschiedenste Projekte wie Google PageSpeed und Adobe Color CC gibt es zudem auch wertvolle SEO Tools wie den Wortzähler um deine Arbeit etwas zu erleichtern.</p>
        <p>Dieses Projekt ist in stetiger Entwicklung. Solltest du dir weitere Funktionen wünschen oder Fehler auftreten, kannst dich an der unter "Über diese App" verlinkten E-Mail-Adresse wenden.</p>
      </div>
      <img src="static/illustration_hub.svg" />
    </div>

    <UpdatePrompt :url="newVersionUrl" :version="newVersion" v-if="hasUpdate == true" />
  </div>
</template>

<script>
  import { remote } from 'electron';

  import UpdatePrompt from '@/components/UpdatePrompt/UpdatePrompt';

  export default {
    name: 'view-hub',
    components: {
      UpdatePrompt
    },
    data: function() {
      return {
        hasUpdate: false,
        newVersion: "",
        newVersionUrl: "",
      }
    },
    mounted: function() {
      this.checkForUpdates();
    },
    methods: {
      checkForUpdates: function() {
        var currentVersion = remote.app.getVersion();

        // Check GitHub for newest release
        fetch('https://api.github.com/repos/WebsmartDE/helferlein/releases/latest')
          .then(function(response) {
            return response.json();
          }).then(function(data) {
            if(currentVersion < data.tag_name) {

              this.newVersion = data.tag_name;
              this.newVersionUrl = data.assets[0].browser_download_url;

              this.hasUpdate = true;
            }
          }.bind(this));
      }
    }
  }
</script>

<style scoped>
.view {
  padding: 25px;
  display: grid;
  grid-gap: 25px;
}
p {
  margin: 0;
  line-height: 1.5;
  font-size: 14px;
  padding: 15px;
  background: var(--colorBoxBG);
  color: var(--colorBoxFont);
  box-shadow: 0px 4px 8px rgba(0,0,0,0.15);
  border-radius: 6px;
  margin-bottom: 15px;
  transition: 0.2s ease all;
}
.hub-grid {
  display: grid;
  grid-template-columns: 325px 1fr;
  grid-gap: 30px;
}
.hub-grid img {
  width: 80%;
  height: 80%;
  align-self: center;
  justify-self: center;
}
</style>
