<template>
  <div class="box" :style="{marginTop:marginTop+'px'}">
    <div class="box-tile" style="width:calc(100% - 5px)">
      <div class="box-title-icon">
        <img
          src="@/assets/imgs/triangle.png"
          class="icon"
        />
        <p class="name">
          {{titleName}}
        </p>
      </div>
      <div class="box-title-select" v-if="showSelect">
        <select>
          <option v-for="item in selectOptionData" :key="item.value" :value="item.value">{{item.name}}</option>
        </select>
      </div>
      <div class="box-title-tab" v-if="showTab">
        <div class="tab-pane" :class="active==index?'active':''" v-for="( item, index) in tabTitle" :key="index" @click="changeTab(item,index)">
          {{item}}
        </div>
      </div>
    </div>
    <div  style="width: calc(100% - 18px);height: calc(100% - 40px)">
      <slot>

      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  props: {
    marginTop: {
      type: Number,
      default: 20
    },
    titleWidth: {
      type: Number,
      default: 395
    },
    titleName: {
      type: String,
      default: '各险种缴费分布'
    },
    selectOptionData: {
      type: Array,
      default: () => [
        {
          name: '征缴总金额',
          value: '征缴总金额'
        }
      ]
    },
    showSelect: {
      type: Boolean,
      default: true
    },
    tabTitle: {
      type: Array,
      default: () => ['城职养老', '城居养老', '机关养老', '失业保险', '工伤保险']
    },
    showTab: {
      type: Boolean,
      default: false
    },
    activeKey: {
      type: String,
      default: '0'
    }
  },
  data () {
    return {
      active: '0'
    }
  },
  methods: {
    changeTab (item, key) {
      this.active = key
      this.$emit('changeTabs', {value: item, key: key})
    }
  },
  watch: {
    activeKey: {
      handler: function (now, old) {
        this.active = now
      },
      deep: true
    }
  }
}
</script>

<style scoped lang="less">
  .box{
    width: 100%;
    height: 100%;
    padding: 9px;
    box-sizing: border-box;
  }
  .box-tile{
    display: flex;
    justify-content:space-between ;
    flex-direction: row;
    height: 40px;
    border-left: 6px solid #2383ed;
    background-image: linear-gradient(to left, rgba(7, 40, 84, 0.4), rgba(54, 152, 255, 0.2));
    background-blend-mode: normal, normal;
    .box-title-icon{
      display: flex;
      justify-content: space-around;
      flex-direction: row;
      align-items:center;
      .icon {
        width: 16px;
        height: 16px;
        margin-left: 10px;
      }
      .name{
        font-size: 18px;
      }
    }
    .box-title-select{
      margin-right: 10px;
      display: flex;
      align-items: center;
      select{
        width: 140px;
        height: 28px;
        padding-left: 5px;
        color: white;
        background-color: #061524;
        border: solid 1px #134086;
      }
    }
    .box-title-tab{
      display: flex;
      justify-content: left;
      flex-direction: row;
      .tab-pane {
        font-size: 14px;
        line-height: 40px;
        margin: 0 10px;
      }
      .active{
        border-bottom: 2px solid #2383ed;
      }
    }
  }

</style>
