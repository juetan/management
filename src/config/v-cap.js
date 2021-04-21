import hasCapability from "@/helper/hasCapability";

const cap = {
  inserted(el, bind) {
    // 获取传入的权限值
    const capability = bind.value;
    // 如果为空直接返回
    if (!capability) return;
    const capabilitied = hasCapability(capability);
    // 如果没有权限，直接移除
    if (!capabilitied) {
      el.parentNode && el.parentNode.removeChild(el);
    }
  },
};

export default cap;
