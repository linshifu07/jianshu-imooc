import React, { Component } from 'react';
import { Detailwrapper, Header, Content } from './style';
import { connect } from 'react-redux';
import { actionCreators } from './store';

class Detail extends Component {
  componentDidMount() {
    this.props.getDetail();
  }

  render() {
    const { title, content } = this.props;
    return (
      <Detailwrapper>
        <Header>{title}</Header>
        <Content dangerouslySetInnerHTML={{ __html: content }} />
        <Content></Content>
      </Detailwrapper>
    );
  }
}

const mapState = state => ({
  title: state.getIn(['detail', 'title']),
  content: state.getIn(['detail', 'content'])
});

const mapDispatch = dispatch => ({
  getDetail() {
    dispatch(actionCreators.getDetail());
  }
});

export default connect(mapState, mapDispatch)(Detail);
