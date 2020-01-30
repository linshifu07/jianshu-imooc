import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HomeWrapper, HomeLeft, HomeRight } from './style';
import Topic from './component/Topic';
import List from './component/List';
import Recommend from './component/Recommend';
import Writer from './component/Writer';
import axios from 'axios';

class Home extends Component {
  componentDidMount() {
    axios.get('/api/home.json').then(res => {
      const result = res.data.data;
      const action = {
        type: 'change_home_data',
        topicList: result.topicList,
        articleList: result.articleList,
        recommendList: result.recommendList,
        writerList: result.writerList
      };
      this.props.changeHomeData(action);
    });
  }

  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img
            className='banner-img'
            alt=''
            src='//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
          />
          <Topic></Topic>
          <List></List>
        </HomeLeft>
        <HomeRight>
          <Recommend></Recommend>
          <Writer></Writer>
        </HomeRight>
      </HomeWrapper>
    );
  }
}
const mapDispatch = dispatch => ({
  changeHomeData(action) {
    dispatch(action);
  }
});

export default connect(null, mapDispatch)(Home);
