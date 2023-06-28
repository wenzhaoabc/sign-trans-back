// 请求响应参数（不包含data）
export interface Result {
  code: number;
  msg: string;
}

// 请求响应参数（包含data）
export interface ResultData<T = any> extends Result {
  data: T;
}


// 文件上传模块
export namespace Upload {
  export interface ResFileUrl {
    file: string;
    url: string;
    success: boolean;
  }
}

// 登录模块
export namespace Login {
  export interface ReqLoginForm {
    username: string;
    password: string;
  }
  export interface ResLogin {
    id: number,
    phone: string,
    username: string,
    avatar: string,
    created: string
  }
  export interface ResAuthButtons {
    [key: string]: string[];
  }
}

// 手语单词模块
export namespace Word {
  export interface ResStatis {
    user: number,
    online_user: number,
    word: number,
    news: number,
    cpu: number,
    count: number
  }
  export interface ResWordFreq {
    id: number,
    word: string,
    type: string,
    count: number
  }
}

// 新闻资讯模块
export namespace News {
  export interface ResNews {
    id: number,
    author: string,
    title: string,
    content: string,
    image: string,
    created: string
  }
}

// 用户管理模块
export namespace User {

}
