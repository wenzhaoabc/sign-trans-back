<template>
  <div class="dataVisualize-box">
    <div class="card top-box">
      <div class="top-title">系统状态数据可视化</div>
      <!-- <el-tabs v-model="tabActive" class="demo-tabs">
        <el-tab-pane v-for="item in tab" :key="item.name" :label="item.label" :name="item.name"></el-tab-pane>
      </el-tabs> -->
      <div style="height: 20px;"></div>
      <div class="top-content">
        <el-row :gutter="40">
          <el-col class="mb40" :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
            <div class="item-left sle">
              <span class="left-title">在线用户</span>
              <div class="img-box">
                <img src="./images/book-sum.png" alt="" />
              </div>
              <span class="left-number">{{ statisticData.online_user }}</span>
            </div>
          </el-col>
          <el-col class="mb40" :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
            <div class="item-center">
              <div class="gitee-traffic traffic-box">
                <div class="traffic-img">
                  <img src="./images/add_person.png" alt="" />
                </div>
                <span class="item-value">{{ statisticData.user }}</span>
                <span class="traffic-name sle">已注册用户</span>
              </div>
              <div class="gitHub-traffic traffic-box">
                <div class="traffic-img">
                  <img src="./images/add_team.png" alt="" />
                </div>
                <span class="item-value">{{ statisticData.word }}</span>
                <span class="traffic-name sle">手语词统计</span>
              </div>
              <div class="today-traffic traffic-box">
                <div class="traffic-img">
                  <img src="./images/today.png" alt="" />
                </div>
                <span class="item-value">{{ statisticData.count }}</span>
                <span class="traffic-name sle">今日访问量</span>
              </div>
              <div class="yesterday-traffic traffic-box">
                <div class="traffic-img">
                  <img src="./images/book_sum.png" alt="" />
                </div>
                <span class="item-value">23</span>
                <span class="traffic-name sle">昨日访问量</span>
              </div>
            </div>
          </el-col>
          <el-col class="mb40" :xs="24" :sm="24" :md="24" :lg="10" :xl="10">
            <div class="item-right">
              <div class="echarts-title">服务器状态监控</div>
              <div class="book-echarts">
                <Pie ref="pieRef" />
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <!-- <div class="card bottom-box">
      <div class="bottom-title">数据来源</div>
      <div class="bottom-tabs">
        <el-tabs v-model="tabActive" class="demo-tabs">
          <el-tab-pane v-for="item in tab" :key="item.name" :label="item.label" :name="item.name"></el-tab-pane>
        </el-tabs>
      </div>
      <div class="curve-echarts">
        <Curve ref="curveRef" />
      </div>
    </div> -->
  </div>
</template>

<script setup lang="ts" name="dataVisualize">
import { ref, onMounted } from "vue";
import { getSystemInfoAPI } from "@/api/modules/news"
import Pie from "@/views/home/components/pie.vue"

const statisticData = ref();

const pieRef = ref();
const pieData = [
  { value: 90, name: "CPU负载" },
  { value: 88, name: "空闲" },
];

onMounted(async () => {
  const { data } = await getSystemInfoAPI();
  statisticData.value = data;
  pieData[0].value = data.cpu;
  pieData[1].value = Number((-data.cpu + 100).toFixed(2));
  console.log(data);

  pieRef.value.initChart(pieData);
});
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
