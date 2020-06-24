import Nerv from "nervjs";
import { __decorate } from "tslib";
import Taro, { showLoading as _showLoading, stopPullDownRefresh as _stopPullDownRefresh, hideLoading as _hideLoading } from "@tarojs/taro-h5";
import { View, ScrollView } from '@tarojs/components';
import { connect } from "@tarojs/redux-h5";
import BanSwiper from '../../components/BanSwiper/BanSwiper';
import ListView from './ListView/ListView';
// import pageInit from '../../utils/pageInit'
import './index.scss';
/**
 * @Author: drlong
 * @Date: 2020-06-23 16:09:54
 * @Desc: 首页
 */
let Index = class Index extends Taro.Component {
  constructor(props) {
    super(props);

    this.state = {
      sLoading: true
    };
  }
  componentWillMount() {
    _showLoading({
      title: 'loading'
    });
  }
  async getIndex() {
    await this.props.dispatch({
      type: 'index/getIndexDate',
      payload: {
        method: 'POSt'
      }
    }).then(() => {
      _stopPullDownRefresh();
    });
  }
  componentDidMount() {
    console.log('首页-=---Index');
    this.getIndex();
    _hideLoading();
    // Taro.navigateTo({
    // 	url: `/pagesPlann/plannEntersList/index?`,
    //   });
  }
  // onPullDownRefresh() { //下拉事件
  // 	console.log('//下拉事件');
  // 	// Taro.showLoading({
  // 	// 	title: 'loading'
  // 	// })
  // 	// Taro.stopPullDownRefresh();
  // }
  // 小程序上拉加载
  onReachBottom() {
    console.log('// 小程序上拉加载', this.props);
    //  Taro.showLoading({
    // 	title: 'loading'
    //   })
  }
  onScrollToUpper() {}
  // or 使用箭头函数
  // onScrollToUpper = () => {}
  onScroll(e) {
    //   console.log(e.detail)
  }
  render() {
    const { indexDate } = this.props;
    const { sLoading } = this.state;
    console.log(sLoading, '---=首页=>>', this.props);
    const scrollStyle = {
      height: '150px'
    };
    const scrollTop = 0;
    const Threshold = 20;
    const vStyleA = {
      height: '150px',
      'background-color': 'rgb(26, 173, 25)'
    };
    const vStyleB = {
      height: '150px',
      'background-color': 'rgb(39,130,215)'
    };
    const vStyleC = {
      height: '150px',
      'background-color': 'rgb(241,241,241)',
      color: '#333'
    };
    return <View className="fx-wrap">
				<View className="fx-wrap-top" style={{ color: '#444' }}>首页</View>
					<View>Index引用外部公共组件</View>
					
					<BanSwiper banneret={indexDate && indexDate.list ? indexDate.list : []}></BanSwiper>

					<ScrollView className="scrollview" scrollY scrollWithAnimation scrollTop={scrollTop} style={scrollStyle} lowerThreshold={Threshold} upperThreshold={Threshold} onScrollToUpper={this.onScrollToUpper.bind(this)} // 使用箭头函数的时候 可以这样写 `onScrollToUpper={this.onScrollToUpper}`
      onScroll={this.onScroll}>
						<View style={vStyleA}>A</View>
						<View style={vStyleB}>B</View>
						<View style={vStyleC}>C</View>
					</ScrollView>
					<View>Index内部自己的组件</View>
					<ListView listData={indexDate} />
					
					
			</View>;
  }
  config = {
    navigationBarTitleText: '首页',
    enablePullDownRefresh: true,
    onReachBottomDistance: 50
  };
  handleClick = () => {};

  componentDidShow() {
    super.componentDidShow && super.componentDidShow();
    this._offReachBottom = Taro.onReachBottom({
      callback: this.onReachBottom,
      ctx: this,
      onReachBottomDistance: 50
    });
  }

  componentDidHide() {
    super.componentDidHide && super.componentDidHide();
    this._offReachBottom && this._offReachBottom();
  }

};
Index = __decorate([connect(({ index }) => ({
  ...index
}))], Index);
export default Index;