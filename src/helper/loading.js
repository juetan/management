import { loading } from "@/plugins/element-ui";
import i18n from "@/lang";

let count = 0;
let loader;

// 打开loading,使用count避免多个请求时，只完成第一个请求就关闭loading
function open() {
  if (++count === 1) {
    loader = loading.service({
      spinner: "el-icon-loading",
      text: i18n.t("request.loading"),
      background: "transparent",
    });
  }
}

// 关闭loading
function close() {
  if (--count === 0) {
    loader.close();
  }
}

export default {
  open,
  close,
};
