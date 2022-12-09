/*
 * @Description: 路由包裹文件
 * @Author: YinWQ
 * @Date: 2022-12-09 11:09:55
 * @LastEditors: YinWQ
 * @LastEditTime: 2022-12-09 11:19:47
 */
import { useLocation, useNavigate, useParams } from "react-router-dom";

const withRouter = (props: any) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const location = useLocation();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const params = useParams();

  return (
    <div {...props} location={location} navigate={navigate} params={params}>
      {props.children}
    </div>
  );
};

export default withRouter;
