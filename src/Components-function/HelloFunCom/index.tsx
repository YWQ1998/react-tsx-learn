/*
 * @Description: hello 组件 function样式
 * @Author: YinWQ
 * @Date: 2022-12-06 08:48:17
 * @LastEditors: YinWQ
 * @LastEditTime: 2022-12-06 18:22:49
 */
import * as React from "react";
import { numberChar } from "../../utils";
export interface Props {
  name: string;
  number: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

function HelloFunCom({ name, number = 1, onIncrement, onDecrement }: Props) {
  if (number <= 0) {
    throw new Error("必须输入一个大于 0 的数据，表示感叹号的多少");
  }
  
  return (
    <div className="hello">
      <div className="greeting">你好 {name + numberChar(number, "!")}</div>
      <div>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
      </div>
    </div>
  );
}
export default HelloFunCom;
