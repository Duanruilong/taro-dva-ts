/**
 * index.state 参数类型
 * @interface IndexState
 */
export interface IndexState {
    sLoading?: boolean
}

/**
 * index.props 参数类型
 *
 * @export
 * @interface IndexProps
 */
export interface IndexProps {
    dispatch?: any,
    dataBanner?: Array<DataInterface>,
    brands?:any,
    careeDate?:any,
    page?:number,
    provinceScore?:any,
    careerTestAdvise?:any,
    entrancePlanDetail?:any,
    entrancePlanList?:any,
}

export interface DataInterface {
    banner: string,
    brands:string,
    banneret:string,
    productsList:string,
    special_topics:string,
    
}
