/*
 * @Description: home 首页
 * @Author: YinWQ
 * @Date: 2022-12-08 09:50:02
 * @LastEditors: YinWQ
 * @LastEditTime: 2022-12-08 10:32:55
 */
import React from 'react'
import {Button} from 'choerodon-ui/pro'
import { ButtonColor } from 'choerodon-ui/pro/lib/button/enum'

const Home:React.FC = () => {
  return (
    <div>
      Home
      <Button color={ButtonColor.red}>Button</Button>
    </div>
  );
}
export default Home;