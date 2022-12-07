import React from 'react';
import './App.css';
// import HelloFunCom from './Components-function/HelloFunCom';
import HelloClassCom from './Components-class/HelloClassCom';

// reducer 状态管理
import { createStore } from "redux";
import { enthusiasm } from "./redux/reducers/index";
import { StoreState } from "./types";
import * as action from "./redux/actions"
import Hello from "./redux/containers/HelloContainer";
import { Provider } from "react-redux";

const store = createStore<StoreState, action.EnthusiasmAction, {}, never>(
  enthusiasm,
  {
    languageName: "TypeScript",
    enthusiasmLevel: 4,
  }
);
function App() {
  return (
    <>
      <div>app</div>
      <div>
        {/* 函数组件 */}
        {/* <HelloFunCom name="黎明" enthusiasmLevel={12} /> */}
        {/* 状态管理 实例 */}
        <Provider store={store}>
          <Hello />
        </Provider>
      </div>
      <div>
        {/* 类组件 */}
        <HelloClassCom name="小明" enthusiasmLevel={10} />
      </div>
    </>
  );
}

export default App;
