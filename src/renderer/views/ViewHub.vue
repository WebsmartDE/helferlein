<template>
  <div class="view">
    <!-- <p>Dies ist Helferlein (früher Helferlein Tool), eine App um Bereiche der Produktion zu erleichtern. Neben einfachen Verlinkungen auf verschiedenste Projekte wie Google PageSpeed und Adobe Color CC gibt es zudem auch wertvolle SEO Tools wie den Wortzähler um deine Arbeit etwas zu erleichtern.</p>
    <p>Dieses Projekt ist in stetiger Entwicklung. Solltest du dir weitere Funktionen wünschen oder Fehler auftreten, kannst dich an der unter "Über diese App" verlinkten E-Mail-Adresse wenden.</p> -->

    <UpdatePrompt url="http://google.de" version="2.1.1" />
  </div>
</template>

<script>
  import UpdatePrompt from '@/components/UpdatePrompt/UpdatePrompt';

  export default {
    name: 'view-hub',
    components: {
      UpdatePrompt
    },
    methods: {
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
  font-size: 16px;
  padding: 15px;
  background: #fff;
  box-shadow: 0px 4px 8px rgba(0,0,0,0.15);
  border-radius: 6px;
}
</style>
