import Nerv from "nervjs";
import { __decorate } from "tslib";
import Taro, { showLoading as _showLoading, stopPullDownRefresh as _stopPullDownRefresh, hideLoading as _hideLoading } from "@tarojs/taro-h5";
import { View, PullDownRefresh } from '@tarojs/components';
import { connect } from "@tarojs/redux-h5";
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
      type: 'index/getDate',
      payload: {
        method: 'GET'
      }
    }).then(() => {
      _stopPullDownRefresh();
    });
  }
  componentDidMount() {
    console.log('首页-=---Index');
    _hideLoading();
    // Taro.navigateTo({
    // 	url: `/pagesPlann/plannEntersList/index?`,
    //   });
  }
  onPullDownRefresh() {
    console.log('//下拉事件');
    // Taro.showLoading({
    // 	title: 'loading'
    // })
  }
  // 小程序上拉加载
  onReachBottom() {
    console.log('// 小程序上拉加载', this.props);
    //  Taro.showLoading({
    // 	title: 'loading'
    //   })
  }
  render() {
    const {} = this.props;
    const { sLoading } = this.state;
    console.log(sLoading, '---=首页=>>', this.props);

    const _temp = <View className="fx-plann-wrap">
				<View className="cent-leTit">生涯资讯</View>
			</View>;

    return <PullDownRefresh onRefresh={this.onPullDownRefresh && this.onPullDownRefresh.bind(this)} ref={ref => {
      if (ref) this.pullDownRefreshRef = ref;
    }}>{_temp}</PullDownRefresh>;
  }
  config = {
    navigationBarTitleText: '首页',
    enablePullDownRefresh: true,
    onReachBottomDistance: 50
  };

  componentDidShow() {
    super.componentDidShow && super.componentDidShow();
    this._offReachBottom = Taro.onReachBottom({
      callback: this.onReachBottom,
      ctx: this,
      onReachBottomDistance: 50
    });
    this.pullDownRefreshRef && this.pullDownRefreshRef.bindEvent();
  }

  componentDidHide() {
    super.componentDidHide && super.componentDidHide();
    this._offReachBottom && this._offReachBottom();
    this.pullDownRefreshRef && this.pullDownRefreshRef.unbindEvent();
  }

};
Index = __decorate([connect(({ index }) => ({
  ...index
}))], Index);
export default Index;