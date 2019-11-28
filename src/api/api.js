import { baseUrl } from '@/config/env';
import request from "@/utils/request";

export default{
  login: function(token){
    request({          //登录
      url:  baseUrl + 'site/order/statistics/deliver/',
      method: "get",
      params:{
        token
      }
  })
  },
  regeist: function(token){
    request({          //注册
      url:  baseUrl + 'site/order/statistics/deliver/',
      method: "get",
      params:{
        token
      }
  })
  },
};


