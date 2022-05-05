<template>
    <div :style="{color: textColor}" class="ballBox">
      <div class="num">{{data.value}}</div>
      <div class="desc">{{data.name}}</div>
      <img :src="require(`@/assets/imgs/${url}.png`)">
    </div>
</template>

<script>
export default {
  name: 'ball',
  props: {
    url: {
      type: String,
      default: '球02-蓝色'
    },
    textColor: {
      type: String,
      default: '#bbe4ff'
    },
    data: {
      type: Object,
      default: () => ({name: '个人缴费金额', value: 65.7})
    }
  }
}
</script>

<style scoped lang="less">
.ballBox{
  width: 84px;
  text-align: center;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  font-size: 14px;
  .num{
    font-size: 20px;
  }
}
</style>
