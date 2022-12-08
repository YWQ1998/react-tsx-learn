/*
 * @Description: 路由文件
 * @Author: YinWQ
 * @Date: 2022-12-07 09:38:33
 * @LastEditors: YinWQ
 * @LastEditTime: 2022-12-08 16:47:13
 */
import { lazy, ReactNode } from "react";
import baseTypePage from "../Pages/01_tsLearPage/01_baseTypePage";
import Home from "../Pages/Home";
import TestChartPage from "../Pages/03_react_echart/01_test";
// const TestChartPage = lazy(() => import("../Pages/03_react_echart/01_test"));
export interface IRoute {
  exact?: boolean;
  path: string;
  title: string;
  icon?: ReactNode;
  component?: any;
  children?: IRoute[];
}
const mainRouters: Array<IRoute> = [
  {
    title: "首页",
    path: "/home",
    component: Home,
  },
  {
    title: "基本数据类型",
    path: "/ts/baseType",
    // component: () => import("../Pages/01_tsLearPage/01_baseTypePage"),
    component: baseTypePage,
  },
  {
    title: 'chart 图表',
    path: '/chart/test',
    component: TestChartPage,
  },
];
export { mainRouters };
