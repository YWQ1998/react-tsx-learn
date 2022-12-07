/*
 * @Description: hello 组件 function样式
 * @Author: YinWQ
 * @Date: 2022-12-06 09:06:07
 * @LastEditors: YinWQ
 * @LastEditTime: 2022-12-06 09:16:33
 */
import * as React from 'react';
import { numberChar } from '../../utils';

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

class HelloClassCom extends React.Component<Props, object> {
  render() {
    const { name, enthusiasmLevel = 1 } = this.props;

    if (enthusiasmLevel <= 0) {
      throw new Error("You could be a little more enthusiastic. :D");
    }

    return (
      <div className="hello">
        <div className="greeting">
          Hello {name + numberChar(enthusiasmLevel, '!')}
        </div>
      </div>
    );
  }
}

export default HelloClassCom;