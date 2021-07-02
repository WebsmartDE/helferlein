<template>
  <div class="section-wordcounter">
    <div v-if="type == 'title'">
      <div class="header">
        <span><i class="mdi mdi-textbox"></i> TITEL</span>
        <button @click="clear();">LÖSCHEN</button>
      </div>

      <div class="box">
        <input type="text" v-model="counterText" v-on:input="count()" />
        <div class="counterDetails">
          <div v-if="counterLengthRating == -1" class="counterLengthDetail counterLengthAmount--notEnough">NICHT GENUG ZEICHEN</div>
          <div v-if="counterLengthRating == 0" class="counterLengthDetail counterLengthAmount--perfect">GENUG ZEICHEN</div>
          <div v-if="counterLengthRating == 1" class="counterLengthDetail counterLengthAmount--tooMany">ZU VIELE ZEICHEN</div>
          <div class="counterLengthDetail">{{ counterLength }} ({{ counterLengthTrue }} echte) Zeichen</div>
          <div class="counterLengthDetail">Noch {{ counterLengthLeft}} von {{ counterLengthMax }} verbleiben</div>
        </div>
      </div>
    </div>
    <div v-if="type == 'description'">
      <div class="header">
        <span><i class="mdi mdi-textbox"></i> BESCHREIBUNG</span>
        <button @click="clear();">LÖSCHEN</button>
      </div>

      <div class="box">
        <textarea v-model="counterText" v-on:input="count()"></textarea>
        <div class="counterDetails">
          <div v-if="counterLengthRating == -1" class="counterLengthDetail counterLengthAmount--notEnough">NICHT GENUG ZEICHEN</div>
          <div v-if="counterLengthRating == 0" class="counterLengthDetail counterLengthAmount--perfect">GENUG ZEICHEN</div>
          <div v-if="counterLengthRating == 1" class="counterLengthDetail counterLengthAmount--tooMany">ZU VIELE ZEICHEN</div>
          <div class="counterLengthDetail">{{ counterLength }} ({{ counterLengthTrue }} echte) Zeichen</div>
          <div class="counterLengthDetail">Noch {{ counterLengthLeft}} von {{ counterLengthMax }} verbleiben</div>
        </div>
      </div>
    </div>
    <div v-if="type == 'tags'">
      <div class="header">
        <span><i class="mdi mdi-textbox"></i> KEYWORDS</span>
        <button @click="clear();">LÖSCHEN</button>
      </div>

      <div class="box">
        <input type="text" v-model="counterText" v-on:input="count()" />
        <div class="counterDetails">
          <div v-if="counterLengthRating == -1" class="counterLengthDetail counterLengthAmount--notEnough">NICHT GENUG ZEICHEN</div>
          <div v-if="counterLengthRating == 0" class="counterLengthDetail counterLengthAmount--perfect">GENUG ZEICHEN</div>
          <div v-if="counterLengthRating == 1" class="counterLengthDetail counterLengthAmount--tooMany">ZU VIELE ZEICHEN</div>
          <div class="counterLengthDetail">{{ counterLength }} ({{ counterLengthTrue }} echte) Zeichen</div>
          <div class="counterLengthDetail">Noch {{ counterLengthLeft}} von {{ counterLengthMax }} verbleiben</div>
        </div>
        <div class="counterDetails">
          <div v-if="counterAmountRating == -1" class="counterLengthDetail counterLengthAmount--notEnough">NICHT GENUG KEYWORDS</div>
          <div v-if="counterAmountRating == 0" class="counterLengthDetail counterLengthAmount--perfect">GENUG KEYWORDS</div>
          <div v-if="counterAmountRating == 1" class="counterLengthDetail counterLengthAmount--tooMany">ZU VIELE KEYWORDS</div>
          <div class="counterLengthDetail">{{ counterAmount }} Keywords</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'wordcounter-wordcounter',
    props: ['type'],
    components: {},
    mounted: function() {
      switch (this.type) {
        case 'title':
          this.counterLengthMin = 10;
          this.counterLengthMax = 70;
          break;
        case 'description':
          this.counterLengthMin = 50;
          this.counterLengthMax = 150;
          break;
        case 'tags':
          this.counterLengthMin = 0;
          this.counterLengthMax = 250;
          this.counterAmountMin = 2;
          this.counterAmountMax = 10;
          break;
      }

      this.count();
    },
    data: function() {
      return {
        counterText: "",
        counterLength: 0,
        counterLengthTrue: 0,
        counterLengthLeft: 0,
        counterLengthMin: 0,
        counterLengthMax: 0,
        counterLengthRating: 0,
        counterAmount: 0,
        counterAmountRating: 0,
        counterAmountMin: 0,
        counterAmountMax: 0,
      }
    },
    methods: {
      count: function(event) {
        this.counterLength = this.counterText.length;
        this.counterLengthTrue = this.trueLength( this.counterText ).length;

        this.counterLengthLeft = this.counterLengthMax - this.counterLengthTrue;
        if(this.counterLengthTrue <= this.counterLengthMin - 1) { this.counterLengthRating = -1; }
        else if(this.counterLengthTrue >= this.counterLengthMax + 1) { this.counterLengthRating = 1; }
        else { this.counterLengthRating = 0; }

        if(this.type == 'tags') {
          if(this.counterText != "") {
            this.counterAmount = this.counterText.split(",").length;
          } else {
            this.counterAmount = 0;
          }
          if(this.counterAmount <= this.counterAmountMin - 1) { this.counterAmountRating = -1; }
          else if(this.counterAmount >= this.counterAmountMax + 1) { this.counterAmountRating = 1; }
          else { this.counterAmountRating = 0; }
        }
      },
      clear: function() {
        this.counterText = "";
        this.count();
      },
      trueLength: function(text) {
        return text.replace("ä", "&auml;").replace("ö", "&auml;").replace("ü", "&auml;").replace("Ä", "&auml;").replace("Ö", "&auml;").replace("Ü", "&auml;").replace("ß", "&szlig;");
      }
    }
  }
</script>

<style scoped>
.box .counterDetails {
  display: flex;
}
.box .counterDetails .counterLengthDetail {
  width: 200px;
  background: var(--colorShade);
  color: var(--colorBoxFont);
  font-size: 12px;
  border-radius: 6px;
  padding: 10px 0px;
  text-align: center;
  font-weight: bold;
  transition: 0.2s ease all;
  margin-right: 10px;
}
.box .counterDetails .counterLengthDetail.counterLengthAmount--tooMany {
  background: var(--colorDanger);
  color: #fff;
}
.box .counterDetails .counterLengthDetail.counterLengthAmount--notEnough {
  background: var(--colorWarning);
  color: #fff;
}
.box .counterDetails .counterLengthDetail.counterLengthAmount--perfect {
  background: var(--colorSuccess);
  color: #fff;
}

@media screen and (max-width: 800px) {
  .box .counterDetails {
    display: grid;
    grid-gap: 10px;
  }
  .box .counterDetails .counterLengthDetail {
    width: 100%;
    margin: 0;
  }
}
</style>
