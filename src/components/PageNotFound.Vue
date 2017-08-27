<template>
    <div id="paperTextContainer">
      <div class="paperContent">
        <h1 class="paperHeading">404</h1>
        <p class="paperText">{{ PageNotFound.text }}</p>
      </div>
    </div>
</template>

<script>
export default {
  name: 'home',
  props: ['lang'],
  data: function () {
    return {
      PageNotFound: {
        text: ''
      }
    }
  },
  created: function () {
    if (this.lang === 'nl') {
      this.PageNotFound.text = 'De opgegeven pagina kon niet worden gevonden.'
    } else {
      this.PageNotFound.text = 'Page not Found.'
    }
  }
}
</script>
