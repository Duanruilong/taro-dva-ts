import Taro, { Component, Config } from '@tarojs/taro'
import Index from './pages/index/index'
import { Provider } from "@tarojs/redux";
import dva from './utils/dva';
import models from './models'
import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：

if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
  require('nerv-devtools')
}

const dvaApp = dva.createApp({
  initialState:{},
  models:  models,
})

const store = dvaApp.getStore();

class App extends Component {

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    pages: [
      'pages/index/index',
      'pages/curriculum/index'
    ],
    preloadRule: {
      'pages/index/index':{
        network: "all",
        packages: ["pagesIndex"]
      },
      // "pages/plann/index": {  //进入预加载plann分包
      //   network: "all",
      //   packages: ['pagesPlann']
      // },
      // "pages/user/index": {  //进入我的界面预加载user分包
      //   network: "all",
      //   packages: ["pagesUser"]
      // },
    },
      window: {
        backgroundTextStyle: 'light',
        // navigationBarBackgroundColor: '#147FFB',
        navigationBarBackgroundColor: '#0B9FFF',
        navigationBarTitleText: 'WeChat',
        navigationBarTextStyle: 'white'
      },
      tabBar: {
        color: '#7A7E83',
        selectedColor: '#000000',
        borderStyle: '#ffffff',
        backgroundColor: '#ffffff',
        list: [
          {
            text: '首页',
            pagePath: 'pages/index/index',
            iconPath: 'assets/image/index.png',
            selectedIconPath: 'assets/image/index-act.png',
          },
          {
            text: '我的',
            pagePath: 'pages/curriculum/index',
            iconPath: 'assets/image/curriculum.png',
            selectedIconPath: 'assets/image/curriculum-act.png',
          },
        ]
      },
  }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
