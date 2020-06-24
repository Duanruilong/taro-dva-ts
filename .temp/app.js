import Taro, { Component } from "@tarojs/taro-h5";

import { Provider } from "@tarojs/redux-h5";
import dva from './utils/dva';
import models from "./models/index";
import './app.scss';
// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
import Nerv from 'nervjs';
import { View, Tabbar, TabbarContainer, TabbarPanel } from '@tarojs/components';
import { Router, createHistory, mountApis } from '@tarojs/router';
Taro.initPxTransform({
  "designWidth": 750,
  "deviceRatio": {
    "640": 1.17,
    "750": 1,
    "828": 0.905
  }
});

const _taroHistory = createHistory({
  mode: "hash",
  basename: "/",
  customRoutes: {},
  firstPagePath: "/pages/index/index"
});

mountApis({
  "basename": "/",
  "customRoutes": {}
}, _taroHistory);
if (process.env.NODE_ENV !== 'production' && true) {
  require('nerv-devtools');
}
const dvaApp = dva.createApp({
  initialState: {},
  models: models
});
const store = dvaApp.getStore();
class App extends Component {
  state = {
    __tabs: {
      color: '#7A7E83',
      selectedColor: '#000000',
      borderStyle: '#ffffff',
      backgroundColor: '#ffffff',
      list: [{
        text: '首页',
        pagePath: "/pages/index/index",
        iconPath: require("./assets/image/index.png"),
        selectedIconPath: require("./assets/image/index-act.png")
      }, {
        text: '我的',
        pagePath: "/pages/curriculum/index",
        iconPath: require("./assets/image/curriculum.png"),
        selectedIconPath: require("./assets/image/curriculum-act.png")
      }],
      mode: "hash",
      basename: "/",
      customRoutes: {}
    }
  };

  constructor() {
    super(...arguments);
    /**
     * 指定config的类型声明为: Taro.Config
     *
     * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
     * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
     * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
     */
    Taro._$app = this;
  }
  componentDidMount() {
    this.componentDidShow();
  }
  componentDidShow() {}
  componentDidHide() {}
  componentDidCatchError() {}
  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return <Provider store={store}>
          
        <TabbarContainer>
          
        <TabbarPanel>
          
                <Router mode={"hash"} history={_taroHistory} routes={[{
            path: '/pages/index/index',
            componentLoader: () => import( /* webpackChunkName: "index_index" */'./pages/index/index'),
            isIndex: true
          }, {
            path: '/pages/curriculum/index',
            componentLoader: () => import( /* webpackChunkName: "curriculum_index" */'./pages/curriculum/index'),
            isIndex: false
          }]} tabBar={this.state.__tabs} customRoutes={{}} />
                
        </TabbarPanel>
        <Tabbar conf={this.state.__tabs} homePage="pages/index/index" />
        </TabbarContainer>
        </Provider>;
  }
  config = {
    pages: ["/pages/index/index", "/pages/curriculum/index"],
    preloadRule: {
      'pages/index/index': {
        network: "all",
        packages: ["pagesIndex"]
      }
    },
    window: {
      backgroundTextStyle: 'light',
      // navigationBarBackgroundColor: '#147FFB',
      navigationBarBackgroundColor: '#0B9FFF',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'white'
    },
    tabBar: { color: '#7A7E83', selectedColor: '#000000', borderStyle: '#ffffff', backgroundColor: '#ffffff', list: [{ text: '首页', pagePath: "/pages/index/index", iconPath: require("./assets/image/index.png"), selectedIconPath: require("./assets/image/index-act.png") }, { text: '我的', pagePath: "/pages/curriculum/index", iconPath: require("./assets/image/curriculum.png"), selectedIconPath: require("./assets/image/curriculum-act.png") }], mode: "hash",
      basename: "/",
      customRoutes: {}
    }
  };

  componentWillUnmount() {
    this.componentDidHide();
  }

  componentWillMount() {
    Taro.initTabBarApis(this, Taro);
  }

}
Nerv.render(<App />, document.getElementById('app'));