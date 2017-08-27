<template>
  <div id="introTextContainer">
    <p class="introText">Please select your language.
      <br>
      <span class="introTextSeperator">Selecteer alstublieft uw taal.</span>
    </p>
    <span class="introText"><a v-on:click="chooseLang('en')" class="paperLink">EN</a>|<a v-on:click="chooseLang('nl')" class="paperLink">NL</a></span>
  </div>
</template>

<script>
export default {
  name: 'welcome',
  methods: {
    chooseLang: function (lang) {
      this.$emit('langChosen', lang, true)
    }
  }
}
</script>
