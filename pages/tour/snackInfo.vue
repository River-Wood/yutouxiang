<template>
  <div>

    <Sidebar position="Left" full>
      <Sidebar-item title="标题" :title-img="articleImg" :custom-class="['bg-long']">
        <div class="content">
          <!--  -->
        </div>
      </Sidebar-item>
    </Sidebar>

    <Sidebar position="Right" full>
      <Sidebar-item title="标题" :title-img="articleImg" :custom-class="['bg-middle']">

        <transition-group name="fade-in-right" tag="div" class="content">
          <Title key="title" sub-title value="阿玲馒头" />
          <div key="content" class="content">
            <!--  -->
            <img src="@/assets/img/1/1.jpg" alt="qrcode" width="100%">
            <!-- <img src="@/assets/img/1/2.jpg" alt="qrcode" width="100%"> -->
            <!-- <img src="@/assets/img/1/3.jpg" alt="qrcode" width="100%"> -->
          </div>
          <Title key="title" sub-title value="番薯庆糕" />
          <div key="content" class="content">
             <img src="@/assets/img/2/1.jpg" alt="qrcode" width="100%">
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

  overflow: hidden;
}
</style>
