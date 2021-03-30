import Driver from "driver.js";
import "driver.js/dist/driver.min.css";

// 将driver实例挂载到vue原型上
const driver = new Driver({
  doneBtnText: "完成", // 完成文本
  closeBtnText: "关闭", // 关闭文本
  prevBtnText: "上一步", // 上一步文本
  nextBtnText: "下一步", // 下一步文本
});

// 通过driver.start()使用
export default driver;
