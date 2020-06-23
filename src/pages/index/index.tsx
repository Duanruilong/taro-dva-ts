
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtMessage } from "taro-ui"
import { connect } from '@tarojs/redux'
// import Api from '../../utils/request'
// import Tips from '../../utils/tips'
import { IndexProps, IndexState } from './index.interface'
import { IsEmpty } from '../../utils/common'
// import pageInit from '../../utils/pageInit'

import './index.scss'

/** 
 * @Author: drlong 
 * @Date: 2020-06-23 16:09:54 
 * @Desc: 首页 
 */

@connect(({ index }) => ({
	...index
}))


class Index extends Component<IndexProps, IndexState> {
	config: Config = {
		navigationBarTitleText: '首页',
		enablePullDownRefresh: true,
		onReachBottomDistance: 50
	}
	state: { sLoading: boolean }
	props: any
	constructor(props: IndexProps) {
		super(props)
		this.state = {
			sLoading: true,
		}
	}

	componentWillMount() {
		Taro.showLoading({
			title: 'loading'
		})
	}


	async getIndex() {
		await this.props.dispatch({
			type: 'index/getIndexDate',
			payload: {
				method: 'POSt',
			}
		}).then(() => {
			
			Taro.stopPullDownRefresh();
		})
	}




	componentDidMount() {
		console.log('首页-=---Index');
		
		this.getIndex()
		Taro.hideLoading();
		// Taro.navigateTo({
		// 	url: `/pagesPlann/plannEntersList/index?`,
		//   });

	}



	onPullDownRefresh() { //下拉事件
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
		const { } = this.props;
		const { sLoading } = this.state;
		console.log(sLoading, '---=首页=>>', this.props);

		return (
			<View className='fx-plann-wrap'>
				<View className='cent-leTit'>生涯资讯</View>
			</View>

		)
	}
}
export default Index
