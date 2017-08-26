<template>
    <div id="paperTextContainer">
      <div class="paperContent">
        <img class="paperImg" src="/static/img/me.png">
        <!--<span class="paperText">Yannick Kooistra<!--{{ home.text }}</span>-->
        <p class="paperText">Welcome to my Portfolio website.<br>
          Please use the buttons above to navigate.</p>
      </div>
    </div>
</template>

<script>
import Router from '../router'
import axios from 'axios'

export default {
  name: 'home',
  data: function () {
    return {
      home: {
        text: ''
      }
    }
  },
  created: function () {
    this.fetchData()
  },
  methods: {
    fetchData: function () {
      axios.get('/api' + Router.currentRoute.path)
        .then(function (response) {
          this.pageData = response.data
          this.home.text = this.pageData.text
        }.bind(this))
    }
  }
}
</script>
