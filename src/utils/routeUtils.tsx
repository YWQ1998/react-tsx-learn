/*
 * @Description: 路由相关方法
 * @Author: YinWQ
 * @Date: 2022-12-09 08:32:12
 * @LastEditors: YinWQ
 * @LastEditTime: 2022-12-09 08:33:38
 */
import { IRoute } from "../config/router";
import { Route } from "react-router-dom";
const getRoutes = (routers: Array<IRoute>) => {
  let domList: Array<React.ReactElement> = Array<React.ReactElement>();
  if (routers.length > 0) {
    routers.forEach((item) => {
      if (item.children) {
        let routes: Array<React.ReactElement> = Array<React.ReactElement>();
        item.children.forEach((item) => {
          routes.push(
            <Route
              path={item.path}
              key={item.path}
              element={<item.component />}
            ></Route>
          );
        });
        domList.push(
          <Route path={item.path} key={item.path}>
            {routes}
          </Route>
        );
      } else {
        domList.push(
          <Route
            path={item.path}
            key={item.path}
            element={<item.component />}
          ></Route>
        );
      }
    });
  }
  return domList;
};

export { getRoutes };