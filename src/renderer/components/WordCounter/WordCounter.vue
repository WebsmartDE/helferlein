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
          this.counterLengthMax = 300;
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
          this.counterAmount = this.counterText.split(",").length;
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
.header button {
  position: absolute;
  z-index: 2;
  right: 30px;
  font-size: 10px;
  color: #fff;
  font-weight: bold;
  background: #f9a51b;
  padding: 5px 15px;
  border-left: 15px solid #f1f1f1;
  border-right: 15px solid #f1f1f1;
  top: -4px;
  transition: 0.15s ease all;
}
.header button:hover {
  background: #fff;
  color: #f9a51b;
  cursor: pointer;
}
.header button:active {
  background: #eee;
}
.header button:focus {
  outline: 0;
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
.box input, .box textarea {
  border: 2px solid #ddd;
  background: #fff;
  padding: 15px;
  font-family: 'Oxygen', sans-serif;
  font-size: 14px;
  border-radius: 6px;
  transition: 0.15s ease all;
}
.box input:focus, .box textarea:focus {
  border-color: #f9a51b;
  outline: 0;
}
.box .counterDetails {
  display: flex;
}
.box .counterDetails .counterLengthDetail {
  width: 200px;
  background: rgba(0,0,0,0.05);
  color: #000;
  font-size: 12px;
  border-radius: 6px;
  padding: 10px 0px;
  text-align: center;
  font-weight: bold;
  transition: 0.2s ease all;
  margin-right: 10px;
}
.box .counterDetails .counterLengthDetail.counterLengthAmount--tooMany {
  background: rgb(233, 30, 54);
  color: #fff;
}
.box .counterDetails .counterLengthDetail.counterLengthAmount--notEnough {
  background: rgb(234, 172, 0);
  color: #fff;
}
.box .counterDetails .counterLengthDetail.counterLengthAmount--perfect {
  background: rgb(139, 195, 74);
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
