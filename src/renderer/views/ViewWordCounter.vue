<template>
  <div class="view">
    <WordCounter type="title" />
    <WordCounter type="tags" />
    <WordCounter type="description" />
    </div>
</template>

<script>
  import WordCounter from '@/components/WordCounter/WordCounter'

  export default {
    name: 'view-wordcounter',
    components: {
      WordCounter
    }
  }
</script>

<style scoped>
.view {
  padding: 25px;
  display: grid;
  grid-gap: 25px;
}
</style>
