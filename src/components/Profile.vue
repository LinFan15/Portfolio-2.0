<template>
    <div id="paperTextContainer">
        <div class="paperContent">
          <img class="paperImg" src="/static/img/me.png">
          <p class="paperText"><!--{{ profile.text }}-->Mijn naam is Yannick Kooistra en ik ben 19 jaar oud. Momenteel woon ik in Leeuwarden, waar ik informatica studeer aan de NHL.
                                Al mijn hele leven ben ik geïnteresseerd geweest in computers en ik ben al sinds mijn 10e bezig met programmeren en websites bouwen.
                                Daarnaast speel ik vaak videogames, luister ik veel naar muziek en ben ik recentelijk begonnen met mezelf piano leren te spelen.
          </p>
        </div>
    </div>
</template>

<script>
import Router from '../router'
import axios from 'axios'

export default {
  name: 'profile',
  data: function () {
    return {
      profile: {}
    }
  },
  created: function () {
    this.fetchData()
  },
  methods: {
    fetchData: function () {
      axios.get('/api' + Router.currentRoute.path)
        .then(function (response) {
          this.profile = response.data
        }.bind(this))
    }
  }
}
</script>
