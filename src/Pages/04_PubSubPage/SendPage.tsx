/*
 * @Description: 发送信息界面
 * @Author: YinWQ
 * @Date: 2022-12-12 15:59:30
 * @LastEditors: YinWQ
 * @LastEditTime: 2022-12-12 16:48:42
 */
import { Button } from "choerodon-ui/pro/lib";
import React, { useEffect, useRef, useState } from "react";
import SendMessageClass from "../../Components-function/01_PubSub/01_sendMessageClass";
export interface shopInfoObj {
    name: string;
    price: number;
}
export default function SendPage() {
  const [shopInfo, setShopInfo] = useState({});
  const shopInfoRef = useRef<object>({});
  const [shops, setShops] = useState<Array<shopInfoObj>>([]);
  const handleGetShops = () => {
    setShops([
      {
        name: "小米",
        price: 1200,
      },
      {
        name: "华为",
        price: 1800,
      },
      {
        name: "vivo",
        price: 2200,
      },
    ]);
  };
  const handleSelectItem = (data: shopInfoObj) => {
    setShopInfo(data);
  };
  useEffect(() => {
    shopInfoRef.current = shopInfo;
    console.log("选中的商品", shopInfoRef.current);
    
  }, [shopInfo]);
  return (
    <div>
      <h4>发送信息界面</h4>
      <Button onClick={() => handleGetShops()}>获取数据</Button>
      <ul>
        {shops.map((item) => (
          <li onClick={() => handleSelectItem(item)}>{item.name}</li>
        ))}
      </ul>
      <SendMessageClass messageType="sendShop" data={shopInfo} />
    </div>
  );
}
