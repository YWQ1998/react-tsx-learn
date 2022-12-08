/*
 * @Description: 基本数据类型
 * @Author: YinWQ
 * @Date: 2022-12-07 09:25:28
 * @LastEditors: YinWQ
 * @LastEditTime: 2022-12-07 16:37:20
 */
enum Color {
  Red = 1,
  Green = 4,
  Blue = 8,
}
export interface subFun {
  (source: string, subStr: string): boolean;
}

 const index = () => {
    let c: Color = Color.Green;
    let colorName: string = Color[c];
  return (
    <div>
      index {c}-{colorName}
    </div>
  );
}
export default index;