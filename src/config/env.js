// 配置编译环境和线上环境之间的切换

let baseUrl = '';
const env = process.env;
if (env.NODE_ENV == 'development') {
  baseUrl = `/api/`; // 开发环境地址
} else if (env.NODE_ENV == 'production') {
  baseUrl = `http://117.28.240.244:3001/mock/35/`; //生产环境地址
}
export {
  baseUrl
}


