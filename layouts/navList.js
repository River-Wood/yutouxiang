
export default {}

export const mainSubMenu = {
  name: 'main',
  title: 'main',
  children: [],
  url: '/'
}

export const navList = [
  // {
  //   name: 'Overview',
  //   title: '综合概况',
  //   url: '/overview'
  //   // children: []
  // },
  {
    name: 'Tour',
    title: '智慧旅游',
    url: '/tour',
    subItems: [
      {
        name: 'SpotInfo',
        title: '景点信息',
        url: '/tour/spotInfo'
      },
      {
        name: 'TouristInfo',
        title: '游客信息',
        url: '/tour/touristInfo'
      },
      {
        name: 'HotelInfo',
        title: '酒店民宿信息',
        url: '/tour/hotelInfo'
      },
      {
        name: 'SnackInfo',
        title: '餐饮小吃信息',
        url: '/tour/snackInfo'
      },
      {
        name: 'ParkingInfo',
        title: '停车场信息',
        url: '/tour/parkingInfo'
      },
      {
        name: 'ToiletInfo',
        title: '公厕信息',
        url: '/tour/toiletInfo'
      },
      {
        name: 'RouteInfo',
        title: '旅游线路信息',
        url: '/tour/routeInfo'
      },
      {
        name: 'ActivityInfo',
        title: '旅游活动信息',
        url: '/tour/activityInfo'
      },
      {
        name: 'PopulationStatistics',
        title: '人数统计',
        url: '/tour/populationStatistics'
      }
    ]
  },
  {
    name: 'Party',
    title: '党建信用',
    url: '/party',
    subItems: [
      {
        name: 'PartyPortrait',
        title: '党员画像',
        url: '/party/partyPortrait'
      },
      {
        name: 'ManagementPlatform',
        title: '管理平台',
        url: '/party/managementPlatform'
      },
      {
        name: 'SharingPlatform',
        title: '共享平台',
        url: '/party/sharingPlatform'
      }
    ]
  },
  {
    name: 'Manage',
    title: '综合治理',
    url: '/manage'
  },
  {
    name: 'Society',
    title: '智慧民生',
    url: '/society',
    subItems: [
      {
        name: 'VillagePortrait',
        title: '乡村整体',
        url: '/society/villagePortrait'
      },
      {
        name: 'EducationNTreatment',
        title: '教育与医疗',
        url: '/society/educationNTreatment'
      }
    ]
  }
]
