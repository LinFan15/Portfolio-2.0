<template>
    <div id="paperTextContainer">
        <div class="paperContent">
          <img src="/static/img/e-mail.svg" class="paperImg"></img>
          <p class="paperText">{{ contact.mainText }} <a href="mailto:mail@yako.me" class="link">{{ contact.linkText }}</a>.</p>
          </p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'contact',
  props: ['lang'],
  data: function () {
    return {
      contact: {
        mainText: '',
        linkText: ''
      }
    }
  },
  created: function () {
    if (this.lang === 'en') {
      this.contact.mainText = 'Please send all inquiries to'
      this.contact.linkText = 'this email address'
    } else if (this.lang === 'nl') {
      this.contact.mainText = 'U kunt contact opnemen via'
      this.contact.linkText = 'dit e-mailadres'
    }
  }
}
</script>
