<template>
  <div class="app-container">

    <nuxt :keep-alive="true" />

    <Navigation-bar :list="navList" :main-sub-menu="mainSubMenu" />

    <div id="playerUI" onload="load()">
      <div id="player" @contextmenu="oncontextmenu" />
    </div>

  </div>
</template>

<script>
import { NavigationBar } from '@/components'
import { navList, mainSubMenu } from './navList'

export default {
  components: {
    NavigationBar
  },

  data () {
    return {
      navList,
      mainSubMenu,
      sidebarShow: false
    }
  },

  methods: {
    oncontextmenu (e) {
      e && e.preventDefault && e.preventDefault()
      return false
    }
  }
}
</script>

<style lang="less">

html,
body {
  .FontSize(16);
}

.app-container {
  background:black;
  &,
  #player {
    width: 100%;
    min-width: 100vw;
    height: 100%;
    min-height: 100vh;
  }
}

.container {
  position: absolute;
  height: 0;
  width: 0;
}

#player {
  &::after {
    .Background('~assets/img/background/modal@2x.png');
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    pointer-events: none;
    background-size: 110% 100%;
    z-index: 100;
  }

  position: fixed;
  z-index: 100;
  height: 100%;
  width: 100%;
  text-align: center;
  background-size: 110% 100%;

  >video {
    width: 100%;
    height: 100%;
    -o-object-fit: fill;
    object-fit: fill;
    -o-object-position: center;
    object-position: center;
  }

  #videoPlayOverlay {
    .transformCenter;

    position: absolute;
    top: 50%;
    left: 50%;
  }
}
</style>
