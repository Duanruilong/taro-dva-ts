
    // import Taro from '@tarojs/taro';
    import * as curriculumApi from './service';
    export default {
        namespace: 'index',
        state: {
            indexDate:{},
            pageNum:1,
        },
        
        effects: {
         
            *getIndexDate({payload},{select, call, put}){
                console.log('获取首页数据=1111 payload=》', payload);
                const { pageNum, indexDate } = yield select(state => state.index)
                // console.log('获取首页数据=22 indexDate=》', pageNum, indexDate);
                const response = yield call(curriculumApi.getDate, { ...payload });
                console.log(pageNum, indexDate,'获取首页数据=22 data=》', response);
                if (response.code  == 0) {
                    yield put({
                        type: 'save',
                        payload: {
                            indexDate: (payload.page_num && payload.page_num > 1) ? [...indexDate, ...response.data] : response.data
                        },
                    });
                    yield put({
                        type: 'save',
                        payload: {
                            pageNum: pageNum+1
                        },
                    });
                }
                return response
            },

        },
        reducers: {
            save(state, { payload }) {
                return { ...state, ...payload };
            }
        }
    
    }

