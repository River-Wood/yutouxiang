<template>
  <div>

    <!-- <Sidebar position="Left" full>
      <Sidebar-item title="标题" :title-img="articleImg" :custom-class="['bg-long']">
        <div class="content">
        </div>
      </Sidebar-item>
    </Sidebar> -->

    <Sidebar position="Right" full>
      <Sidebar-item title="知名景点" :title-img="articleImg" :custom-class="['bg-middle']">

        <transition-group name="fade-in-right" tag="div" class="content">
          <Title key="title" sub-title value="屿头书吧" />
          <div key="content" class="content">
            <!--  -->
            屿头乡村振兴学院和合书吧位于屿头乡沙滩村沙滩老街内，建成时间2019年6月，面积150平方，藏书种类22类，藏书10823册。书吧内设有阅览座位40席，并配置自助借还机。屿头乡村振兴学院和合书吧的建成不仅让文化和旅游共融共生，也将会在提升屿头乡的文化氛围和推动屿头乡的乡村振兴方面有一定的助力。
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
