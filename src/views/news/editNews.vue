<template>
    <div class="card">
        <p>编辑新闻公告</p>
        <WangEditor v-model:value="content" height="400px" />
    </div>
</template>

<script setup lang="ts" name="editNews">
import { ref } from 'vue';
import WangEditor from "@/components/WangEditor/index.vue";

const content = ref<string>("");
</script>

<style scoped></style>