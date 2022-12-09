/*
 * @Description: 测试界面
 * @Author: YinWQ
 * @Date: 2022-12-09 10:52:36
 * @LastEditors: YinWQ
 * @LastEditTime: 2022-12-09 11:16:19
 */
import React from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import Detail from "./Detail";

function Message(props: any) {
  const state = {
    messageArr: [
      { id: "01", title: "消息1" },
      { id: "02", title: "消息2" },
      { id: "03", title: "消息3" },
    ],
  };

  const navigate = useNavigate();

  //编写一段代码，让其实现跳转到detail组件，且为replace跳转
  const replaceShow = (id: string, title: string) => {
    // param传递
    navigate(`/home/message/detail/${id}/${title}`, { replace: true });
  };
  //编写一段代码，让其实现跳转到detail组件，且为push跳转
  const pushShow = (id: string, title: string) => {
    navigate(`/home/message/detail/${id}/${title}`);
  };
  //回退
  const back = () => {
    navigate(-1);
  };
  //向前
  const forward = () => {
    navigate(1);
  };
  //跳转,设置的值为2
  const go = () => {
    navigate(2);
  };

  const { messageArr } = state;
  return (
    <div>
      <ul>
        {messageArr.map((msgObj) => {
          return (
            <li key={msgObj.id}>
              {/*向路由组件传递params参数*/}
              <Link to={`detail/${msgObj.id}/${msgObj.title}`}>
                {msgObj.title}
              </Link>
              &nbsp;&nbsp;
              <button
                onClick={() => {
                  pushShow(msgObj.id, msgObj.title);
                }}
              >
                push查看
              </button>
              <button
                onClick={() => {
                  replaceShow(msgObj.id, msgObj.title);
                }}
              >
                replace查看
              </button>
            </li>
          );
        })}
      </ul>
      <hr />
      <Routes>
        <Route path="detail/:id/:title" element={<Detail />} />
      </Routes>

      <button onClick={back}>回退</button>
      <button onClick={forward}>前进</button>
      <button onClick={go}>go</button>
    </div>
  );
}

export default Message;
