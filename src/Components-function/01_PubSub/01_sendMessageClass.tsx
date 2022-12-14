/*
 * @Description: 发布消息的组件
 * @Author: YinWQ
 * @Date: 2022-12-12 15:56:24
 * @LastEditors: YinWQ
 * @LastEditTime: 2022-12-12 18:09:05
 */
import React from "react";
import PubSub from 'pubsub-js';
export interface sendMessageProps {
  messageType: string;
  data: object;
}
const sendMessageClass: React.FC<sendMessageProps> = (
  props: sendMessageProps
) => {
    const {data, messageType} = props;
  const handleSendMessage = () => {
    console.log('发送信息', messageType, data);
    
    PubSub.publish(messageType, data)
  };
  return (
    <div>
      <button onClick={() => handleSendMessage()}>发送信息</button>
    </div>
  );
};
export default sendMessageClass;
