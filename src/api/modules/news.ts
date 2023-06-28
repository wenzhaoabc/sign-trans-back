import { PORT3 } from "@/api/config/servicePort";
import http from "@/api";
import { Word, News } from "@/api/interface";

/**
 * 新闻公告模块
 */

// 获取公告列表
export const getAllNewsAPI = () => {
    return http.get<News.ResNews[]>(PORT3 + "/news-list")
}

// 添加新闻公告
export const publishNewsAPI = (params: any) => {
    return http.post<any>(PORT3 + "/add-news", params)
}

// 获取系统状态信息
export const getSystemInfoAPI = () => {
    return http.get<Word.ResStatis>(PORT3 + "/statistic-data")
}

// 获取高频单词
export const getFreqWordAPI = () => {
    return http.get<Word.ResWordFreq[]>(PORT3 + "/freq-sign-word")
}