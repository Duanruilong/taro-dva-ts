import Api from '../../utils/request';
export const getDate = data => Api.post({ url: '/circle/index', data });