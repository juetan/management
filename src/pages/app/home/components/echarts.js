import i18n from "@/lang";

// 折线图参数
export const lineChartOptions = {
  // 提示框
  tooltip: {
    trigger: "axis",
  },
  // 图例说明
  legend: {
    icon: "roundRect",
    data: [
      i18n.t("dataTable.officeEquip"),
      i18n.t("dataTable.operationEquip"),
      i18n.t("dataTable.testEquip"),
      i18n.t("dataTable.fireEuip"),
    ],
  },
  // 绘图栅格
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true,
  },
  // 工具栏
  toolbox: {
    feature: {
      saveAsImage: {},
    },
  },
  // X轴坐标
  xAxis: {
    type: "category",
    boundaryGap: false,
    data: [
      i18n.t("home.mo"),
      i18n.t("home.tu"),
      i18n.t("home.we"),
      i18n.t("home.th"),
      i18n.t("home.fr"),
      i18n.t("home.sa"),
      i18n.t("home.su"),
    ],
  },
  // Y轴坐标
  yAxis: {
    type: "value",
    // show: false
  },
  // 系列的样式
  series: [
    {
      name: i18n.t("dataTable.officeEquip"),
      type: "line",
      stack: "总量",
      itemStyle: {
        normal: {
          color: "#09f",
          lineStyle: {
            color: "#09f",
          },
        },
      },
      data: [120, 600, 101, 400, 90, 230, 700],
    },
    {
      name: i18n.t("dataTable.operationEquip"),
      type: "line",
      stack: "总量",
      itemStyle: {
        normal: {
          color: "#3c9",
          lineStyle: {
            color: "#3c9",
          },
        },
      },
      data: [220, 182, 191, 234, 290, 330, 310],
    },
    {
      name: i18n.t("dataTable.testEquip"),
      type: "line",
      stack: "总量",
      itemStyle: {
        normal: {
          color: "#f90",
          lineStyle: {
            color: "#f90",
          },
        },
      },
      data: [150, 232, 201, 154, 190, 330, 410],
    },
    {
      name: i18n.t("dataTable.fireEuip"),
      type: "line",
      stack: "总量",
      itemStyle: {
        normal: {
          color: "#f66",
          lineStyle: {
            color: "#f66",
          },
        },
      },
      data: [320, 332, 301, 334, 390, 330, 320],
    },
  ],
};

// 扇形图参数
export const fanChartOptions = {
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b}: {c} ({d}%)",
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true,
  },
  legend: {
    icon: "circle",
    orient: "vertical",
    right: `20%`,
    top: "15%",
    itemGap: 20,
    data: [
      i18n.t("dataTable.officeEquip"),
      i18n.t("dataTable.operationEquip"),
      i18n.t("dataTable.testEquip"),
      i18n.t("dataTable.fireEuip"),
    ],
  },
  series: [
    {
      name: "设备统计",
      type: "pie",
      left: 10,
      radius: ["60%", "80%"],
      center: ["20%", "50%"],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: "center",
      },
      emphasis: {
        label: {
          show: true,
          fontSize: "16",
          fontWeight: "bold",
        },
      },
      labelLine: {
        show: false,
      },
      data: [
        {
          value: 335,
          name: i18n.t("dataTable.officeEquip"),
          itemStyle: { color: "#09f" },
        },
        {
          value: 310,
          name: i18n.t("dataTable.operationEquip"),
          itemStyle: { color: "#3c9" },
        },
        {
          value: 234,
          name: i18n.t("dataTable.testEquip"),
          itemStyle: { color: "#f66" },
        },
        {
          value: 135,
          name: i18n.t("dataTable.fireEuip"),
          itemStyle: { color: "#66f" },
        },
      ],
    },
  ],
};

export const barChartOptions = {
  color: ["#09f"],
  grid: {
    left: "3%",
    right: "4%",
    top: "5%",
    bottom: "3%",
    containLabel: true,
  },
  xAxis: [
    {
      type: "category",
      data: [
        i18n.t("home.mo"),
        i18n.t("home.tu"),
        i18n.t("home.we"),
        i18n.t("home.th"),
        i18n.t("home.fr"),
        i18n.t("home.sa"),
        i18n.t("home.su"),
      ],
      axisTick: {
        alignWithLabel: true,
      },
    },
  ],
  yAxis: [
    {
      type: "value",
    },
  ],
  series: [
    {
      name: "直接访问",
      type: "bar",
      barWidth: "25%",
      data: [10, 52, 200, 334, 390, 330, 220],
    },
  ],
};
