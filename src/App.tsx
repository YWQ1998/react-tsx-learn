import { Routes, useNavigate } from "react-router-dom";
import { mainRouters } from "./config/router";
import { IRoute } from "./config/router";
import useWinSize from "./utils/hooks/useWinSize";
import React, { useState } from "react";
import { getRoutes } from "./utils/routeUtils";
import { Button, Icon, Menu } from "choerodon-ui/pro/lib";
import "./App.css";
import "./AppView.less";
import getMenus from "./utils/menuUtils";

function AppRouter() {
  // react-router-dom 路由转跳传参 三剑客
  // const location = useLocation();
  const navigate = useNavigate();
  // const params = useParams();
  const [recordRouter, setRecordRouter] = useState<Array<IRoute>>([
    mainRouters[0],
  ]);
  // 监视浏览器窗口大小变化
  const size = useWinSize();
  // 菜单选择
  const handleSelect = (route: IRoute): void => {
    const flag = recordRouter.findIndex((item) => item === route);
    console.log("标识", flag);
    // 添加票签内容
    if (flag < 0) {
      setRecordRouter([...recordRouter, route]);
    }
    // 路由转跳
    navigate(route.path);
  };
  const handleCloseTab = (route: IRoute) => {
    const result = recordRouter.filter((item) => item !== route);
    setRecordRouter(result);
    // 返回首页
    navigate(mainRouters[0].path);
  };

  const [collapsed, setCollapsed] = useState(false);
  const [navigateLeftWidth, setNavigateLeftWidth] = useState({width: '150px'});
  const toggleCollapsed = () => {
    setCollapsed(!collapsed)
    collapsed ? setNavigateLeftWidth({ width: "150px" }) : setNavigateLeftWidth({width: '79px'});
  };

  return (
    <div>
      <div
        className="my-app-view"
        style={{ width: size.width, height: size.height }}
      >
        <div className="view-navigate-top">
          <Button onClick={toggleCollapsed}>
            <Icon type={collapsed ? "folder_open" : "folder"} />
          </Button>
        </div>
        {/* 路由入口 */}
        <div className="view-navigate-left" style={navigateLeftWidth}>
          <Menu mode="inline" inlineCollapsed={collapsed}>
            {getMenus(mainRouters, handleSelect)}
          </Menu>
        </div>
        {/* 路由出口 */}
        <div className="view-contain">
          <div className="view-contain-tabs">
            {recordRouter.map((r, index) => (
              <div className="tabs-item">
                <div
                  className="tabs-item-title"
                  onClick={() => handleSelect(r)}
                >
                  {index === 0 ? <Icon type="home" /> : r.title}
                </div>
                {index !== 0 && (
                  <div
                    className="tabs-item-close"
                    onClick={() => handleCloseTab(r)}
                  >
                    <Icon type="close" />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="view-contain-routes">
            <Routes>{getRoutes(mainRouters)}</Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppRouter;
