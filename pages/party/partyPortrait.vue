<template>
  <div class="partywork-wrapper">

    <modal v-if="inited" name="qrcode" width="24.22%" height="49.17%" :pivot-y="0.4">
      <div>
        <p class="modal-title">
          <span>{{ articleTitle }}</span>
        </p>

        <div class="qrcode">
          <img src="@/assets/img/qrcode@2x.png" alt="qrcode">
        </div>

        <div class="close-btn" @click="$modal.hide('qrcode')" />
      </div>
    </modal>

    <Sidebar position="Left">

      <Sidebar-item title="党员信息" :title-img="articleImg" class="article">
        <div class="sidebar-item-body">
          <div class="timeline-container">
            <client-only>
              <swiper :options="swiperYOption" class="timeline-swiper">

                <swiper-slide>
                  <Title sub-title value="沙滩村党员性别分布" />
                  <PieChart
                    :pieData="[
                      {value:21, name:'男'},
                      {value:9, name:'女'},
                    ]"
                    id-name="gender-distribution"
                  />
                </swiper-slide>
                <swiper-slide>
                  <Title sub-title value="沙滩村党员学习分布" />
                  <PieChart
                    :pieData="[
                    {value:20, name:'初中以下'},
                    {value:7, name:'高中'},
                    {value:3, name:'大专以上'},
                    ]"
                    id-name="education-distribution"
                  />
                </swiper-slide>
                <swiper-slide>
                  <Title sub-title value="沙滩村党员年龄分布" />
                  <PieChart
                    :pieData="[
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
                </swiper-slide>
                <div slot="pagination" class="swiper-pagination" />

              </swiper>
            </client-only>
          </div>
        </div>
      </Sidebar-item>

      <Sidebar-item title="支部名单" :title-img="memberImg" class="member">
        <div class="sidebar-item-body">
          <client-only>

            <swiper :options="swiperXOption" class="swiper">
              <swiper-slide v-for="(group, index) in partyBuilding" :key="index">

                <div v-for="(item, gIndex) in group" :key="gIndex" class="swiper-item-child">
                  <div class="item-title">{{ item.name }}</div>

                  <!-- <div>
                    <div v-for="key in organizes" :key="key">
                      <div>
                        <img :src="ImgTable[key] || ''" :alt="jobTable[key]">
                      </div>
                      <div>{{ jobTable[key] || '' }}</div>
                      <div>{{ item[key] || '' }}</div>

                    </div>
                  </div> -->

                </div>

              </swiper-slide>
              <div slot="pagination" class="swiper-pagination" />
            </swiper>
          </client-only>

        </div>
      </Sidebar-item>
    </Sidebar>

    <Sidebar position="Right" full>
      <!-- <Sidebar-item title="党员数量" :title-img="chartImg" :custom-class="['bg-long']">
        <div class="right-sidebar-body">

          <div class="padding-bottom">
            <Title sub-title value="学校党员总数" />

            <div class="filters">
              <div class="filter-container">
                <p class="title">按年份</p>
                <client-only>
                  <v-select
                    v-model="allYear"
                    class="selector"
                    :clearable="false"
                    :searchable="false"
                    dir="ltr"
                    :options="yearList"
                  />
                </client-only>
              </div>

              <div class="filter-container">
                <p class="title">按角色</p>
                <client-only>
                  <v-select
                    v-model="actor"
                    class="selector"
                    :clearable="false"
                    :searchable="false"
                    :options="['全部角色', '男', '女']"
                  />
                </client-only>
              </div>
            </div>

            <div class="count">
              <span>当年总数</span>
              <span>
                <span>{{ allTotal || 0 }}</span>
                <span>人</span>
              </span>
            </div>

            <BarChart
              :option="chartOptions"
              :bar-data="{ seriesData: allTrendList, seriesKeys, seriesSort, xAxisKey, xAxisFormatter }"
              id-name="scholl-count"
            />
          </div>

          <div>
            <Title sub-title value="各支部党员数量" />

            <div class="filters">
              <div class="filter-container">
                <p class="title">按年份</p>
                <div>
                  <client-only>
                    <v-select
                      v-model="branchYear"
                      class="selector"
                      :clearable="false"
                      :searchable="false"
                      :options="yearList"
                    />
                  </client-only>
                </div>
              </div>

              <div class="filter-container">
                <p class="title">按角色</p>
                <div>
                  <client-only>
                    <v-select
                      v-model="actor"
                      class="selector"
                      :clearable="false"
                      :searchable="false"
                      :options="['全部角色', '男', '女']"
                    />
                  </client-only>
                </div>
              </div>
            </div>

            <div class="count">
              <span>当年总数</span>
              <span>
                <span>{{ branchTotal || 0 }}</span>
                <span>人</span>
              </span>
            </div>

            <BarChart
              :option="chartOptions"
              :bar-data="{ seriesData: branchTrendList, seriesKeys, seriesSort, xAxisKey, xAxisFormatter }"
              id-name="part-count"
            />
          </div>

        </div>
      </Sidebar-item> -->
    </Sidebar>

  </div>
</template>

<script>
import { Sidebar, SidebarItem, Title, BarChart, PieChart } from '@/components'
import moment from 'moment'

import { articleImg, memberImg, chartImg, zhibu, shuji } from '@/assets/img/images'

const ImgTable = {
  title: zhibu,
  branchLeader: shuji,
  organizingLeader: zhibu,
  postLeader: shuji
}
const jobTable = {
  title: '支部',
  branchLeader: '支部书记',
  organizingLeader: '组委',
  postLeader: '宣委'
}
const organizes = ['title', 'branchLeader', 'organizingLeader', 'postLeader']

export default {
  components: {
    Sidebar,
    SidebarItem,
    Title,
    BarChart,
    PieChart
  },

  data () {
    return {
      inited: false,
      allYear: 2019,
      branchYear: 2019,
      yearList: [2019, 2018],
      actor: '全部角色',

      qrcodeUrl: '',
      articleTitle: '',
      modalWidth: 465,
      modalHeight: 531,

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
      },

      swiperXOption: {
        pagination: {
          el: '.swiper-pagination'
        }
      },
      ImgTable,
      jobTable,
      organizes,

      chartOptions: {
        color: ['#2793FA', '#16FAB0']
      },
      seriesKeys: ['maleTotal', 'femaleTotal'],
      xAxisKey: 'trendMonth',

      articleImg,
      memberImg,
      chartImg
    }
  },

  async asyncData (self) {
    const data = {
      partyArticle: [
        new Array(2).fill(1).map((i, k) => ({
          id: k,
          publisTime: moment().format('MM-DD'),
          title: '标题' + (Math.random() * 10000000).toFixed(0),
          description: '内容' + (Math.random() * 10000000).toFixed(0)
        })),
        new Array(2).fill(1).map((i, k) => ({
          id: k,
          publisTime: moment().format('MM-DD'),
          title: '标题' + (Math.random() * 10000000).toFixed(0),
          description: '内容' + (Math.random() * 10000000).toFixed(0)
        }))
      ],
      articleCount: 5,

      partyBuilding: [
        [
          {
            name: '屿头乡机关第一党支部'
          },
          {
            name: '屿头乡机关第二党支部'
          },
          {
            name: '屿头乡机关退休党支部'
          },
          {
            name: '屿头乡白石村党支部'
          },
          {
            name: '屿头乡大田村党支部'
          },
          {
            name: '屿头乡金廊村党支部'
          },
          {
            name: '屿头乡联一村党支部'
          },
          {
            name: '屿头乡两岸村党支部'
          },
          {
            name: '屿头乡沙滩村党支部'
          },
          {
            name: '屿头乡屿头村党支部'
          },
          {
            name: '屿头乡布袋山村党总支'
          },
          {
            name: '屿头乡三联村党总支'
          },
          {
            name: '屿头乡上凤村总党支'
          },
          {
            name: '屿头乡兴安村党总支'
          }
        ]
      ],
      buildingCount: 6,

      allTotal: (Math.random() * 200).toFixed(0),
      allTrendList: [
        ...new Array(5).fill(1).map((i, k) => ({
          maleTotal: (Math.random() * 100).toFixed(0),
          femaleTotal: (Math.random() * 100).toFixed(0),
          trendMonth: k + 3
        }))
      ],
      branchTotal: (Math.random() * 200).toFixed(0),
      branchTrendList: [
        ...new Array(5).fill(1).map((i, k) => ({
          maleTotal: (Math.random() * 100).toFixed(0),
          femaleTotal: (Math.random() * 100).toFixed(0),
          trendMonth: k + 3
        }))
      ]
    }
    return data
  },

  mounted () {
    this.inited = true
  },

  methods: {
    moment,

    xAxisFormatter (text) {
      if (text && text.split) {
        return text.split('-')[1] || text
      }
      return text
    },

    seriesSort (arr) {
      const { xAxisKey } = this
      arr.sort((a, b) => moment(a[xAxisKey]).isAfter(b[xAxisKey]) ? 1 : -1)
    },

    clickArticle (e, { qrcode, title }) {
      this.qrcodeUrl = ''
      this.articleTitle = ''
      e && e.preventDefault()
      if (!qrcode) return

      this.modalWidth = window.innerWidth / 1920 * 465
      this.modalHeight = window.innerHeight / 1080 * 531

      this.qrcodeUrl = qrcode
      this.articleTitle = title
      this.$modal.show('qrcode')
    }
  }

}
</script>

<style lang="less" scoped>
  * {
    user-select: none;
  }

  .padding-bottom {
    .PaddingBottom(30);
  }

  .article {
    .Flex-unset;
    .hHeight(493);
    .maxhHeight(493);
  }

  .member {
    .Flex-unset;
    .hHeight(477);
    .maxhHeight(477);
  }

  /deep/ .swiper-pagination-bullet {
    background: #ccc !important;
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

  .right-sidebar-body {
    .Flex;
    .Flex-col;

    height: 100%;

    >div {
      .Flex-1;
      .Flex;
      .Flex-col;

      height: 100%;

      .filters {
        .Flex;

        .filter-container {
          padding-bottom: 0;
        }

        >div {
          .Flex-1;

          p.title {
            .Margin(14, 0, 14, 0);
          }
        }
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
    }
  }
</style>
