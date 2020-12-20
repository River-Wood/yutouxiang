<template>
  <div>
    <iframe
      id="inlineFrameExample"
      title="Inline Frame Example"
      width="300"
      height="200"
      src="http://101.69.143.242:9011/jczl/a?login"
      class="frame"
    />
  </div>
</template>

<script>
import { Sidebar, SidebarItem, Title } from '@/components'
import { articleImg } from '@/assets/img/images'

export default {
  components: {
    Sidebar,
    SidebarItem,
    Title
  },
  data () {
    return {
      articleImg
    }
  }
}
</script>

<style lang="less" scoped>
.content {
  .Flex;
  .Flex-col;
  .MarginRight(-12);
  .PaddingRight(12);
  .hHeight(300);

  overflow: hidden;
}

.frame {
  position: fixed;
  top: 90px;
  width: 100%;
  z-index: 1000;
  min-height: ~"calc(100vh - 90px)";
}
</style>
