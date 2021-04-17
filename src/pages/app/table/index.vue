<template>
<el-card id="tableCard" shadow="never">
  <div slot="header" class="clearfix">
    <span>{{ $t('dataTable.dataList') }}</span>
  </div>
  <div class="data-table">
    <!-- 全部选择 -->
    <el-button type="primary" size="small" @click="handleSelectAll" icon="el-icon-document-copy">{{ $t('dataTable.selectAll') }}</el-button>
    <!-- 删除选中 -->
    <el-button type="danger" size="small" @click="handleDeleteSelection" icon="el-icon-delete" :disabled="!selectedData.length">{{ $t('dataTable.delectSelect') }}</el-button>
    <!-- 搜索按钮 -->
    <el-button type="primary" size="small" icon="el-icon-search" style="float: right" @click="handleSearch">{{ $t('dataTable.search') }}</el-button>
    <!-- 搜索框 -->
    <el-input v-model="searchKeyword" size="small" style="width: 280px; float: right;" :placeholder="$t('dataTable.searchPlaceholder')">
      <el-select v-model="searchType" slot="prepend" >
        <el-option :label="$t('dataTable.name')" :value="1" index="1"></el-option>
        <el-option :label="$t('dataTable.number')" :value="3" index="1"></el-option>
        <el-option :label="$t('dataTable.manu')" :value="2" index="1"></el-option>
      </el-select>
    </el-input>
    <!-- 新增数据 -->
    <el-button size="small" type="primary" icon="el-icon-plus" style="margin-left: 10px;" @click="handleAddEquipment">{{ $t('dataTable.add') }}</el-button>
  </div>
  <el-table :data="tableData" style="width: 100%" ref="dataTable" @selection-change="handleSelectionChange" id="dataTable">
    <!-- 选择框 -->
    <el-table-column type="selection" width="55" align="left"></el-table-column>
    <!-- 序号 -->
    <el-table-column prop="id" :label="$t('dataTable.id')" width="100" align="left"></el-table-column>
    <!-- 图片 -->
    <el-table-column prop="picture" :label="$t('dataTable.image')" width="100" align="left">
      <template slot-scope="scope">
        <el-image :src="scope.row.picture" class="image"></el-image>
      </template>
    </el-table-column>
    <!-- 名称 -->
    <el-table-column prop="name" :label="$t('dataTable.name')" width="150" align="left"></el-table-column>
    <!-- 编号 -->
    <el-table-column prop="number" :label="$t('dataTable.number')" width="150" align="left"></el-table-column>
    <!-- 类型 -->
    <el-table-column :label="$t('dataTable.type')" width="150" align="left">
      <template slot-scope="scope">
        {{scope.row.type | formatType}}
      </template>
    </el-table-column>
    <!-- 规格 -->
    <el-table-column prop="spec" :label="$t('dataTable.spec')" width="150" align="left"></el-table-column>
    <!-- 厂商 -->
    <el-table-column prop="manufacturer" :label="$t('dataTable.manu')" width="150" align="left"></el-table-column>
    <!-- 日期 -->
    <el-table-column prop="buyDate" :label="$t('dataTable.date')" width="150" align="left"></el-table-column>
    <!-- 状态 -->
    <el-table-column :label="$t('dataTable.status')" width="150" align="left" >
      <template slot-scope="scope">
        <span class="status" :class="formatStatusClassName(scope.row.status)">
          {{ scope.row.status | formatStatus}}
        </span>
      </template>
    </el-table-column>
    <!-- 备注 -->
    <el-table-column prop="mark" :label="$t('dataTable.mark')" align="left" ></el-table-column>
    <!-- 操作 -->
    <el-table-column :label="$t('dataTable.operation')" align="left" width="160">
      <template slot-scope="scope">
        <el-button @click="handleViewRow(scope.$index,scope.row,tableData)" type="text">{{ $t('dataTable.detail') }}</el-button>
        <el-button @click="handelEditRow(scope.$index,scope.row,tableData)" type="text">{{ $t('dataTable.edit') }}</el-button>
        <el-button @click="handleDeleteRow(scope.$index,scope.row,tableData)" type="text">{{ $t('dataTable.delete') }}</el-button>
      </template>
    </el-table-column>
  </el-table>
  <!-- 表格分页 -->
  <el-pagination
    background
    layout="total, sizes, prev, pager, next"
    :page-sizes="pageSizes"
    :page-size="pageSize"
    :current-page="currentPage"
    :total="total"
    @size-change="handleSizeChange"
    @current-change="handlePageChange"
    class="pagination-right"
  ></el-pagination>
</el-card>
</template>

<script>
export default {
  name: "dataTable",
  data() {
    return {
      // 选中的行
      selectedData: [],
      // 搜索类型：1.名字; 2.编号; 3.厂商;
      searchType: 1,
      // 搜索关键字
      searchKeyword: '',
      // 每页显示数量
      pageSizes: [10,15,20,30],
      // 每页显示数量
      pageSize: 11,
      // 当前页
      currentPage: 1,
      // 数据总量
      total: 0,
      // 所有数据：因为没有真实服务器，这里暂且将所有数据放这里
      allData: [],
      // 过滤后的数据
      filteredData: [],
      // 表格数据
      tableData: [],
    }
  },
  created() {
    // 网络请求数据
    this.$api.table.getTableData().then((data)=>{
      // 保存所有的数据
      this.allData = Object.freeze(data.data);
      // 过滤后的数据(使用搜索后)
      Object.assign(this.filteredData,this.allData);
      // 数据总量
      this.total = this.allData.length
      // 更新表格数据
      this._updateTableData();
    })
  },
  methods: {
    // 格式化输出设备状态
    formatedStatus(row,column,val) {
      if(0 <= val && val <= 3) {
        return this.statusLabel[val]
      } else {
        return this.statusLabel[4]
      }
    },
    // 根据设备状态输出
    formatStatusClassName(status) {
      return (status===1) ? 'status-normal' : (status===2) ? 'status-warning' : 'status-error'
    },

    // 表格操作[1]：全选功能
    handleSelectAll() {
      this.$refs.dataTable.toggleAllSelection()
    },
    // 表格操作[2]: 表格选择框发生变化时的处理
    handleSelectionChange(selection) {
      this.selectedData = selection
    },
    // 表格操作[3]：删除选中数据
    handleDeleteSelection() {
      // 弹窗确认删除操作
      this.$confirm(this.$t('dataTable.deleteSelectedConfirm'),this.$t('dataTable.dangerOpertaion'),{type: "error"}).then(()=>{
        // 遍历要删除的数据项
        this.selectedData.forEach((item)=> {
          // 从现有表格数据中删去这些数据项
          this.tableData.forEach((itemI, indexI)=> {
            if (item === itemI) {
              this.filteredData.splice(indexI, 1);
            }
          });
        });
        // 更新表格数据
        this._updateTableData()
        // 删除后弹窗提示
        this.$message({message: this.$t('dataTable.deleteSuccess'), type: 'success'})
      })
    },
    // 表格操作[4]：新增数据
    handleAddEquipment() {
      this.$confirm('功能正在开发中，敬请期待！','通知')
    },
    // 表格操作[5]：搜索功能
    handleSearch() {
      // 没有搜索关键字的话，直接返回所有数据
      if(!this.searchKeyword) {
        this.filteredData = this.allData
      } else {
        // 根据搜索类型判断搜索的字段
        let attr = this.searchType===1 ? 'name' : this.searchType===2 ? 'number' : 'manufacturer';
        // 过滤数据，返回相匹配的数据
        this.filteredData = this.allData.filter(item=>{
          return item[attr].includes(this.searchKeyword)
        })
      }
      // 重置当前页码
      this.currentPage = 1
      // 重置当前分页数量
      this.pageSize = 10
      // 更新表格数据
      this._updateTableData()
    },

    // 分页操作[1]: 更新分页大小显示
    handleSizeChange(val) {
      this.pageSize = val
      this._updateTableData()
    },
    // 分页操作[2]: 更新分页页码
    handlePageChange(val) {
      this.currentPage = val
      this._updateTableData()
    },

    // 单行操作[3]：删除单行处理事件
    handleDeleteRow(index,row) {
      // 弹窗确认操作
      this.$confirm(this.$t('dataTable.deleteSelectedConfirm'),this.$t('dataTable.dangerOpertaion'),{type: "error"}).then(()=>{
        // 遍历数据，删除匹配的数据
        this.filteredData.forEach((item,index)=>{
          if(item.id === row.id) {
            this.filteredData.splice(index,1)
          }
        });
        // 更新表格数据
        this._updateTableData();
        // 删除后弹窗提示
        this.$message({'message':  this.$t('dataTable.deleteSuccess'), type: 'success'})
      })
    },

    // 内置方法[1]: 更新表格数据
    _updateTableData() {
      // 截取起点索引号
      let start = (this.currentPage - 1) * this.pageSize;
      // 截取终点索引号
      let end = start + this.pageSize;
      // 更新表格数据
      this.tableData = this.filteredData.slice(start, end);
      // 更新数据总量
      this.total = this.filteredData.length
    },
  },
  filters: {
    // 类型
    formatType(type) {
      return (type===1) ? '办公设备' : (type===2) ? '测试设备' : '运维设备'
    },
    // 状态
    formatStatus(status) {
      return (status===1) ? '正常' : (status===2) ? '故障' : '停用'
    },
  }
}
</script>

<style lang="scss" scoped>
  #tableCard {
    box-sizing: border-box;
  }
  .image {
    width: 30px;
    height: 30px;
  }
  .data-table {
    margin-bottom: 12px;
  }
  .pagination-right {
    float: right;
    margin-top: 12px;
    padding-bottom: 20px;
  }
  // element-ui的样式修改需要做穿透
  ::v-deep .el-select .el-input {
    width: 86px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: $--color-white;
  }
  // 状态样式
  .status::before {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 100%;
    display: inline-block;
    margin-right: 8px;
    vertical-align: 2px;
  }
  // 正常状态样式
  .status-normal::before {
    background: $--color-success;
  }
  // 故障状态样式
  .status-warning::before {
    background: $--color-warning;
  }
  // 停用状态样式
  .status-error::before {
    background: $--color-info;
  }
  
</style>