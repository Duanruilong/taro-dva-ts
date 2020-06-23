
    // import Taro from '@tarojs/taro';
    import * as curriculumApi from './service';
    export default {
        namespace: 'curriculum',
        state: {
            Date:[],
            pageNum:1,
        },
        
        effects: {
         
            *getDate({payload},{select, call, put}){
                // console.log('获取首页数据=22 payload=》', payload);
                const { pageNum, UniversityDate } = yield select(state => state.university)
                // console.log('获取首页数据=22 UniversityDate=》', pageNum, UniversityDate);
                const response = yield call(curriculumApi.getDate, { ...payload });
                // console.log(pageNum, UniversityDate,'获取首页数据=22 data=》', response);
                if (response.code  === 0) {
                    yield put({
                        type: 'save',
                        payload: {
                            UniversityDate: payload.page_num > 1 ? [...UniversityDate, ...response.universities] : response.universities
                        },
                    });
                    yield put({
                        type: 'save',
                        payload: {
                            pageNum: pageNum+1
                        },
                    });
                }
            },

        },
        reducers: {
            save(state, { payload }) {
                return { ...state, ...payload };
            }
        }
    
    }

