/*
 * @Description: 状态管理
 * @Author: YinWQ
 * @Date: 2022-12-06 09:48:37
 * @LastEditors: YinWQ
 * @LastEditTime: 2022-12-06 18:19:44
 */
import { EnthusiasmAction } from "../actions";
import { StoreState } from "../../types";
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from "../constants";
import { Reducer } from "redux";

export const enthusiasm: Reducer<StoreState, EnthusiasmAction> = (
  state: StoreState = {
    languageName: "TypeScript",
    enthusiasmLevel: 1,
  },
  action: EnthusiasmAction
) => {
  switch (action.type) {
    case INCREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
    case DECREMENT_ENTHUSIASM:
      return {
        ...state,
        enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1),
      };
    // default:
    //   return { ...state };
  }
  return state;
};