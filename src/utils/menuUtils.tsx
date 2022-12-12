/*
 * @Description: 菜单生成相关方法
 * @Author: YinWQ
 * @Date: 2022-12-09 14:09:02
 * @LastEditors: YinWQ
 * @LastEditTime: 2022-12-09 16:16:54
 */
import SubMenu from "choerodon-ui/lib/menu/SubMenu";
import { Icon, Menu } from "choerodon-ui/pro/lib";
import { IRoute } from "../config/router";

const getMenus = (routes: Array<IRoute>, selectMenu: (route:IRoute) => void) => {
  let MenuItemList: Array<React.ReactElement> = Array<React.ReactElement>();
  if (routes.length > 0) {
    routes.forEach((item) => {
      if (item.children) {
        let subMenuList: Array<React.ReactElement> = Array<
          React.ReactElement
        >();
        item.children.forEach((item) => {
          subMenuList.push(
            <Menu.Item key={item.path} onClick={() => selectMenu(item)}>
              {item.icon && <Icon type={item.icon} />}
              {item.title}
            </Menu.Item>
          );
        });
        MenuItemList.push(
          <SubMenu
            key={item.path}
            title={
              <span>
                {item.icon && <Icon type={item.icon} />}
                <span>{item.title}</span>
              </span>
            }
          >
            {subMenuList}
          </SubMenu>
        );
      } else {
        MenuItemList.push(
          <Menu.Item key={item.path} onClick={() => selectMenu(item)}>
            {item.icon && <Icon type={item.icon} />}
            {item.title}
          </Menu.Item>
        );
      }
    });
  }
  return MenuItemList;
};
export default getMenus;
