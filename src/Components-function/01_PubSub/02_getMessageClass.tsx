/*
 * @Description: 接收信息的组件
 * @Author: YinWQ
 * @Date: 2022-12-12 15:57:27
 * @LastEditors: YinWQ
 * @LastEditTime: 2022-12-12 17:52:04
 */
import { Button } from 'choerodon-ui/pro/lib'
import React from 'react'
import PubSub from "pubsub-js";
export interface getMessageObj {
  messageType: string;
}
export default function getMessaeClass(props:getMessageObj) {
  const {messageType} = props;
  const handleGetMessage = () => {
    console.log("接收数据");
    
    PubSub.subscribe(messageType, (data) => {
      console.log("接收到得数据", data);
    });
  };
  // const showData = (data:Object) => {
  //   console.log("接收到得数据", data);
    
  // };
  return (
    <div><Button onClick={() => handleGetMessage()}>接收信息</Button></div>
  )
}


