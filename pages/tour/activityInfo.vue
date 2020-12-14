<template>
  <div>

    <Sidebar position="Left" full>
      <Sidebar-item title="标题" :title-img="articleImg" :custom-class="['bg-long']">
        <div class="content">
          <!--  -->
          <Title key="title" sub-title value="沙滩老街" />
          <Title key="title" sub-title value="十里红妆" />
          <Title key="title" sub-title value="新春过大年" />
          <Title key="title" sub-title value="柔川旅游文化节" />
        </div>
      </Sidebar-item>
    </Sidebar>

    <Sidebar position="Right" full>
      <Sidebar-item title="标题" :title-img="articleImg" :custom-class="['bg-middle']">

        <transition-group name="fade-in-right" tag="div" class="content">
          <Title key="title" sub-title value="活动" />
          <div key="content" class="content">
            <!--  -->
            <img src="@/assets/img/activity/1.jpg" alt="qrcode" width="100%">
            <img src="@/assets/img/activity/2.jpg" alt="qrcode" width="100%">
            <img src="@/assets/img/activity/3.jpg" alt="qrcode" width="100%">
            <img src="@/assets/img/activity/4.jpg" alt="qrcode" width="100%">
          </div>
        </transition-group>

      </Sidebar-item>
    </Sidebar>

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

  // overflow: hidden;
}
</style>
