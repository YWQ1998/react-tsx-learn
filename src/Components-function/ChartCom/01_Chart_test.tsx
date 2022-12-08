/*
 * @Description:
 * @Author: YinWQ
 * @Date: 2022-12-08 15:03:56
 * @LastEditors: YinWQ
 * @LastEditTime: 2022-12-08 16:14:47
 */
/*
 * @Description: echart 图表使用示例
 * @Author: YinWQ
 * @Date: 2022-12-08 14:47:28
 * @LastEditors: YinWQ
 * @LastEditTime: 2022-12-08 14:59:47
 */
import React, { useRef } from "react";
import * as echarts from "echarts";

/**
 * 参数列表
 * key: string; 唯一值
 * option: object | null; 图表数据
 * style: {
 *      width: string; 图表宽度
 *      height: string; 图表高度
 * };
 * className?: string; 图表CSS样式类名称
 * onRender?(instance): void; 图表回调函数返回图表实例
 */
export interface ChartProps {
  key: string;
  option: Record<string, unknown> | null; // Record 详解 一些以 string 类型的键值对 值得类型 不清楚（类似 any）
  style: {
    width: string;
    height: string;
  };
  className?: string;
  onRender?: (instance: any) => void;
}
const TestChartCom: React.FC<ChartProps> = (props: ChartProps) => {
  // 挂载节点
  const chartDom = useRef<any>();
  const instance = useRef<any>();

  // 生命钩子函数
  type Callback = () => void;
  React.useEffect((): Callback => {
    console.log("组件初始化");

    // 获取实例对象
    instance.current =
      echarts.getInstanceByDom(chartDom.current) ||
      echarts.init(chartDom.current);

      console.log("chart 对象", instance);
      
    // 大小自适应
    const resize = (): void => instance.current.resize();
    window.removeEventListener("resize", resize);
    window.addEventListener("resize", resize);

    // 销毁并清除状态
    return (): void => {
      echarts.dispose(instance.current);
      window.removeEventListener("resize", resize);
    };
  }, [chartDom]);

  React.useEffect(() => {
    console.log("props参数变化", props);

    // 渲染图表
    if (props.option) {
      if (instance.current) {
        instance.current.setOption(props.option);
      }
    }

    // 回调函数返回实例
    if (props.onRender) props.onRender(instance.current);
  }, [props]);
  // 返回组件
  return (
    <div ref={chartDom} style={props.style} className={props.className}></div>
  );
};
export default TestChartCom;
