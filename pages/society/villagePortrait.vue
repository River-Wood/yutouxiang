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
      <Sidebar-item title="低保在册户数" :title-img="articleImg" :custom-class="['bg-long']">
        <!-- <div class="content">
        </div> -->
        <Title sub-title value="低保边缘户名单与总发放金额" />
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
      </Sidebar-item>
    </Sidebar>

    <Sidebar position="Right" full>
      <Sidebar-item title="低保边缘在册户数" :title-img="articleImg" :custom-class="['bg-middle']">
        <Title sub-title value="低保边缘在册户数名单与总发放金额" />
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
      selectedPerson: {},
      mapping: {
        'region': '行政区划',
        'name': '人员姓名',
        'id': '身份证',
        'type': '低保边缘户',
        'total': '总发放金额',
        'time': '救助日期'
      },
      articleImg,
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
      ]
    }
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

.listItem {
  display: flex;
  justify-content: space-between;
}
</style>
