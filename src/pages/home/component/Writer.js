import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  WriterWrapper,
  WriterTitle,
  WriterSwitch,
  WriterItem,
  WriterInfoWrapper,
  WriterName,
  WriterAttention,
  WriterDesc
} from '../style';

class Writer extends Component {
  render() {
    const { list } = this.props;
    return (
      <WriterWrapper>
        <WriterTitle>
          推荐作者
          <WriterSwitch
          // onClick={() => handleChangePage(page, totalPage, this.spinIcon)}
          >
            <span
              ref={icon => (this.spinIcon = icon)}
              className='iconfont spin'
            >
              &#xe606;
            </span>
            换一批
          </WriterSwitch>
        </WriterTitle>
        {list.map(item => (
          <WriterItem>
            <img className='writer-img' alt='' src={item.get('imgUrl')} />
            <WriterInfoWrapper>
              <WriterName>{item.get('writerName')}</WriterName>
              <WriterAttention>+ 关注</WriterAttention>
              <WriterDesc>{item.get('writerDesc')}</WriterDesc>
            </WriterInfoWrapper>
          </WriterItem>
        ))}
      </WriterWrapper>
    );
  }
}

const mapState = state => ({
  list: state.getIn(['home', 'writerList'])
});

export default connect(mapState)(Writer);
