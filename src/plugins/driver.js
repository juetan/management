import Driver from "driver.js";
import "driver.js/dist/driver.min.css";
import "@/assets/styles/vendor-driver.scss";

// 创建实例
const driver = new Driver({
  doneBtnText: "完成",
  closeBtnText: "关闭", 
  prevBtnText: "上一步", 
  nextBtnText: "下一步", 
});

// 通过driver.start()使用
export default driver;
