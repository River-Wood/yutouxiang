<template>
  <transition name="navbar">
    <nav id="vr-nav">
      <ul class="main-menu">
        <li
          v-for="(item, index) in list"
          :key="index"
          :class="[index >= list.length / 2 ? 'right' : 'left', nowName === item.name || routeName.includes(item.name.toLowerCase()) ? 'active' : '']"
        >
          <!-- <span>{{ item.title }}</span> -->
          <el-dropdown trigger="click" placement="bottom">
            <span class="el-dropdown-link">
              {{ item.title }}<i v-if="item.subItems" class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item @click.native="clickMenu($event, subItem)" v-for="(subItem, i) in item.subItems" :key="i">
                <span>{{subItem.title}}</span>
              </el-dropdown-item>
              <!-- <el-dropdown-item>狮子头</el-dropdown-item>
              <el-dropdown-item>螺蛳粉</el-dropdown-item>
              <el-dropdown-item>双皮奶</el-dropdown-item>
              <el-dropdown-item>蚵仔煎</el-dropdown-item> -->
            </el-dropdown-menu>
          </el-dropdown>
        </li>
      </ul>

      <!-- <img class="nav-logo" src="@/assets/img/nav/logo@2x.png" alt="huwai-logo" @click="clickMenu($event, mainSubMenu)"> -->

      <!-- <transition name="nav-animate">
        <ul v-show="subMenu && subMenu.length" class="sub-menu">
          <li
            v-for="(subItem, subIndex) in subMenu"
            :key="subIndex"
            :class="[routeName.includes(subItem.name) ? 'active' : '']"
            @click="clickSubMenu($event, subItem)"
          >
            <div class="img">
              <img :src="subItem[routeName.includes(subItem.name) ? 'ActiveImg' : 'imgUrl']" alt="subMenu-img">
            </div>
            <span>{{ subItem.title }}</span>
          </li>
        </ul>
      </transition> -->

    </nav>
  </transition>
</template>

<script>
import 'animate.css'

const timer = []

export default {
  name: 'NavigationBar',
  props: {
    list: {
      type: Array,
      default: _ => []
    },
    mainSubMenu: {
      type: Object,
      default: _ => {}
    }
  },

  data () {
    return {
      routeName: 'Edcation-PartyWork',
      subMenu: [],
      nowName: '',
      nextName: ''
    }
  },

  watch: {
    $route: {
      handler (t) {
        this.routeName = t.name
      },
      immediate: true
    }
  },

  mounted () {
    this.bindClick()
  },

  methods: {
    clickMenu (e, { name = '', children = [], url = '' }) {
      e && e.preventDefault && e.preventDefault()

      const { nowName, subMenu, $router, _get } = this
      if (name === nowName) {
        this.nowName = ''
        subMenu.splice(0)
        return
      }

      if (subMenu.length) {
        this.nowName = ''
        subMenu.splice(0)
        timer.forEach(item => {
          clearTimeout(item)
        })
        timer.push(
          setTimeout(() => {
            this.nowName = name
            subMenu.push(...children)
            if (!_get(children, 'length') && url) $router.push(url)
          }, 200)
        )
      } else {
        this.nowName = name
        subMenu.push(...children)
        if (!_get(children, 'length') && url) $router.push(url)
      }
    },

    clickSubMenu (e, { url, name }) {
      e && e.preventDefault && e.preventDefault()

      if (!url) return
      this.$router.push(url)
    },

    bindClick () {
      // const that = this
      // const subMenu = document.querySelector('.sub-menu')
      // const menu = document.querySelector('.main-menu')
      // const logo = document.querySelector('.nav-logo')

      // document.addEventListener('click', function (e) {
      //   e.preventDefault()
      //   const { target } = e

      //   if (
      //     (!that.nowName) ||
      //     (!that.subMenu) ||
      //     (logo && logo.contains(target)) ||
      //     (menu && menu.contains(target)) ||
      //     (subMenu && subMenu.contains(target))
      //   ) return false

      //   that.subMenu.splice(0)
      //   that.nowName = ''
      // })
    }

  }
}
</script>

<style lang="less" scoped>
  .navbar-enter-active,
  .navbar-leave-active {
    -webkit-transition: opacity .3s, transform .2s;
    transition: opacity .3s, transform .2s;
  }

  .navbar-enter,
  .navbar-leave-to {
    .TransformTranslate(-50%, 100%, 0);

    opacity: .1;
  }

  .nav-animate-enter-active,
  .nav-animate-leave-active {
    -webkit-transition: opacity .2s;
    transition: opacity .2s;
  }

  .nav-animate-enter,
  .nav-animate-leave-to {
    opacity: 0;
  }

  nav {
    // .Width(1429.5);
    // .wHeight(63);
    // .hHeight(90);
    .Background('~assets/img/nav/main_bg@2x.png');
    .TransformTranslate(-50%, 0, 0);

    position: fixed;
    top: 0;
    left: 50%;
    // width: 100%;
    width: 100vw;
    height: 4vw;
    z-index: 10000;
    user-select: none;
    color: @navColor;

    // .nav-logo {
    //   .Width(109);
    //   .wHeight(109);
    //   .Left(434);
    //   .TransformTranslate(0, -50%, 0);

    //   position: absolute;
    //   top: 0;
    // }

    .main-menu {
      .Padding(0, 0, 0, 25);
      .wHeight(43);
      .FontSize(16);

      width: 100vw;
      position: absolute;
      top: 0;

      >li {
        .Flex;
        .Flex-center;
        // .Padding(0, 43, 0, 43);
        // .hHeight(90);

        height: 4vw;
        width: 12.14vw;
        text-align: center;
        position: relative;
        cursor: pointer;

        &,
        span {
          .FontSize(16);
        }

        &.active {
          &,
          span {
            .FontSize(18);
          }

          color: @navActive;

          &:after {
            .Width(170);
            .wHeight(43);
            .Background('~assets/img/nav/hover@2x.png');
            .TransformTranslate(-50%, -50%, 0);

            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            z-index: -1;
          }
        }

        &.left {
          float: left;
        }

        &.right {
          float: right;
        }
      }
    }
  }
</style>
