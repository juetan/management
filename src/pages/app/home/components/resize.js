// 参考自：https://github.com/gcddblue/vue-admin-webapp/blob/master/src/mixins/resize.js
export default {
  data() {
    return {
      sideBarDom: null,
    };
  },
  mounted() {
    this.windowInitResize();
    this.sideBarResize();
  },
  activated() {
    this.windowInitResize();
    this.sideBarResize();
  },
  deactivated() {
    this.removeWindowInitResize();
    this.removeSideBarResize();
  },
  destroyed() {
    this.removeWindowInitResize();
    this.removeSideBarResize();
  },
  methods: {
    resizeChart() {
      this.echart.resize();
    },
    windowInitResize() {
      window.addEventListener("resize", this.resizeChart);
    },
    removeWindowInitResize() {
      window.removeEventListener("resize", this.resizeChart);
    },
    sideWidthHandle(e) {
      if (e.propertyName === "width") {
        this.resizeChart();
      }
    },
    sideBarResize() {
      this.sideBarDom = document.getElementsByClassName("layout-sidebar")[0];
      this.sideBarDom.addEventListener("transitionend", this.sideWidthHandle);
    },
    removeSideBarResize() {
      this.sideBarDom.removeEventListener(
        "transitionend",
        this.sideWidthHandle
      );
    },
  },
};
