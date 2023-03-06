<template>
  <el-row :gutter="20">
    <el-col :span="6"><div class="grid-content bg-purple">test</div></el-col>
    <el-col :span="6"><div class="grid-content bg-purple">test2</div></el-col>
    <el-col :span="6"><div class="grid-content bg-purple">test3</div></el-col>
    <el-col :span="6"><div class="grid-content bg-purple">test4</div></el-col>
  </el-row>
  <img alt="Vue logo" src="./assets/logo.png">
  <Echarts />
  <Graph />
  <Sliders />
  <!-- <VueSliders v-model="value"></VueSliders> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script> 
// import HelloWorld from './components/HelloWorld.vue'
import Echarts from './components/echarts/Echarts-Display.vue'
import Graph from './components/graph/Graph-Display.vue'
import Sliders from './components/sliders/Sliders-Display.vue'
import { ref } from 'vue'

const value = ref([4, 8])

export default {
  name: 'App',
  components: {
    // HelloWorld,
    Echarts,
    Graph,
    Sliders,
  }
}

// document.getElementById("btn").addEventListener("click", showVal)
// function showVal(){
//   console.log(value)
// }

</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
  background-color: aqua;
}
.slider-demo-block {
  display: flex;
  align-items: center;
}
.slider-demo-block .el-slider {
  margin-top: 0;
  margin-left: 12px;
}
</style>
