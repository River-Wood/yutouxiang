<template>
  <transition
    name="sidebar-animate"
    :appear="true"
    :duration="300"
    :enter-active-class="`animated fadeIn${position}`"
    :leave-active-class="`animated fadeOut${position}`"
    @enter="enter"
    @after-enter="afterEnter"
    @enter-cancelled="enterCancel"
    @leave="leave"
    @leave-cancelled="leave"
  >
    <section
      v-show="show"
      :id="`${position}SideBar`"
      :class="[full ? 'full-height' : '']"
      :style="{[`${position.toLowerCase()}`]: `${val}px`}"
    >
      <slot />
    </section>
  </transition>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Sidebar',
  props: {
    position: {
      type: String,
      default: 'Left'
    },
    full: {
      type: Boolean,
      default: false
    },
    val: {
      type: Number,
      default: 0
    }
  },

  data () {
    return {
      show: true
    }
  },

  computed: {
    ...mapState({
      cloudRenderState: state => state.cloudRender.state
    })
  },

  watch: {
    '$route' () {
      this.show = false
    }
  },

  methods: {
    ...mapActions('building', ['setSidebar']),

    enter () {
      this.setSidebar(true)
      this.$emit('entering')
    },

    afterEnter () {
      const { setSidebar } = this
      this.$nextTick(_ => {
        const dom = document.getElementById('LeftSideBar')
        if (!dom) setSidebar(false)
        else setSidebar(true)
      })
    },

    enterCancel () {
      this.setSidebar(false)
    },

    leave () {
      this.show = true
    }
  }
}
</script>

<style lang="less" scoped>
  .animated {
    animation-duration: .3s !important;
    transition-duration: .3s !important;
  }

  section {
    // .maxhHeight(1007);
    .maxhHeight(960);
    // .Top(49);
    .Top(90);
    .Flex;
    .Flex-col;

    position: fixed;
    z-index: 1000;
    overflow: hidden;

    &.full-height {
      // .hHeight(1007);
      .hHeight(960);
    }

    &.Left-side {
      left: 0;
    }

    &.Right-side {
      right: 0;
    }
  }
</style>
