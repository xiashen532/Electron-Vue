<template>
    <div class="panel">
        <div class="panel-heading">知识图谱概览</div>

        <select onchange="changeFocus(this.value)">
            <option value=""></option>
            <option value=0>数据机构</option>
            <option value=1>数据</option>
            <option value=2>合约</option>
            <option value=3>模型</option>
            <option value=4>计算机构</option>
            <option value=5>应用</option>
        </select>
  
  
        <select onchange="switchSubgraph(this.value)">
            <option value=""></option>
            <option value=1>Top1</option>
            <option value=3>Top3</option>
            <option value=5>Top5</option>
        </select>
        <div id="model-kg-graph" style="height: 800px"></div>
    </div>
</template>
  
  <script src="./graph.js">
  </script>
  
  <style>
  
  </style>