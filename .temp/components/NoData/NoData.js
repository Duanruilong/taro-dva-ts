import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View } from '@tarojs/components';
import './NoData.scss';
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
NoData.defaultProps = {};
export default NoData;