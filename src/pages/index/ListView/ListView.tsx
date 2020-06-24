import Taro, { Component } from '@tarojs/taro'
import { View, Swiper, SwiperItem, Image } from '@tarojs/components'
import { ListViewProps, ListViewState } from './ListView.interface'
import './ListView.scss'

import NoData from "../../../components/NoData/NoData";

/**
 *轮播图组件
 *
 * @author Drlong
 * @class ListView
 * @extends {Component<ListViewProps, ListViewState>}
 */
class ListView extends Component<ListViewProps,ListViewState > {
  constructor(props: ListViewProps) {
    super(props)
    this.state = {}
  }
  // static options = {
  //   addGlobalClass: true //样式隔离
  // }
  static defaultProps:ListViewProps = {
    // date: any
  }


  // 图片点击
  gotoDetail(item){
    console.log('图片点击',item);
    
  }

  render() {
    const { listData } = this.props
    console.log('this.props==ListView=>>',this.props);

    return (
      <View className='fx-wrap'>
        {
            (listData&&listData.list) ? 

            (listData.list).map((item,index)=>{
                return(
                    <View className='fx-wrap-item' key={index}>{item.name}</View>
                )
            })
            :
            <NoData/>
        }
      </View>
    )
  }
}

export default ListView
