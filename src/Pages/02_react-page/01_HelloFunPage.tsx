/*
 * @Description: Hello 函数组件界面
 * @Author: YinWQ
 * @Date: 2022-12-12 08:29:26
 * @LastEditors: YinWQ
 * @LastEditTime: 2022-12-12 15:26:00
 */
import React from 'react'
import HelloContainer from '../../redux/containers/HelloContainer';
import { createStore } from 'redux';

import { enthusiasm } from "../../redux/reducers";
import { StoreState } from "../../types/index";
import * as action from "../../redux/actions";
import { Provider } from "react-redux";

const store = createStore<StoreState, action.EnthusiasmAction, {}, never>(
  enthusiasm,
  {
    languageName: "TypeScript",
    enthusiasmLevel: 4,
  }
);

const HelloFunPage = () => {
  return (
    <Provider store={store}>
      <div>
        <h4>Hello 函数组件界面</h4>
        <HelloContainer />
      </div>
    </Provider>
  );
}
export default HelloFunPage