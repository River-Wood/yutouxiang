<template>
  <div class="tabs-container">
    <div
      v-for="(item, key) in list"
      :key="key"
      :class="[tabIndex === key ? 'active' : '']"
      @click="clickItem($event, item ,key)"
    >{{ item.title }}</div>
  </div>
</template>

<script>
export default {
  name: 'Tabs',
  props: {
    list: {
      type: Array,
      default: _ => []
    },
    defaultTabIndex: {
      type: Number,
      default: 0
    }
  },

  data () {
    return {
      tabIndex: 0
    }
  },

  watch: {
    tabIndex: {
      handler (nv) {
        this.$emit('change', nv)
      },
      immediate: true
    },

    defaultTabIndex: {
      handler (tabIndex) {
        this.tabIndex = tabIndex
      },
      immediate: true
    }
  },

  methods: {
    clickItem (e, item, index) {
      e && e.preventDefault()

      this.tabIndex = index
    }
  }
}
</script>

<style lang="less" scoped>
  .tabs-container {
    .Flex;
    .Margin(6, 0, 6, 0);

    user-select: none;

    >div {
      .Flex-1;
      .wHeight(28);
      .LineHeight(28);
      .Margin(0, 5, 0, 5);
      .FontSize(12);

      background: linear-gradient(90deg, rgba(64, 85, 223, 1) 0%, rgba(20, 246, 243, 0) 100%);
      border: 1px solid #0483a1;
      text-align: center;
      color: #FFF;
      opacity: .6;
      cursor: pointer;

      &:hover {
        opacity: 1;
      }

      &.active {
        background: linear-gradient(90deg, #009EF8 0%, #00CEF7 50%, #009EF8 100%);
        opacity: 1;
      }
    }
  }
</style>
