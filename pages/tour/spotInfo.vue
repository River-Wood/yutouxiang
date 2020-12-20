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
        <client-only>
          <swiper :options="swiperYOption" class="timeline-swiper">

            <swiper-slide>
              <Title key="title0" sub-title value="布袋山风景区" />
              <div key="content" class="articleContent">
                <!--  -->
                为什么这里被称为布袋山呢? 相传，布袋和尚的出生地在浙江奉化，他四处云游来到了这里，被这里的景色所吸引便在这里长住了下来。这里的村民都非常敬爱他。为了纪念他就把村子改为了布袋坑村，叫这座山为布袋山。布袋和尚是弥勒佛的千万化身之一，他身材矮胖、满脸欢喜，平日以杖肩荷布袋云游四方，以禅机点化世人；他乐善好施、身怀绝技、除暴安良、让众生离苦得乐。一生奇事不胜枚举，高兴就卧在雪里，雪也不沾身；能够预卜吉凶和气候，天晴时，穿着高齿木屐，跑到桥上，竖膝而卧，雨天则穿上湿草鞋，在路上急急行走，表示天快下雨，每一次都很灵验，被认为是一大奇人。
                他的整个一生只做了一件事，那就是笑，笑就是他的信息，他的信条，他的经典。布袋，是独一无二的。在整个世界上，所有的人都可以被他的笑所滋养，每个人的心灵都可以被他的笑所净化，每个人都可以从他的笑容间感受到纯真的幸福。
                现今的山水画廊景区的景点有雄狮护谷、双龙戏瀑、牯潭秋月、壶中乾坤、苍山云影、九天凝碧、老僧听泉、飞阁流丹、廊桥蕙风、鼎湖秀色、弥勒朝圣、峡谷搂村等12个大景点。

              </div>
            </swiper-slide>
            <swiper-slide>
              <Title key="title1" sub-title value="两岸三度" />
              <div key="content" class="articleContent">
                <!--  -->
                柔川·两岸三度，位于黄岩长谭水库上游，森林覆盖率达88.7%，是一个名副其实的“天然氧吧”,主干河道柔极溪为永宁江主要支流，连绵二十公里。两岸三度是大陆首个从台湾地区引进的“三度素质教育”模式实践基地，已建成高空走钢丝、高空速降、攀岩、七彩旱滑、射箭、喊泉、网红鸟巢等户外活动项目。两岸三度是中国大陆首个引进"三度素质教育"模式的实践基地,"三度素质教育"模式,即"三距、三生",是一种通过拉近人与人、人与自然、人与地域文化之间的距离,使学员学会生存技能、端正生活态度、感悟生命意义的一种素质教育模式。自2010年创建以来,两岸三度本着"生存、生命、生活"的宗旨,以延伸学校教育、助力企业成长为指导,以融入自然教育、感恩成长教育、磨砺执行教育为核心理念,借鉴国内外素质教育的成功经验和模式,从实际出发,不断研发焦创新校企拓展产品。于2017年引进休闲、疗养元素，建设度假小木屋、童忆·秋千、网红鸟巢、雅致书香、射以观德弓箭文化园、平田躬耕等项目，致力于打造一片世外净土。并采取营地教育+休闲旅游经营模式，与浙江华夏国旅强强联手，建设专业队伍，核心人员12位，人均从事旅游行业5年以上。截止2019年年底，已接待25万人次来两岸体验人生三度。
              </div>
            </swiper-slide>
            <swiper-slide>
              <Title key="title2" sub-title value="太尉殿" />
              <div key="content" class="articleContent">
                <!--  -->
                太尉殿坐落在黄岩西部屿头乡沙滩村境内。经省市区民族宗教事务局批准，为道教圣地。殿内占地面积约200平方，左右厢房，前后三道，殿堂前摆放太祖爷——显顺尊王神位，终日烟雾缭绕，香火不断。左边有隐约可见的碑记，右边三官道家仙祖各有其位。中间一道戏台，帝王将相，才子佳人逢年过节登台亮相。整个戏台，是南宗至今800多年历史，是浙江省境内保存最完好的古建筑。前面是台门，左右有一对石虎把持，窥视人间一切。有5人合抱巨樟3棵，见证着太尉殿的悠悠历史。
              </div>
            </swiper-slide>
            <div slot="pagination" class="swiper-pagination" />

          </swiper>
        </client-only>
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
      articleImg,
      swiperYOption: {
        direction: 'vertical',
        slidesPerView: 1,
        spaceBetween: 30,
        mousewheel: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        autoplay: {
          delay: 5000,
          disableOnInteraction: true
        }
      }
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
