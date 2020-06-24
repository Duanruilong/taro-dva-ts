import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View } from '@tarojs/components';
import './ListView.scss';
import NoData from "../../../components/NoData/NoData";
/**
 *轮播图组件
 *
 * @author Drlong
 * @class ListView
 * @extends {Component<ListViewProps, ListViewState>}
 */
class ListView extends Taro.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // 图片点击
  gotoDetail(item) {
    console.log('图片点击', item);
  }
  render() {
    const { listData } = this.props;
    console.log('this.props==ListView=>>', this.props);
    return <View className="fx-wrap">
        {listData && listData.list ? listData.list.map((item, index) => {
        return <View className="fx-wrap-item" key={index}>{item.name}</View>;
      }) : <NoData />}
      </View>;
  }
}
ListView.options = {
  addGlobalClass: true //样式隔离
};
ListView.defaultProps = {
  // date: any
};
export default ListView;