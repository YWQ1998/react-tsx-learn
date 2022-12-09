/*
 * @Description: 
 * @Author: YinWQ
 * @Date: 2022-12-09 10:54:03
 * @LastEditors: YinWQ
 * @LastEditTime: 2022-12-09 11:16:01
 */
import React from 'react';
import {useParams} from "react-router-dom";

interface detailData {
    id: string;
    content: string;
}
const DetailData: detailData[] = [
  { id: "01", content: "你好，中国" },
  { id: "02", content: "你好，川师" },
  { id: "03", content: "你好，未来的自己" },
];

function Detail(props:any) {
    // 接收param参数
    const params = useParams()
    const id = params.id
    const title = params.title

    const detailInitData: detailData = {id: '', content: ''}

    const findResult: detailData =
      DetailData.find((content) => {
        return content.id === id;
      }) || detailInitData;

    return (
        <ul>
            <li>id:{id}</li>
            <li>title:{title}</li>
            <li>content:{findResult.content}</li>
        </ul>
    );
}

export default Detail;