<template>
  <div class="slider-demo-block">
    <el-slider v-model="value" range show-stops :max="10" @change="returnVal"/>
  </div>
</template>

<script src="./sliders">
</script>

<style scoped>
.slider-demo-block {
  display: flex;
  align-items: center;
}
.slider-demo-block .el-slider {
  margin-top: 0;
  margin-left: 12px;
}
</style>