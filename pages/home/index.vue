<template>
  <div>
    <modal name="lowIncomeDesc" width="24.22%" height="49.17%" :pivot-y="0.4">
      <div>
        <p class="modal-title">
          <span>{{ selectedPerson.name || '' }}</span>
        </p>
        <!-- <div class="qrcode">123123</div> -->
        <div class="modal-content">
          <div v-for="(k, idx) in Object.keys(selectedPerson)" :key="idx" class="listItem">
            <div class="itemLeft">{{ mapping[k] }}</div>
            <div class="itemRight">{{ selectedPerson[k] }}</div>
          </div>
        </div>

        <div class="close-btn" @click="$modal.hide('lowIncomeDesc')" />
      </div>
    </modal>

    <Sidebar position="Left" full>
      <Sidebar-item title="党员信息" :title-img="memberImg" class="homeTopLeft">
        <div class="content">
          <Title sub-title value="沙滩村党员性别分布" />
          <PieChart
            :key="0"
            :pie-data="[
              {value:21, name:'男'},
              {value:9, name:'女'},
            ]"
            id-name="gender-distribution"
          />
          <Title sub-title value="沙滩村党员学习分布" />
          <PieChart
            :key="1"
            :pie-data="[
              {value:20, name:'初中以下'},
              {value:7, name:'高中'},
              {value:3, name:'大专以上'},
            ]"
            id-name="education-distribution"
          />
          <Title sub-title value="沙滩村党员年龄分布" />
          <PieChart
            :key="2"
            :pie-data="[
              {value:3, name:'18-30岁'},
              {value:1, name:'31-40岁'},
              {value:7, name:'41-50岁'},
              {value:4, name:'51-60岁'},
              {value:8, name:'61-70岁'},
              {value:5, name:'71-80岁'},
              {value:2, name:'81-90岁'},
            ]"
            id-name="age-distribution"
          />
          <!-- <div class="wrapper">
            <client-only>
              <vue-seamless-scroll :data="partyBuilding" :class-option="classOption">
                <div v-for="(item, index) in partyBuilding" :key="index" class="list-item-title">{{ item.title }}</div>
              </vue-seamless-scroll>
            </client-only>
          </div> -->
        </div>
      </Sidebar-item>
      <Sidebar-item title="各党支部列表" :title-img="memberImg" class="homeBottomLeft">
        <div class="sidebar-item-body">
          <client-only>
            <vue-seamless-scroll :data="partyBuilding" :class-option="classOption">
              <div v-for="(item, index) in partyBuilding" :key="index" class="list-item-title">{{ item.title }}</div>
            </vue-seamless-scroll>
          </client-only>
        </div>
      </Sidebar-item>
    </Sidebar>

    <Sidebar position="Left" full val="448">
      <Sidebar-item title="景区大观" :title-img="chartImg">
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

    <Sidebar position="Right" full val="448">
      <Sidebar-item title="地标景点" :title-img="articleImg" class="article">
        <div class="sidebar-item-body">
          <div class="timeline-container">
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
          </div>
        </div>
      </Sidebar-item>
    </Sidebar>

    <Sidebar position="Right" full>
      <Sidebar-item title="低保在册户数" :title-img="articleImg" class="homeTopRight">
        <Title sub-title value="低保边缘户名单与总发放金额" />
        <div class="sidebar-item-body">
          <client-only>
            <vue-seamless-scroll :data="lowIncomeList" :class-option="classOption">
              <div v-for="(item, index) in lowIncomeList" :key="index" class="list-item-title">
                <div class="listItem" @click="showDesc(item)">
                  <div class="itemLeft">{{ item.name }}</div>
                  <div class="itemRight">{{ item.total }}元</div>
                </div>
              </div>
            </vue-seamless-scroll>
          </client-only>
        </div>
      </Sidebar-item>
      <Sidebar-item title="低保边缘在册户数" :title-img="articleImg" class="homeBottomRight">
        <Title sub-title value="低保边缘在册户数名单与总发放金额" />
        <div class="sidebar-item-body">
          <client-only>
            <vue-seamless-scroll :data="almostLowIncomeList" :class-option="classOption">
              <div v-for="(item, index) in almostLowIncomeList" :key="index" class="list-item-title">
                <div class="listItem" @click="showDesc(item)">
                  <div class="itemLeft">{{ item.name }}</div>
                  <div class="itemRight">{{ item.total }}元</div>
                </div>
              </div>
            </vue-seamless-scroll>
          </client-only>
        </div>
      </Sidebar-item>
    </Sidebar>

  </div>
</template>

<script>
import { Sidebar, SidebarItem, Title, PieChart } from '@/components'
import { articleImg, memberImg, chartImg } from '@/assets/img/images'

export default {
  components: {
    Sidebar,
    SidebarItem,
    Title,
    PieChart
  },
  data () {
    return {
      selectedPerson: {},
      partyBuilding: [
        {
          'title': '屿头乡机关第一党支部'
        },
        {
          'title': '屿头乡机关第二党支部'
        },
        {
          'title': '屿头乡机关退休党支部'
        },
        {
          'title': '屿头乡白石村党支部'
        },
        {
          'title': '屿头乡大田村党支部屿头乡金廊村党支部'
        },
        {
          'title': '屿头乡联一村党支部'
        },
        {
          'title': '屿头乡两岸村党支部'
        },
        {
          'title': '屿头乡沙滩村党支部'
        },
        {
          'title': '屿头乡屿头村党支部'
        },
        {
          'title': '屿头乡布袋山村党总支'
        },
        {
          'title': '屿头乡三联村党总支'
        },
        {
          'title': '屿头乡上凤村总党支'
        },
        {
          'title': '屿头乡兴安村党总支'
        }
      ],
      lowIncomeList: [
        {
          region: '沙滩',
          name: '卢昌森',
          id: '332603194309151113',
          type: '农村低保（低收入农户）',
          total: '810',
          time: '2020-10-01'
        },
        {
          region: '沙滩',
          name: '金仁江',
          id: '332622196110181110',
          type: '农村低保（低收入农户）',
          total: '1126',
          time: '2008-06-01'
        },
        {
          region: '沙滩',
          name: '黄天富',
          id: '332622193304041112',
          type: '农村低保（低收入农户）',
          total: '810',
          time: '2008-06-01'
        },
        {
          region: '沙滩',
          name: '陈文汉',
          id: '332603198009221130',
          type: '农村低保（低收入农户）',
          total: '513',
          time: '2011-08-30'
        },
        {
          region: '沙滩',
          name: '黄华林',
          id: '332603196609121118',
          type: '农村低保（低收入农户）',
          total: '810',
          time: '2013-09-11'
        },
        {
          region: '沙滩',
          name: '黄林福',
          id: '332622196005051138',
          type: '农村低保（低收入农户）',
          total: '1016',
          time: '2014-12-17'
        },
        {
          region: '沙滩',
          name: '黄小妙友',
          id: '332622195108011134',
          type: '农村低保（低收入农户）',
          total: '1016',
          time: '2014-12-17'
        },
        {
          region: '沙滩',
          name: '陈根福',
          id: '332603197804071130',
          type: '农村低保（低收入农户）',
          total: '1749',
          time: '2016-09-18'
        },
        {
          region: '沙滩',
          name: '黄仁富',
          id: '332603196803291110',
          type: '农村低保（低收入农户）',
          total: '1110',
          time: '2017-05-18'
        }
      ],
      mapping: {
        'region': '行政区划',
        'name': '人员姓名',
        'id': '身份证',
        'type': '低保边缘户',
        'total': '总发放金额',
        'time': '救助日期'
      },
      almostLowIncomeList: [
        {
          region: '沙滩',
          name: '徐香云',
          id: '33260319500326112X',
          type: '低保边缘户',
          total: '100',
          time: '2018-12-01'
        },
        {
          region: '沙滩',
          name: '黄斌',
          id: '332603197308101118',
          type: '低保边缘户',
          total: '100',
          time: '2018-12-01'
        },
        {
          region: '沙滩',
          name: '黄杏福',
          id: '332622195901181112',
          type: '低保边缘户',
          total: '100',
          time: '2017-02-17'
        },
        {
          region: '沙滩',
          name: '杨连香',
          id: '332603196212051123',
          type: '低保边缘户',
          total: '100',
          time: '2017-02-17'
        },
        {
          region: '沙滩',
          name: '黄伟',
          id: '331003199307181115',
          type: '低保边缘户',
          total: '100',
          time: '2017-02-17'
        },
        {
          region: '沙滩',
          name: '黄仁国',
          id: '332603196311051110',
          type: '低保边缘户',
          total: '100',
          time: '2017-10-17'
        },
        {
          region: '沙滩',
          name: '朱方云',
          id: '332603196604131229',
          type: '低保边缘户',
          total: '100',
          time: '2017-10-17'
        },
        {
          region: '沙滩',
          name: '黄庆元',
          id: '331003199104201112',
          type: '低保边缘户',
          total: '100',
          time: '2017-10-17'
        },
        {
          region: '沙滩',
          name: '黄菊青',
          id: '332622193902221121',
          type: '低保边缘户',
          total: '100',
          time: '2017-10-17'
        },
        {
          region: '沙滩',
          name: '黄志炳',
          id: '332603196507121117',
          type: '低保边缘户',
          total: '100',
          time: '2017-10-17'
        },
        {
          region: '沙滩',
          name: '黄红磊',
          id: '331003200410181119',
          type: '低保边缘户',
          total: '100',
          time: '2017-10-17'
        }
      ],
      totalNumber: 396720,
      currentNumber: 4635,
      todayTotal: 32445,
      articleImg,
      memberImg,
      chartImg,
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
  },
  computed: {
    classOption () {
      return {
        step: 0.3, // 数值越大速度滚动越快
        limitMoveNum: 13, // 开始无缝滚动的数据量 this.dataList.length
        hoverStop: true, // 是否开启鼠标悬停stop
        direction: 1, // 0向下 1向上 2向左 3向右
        openWatch: true, // 开启数据实时监控刷新dom
        singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
        singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
        waitTime: 1000 // 单步运动停止的时间(默认值1000ms)
      }
    }
  },
  mounted () {
    // setInterval(() => {
    //   this.totalNumber++
    // }, 3000)

    // setInterval(() => {
    //   this.currentNumber++
    // }, 3000)

    // setInterval(() => {
    //   this.todayTotal++
    // }, 3000)
  },
  methods: {
    showDesc (item) {
      // this.qrcodeUrl = ''
      // this.articleTitle = ''
      // e && e.preventDefault()
      this.selectedPerson = item
      // if (!qrcode) return

      // this.modalWidth = window.innerWidth / 1920 * 465
      // this.modalHeight = window.innerHeight / 1080 * 531

      // this.qrcodeUrl = qrcode
      // this.articleTitle = title
      this.$modal.show('lowIncomeDesc')
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
  // .hHeight(300);

  overflow: auto;
}

.count {
  .wHeight(60);
  .Margin(23, 0, 20, 0);
  white-space: nowrap;

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

.sidebar-item-body {
    height: 100%;

    .item-title {
      .wHeight(29);
      .LineHeight(29);
      .Padding(0, 0, 0, 24);
      .FontSize(14);

      background:rgba(57, 57, 91, .3);
      color: @sidebarItemColor;
    }

    .swiper {
      .TransformTranslate(0, 0, 0);

      height: 100%;

      .swiper-item-child {
        .Flex;
        .Flex-col;

        >div {
          &:last-of-type {
            .Flex-1;
            .Padding(4, 31, 7, 42);
            .FontSize(14);

            color: #D3CDE3;

            >div {
              .Flex;
              .Margin(7, 0, 7, 0);

              >div {
                &:first-of-type {
                  .Width(18);
                  .wHeight(18);
                  .Margin(0, 17, 0, 0);

                  >img {
                    width: 100%;
                    height: 100%;
                  }
                }

                &:nth-of-type(2) {
                  .Flex-1;
                }
              }
            }
          }
        }
      }
    }
  }

  .timeline-container {
    .Flex;
    .Flex-col;
    .MarginRight(-10);
    .PaddingRight(10);

    height: 100%;
    overflow-y: auto;

    /deep/ .timeline-swiper {
      margin: 0 !important;

      .swiper-slide {
        .Flex;
        .Flex-col;

        padding-bottom: 0 !important;
      }

      .swiper-pagination {
        right: 0 !important;
      }
    }

    .timeline-item {
      .Flex;
      .Flex-1;

      position: relative;
      cursor: pointer;
      max-height: 20%;

      .item-time {
        .Margin(3, 0, 0, 0);
        .wHeight(20);
        .LineHeight(20);
        .Width(64);
        .FontSize(12);
        .Padding(0, 0, 0, 8);

        &.today {
          color: #444444;
          .Background('~assets/img/timeline/today@2x.png');
        }

        &.date {
          color: #FFFFFF;
          .Background('~assets/img/timeline/date@2x.png');
        }
      }

      .item-body {
        .Flex-1;
        .MarginRight(15);
        .MarginBottom(8);
        .MarginLeft(6);
        .PaddingBottom(9);
        .Flex;
        .Flex-col;
        .Flex-justify-spacebetween;

        .item-title {
          .textOverflow;
          .Flex;
          .Flex-align-center;
          .MarginBottom(8);

          height: 39.72% !important;
          line-height: unset !important;
          overflow: visible;

          >span {
            .textOverflow;
            .Width(173);

            display: inline-block;
          }
        }

        .item-content {
          .Flex;

          .left {
            .FontSize(12);
            .MarginLeft(24);
            .Width(209);
            .textOverflow-line2;

            color: #D3CDE3;
          }

          .right {
            .Flex-1;
            .wHeight(18);
            .Width(18);
            .Align-self-flex-end;

            position: relative;

            img {
              .wHeight(18);
              .Width(18);

              position: absolute;
              bottom: 0;
              right: 0;
            }
          }
        }
      }

      &:hover {
        .item-body {
          &,
          .item-title {
            background: #4055DF;
          }
        }
      }

      &::after {
        .Left(61);
        .Width(1);

        content: "";
        position: absolute;
        top: 0;
        min-width: 1px;
        height: 100%;
        background: #FFF;
        opacity: .15;
      }
    }
  }

  .wrapper {
    overflow: auto;
    // min-height: 350px;
  }

  .articleContent {
    .Flex;
    .Flex-col;
    .MarginRight(-12);
    .PaddingRight(12);
    .hHeight(300);

    // overflow: hidden;
  }

  .homeTopLeft {
    flex: 13;
    min-height: 1px;
  }

  .homeBottomLeft {
    flex: 7;
    min-height: 1px;
  }

  .homeTopRight {
    flex: 1;
    min-height: 1px;
  }

  .homeBottomRight {
    flex: 1;
    min-height: 1px;
  }

  .listItem {
    display: flex;
    justify-content: space-between;
  }
</style>
