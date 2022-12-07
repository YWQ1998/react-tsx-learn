/*
 * @Description: 常用工具类
 * @Author: YinWQ
 * @Date: 2022-12-06 09:11:51
 * @LastEditors: YinWQ
 * @LastEditTime: 2022-12-06 09:14:00
 */
export function numberChar(numChars: number, chars: string) {
    return Array(numChars + 1).join(chars)
}