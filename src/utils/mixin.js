export const BackTopMixin = {
  data() {
    return {
      isShowBackTop: false,//用于控制是否显示BackTop
    }
  },
  methods: {
    backClick() {//触发回到顶部
      this.$refs.scroll.scroll.scrollTo(0,0)
    },
  }
}
import TabControl from '@/components/content/tabControl/TabControl'
export const tabControlMixin = {
  data() {
    return {
      tabcontrol_isShow: false,//用于控制tabcontrol是否要吸顶固定
      HCurrentIndex: 'pop'
    }
  },
  components: {
    TabControl
  },
  methods: {
    tabClick(index){//接收从tabcontrol传过来的index，从而对流行、新款、精选之间的数据切换显示
      switch (index) {
        case 0:
          this.HCurrentIndex = 'pop'
          break;
        case 1:
          this.HCurrentIndex = 'new'
          break;
        case 2:
          this.HCurrentIndex = 'sell'
          break;
        default:
          break;
      }
      // this.$refs.tabcontrol1.currentIndex = index,
      // this.$refs.tabcontrol2.currentIndex = index
    },
  }
}