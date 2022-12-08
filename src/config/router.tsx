/*
 * @Description: 路由文件
 * @Author: YinWQ
 * @Date: 2022-12-07 09:38:33
 * @LastEditors: YinWQ
 * @LastEditTime: 2022-12-08 09:56:15
 */
import { ReactNode } from "react";
import baseTypePage from "../Pages/01_tsLearPage/01_baseTypePage";
import Home from "../Pages/Home";
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
];
export { mainRouters };
