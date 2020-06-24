import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View } from '@tarojs/components';
import './index.scss';
// @connect(({ curriculum }) => ({
//     ...curriculum,
// }))
class Curriculum extends Taro.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  componentDidMount() {}
  render() {
    return <View className="fx-curriculum">
            页面内容
        </View>;
  }
  config = {
    navigationBarTitleText: '页面标题'
  };

  componentDidShow() {
    super.componentDidShow && super.componentDidShow();
  }

  componentDidHide() {
    super.componentDidHide && super.componentDidHide();
  }

}
export default Curriculum;