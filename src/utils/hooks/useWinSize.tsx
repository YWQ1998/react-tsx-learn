/*
 * @Description: 获取浏览器弹窗 hooks
 * @Author: YinWQ
 * @Date: 2022-12-07 13:32:20
 * @LastEditors: YinWQ
 * @LastEditTime: 2022-12-07 14:19:15
 */
import { useCallback, useEffect, useState } from "react";
export interface windowSizeObj {
  width: number;
  height: number;
}
const useWinSize = (): windowSizeObj => {
  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
  });

  const onResize = useCallback(() => {
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
    });
  }, []);
  useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);
  return size;
};
export default useWinSize;
