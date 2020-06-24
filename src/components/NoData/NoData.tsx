import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { NoDataProps, NoDataState } from './NoData.interface'
import './NoData.scss'

class NoData extends Component<NoDataProps,NoDataState > {
  constructor(props: NoDataProps) {
    super(props)
    this.state = {}
  }
  static options = {
    addGlobalClass: true
  }
  static defaultProps:NoDataProps = {}

  render() {
    return (
      <View className='fx-NoData'>
        NoData组件
      </View>
    )
  }
}

export default NoData
