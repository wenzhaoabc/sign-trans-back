<template>
    <div class="card">
        <div class="news-head">
            <p class="title">编辑新闻公告</p>
            <el-button class="btn" type="primary" @click="dialogVisible = true">发布</el-button>
        </div>

        <WangEditor v-model:value="content" height="400px" />
    </div>

    <el-dialog title="发布新闻公告" v-model="dialogVisible">
        <span class="dialog-sub-title">请输入标题</span>
        <el-input v-model="title" placeholder="Please input title" />
        <div style="height: 30px;"></div>

        <span class="dialog-sub-title">请输入发布者</span>
        <el-input v-model="author" placeholder="Please input author" />
        <div style="height: 30px;"></div>

        <span class="dialog-sub-title">请上传封面</span>
        <Img v-model:image-url="imageUrl"></Img>

        <template #footer>
            <span class="dialog-footer">
                <el-button @click="dialogVisible = false">取消</el-button>
                <el-button type="primary" @click="publishNews">
                    发布
                </el-button>
            </span>
        </template>
    </el-dialog>
</template>

<script setup lang="ts" name="editNews">
import { ref } from 'vue';
import { ElMessage } from 'element-plus';
import { publishNewsAPI } from "@/api/modules/news";
import WangEditor from "@/components/WangEditor/index.vue";
import Img from '@/components/Upload/Img.vue';

const content = ref<string>("");
const title = ref<string>("");
const author = ref<string>("");
const dialogVisible = ref(false);
const imageUrl = ref<string>("");

const publishNews = async () => {
    if (title.value && imageUrl.value && content.value) {

    }
    const params = {
        "author": author.value ?? "听见手语",
        "title": title.value,
        "image": imageUrl.value,
        "content": content.value
    }
    const { code } = await publishNewsAPI(params);
    if (code == 200) {
        ElMessage({ type: "success", message: "已成功发布" })
        dialogVisible.value = false;
    } else {
        ElMessage({ type: "error", message: "发布失败" })
    }
}

</script>

<style scoped>
.news-head {
    margin: 10px 0;
    width: 100%;
    text-align: center;
}

.title {
    /* width: 100%; */
    text-align: center;
    font-weight: bold;
    color: var(--el-text-color-primary);
    display: inline-block;
}

.btn {
    text-align: center;
    margin: 10px 0;
    float: right;
    top: -10px;
}

.dialog-sub-title {
    display: block;
    margin: 10px 5px;
    /* margin-bottom: 10px; */
    font-weight: bold;
    font-size: small;
}
</style>