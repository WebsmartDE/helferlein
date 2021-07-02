<template>
  <div class="section-updateprompt">
    <div class="version-body">
      <div class="header">
        <i class="mdi mdi-cellphone-arrow-down"></i>
        <div class="version">{{ version }}</div>
      </div>
      <p>Ein neues Update ist verfügbar! Lade es dir jetzt herunter, um neue Funktionen und Fehlerkorrekturen zu erhalten.</p>
      <button @click="openUrl()">Version {{ version }} herunterladen</button>
    </div>
  </div>
</template>

<script>
  import openurl from 'openurl';

  export default {
    name: 'updateprompt-updateprompt',
    props: ['url', 'version'],
    components: {},
    methods: {
      openUrl: function() {
        openurl.open( this.url );
      },
    },
    mounted: function() {
      let updateNotification = new Notification('Update verfügbar', {
        body: 'Ein Update ist verfügbar, klicke hier um es herunter zu laden!'
      });

      updateNotification.onclick = () => {
        this.openUrl();
      }
    }
  }
</script>

<style scoped>
  .section-updateprompt {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    cursor: default;
	color: var(--colorPrimaryText);
  }
  .version-body {
    max-width: 420px;
  }
  .version-body .header {
    display: flex;
    justify-content: center;
  }
  .version-body .header i {
    font-size: 48px;
    display: block;
  }
  .version-body .header .version {
    background: var(--colorPrimary);
    color: var(--colorPrimaryText);
    font-size: 30px;
    font-weight: bold;
    padding: 0px 30px;
    margin: 0px 12px;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  .version-body {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .version-body .header .version:before {
    content: "";
    position: absolute;
    left: -7px;
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;

    border-right:10px solid var(--colorPrimary);
  }
  .version-body .header:after {
	display: none;
  }
  .version-body p {
    font-size: 16px;
    text-align: center;
    opacity: 0.6;
    line-height: 1.6;
    margin: 30px 0px;
  }
  .version-body button {
    background: var(--colorPrimary);
    border: 2px solid var(--colorPrimary);
    color: var(--colorPrimaryText);
    font-size: 14px;
    text-transform: uppercase;
    font-weight: bold;
    padding: 15px 0px;
    border-radius: 4px;
    transition: 0.15s ease all;
  }
  .version-body button:hover {
    cursor: pointer;
    background: transparent;
    color: var(--colorPrimary);
  }
  .version-body button:active {
    border: 2px solid var(--colorPrimary);
    color: var(--colorPrimaryText);
  }
  .version-body button:focus {
    outline: 0;
  }
</style>
