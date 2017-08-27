<template>
    <div id="paperTextContainer">
        <div class="paperContent">
          <img class="paperImg profileImg" src="/static/img/me.png">
          <p class="paperText">
            {{ profile.text }}
          </p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'profile',
  props: ['lang'],
  data: function () {
    return {
      profile: {
        text: ''
      }
    }
  },
  created: function () {
    if (this.lang === 'en') {
      this.profile.text = 'My name is Yannick Kooistra. I am 19 years old. I live in Leeuwarden, where I study computer science at the NHL. ' +
                                'I have been interested in computers all my life and started programming and building websites at age 10. ' +
                                'Additionally, I enjoy playing videogames, listening to music and reading a book every once in a while.'
    } else if (this.lang === 'nl') {
      this.profile.text = 'Mijn naam is Yannick Kooistra en ik ben 19 jaar oud. Momenteel woon ik in Leeuwarden, waar ik informatica studeer aan de NHL. ' +
                                'Al mijn hele leven ben ik geïnteresseerd geweest in computers en ik ben al sinds mijn 10e bezig met programmeren en websites bouwen. ' +
                                'Daarnaast speel ik vaak videogames, luister ik veel naar muziek en lees ik zo nu en dan een boek.'
    }
  }
}
</script>
