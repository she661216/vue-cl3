
const apiUrl =  process.env.NODE_ENV ==='development'?'/api/':'http://117.28.240.244:3001/mock/35/';

export default{
  login: apiUrl + 'site/order/statistics/deliver/', //登录
};
