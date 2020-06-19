/*
 * @Author: Vimalakirti
 * @Date: 2020-06-19 19:10:00
 * @LastEditTime: 2020-06-19 19:24:19
 * @Description:
 * @FilePath: \vue-manage-system\src\mock\home.js
 */
import Mock from "mockjs";

export default {
  getHomeData: () => {
    return {
      code: 20000,
      data: {
        videoData: [
          {
            name: "SpringBoot",
            value: Mock.Random.float(1000, 10000, 0, 2)
          },
          {
            name: "Vue",
            value: Mock.Random.float(1000, 10000, 0, 2)
          },
          {
            name: "ES6",
            value: Mock.Random.float(1000, 10000, 0, 2)
          },
          {
            name: "Java",
            value: Mock.Random.float(1000, 10000, 0, 2)
          },
          {
            name: "Javascript",
            value: Mock.Random.float(1000, 10000, 0, 2)
          }
        ]
      }
    };
  }
};
