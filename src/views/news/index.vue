<template>
    <div class="card">
        <el-card class="news-item" shadow="hover" v-for="(n, index) in news" :key="n.id">
            <el-image class="news-cover" :src="n.image" :preview-src-list="[n.image]" preview-teleported></el-image>
            <div class="item-right">
                <h3>{{ n.title }}</h3>
                <span class="sub-text">{{ n.author + " " + n.created }}</span>
                <el-button style="float: right;" size="small" type="text"
                    @click="currentIndex = index; dialogVisual = true;">详情</el-button>
                <p class="mle">{{ getText(n.content) }}</p>
            </div>
        </el-card>
    </div>
    <el-dialog v-if="news?.length" v-model:model-value="dialogVisual" :title="news[currentIndex].title">
        <div v-html="news[currentIndex].content"></div>
    </el-dialog>
</template>

<script setup lang="ts" name="newsIndex">
import { onMounted, ref } from "vue";
import { getAllNewsAPI } from "@/api/modules/news";
import { News } from "@/api/interface";

const news = ref<News.ResNews[]>()
onMounted(async () => {
    const { data: newsList } = await getAllNewsAPI()
    news.value = newsList;
})

const getText = (content: string) => {
    const myDiv = document.createElement("div");
    myDiv.innerHTML = content;
    return myDiv.innerText;
}

const dialogVisual = ref(false)
const currentIndex = ref(0)
</script>

<style scoped>
.news-item {
    margin-bottom: 10px;
    /* display: flex; */

}

.news-cover {
    width: 200px;
}

.item-right {
    width: calc(100% - 250px);
    display: inline-block;
    margin-left: 20px;
}

.sub-text {
    font-size: medium;
    color: var(--el-text-color-secondary);
}
</style>