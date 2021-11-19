<template>
  <div class="attributes-table">
    <el-collapse>
      <el-collapse-item>
        <template slot="title">
          <h3 style="letter-spacing: 3px">属性列表:</h3>
        </template>
        <el-table
          :data="data"
          style="width: 100%"
        >
          <el-table-column
            prop="propsName"
            label="属性名"
            width="180"
          >
          </el-table-column>
          <el-table-column
            prop="des"
            label="说明"
            width="180"
          >
          </el-table-column>
          <el-table-column
            prop="type"
            label="类型"
          >
          </el-table-column>
          <el-table-column
            prop="options"
            label="可选值"
          >
          </el-table-column>
          <el-table-column
            prop="default"
            label="默认值"
          >
          </el-table-column>
        </el-table>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  name: 'AttributesTable',
  props: {
    data: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped lang="less">
.attributes-table {
  width: 80%;
  border: 2px #e1e1e1 solid;
  border-radius: 10px;
  padding: 10px;
  margin: 20px 0px;
}

/deep/ .el-collapse {
  border: none;
}

/deep/ .el-collapse-item__header {
  border: none;
}

/deep/ .el-collapse-item__wrap {
  border: none;
}

</style>
