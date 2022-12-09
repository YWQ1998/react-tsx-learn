/*
 * @Description: 路由文件
 * @Author: YinWQ
 * @Date: 2022-12-07 09:38:33
 * @LastEditors: YinWQ
 * @LastEditTime: 2022-12-09 15:16:05
 */
import { ReactNode } from "react";
import baseTypePage from "../Pages/01_tsLearPage/01_baseTypePage";
import Home from "../Pages/Home";
import TestChartPage from "../Pages/03_react_echart/01_test";
// const TestChartPage = lazy(() => import("../Pages/03_react_echart/01_test"));
import HelloClassCom from "../Components-class/HelloClassCom";
import HelloFunCom from "../Components-function/HelloFunCom";
export interface IRoute {
  exact?: boolean;
  path: string;
  title: string;
  icon?: string;
  component?: any;
  children?: IRoute[];
}
const mainRouters: Array<IRoute> = [
  {
    title: "首页",
    path: "/home",
    component: Home,
    icon: "home",
  },
  {
    title: "Hello 示例",
    path: "/hello",
    children: [
      {
        title: "hello 类组件",
        path: "/helloClass",
        component: HelloClassCom,
      },
      {
        title: "hello 函数组件",
        path: "/helloFun",
        component: HelloFunCom,
      },
    ],
  },
  {
    title: "基本数据类型",
    path: "/ts/baseType",
    // component: () => import("../Pages/01_tsLearPage/01_baseTypePage"),
    component: baseTypePage,
  },
  {
    title: "chart 图表",
    path: "/chart/test",
    component: TestChartPage,
    icon: "pie_chart-o",
  },
];
export { mainRouters };
