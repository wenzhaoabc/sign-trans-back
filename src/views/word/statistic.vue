<template>
    <div class="card" style="height: 100%;">
        <!-- <p>手语词词频统计</p> -->
        <div ref="barChartRef" style="width: 48%;height: 100%;display: inline-block;"></div>
        <!-- <el-divider direction="vertical" style="height: 100%;margin-top: 0;"/>0 -->
        <span style="height: 99%; width: 5px;margin: 0 10px; background-color: grey;">_</span>
        <div ref="pieChartRef" style="width: 48%;height: 100%;display: inline-block;"></div>
        <!-- <div ref="rdChartRef" style="width: 50%;height: 300px;display: inline-block;"></div> -->
    </div>
</template>

<script setup lang="ts" name="statistic">
import { onMounted, ref } from "vue";
import * as echarts from "echarts";
import { useEcharts } from "@/hooks/useEcharts";
import { getFreqWordAPI } from "@/api/modules/news"

const barChartRef = ref()
const pieChartRef = ref()

onMounted(async () => {
    const { data: words } = await getFreqWordAPI();
    const option = {
        title: {
            text: "最常访问手语词统计",
            top: "top",
            left: "center"
        },
        toolbox: {
            show: true,
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                dataView: { readOnly: false },
                magicType: { type: ['line', 'bar'] },
                restore: {},
                saveAsImage: {}
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        xAxis: {
            type: 'category',
            data: words.map(w => w.word)
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: words.map(w => w.count),
                type: 'bar'
            }
        ]
    };
    let myChart: echarts.ECharts = echarts.init(barChartRef.value as HTMLElement);
    useEcharts(myChart, option);

    // 饼图
    const pieData: { [key: string]: number } = {};
    words.forEach(w => {
        const type = w.type;
        if (!pieData.hasOwnProperty(type)) {
            pieData[type] = 1;
        } else {
            pieData[type] += 1
        }
    })
    let pieOption = {
        title: {
            text: '高频词类别',
            subtext: '类别统计',
            left: 'center'
        },
        toolbox: {
            show: true,
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                dataView: { readOnly: false },
                magicType: { type: ['line', 'bar'] },
                restore: {},
                saveAsImage: {}
            }
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            left: 'left'
        },
        series: [
            {
                name: 'Access From',
                type: 'pie',
                radius: '50%',
                data: Object.entries(pieData).map(([type, num]) => ({ name: type, value: num })),
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    let pieChart: echarts.ECharts = echarts.init(pieChartRef.value as HTMLElement);
    useEcharts(pieChart, pieOption);

})
</script>

<style scoped></style>