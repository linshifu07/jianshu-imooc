import * as constants from './constants';
import { fromJS } from 'immutable';
import axios from 'axios';
// import store from '../../../store'

export const searchFocus = () => ({
  type: constants.SEARCH_FOCUS
});

export const searchBlur = () => ({
  type: constants.SEARCH_BLUR
});

export const getList = () => {
  return dispatch => {
    // console.log(store.getIn(['header','list']))
    axios
    .get('/api/headerList.json')
    .then(res => {
      const data = res.data;
      dispatch(changeList(data.data));
    })
    .catch(() => {
      console.log('error');
    });
  };
};

const changeList = data => ({
  type: constants.CHANGE_LIST,
  data: fromJS(data)
});