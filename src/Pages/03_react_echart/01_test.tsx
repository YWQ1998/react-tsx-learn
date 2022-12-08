/*
 * @Description: echart 图表使用示例
 * @Author: YinWQ
 * @Date: 2022-12-08 14:47:28
 * @LastEditors: YinWQ
 * @LastEditTime: 2022-12-08 16:37:54
 */
import { Button } from "choerodon-ui/pro";
import { ButtonColor } from "choerodon-ui/pro/lib/button/enum";
import React, { useRef, useState } from "react";
import TestChartCom, {
  ChartProps,
} from "../../Components-function/ChartCom/01_Chart_test";

const TestChartPage: React.FC = () => {
    const dom = useRef<any>();
    const [params, setParams] = useState<ChartProps>({
    key: "123",
    option: {
      title: {
        text: "Stacked Line",
      },
      tooltip: {
        trigger: "axis",
      },
      legend: {
        data: ["Email", "Union Ads", "Video Ads", "Direct", "Search Engine"],
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      toolbox: {
        feature: {
          saveAsImage: {},
        },
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: "value",
      },
    },
    style: {
        width: '200px',
        height: '300px',
    }
  });
  const handleAddData = () => {    
    const operation = {series: [
        {
          name: "Email",
          type: "line",
          stack: "Total",
          data: [120, 132, 101, 134, 90, 230, 210],
        },
        {
          name: "Union Ads",
          type: "line",
          stack: "Total",
          data: [220, 182, 191, 234, 290, 330, 310],
        },
        {
          name: "Video Ads",
          type: "line",
          stack: "Total",
          data: [150, 232, 201, 154, 190, 330, 410],
        },
        {
          name: "Direct",
          type: "line",
          stack: "Total",
          data: [320, 332, 301, 334, 390, 330, 320],
        },
        {
          name: "Search Engine",
          type: "line",
          stack: "Total",
          data: [820, 932, 901, 934, 1290, 1330, 1320],
        },
      ]};
    const option = {
      ...params.option,
      ...operation,
    };
    setParams({ ...params, option });
  };
  return (
    <div ref={dom}>
      <Button color={ButtonColor.primary} onClick={() => handleAddData()}>
        数据
      </Button>
      <TestChartCom {...params} />
    </div>
  );
};
export default TestChartPage;
