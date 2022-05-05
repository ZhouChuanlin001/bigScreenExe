import Vue from 'vue'

const requireComponent = require.context(
  '../../components/common/boxStyle',
  false,
  /\.vue$/
)
requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)
  const componentName = fileName.replace(/^\.\//, '').replace(/\.\w+$/, '')
  // 因为得到的filename格式是: './accordion.vue', 所以这里我们去掉头和尾，只保留真正的文件名

  Vue.component(componentName, componentConfig.default || componentConfig)
})
