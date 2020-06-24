import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View, Swiper, SwiperItem, Image } from '@tarojs/components';
import './BanSwiper.scss';
/**
 *轮播图组件
 *
 * @author Drlong
 * @class BanSwiper
 * @extends {Component<BanSwiperProps, BanSwiperState>}
 */
class BanSwiper extends Taro.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // 图片点击
  gotoDetail(item) {
    console.log('图片点击', item);
  }
  render() {
    const { banneret } = this.props;
    console.log('this.props==BanSwiper=>>', this.props);
    return <View className="fx-BanSwiper-wrap">
        <Swiper className="swiper" circular indicatorDots indicatorColor="#999" indicatorActiveColor="#ffffff" autoplay>
				{banneret.map((item, index) => <SwiperItem key={index}>
						<Image onClick={this.gotoDetail.bind(this, item)} mode="widthFix" src={`${item.image_src}`} />
					</SwiperItem>)}
			</Swiper>
      </View>;
  }
}
BanSwiper.options = {
  // addGlobalClass: true //样式隔离
};
BanSwiper.defaultProps = {
  // date: any
};
export default BanSwiper;