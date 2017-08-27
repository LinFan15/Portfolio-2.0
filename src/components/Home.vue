<template>
    <div id="paperTextContainer">
      <div class="paperContent">
        <img class="paperImg profileImg" src="/static/img/me.png">
        <!--<span class="paperText">Yannick Kooistra<!--{{ home.text }}</span>-->
        <p class="paperText">{{ home.firstLineText }}<br>
          {{ home.secondLineText }}</p>
      </div>
    </div>
</template>

<script>
export default {
  name: 'home',
  props: ['lang'],
  data: function () {
    return {
      home: {
        firstLineText: '',
        secondLineText: ''
      }
    }
  },
  created: function () {
    if (this.lang === 'nl') {
      this.home.firstLineText = 'Welkom op mijn Portfolio website.'
      this.home.secondLineText = 'Gebruik alstublieft de knoppen hierboven om de site te navigeren.'
    } else {
      this.home.firstLineText = 'Welcome to my Portfolio website.'
      this.home.secondLineText = 'Please use the buttons above to navigate.'
    }
  }
}
</script>
