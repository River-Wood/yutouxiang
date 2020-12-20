<template>
  <div>

    <Sidebar position="Left" full>
      <Sidebar-item title="景区大观" :title-img="articleImg" :custom-class="['bg-long']">
        <!-- <div class="content">
          <div class="count">
            <span>柔川景区游客数量</span>
            <span>
              <span>{{ 396720 }}</span>
              <span>人</span>
            </span>
          </div>
        </div> -->
        <div class="content">
          <div class="count">
            <span>柔川景区游客</span>
            <span>
              <span>{{ totalNumber }}</span>
              <span>人</span>
            </span>
          </div>
          <div class="count">
            <span>酒店民宿</span>
            <span>
              <span>{{ 13 }}</span>
              <span>家</span>
            </span>
          </div>
          <div class="count">
            <span>停车场</span>
            <span>
              <span>{{ 3 }}</span>
              <span>个</span>
            </span>
          </div>
          <div class="count">
            <span>公厕</span>
            <span>
              <span>{{ 3 }}</span>
              <span>个</span>
            </span>
          </div>
          <div class="count">
            <span>实时人数</span>
            <span>
              <span>{{ currentNumber }}</span>
              <span>人</span>
            </span>
          </div>
          <div class="count">
            <span>当日累计游客</span>
            <span>
              <span>{{ todayTotal }}</span>
              <span>人</span>
            </span>
          </div>
          <div class="count">
            <span>流入流出统计</span>
            <span>
              <span>{{ 1750 }}</span>
              <span>人</span>
            </span>
          </div>
          <div class="count">
            <span>近24小时/7天客流</span>
            <span>
              <span>{{ 12250 }}</span>
              <span>人</span>
            </span>
          </div>
        </div>
      </Sidebar-item>
    </Sidebar>

    <!-- <Sidebar position="Right" full>
      <Sidebar-item title="标题" :title-img="articleImg" :custom-class="['bg-middle']">

        <transition-group name="fade-in-right" tag="div" class="content">
          <Title key="title" sub-title value="列表" />
          <div key="content" class="content">
          </div>
        </transition-group>

      </Sidebar-item>
    </Sidebar> -->

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

  .count {
    white-space: nowrap;
  }
  // overflow: hidden;
}

.count {
  .wHeight(60);
  .Margin(23, 0, 20, 0);

  background: @darkBlueOpacity;

  >span {
    color: #FAC900;

    &:first-of-type {
      .Padding(0, 52, 0 ,52);
      .LineHeight(60);
      color: @sidebarItemColor;
    }

    &:last-of-type {
      .LineHeight(60);
      .FontSize(16);

      >span {
        padding: inherit;

        &:first-of-type {
          .FontSize(36);
        }
      }

    }
  }
}
</style>
