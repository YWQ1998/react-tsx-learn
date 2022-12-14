/*
 * @Description: 接收信息界面
 * @Author: YinWQ
 * @Date: 2022-12-12 16:01:19
 * @LastEditors: YinWQ
 * @LastEditTime: 2022-12-12 17:50:38
 */
import React from "react";
import GetMessageClass from "../../Components-function/01_PubSub/02_getMessageClass";
export default function GetPage() {
  return (
    <div>
      <h4>接收信息界面</h4>
      <GetMessageClass messageType="sendShop" />
    </div>
  );
}
