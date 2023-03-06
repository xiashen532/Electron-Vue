import * as echarts from 'echarts'

export default {
    name: 'Graph',
    methods:{
        myGraph(){
            var graph_data = {
                categories: ["数据机构", "数据", "合约", "模型", "计算机构", "应用"],
                links: [
                  { source: "数据1", target: "数据机构3" },
                  { source: "数据2", target: "数据机构2" },
                  { source: "数据3", target: "数据机构2" },
                  { source: "数据4", target: "数据机构3" },
                  { source: "数据5", target: "数据机构3" },
                  { source: "数据6", target: "数据机构2" },
                  { source: "数据7", target: "数据机构2" },
                  { source: "数据8", target: "数据机构4" },
                  { source: "数据9", target: "数据机构2" },
                  { source: "数据10", target: "数据机构3" },
                  { source: "数据11", target: "数据机构4" },
                  { source: "数据12", target: "数据机构1" },
                  { source: "数据13", target: "数据机构4" },
                  { source: "数据14", target: "数据机构3" },
                  { source: "数据15", target: "数据机构3" },
                  { source: "数据16", target: "数据机构3" },
                  { source: "数据17", target: "数据机构3" },
                  { source: "数据18", target: "数据机构3" },
                  { source: "数据19", target: "数据机构1" },
                  { source: "数据20", target: "数据机构2" },
                  { source: "数据1", target: "应用1" },
                  { source: "数据1", target: "应用2" },
                  { source: "数据1", target: "应用3" },
                  { source: "数据1", target: "应用5" },
                  { source: "数据1", target: "应用10" },
                  { source: "数据2", target: "应用1" },
                  { source: "数据2", target: "应用6" },
                  { source: "数据2", target: "应用7" },
                  { source: "数据2", target: "应用8" },
                  { source: "数据3", target: "应用1" },
                  { source: "数据3", target: "应用2" },
                  { source: "数据3", target: "应用3" },
                  { source: "数据3", target: "应用5" },
                  { source: "数据3", target: "应用6" },
                  { source: "数据3", target: "应用7" },
                  { source: "数据3", target: "应用8" },
                  { source: "数据3", target: "应用9" },
                  { source: "数据3", target: "应用10" },
                  { source: "数据4", target: "应用2" },
                  { source: "数据4", target: "应用5" },
                  { source: "数据4", target: "应用6" },
                  { source: "数据4", target: "应用7" },
                  { source: "数据4", target: "应用8" },
                  { source: "数据4", target: "应用9" },
                  { source: "数据5", target: "应用1" },
                  { source: "数据5", target: "应用2" },
                  { source: "数据5", target: "应用4" },
                  { source: "数据5", target: "应用6" },
                  { source: "数据5", target: "应用7" },
                  { source: "数据5", target: "应用8" },
                  { source: "数据6", target: "应用1" },
                  { source: "数据6", target: "应用2" },
                  { source: "数据6", target: "应用4" },
                  { source: "数据6", target: "应用6" },
                  { source: "数据6", target: "应用7" },
                  { source: "数据6", target: "应用9" },
                  { source: "数据6", target: "应用10" },
                  { source: "数据7", target: "应用1" },
                  { source: "数据7", target: "应用2" },
                  { source: "数据7", target: "应用3" },
                  { source: "数据7", target: "应用5" },
                  { source: "数据7", target: "应用6" },
                  { source: "数据7", target: "应用7" },
                  { source: "数据7", target: "应用9" },
                  { source: "数据8", target: "应用2" },
                  { source: "数据8", target: "应用3" },
                  { source: "数据8", target: "应用5" },
                  { source: "数据8", target: "应用8" },
                  { source: "数据8", target: "应用9" },
                  { source: "数据8", target: "应用10" },
                  { source: "数据9", target: "应用1" },
                  { source: "数据9", target: "应用2" },
                  { source: "数据9", target: "应用3" },
                  { source: "数据9", target: "应用4" },
                  { source: "数据9", target: "应用10" },
                  { source: "数据10", target: "应用3" },
                  { source: "数据10", target: "应用5" },
                  { source: "数据10", target: "应用6" },
                  { source: "数据10", target: "应用8" },
                  { source: "数据10", target: "应用9" },
                  { source: "数据11", target: "应用2" },
                  { source: "数据11", target: "应用6" },
                  { source: "数据11", target: "应用7" },
                  { source: "数据11", target: "应用9" },
                  { source: "数据11", target: "应用10" },
                  { source: "数据12", target: "应用1" },
                  { source: "数据12", target: "应用3" },
                  { source: "数据12", target: "应用4" },
                  { source: "数据12", target: "应用5" },
                  { source: "数据12", target: "应用8" },
                  { source: "数据13", target: "应用1" },
                  { source: "数据13", target: "应用2" },
                  { source: "数据13", target: "应用5" },
                  { source: "数据13", target: "应用6" },
                  { source: "数据13", target: "应用7" },
                  { source: "数据13", target: "应用10" },
                  { source: "数据14", target: "应用1" },
                  { source: "数据14", target: "应用2" },
                  { source: "数据14", target: "应用7" },
                  { source: "数据14", target: "应用9" },
                  { source: "数据15", target: "应用2" },
                  { source: "数据15", target: "应用4" },
                  { source: "数据15", target: "应用5" },
                  { source: "数据15", target: "应用7" },
                  { source: "数据15", target: "应用8" },
                  { source: "数据15", target: "应用9" },
                  { source: "数据15", target: "应用10" },
                  { source: "数据16", target: "应用2" },
                  { source: "数据16", target: "应用3" },
                  { source: "数据16", target: "应用4" },
                  { source: "数据16", target: "应用6" },
                  { source: "数据16", target: "应用7" },
                  { source: "数据16", target: "应用8" },
                  { source: "数据16", target: "应用10" },
                  { source: "数据17", target: "应用3" },
                  { source: "数据17", target: "应用4" },
                  { source: "数据17", target: "应用5" },
                  { source: "数据17", target: "应用6" },
                  { source: "数据17", target: "应用9" },
                  { source: "数据17", target: "应用10" },
                  { source: "数据18", target: "应用1" },
                  { source: "数据18", target: "应用2" },
                  { source: "数据18", target: "应用4" },
                  { source: "数据18", target: "应用5" },
                  { source: "数据18", target: "应用6" },
                  { source: "数据18", target: "应用8" },
                  { source: "数据18", target: "应用9" },
                  { source: "数据18", target: "应用10" },
                  { source: "数据19", target: "应用1" },
                  { source: "数据19", target: "应用6" },
                  { source: "数据19", target: "应用7" },
                  { source: "数据19", target: "应用8" },
                  { source: "数据19", target: "应用9" },
                  { source: "数据20", target: "应用3" },
                  { source: "数据20", target: "应用4" },
                  { source: "数据20", target: "应用9" },
                  { source: "数据20", target: "应用10" },
                  { source: "数据1", target: "合约1" },
                  { source: "数据1", target: "合约3" },
                  { source: "数据1", target: "合约4" },
                  { source: "数据1", target: "合约6" },
                  { source: "数据1", target: "合约7" },
                  { source: "数据2", target: "合约1" },
                  { source: "数据2", target: "合约3" },
                  { source: "数据2", target: "合约5" },
                  { source: "数据2", target: "合约7" },
                  { source: "数据2", target: "合约10" },
                  { source: "数据3", target: "合约1" },
                  { source: "数据3", target: "合约2" },
                  { source: "数据3", target: "合约3" },
                  { source: "数据3", target: "合约4" },
                  { source: "数据3", target: "合约5" },
                  { source: "数据3", target: "合约7" },
                  { source: "数据3", target: "合约8" },
                  { source: "数据3", target: "合约10" },
                  { source: "数据4", target: "合约1" },
                  { source: "数据4", target: "合约2" },
                  { source: "数据4", target: "合约3" },
                  { source: "数据4", target: "合约5" },
                  { source: "数据4", target: "合约8" },
                  { source: "数据5", target: "合约2" },
                  { source: "数据5", target: "合约6" },
                  { source: "数据5", target: "合约7" },
                  { source: "数据5", target: "合约8" },
                  { source: "数据5", target: "合约10" },
                  { source: "数据6", target: "合约3" },
                  { source: "数据6", target: "合约4" },
                  { source: "数据6", target: "合约5" },
                  { source: "数据6", target: "合约6" },
                  { source: "数据6", target: "合约7" },
                  { source: "数据6", target: "合约8" },
                  { source: "数据6", target: "合约10" },
                  { source: "数据7", target: "合约1" },
                  { source: "数据7", target: "合约3" },
                  { source: "数据7", target: "合约4" },
                  { source: "数据7", target: "合约5" },
                  { source: "数据7", target: "合约8" },
                  { source: "数据7", target: "合约9" },
                  { source: "数据8", target: "合约1" },
                  { source: "数据8", target: "合约6" },
                  { source: "数据8", target: "合约7" },
                  { source: "数据8", target: "合约9" },
                  { source: "数据8", target: "合约10" },
                  { source: "数据9", target: "合约1" },
                  { source: "数据9", target: "合约2" },
                  { source: "数据9", target: "合约7" },
                  { source: "数据10", target: "合约2" },
                  { source: "数据10", target: "合约3" },
                  { source: "数据10", target: "合约10" },
                  { source: "数据11", target: "合约2" },
                  { source: "数据11", target: "合约3" },
                  { source: "数据11", target: "合约4" },
                  { source: "数据11", target: "合约5" },
                  { source: "数据11", target: "合约6" },
                  { source: "数据11", target: "合约7" },
                  { source: "数据12", target: "合约1" },
                  { source: "数据12", target: "合约2" },
                  { source: "数据12", target: "合约4" },
                  { source: "数据12", target: "合约6" },
                  { source: "数据12", target: "合约7" },
                  { source: "数据12", target: "合约10" },
                  { source: "数据13", target: "合约1" },
                  { source: "数据13", target: "合约2" },
                  { source: "数据13", target: "合约5" },
                  { source: "数据13", target: "合约6" },
                  { source: "数据13", target: "合约7" },
                  { source: "数据13", target: "合约8" },
                  { source: "数据13", target: "合约10" },
                  { source: "数据14", target: "合约1" },
                  { source: "数据14", target: "合约2" },
                  { source: "数据14", target: "合约4" },
                  { source: "数据14", target: "合约5" },
                  { source: "数据14", target: "合约6" },
                  { source: "数据14", target: "合约10" },
                  { source: "数据15", target: "合约1" },
                  { source: "数据15", target: "合约3" },
                  { source: "数据15", target: "合约5" },
                  { source: "数据15", target: "合约8" },
                  { source: "数据15", target: "合约10" },
                  { source: "数据16", target: "合约1" },
                  { source: "数据16", target: "合约2" },
                  { source: "数据16", target: "合约3" },
                  { source: "数据16", target: "合约4" },
                  { source: "数据16", target: "合约5" },
                  { source: "数据16", target: "合约7" },
                  { source: "数据16", target: "合约8" },
                  { source: "数据16", target: "合约9" },
                  { source: "数据16", target: "合约10" },
                  { source: "数据17", target: "合约1" },
                  { source: "数据17", target: "合约3" },
                  { source: "数据17", target: "合约4" },
                  { source: "数据17", target: "合约5" },
                  { source: "数据17", target: "合约6" },
                  { source: "数据17", target: "合约7" },
                  { source: "数据17", target: "合约10" },
                  { source: "数据18", target: "合约1" },
                  { source: "数据18", target: "合约2" },
                  { source: "数据18", target: "合约5" },
                  { source: "数据18", target: "合约7" },
                  { source: "数据18", target: "合约9" },
                  { source: "数据19", target: "合约3" },
                  { source: "数据19", target: "合约5" },
                  { source: "数据19", target: "合约8" },
                  { source: "数据20", target: "合约1" },
                  { source: "数据20", target: "合约2" },
                  { source: "数据20", target: "合约3" },
                  { source: "数据20", target: "合约4" },
                  { source: "数据20", target: "合约9" },
                  { source: "数据20", target: "合约10" },
                  { source: "合约1", target: "模型5" },
                  { source: "合约2", target: "模型2" },
                  { source: "合约3", target: "模型1" },
                  { source: "合约4", target: "模型2" },
                  { source: "合约5", target: "模型3" },
                  { source: "合约6", target: "模型5" },
                  { source: "合约7", target: "模型3" },
                  { source: "合约8", target: "模型3" },
                  { source: "合约9", target: "模型2" },
                  { source: "合约10", target: "模型2" },
                  { source: "模型1", target: "计算机构3" },
                  { source: "模型2", target: "计算机构3" },
                  { source: "模型3", target: "计算机构3" },
                  { source: "模型4", target: "计算机构2" },
                  { source: "模型5", target: "计算机构3" }
                ],
                nodes: [
                  { name: "数据机构1", category: 0, symbolSize: 3.0 },
                  { name: "数据机构2", category: 0, symbolSize: 9.0 },
                  { name: "数据机构3", category: 0, symbolSize: 13.5 },
                  { name: "数据机构4", category: 0, symbolSize: 4.5 },
                  { name: "数据1", category: 1, symbolSize: 16.5 },
                  { name: "数据2", category: 1, symbolSize: 15.0 },
                  { name: "数据3", category: 1, symbolSize: 27.0 },
                  { name: "数据4", category: 1, symbolSize: 18.0 },
                  { name: "数据5", category: 1, symbolSize: 18.0 },
                  { name: "数据6", category: 1, symbolSize: 22.5 },
                  { name: "数据7", category: 1, symbolSize: 21.0 },
                  { name: "数据8", category: 1, symbolSize: 18.0 },
                  { name: "数据9", category: 1, symbolSize: 13.5 },
                  { name: "数据10", category: 1, symbolSize: 13.5 },
                  { name: "数据11", category: 1, symbolSize: 18.0 },
                  { name: "数据12", category: 1, symbolSize: 18.0 },
                  { name: "数据13", category: 1, symbolSize: 21.0 },
                  { name: "数据14", category: 1, symbolSize: 16.5 },
                  { name: "数据15", category: 1, symbolSize: 19.5 },
                  { name: "数据16", category: 1, symbolSize: 25.5 },
                  { name: "数据17", category: 1, symbolSize: 21.0 },
                  { name: "数据18", category: 1, symbolSize: 21.0 },
                  { name: "数据19", category: 1, symbolSize: 13.5 },
                  { name: "数据20", category: 1, symbolSize: 16.5 },
                  { name: "合约1", category: 2, symbolSize: 24.0 },
                  { name: "合约2", category: 2, symbolSize: 19.5 },
                  { name: "合约3", category: 2, symbolSize: 21.0 },
                  { name: "合约4", category: 2, symbolSize: 16.5 },
                  { name: "合约5", category: 2, symbolSize: 21.0 },
                  { name: "合约6", category: 2, symbolSize: 15.0 },
                  { name: "合约7", category: 2, symbolSize: 21.0 },
                  { name: "合约8", category: 2, symbolSize: 15.0 },
                  { name: "合约9", category: 2, symbolSize: 9.0 },
                  { name: "合约10", category: 2, symbolSize: 21.0 },
                  { name: "模型1", category: 3, symbolSize: 3.0 },
                  { name: "模型2", category: 3, symbolSize: 7.5 },
                  { name: "模型3", category: 3, symbolSize: 6.0 },
                  { name: "模型4", category: 3, symbolSize: 1.5 },
                  { name: "模型5", category: 3, symbolSize: 4.5 },
                  { name: "计算机构1", category: 4, symbolSize: 0.0 },
                  { name: "计算机构2", category: 4, symbolSize: 1.5 },
                  { name: "计算机构3", category: 4, symbolSize: 6.0 },
                  { name: "应用1", category: 5, symbolSize: 18.0 },
                  { name: "应用2", category: 5, symbolSize: 21.0 },
                  { name: "应用3", category: 5, symbolSize: 15.0 },
                  { name: "应用4", category: 5, symbolSize: 13.5 },
                  { name: "应用5", category: 5, symbolSize: 16.5 },
                  { name: "应用6", category: 5, symbolSize: 19.5 },
                  { name: "应用7", category: 5, symbolSize: 18.0 },
                  { name: "应用8", category: 5, symbolSize: 16.5 },
                  { name: "应用9", category: 5, symbolSize: 19.5 },
                  { name: "应用10", category: 5, symbolSize: 18.0 }
                ]
              };
              var graph_chart = echarts.init(document.getElementById("model-kg-graph"));
              let option = {
                tooltip: {},
                legend: [
                  {
                    // selectedMode: false,
                    data: graph_data.categories
                  }
                ],
                color: [
                  "#c23531",
                  "#61a0a8",
                  "#d48265",
                  "#91c7ae",
                  "#749f83",
                  "#ca8622",
                  "#bda29a"
                ],
                animationEasingUpdate: "quinticInOut",
                series: {
                  id: "graph",
                  type: "graph",
                  layout: "force",
                  data: graph_data.nodes,
                  links: graph_data.links,
                  categories: graph_data.categories.map((c) => ({ name: c })),
                  roam: true,
                  label: {
                    // show: true,
                    position: "right"
                  },
                  focusNodeAdjacency: true,
                  legendHoverLink: true,
                  animation: false,
                  force: {
                    initLayout: "circular",
                    layoutAnimation: false,
                    repulsion: 1000
                  },
                  lineStyle: {
                    color: "source",
                    opacity: 0.2,
                    curveness: 0.3
                  },
                  emphasis: {
                    focus: "adjacency",
                    itemStyle: {
                      shadowColor: "rgba(0, 0, 0, 0.4)",
                      shadowBlur: 15
                    },
                    lineStyle: {
                      width: 3
                    },
                    label: {
                      textBorderColor: "rgba(255, 255, 255, 0.8)",
                      textBorderWidth: 2
                    }
                  }
                }
              };
              graph_chart.setOption(option);
              
              function nodesAction(action, category) {
                if (category !== "") {
                  let nodes = graph_chart.getOption().series[0].data;
                  let names = nodes
                    .filter((node) => node.category == category)
                    .map((node) => node.name);
                  graph_chart.dispatchAction({
                    type: action,
                    seriesIndex: 0,
                    name: names
                  });
                }
              }
              
              var top1Sub = [], top3Sub = [], top5Sub = [];
              
              let nodes = graph_data.nodes;
              for (let c = 0; c < 6; c++) {
                let cnodes = nodes.filter((node) => node.category == c);
                cnodes.sort((a, b) => b.symbolSize - a.symbolSize);
                top1Sub.push(cnodes[0]);
                top3Sub.push(...cnodes.slice(0, 3));
                top5Sub.push(...cnodes.slice(0, 5));
              }
              
              var oldFocus = "";
              function changeFocus(value) {
                nodesAction("highlight", value);
                nodesAction("downplay", oldFocus);
                oldFocus = value;
              }
              
              function switchSubgraph(value) {
                let data = graph_data.nodes;
                switch (value) {
                  case "1":
                    data = top1Sub;
                    break;
                  case "3":
                    data = top3Sub;
                    break;
                  case "5":
                    data = top5Sub;
                    break;
                }
                graph_chart.setOption({
                  series: { data: data, zoom: 1 },
                });
              }
              
              window.changeFocus = changeFocus;
              window.switchSubgraph = switchSubgraph;

        }
            
    },
    mounted() {
        this.myGraph();
    }
  }




