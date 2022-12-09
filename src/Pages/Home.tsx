/*
 * @Description: home 首页
 * @Author: YinWQ
 * @Date: 2022-12-08 09:50:02
 * @LastEditors: YinWQ
 * @LastEditTime: 2022-12-09 11:00:32
 */
import React from 'react'
import {Button} from 'choerodon-ui/pro'
import { ButtonColor } from 'choerodon-ui/pro/lib/button/enum'
import Message from './100_testPage'
import './home.less'
const Home:React.FC = () => {
  return (
    <div>
      <span className='title'>Home</span>
      <Button color={ButtonColor.red}>Button</Button>
      <div>
        <Message />
      </div>
    </div>
  );
}
export default Home;