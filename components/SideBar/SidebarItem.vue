<template>
  <div :class="['sidebar-item', ...customClass]" @mouseenter="mouseenter" @mouseleave="mouseleave">
    <div class="border border-right border-bottom" />
    <div class="border border-caps border-top-cap border-left-cap" />

    <Title v-if="title" class="sidebar-header" :value="title" :img-url="titleImg" />

    <div class="sidebar-body">
      <slot />
    </div>
  </div>
</template>

<script>
import Title from '../Title'

export default {
  name: 'SidebarItem',
  components: {
    Title
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    titleImg: {
      type: String,
      default: ''
    },
    customClass: {
      type: Array,
      default: _ => []
    }
  },

  methods: {
    mouseenter (e) {
      this.$emit('mouseenter', e)
    },

    mouseleave (e) {
      this.$emit('mouseleave', e)
    }
  }
}
</script>

<style lang="less" scoped>
  .sidebar-item {
    .Width(400);
    .Margin(13, 10, 17, 10);
    .Flex-1;
    .Flex;
    .Flex-col;
    // .Background("~assets/img/background/bg@2x.png");
    .Background("~assets/img/background/news_bj@2x.png");

    color: @sidebarItemColor;
    position: relative;

    // 边框
    &::before,
    &::after,
    .border::before,
    .border::after,
    .border-caps::before,
    .border-caps::after {
      content: "";
      position: absolute;
      z-index: 2;
    }

    // 左右边框
    &::before,
    .border::before {
      .Width(1);
      .Background("~assets/img/background/line_left@2x.png");

      bottom: 0;
    }

    // 上下边框
    &::after,
    .border::after {
      .hHeight(1);
      .Background("~assets/img/background/line_up@2x.png");

      right: 0;
    }

    &::before {
      .calcHeight(100%, 41);

      left: 0;
    }

    // 上边框
    &::after {
      .calcWidth(100%, 70);

      top: 0;
    }

    .border {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;

      // 右边框
      &.border-right::before {
        right: 0;
        height: 100%;
      }

      // 下边框
      &.border-bottom::after {
        bottom: 0;
        width: 100%;
      }
    }

    // 边框弧形
    .border-caps {
      // 左边框弧
      &.border-left-cap::before {
        .Width(9);
        .wHeight(111);
        .Background("~assets/img/background/curve_up@2x.png");
        .Top(36);
        .TransformTranslate(-50%, 0, 0);

        left: 0;
      }

      // 上边框弧
      &.border-top-cap::after {
        .Width(111);
        .wHeight(9);
        .Background("~assets/img/background/curve_left@2x.png");
        .Left(67);
        .TransformTranslate(0, -50%, 0);

        top: 0;
      }
    }

    &:first-of-type {
      .maxCalcHeight(100%, 30);
    }

    &:last-of-type {
      .maxCalcHeight(100%, 13);
      margin-bottom: 0;
    }

    .sidebar-header {
      color: @titleColor;
    }

    .sidebar-body {
      .MarginTop(46);
      .Padding(20, 24, 20, 24);
      .fullSize;
      .Flex;
      .Flex-col;
      .maxCalcHeight(100%, 46);
      .calcHeight(100%, 46);
      overflow: hidden;
      z-index: 3;
    }

  }
</style>
