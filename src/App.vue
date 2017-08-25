<template>
  <div id="pageContainer">
    <div id="topPageContainer">
        <transition
          enter-active-class="animated fadeIn"
          leave-active-class="animated fadeOut">
            <div id="menuContainer" v-if="langChosen">
                <router-link to="profile" id="profileLink" class="menu-itemLinks">
                    <div id="menu-item1" class="menu-items">
                        <object type="image/svg+xml" data="/static/img/profile.svg" class="menu-svg"></object>
                        <span id="profileLinkDescription" class="menu-item-descriptions">{{ menuItem1Desc }}</span>
                    </div>
                </router-link>
                <router-link to="skills" id="skillsLink" class="menu-itemLinks">
                    <div id="menu-item2" class="menu-items">
                        <object type="image/svg+xml" data="/static/img/skills.svg" class="menu-svg"></object>
                        <span id="skillsLinkDescription" class="menu-item-descriptions">{{ menuItem2Desc }}</span>
                    </div>
                </router-link>
                <router-link to="projects" id="projectsLink" class="menu-itemLinks">
                    <div id="menu-item3" class="menu-items">
                        <object type="image/svg+xml" data="/static/img/projects.svg" class="menu-svg"></object>
                        <span id="projectsLinkDescription" class="menu-item-descriptions">{{ menuItem3Desc }}</span>
                    </div>
                </router-link>
            </div>
        </transition>
    </div>
    <div id="contentContainer">
        <div id="contentPaper">
          <transition appear mode="out-in"
            v-bind:enter-active-class="transitionEnterName"
            v-bind:leave-active-class="transitionLeaveName"
            v-on:after-enter="onEnterAnimationEnd">
                <router-view @langChosen="chooseLang"></router-view>
          </transition>
        </div>
    </div>
    <div id="bottomPageContainer">
        <transition
          enter-active-class="animated fadeIn"
          leave-active-class="animated fadeOut">
            <footer id="footer" v-if="langChosen">
                <router-link to="disclaimer" id="disclaimerLink" class="footerElement">Disclaimer</router-link>
                <router-link to="contact" id="contactLink" class="footerElement">Contact</router-link>
            </footer>
        </transition>
    </div>
  </div>
</template>

<script>
import router from './router'
import axios from 'axios'

export default {
  name: 'app',
  data: function () {
    return {
      langChosen: false,
      pageData: [],
      menuItem1Desc: '',
      menuItem2Desc: '',
      menuItem3Desc: '',
      transitionEnterName: 'animated fadeInUp',
      transitionLeaveName: 'animated fadeOutDown'
    }
  },
  created: function () {
    if (router.currentRoute.path.substring(1, 3) === 'en' || router.currentRoute.path.substring(1, 3) === 'nl') {
      this.langChosen = true
    }
  },
  watch: {
    '$route' (to, from) {
      if (from.path === '/') {
        this.langChosen = false
        this.transitionEnterName = 'animated fadeInDown'
        this.transitionLeaveName = 'animated fadeOutDown'
      } else if (to.path === '/') {
        this.langChosen = false
        this.transitionEnterName = 'animated fadeInDown'
        this.transitionLeaveName = 'animated fadeOut'
      } else if (to.path === '/welcome') {
        this.langChosen = false
        this.transitionEnterName = 'animated fadeInDown'
        this.transitionLeaveName = 'animated fadeOut'
      } else {
        this.langChosen = true
        this.transitionEnterName = 'animated fadeIn'
        this.transitionLeaveName = 'animated fadeOut'
      }
    }
  },
  methods: {
    onEnterAnimationEnd: function () {
      if (router.currentRoute.path === '/') {
        setTimeout(function () {
          router.push('welcome')
        }, 800)
      }
    },
    chooseLang: function (lang) {
      axios.get('/api/' + lang + '/menu')
        .then(function (response) {
          var data = response.data
          this.menuItem1Desc = data.menuItem1Desc
          this.menuItem2Desc = data.menuItem2Desc
          this.menuItem3Desc = data.menuItem3Desc
        }.bind(this))
      router.push(lang + '/home')
    }
  }
}
</script>
