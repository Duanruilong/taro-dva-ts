

import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
// import { connect } from '@tarojs/redux'
// import Api from '../../utils/request'
// import Tips from '../../utils/tips'
import { CurriculumProps, CurriculumState } from './curriculum.interface'
import './index.scss'
// import {  } from '../../components'
import { IsEmpty } from '../../utils/common'

// @connect(({ curriculum }) => ({
//     ...curriculum,
// }))

class Curriculum extends Component<CurriculumProps,CurriculumState > {
    config:Config = {
        navigationBarTitleText: '页面标题'
    }
    constructor(props: CurriculumProps) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        
    }

    render() {
        return (
        <View className='fx-curriculum'>
            页面内容
        </View>
        )
    }
}
export default Curriculum
