// import React from 'react';
// import './App.css';
// // import HelloFunCom from './Components-function/HelloFunCom';
// import HelloClassCom from './Components-class/HelloClassCom';

// // reducer 状态管理
// import { createStore } from "redux";
// import { enthusiasm } from "./redux/reducers/index";
// import { StoreState } from "./types";
// import * as action from "./redux/actions"
// import Hello from "./redux/containers/HelloContainer";
// import { Provider } from "react-redux";

// const store = createStore<StoreState, action.EnthusiasmAction, {}, never>(
//   enthusiasm,
//   {
//     languageName: "TypeScript",
//     enthusiasmLevel: 4,
//   }
// );
// function App() {
//   return (
//     <>
//       <div>app</div>
//       <div>
//         {/* 函数组件 */}
//         {/* <HelloFunCom name="黎明" enthusiasmLevel={12} /> */}
//         {/* 状态管理 实例 */}
//         <Provider store={store}>
//           <Hello />
//         </Provider>
//       </div>
//       <div>
//         {/* 类组件 */}
//         <HelloClassCom name="小明" enthusiasmLevel={10} />
//       </div>
//     </>
//   );
// }

// export default App;
// import React, { Component, Suspense } from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import { mainRouters } from "./config/router";
// export default class View extends Component {
//   render() {
//     return (
//       <>
//         <Suspense fallback={<>loading ...</>}>
//           <Router>
//             {mainRouters.map((r) => (
//               <Link to={r.path} key={r.path}>
//                 {r.title}
//               </Link>
//             ))}
//             <Routes>
//               {mainRouters.map((r) => (
//                 <Route path={r.path} key={r.path} element={r.component}></Route>
//               ))}
//             </Routes>
//           </Router>
//         </Suspense>
//       </>
//     );
//   }
// }

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { mainRouters } from "./config/router";
import { IRoute } from "./config/router";
import useWinSize from "./utils/hooks/useWinSize";
import "./App.css";
import { useState } from "react";
function AppRouter() {
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
  };
  const handleCloseTab = (route: IRoute) => {
    const result = recordRouter.filter((item) => item !== route);
    setRecordRouter(result);
  };
  return (
    <Router>
      <div
        className="my-app-view"
        style={{ width: size.width, height: size.height }}
      >
        {/* 路由入口 */}
        <div className="menu-dom-left">
          {mainRouters.map((r: IRoute) => (
            <Link className="menu-item" to={r.path} key={r.path}>
              <div onClick={() => handleSelect(r)}>{r.title}</div>
            </Link>
          ))}
        </div>
        {/* 路由出口 */}
        <div className="page-contain-right">
          <div className="menu-dom-top">
            {recordRouter.map((r, index) => (
              <Link className="tag-menu-dom" to={r.path} key={r.path}>
                <div className="tag-menu-title" onClick={() => handleSelect(r)}>
                  {r.title}
                </div>
                {index !== 0 && (
                  <Link
                    to="/home"
                    className="tag-menu-title"
                    key={r.path}
                    onClick={() => handleCloseTab(r)}
                  >
                    X
                  </Link>
                )}
              </Link>
            ))}
          </div>
          <div className="page-contain-route">
            <Routes>
              {/* <Routes path="/first" component={First}></Routes> */}
              {mainRouters.map((r: IRoute) => (
                <Route
                  path={r.path}
                  key={r.path}
                  element={<r.component />}
                ></Route>
              ))}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default AppRouter;
