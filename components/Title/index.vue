<template>
  <div :class="['title-container', subTitle ? 'sub-title' : '']">
    <div :class="['icon', statusColor]">
      <img v-if="imgUrl && !subTitle" :src="imgUrl" alt="sidebar-item-title-img">
    </div>

    <h1>
      <span>
        {{ value }}
      </span>
    </h1>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Title',
  props: {
    value: {
      type: String,
      default: ''
    },
    imgUrl: {
      type: String,
      default: ''
    },
    subTitle: {
      type: Boolean,
      default: false
    },
    statusColor: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="less" scoped>
.title-container {
  .wHeight(46);
  .PaddingLeft(85);

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  &::after {
    .BackgroundLinear(-90deg, rgba(0, 145, 247, 0.15), rgba(245, 157, 49, 0));
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
  }

  .icon {
    .Width(56);
    .wHeight(56);
    .Bottom(3);
    .Left(6);

    position: absolute;
    display: inline-block;

    img {
      width: 100%;
      height: 100%;
    }
  }

  h1 {
    .FontSize(16);
    .LineHeight(46);

    font-weight: bold;
  }

  &.sub-title {
    .wHeight(29);
    .Padding(0, 0, 0, 0);
    .LineHeight(29);

    background-color: @darkBlueOpacity;
    position: relative;

    h1 {
      .FontSize(14);
      .Padding(0, 0, 0, 0);

      display: inline-block;
      line-height: inherit;
    }

    >div {
      .Width(13);
      .wHeight(13);
      .Padding(0, 0, 0, 0);
      .Margin(0, 8, 0, 8);

      position: relative;
      top: 0;
      left: 0;
      border-radius: 50%;
      line-height: inherit;
      .BackgroundLinear(120deg, #16FAB0, #5CB5F9);

      &.yellow {
        .BackgroundLinear(120deg, #FAC900, #FA9300);
      }

      &.green {
        .BackgroundLinear(120deg, #24884C, #3DC4A0);
      }

      &.orange {
        .BackgroundLinear(120deg, #C3822E, #C34D2E);
      }

      &.purple {
        .BackgroundLinear(120deg, #4E16DD, #5CB5F9);
      }
    }
  }
}
</style>
