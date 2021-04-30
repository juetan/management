// 函数功能：将color1按weight1的比重与color2混合在一起
// 参考修改自：https://github.com/hzsrc/webpack-theme-color-replacer/blob/7bd92d7c75be2ddc3ddd58119c20e64f3a559ac7/client/varyColor.js#L63
// mix为sass中mix函数的改装: https://github.com/sass/dart-sass/blob/master/lib/src/functions/color.dart

// 功能：将10进制转换为16进制(带前置0)，例如9=>09
// function pad2(num) {
//   var t = num.toString(16);
//   return t.length === 1 ? `0${t}` : t;
// }

// // 功能：将16进制转换为数组，例如#409EFF=>[64,158,255]
// function hexColorToArrColor(colorStr) {
//   // 如果为简化16进制，转换为完全16进制，例如#333=>#333333
//   if (colorStr.length === 4) {
//     colorStr =
//       "#" +
//       colorStr[1] +
//       colorStr[1] +
//       colorStr[2] +
//       colorStr[2] +
//       colorStr[3] +
//       colorStr[3];
//   }
//   var r = parseInt(colorStr.slice(1, 3), 16);
//   var g = parseInt(colorStr.slice(3, 5), 16);
//   var b = parseInt(colorStr.slice(5, 7), 16);
//   return [r, g, b];
// }

// /**
//  * 将2个颜色按一定比例混合
//  * @param {16进制} color1 颜色1
//  * @param {16进制} color2 颜色2
//  * @param {小数} weight1 颜色1比重
//  * @param {小数} alpha1 颜色1的alpha值
//  * @param {小数} alpha2 颜色2的alpha值
//  * @returns 16进制格式的颜色值
//  */
// function mix(color1, color2, weight1 = 0.5, alpha1 = 1, alpha2 = 1) {
//   // 颜色1组合比重(固定公式)
//   var w = 2 * weight1 - 1;
//   // 两个颜色的alpha差值
//   var a = alpha1 - alpha2;
//   // 颜色1的比重(固定公式)
//   var w1 = ((w * a === -1 ? w : (w + a) / (1 + w * a)) + 1) / 2;
//   // 颜色2的比重
//   var w2 = 1 - w1;

//   //将16进制转换为10进制
//   var rgb1 = hexColorToArrColor(color1);
//   var rgb2 = hexColorToArrColor(color2);
//   // console.log("rgb2:", color2, rgb2);
//   // 叠加后的红色值
//   var r = Math.round(w1 * rgb1[0] + w2 * rgb2[0]);
//   // 叠加后的绿色值
//   var g = Math.round(w1 * rgb1[1] + w2 * rgb2[1]);
//   // 叠加后的蓝色值
//   var b = Math.round(w1 * rgb1[2] + w2 * rgb2[2]);
//   // console.log("#", pad2(r), pad2(g), pad2(b));
//   // 返回16进制的颜色值
//   return "#" + pad2(r) + pad2(g) + pad2(b);
// }

// /**
//  * 将element-ui的品牌色进行处理
//  * @param {16进制字符串} color 品牌色
//  * @returns 由品牌色延申出的颜色数组
//  */
// function elementBrandColors(color) {
//   let colors = [];
//   // 0~9阶的品牌色
//   for (let i = 0; i < 10; i++) {
//     let mixedColor = mix("#fff", color, 0.1 * i);
//     colors.push(mixedColor);
//   }
//   // 按钮点击色(+10%的黑色)
//   let activedColor = mix("#000", color, "0.1");
//   // console.log(activedColor);
//   colors.push(activedColor);
//   return colors;
// }

// /**
//  * 将element-ui的功能色进行处理
//  * @param {16进制字符串} color 功能色
//  * @returns 由功能色延伸出的颜色数组
//  */
// function elementFunctionColors(color) {
//   let colors = [
//     // 功能色
//     color,
//     // 功能色-边框色(+80%白色)
//     mix("#fff", color, "0.8"),
//     // 功能色-背景色(+90%白色)
//     mix("#fff", color, "0.9"),
//   ];
//   return colors;
// }

/**
 * element-ui部分样式会冲突，需要过滤
 * @param {string} selector css选择器
 * @param {object} util 工具对象
 * @returns 过滤后的选择器
 */
function filerSelector(selector, util) {
  // element-ui这几个样式太宽泛，需减小范围
  switch (selector) {
    case ".el-button:active":
    case ".el-button:focus,.el-button:hover":
      return util.changeEach(
        selector,
        ".el-button--default:not(.is-plain):not(.el-button--primary)"
      );
    case ".el-button.is-active,.el-button.is-plain:active":
      return "useless";
    // return util.changeEach(selector, ":not(.el-button--primary)");
    case ".el-button.is-plain:active":
    case ".el-button.is-plain:focus,.el-button.is-plain:hover":
      // return util.changeEach(selector, " span");
      return util.changeEach(selector, ".el-button--default");
    case ".el-pagination button:hover":
      return selector + ":not(:disabled)";
    case ".el-pagination.is-background .el-pager li:not(.disabled):hover":
      return selector + ":not(.active)";
    case ".el-tag":
      return selector + ":not(.el-tag--dark)";
    default:
      return selector;
  }
}

module.exports = filerSelector;
