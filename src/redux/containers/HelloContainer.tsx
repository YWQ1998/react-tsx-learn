/*
 * @Description: 组件容器
 * @Author: YinWQ
 * @Date: 2022-12-06 10:44:15
 * @LastEditors: YinWQ
 * @LastEditTime: 2022-12-06 17:36:05
 */
import HelloFunCom from "../../Components-function/HelloFunCom";
import * as actions from '../actions/index'
import { StoreState } from "../../types";
import { Dispatch } from "redux";
import { connect } from "react-redux";

export function mapStateToProps(state: StoreState) {
    console.log("state", state);
    
  return {
    number: state?.enthusiasmLevel! || 0,
    name: state?.languageName! || '小明',
  };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
  console.log('dispatch', dispatch);
  
  return {
    onIncrement: () => dispatch(actions.incrementEnthusiasm()),
    onDecrement: () => dispatch(actions.decrementEnthusiasm()),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(HelloFunCom);