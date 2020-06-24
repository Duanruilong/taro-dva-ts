import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View } from '@tarojs/components';
import './NoData.scss';

/** 
 * javascript comment 
 * @Author: drlong 
 * @Date: 2020-06-24 13:56:45 
 * @Desc: 无数据渲染 
 */
class NoData extends Taro.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <View className="fx-NoData">
        NoData组件
      </View>;
  }
}
NoData.options = {
  addGlobalClass: true
};
NoData.defaultProps = {};
export default NoData;