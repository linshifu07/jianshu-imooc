import styled from 'styled-components';

export const HomeWrapper = styled.div`
  overflow: hidden;
  width: 960px;
  /* height:600px; */
  margin: 0 auto;
`;

export const HomeLeft = styled.div`
  float: left;
  margin-left: 15px;
  padding-top: 30px;
  width: 625px;
  .banner-img {
    width: 625px;
    height: 270px;
  }
`;

export const TopicWrapper = styled.div`
  overflow: hidden;
  padding: 20px 0 10px 0;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
`;
export const TopicItem = styled.div`
  float: left;
  height: 32px;
  line-height: 32px;
  margin-left: 18px;
  margin-bottom: 18px;
  padding-right: 10px;
  font-size: 14px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  background: #f7f7f7;
  .topic-pic {
    display: block;
    float: left;
    margin-right: 10px;
    height: 32px;
    width: 32px;
    border-radius:4px;
  }
`;

export const ListInfo = styled.div`
  width: 500px;
  float: left;
  .title {
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  .desc {
    line-height: 24px;
    font-size: 13px;
    color: #999;
  }
`;

export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  .pic {
    display: block;
    width: 125px;
    height: 100px;
    float: right;
    border-radius: 10px;
  }
`;

export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin: 30px 0;
  background: #a5a5a5;
  text-align: center;
  border-radius: 20px;
  cursor: pointer;
`;

export const HomeRight = styled.div`
  width: 280px;
  float: right;
`;

export const RecommendWrapper = styled.div`
  margin: 30px 0;
  width: 280px;
`;

export const RecommendItem = styled.div`
  width: 280px;
  height: 50px;
  margin-bottom: 6px;
  background: url(${props => props.imgUrl});
  background-size: contain;
`;

export const WriterWrapper = styled.div`
  width: 278px;
  height: 300px;
  line-height: 300px;
  text-align: center;
`;

export const WriterTitle = styled.div`
  overflow: hidden;
  height: 14px;
  line-height: 14px;
  font-size: 14px;
  color: #969696;
  text-align: left;
`;

export const WriterSwitch = styled.div`
  float: right;
  cursor: pointer;
  .spin {
    font-size: 12px;
    margin-right: 3px;
  }
`;

export const WriterItem = styled.div`
  width: 280px;
  height: 48px;
  margin-top: 15px;
  .writer-img {
    display: block;
    float: left;
    width: 48px;
    height: 48px;
    border-radius: 24px;
    margin: 0 8px;
  }
`;

export const WriterInfoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 48px;
`;

export const WriterName = styled.div`
  display: block;
  height: 14px;
  width: 150px;
  line-height: 14px;
  font-size: 14px;
  padding-top: 5px;
  text-align: left;
  color: #333;
  cursor: pointer;
`;

export const WriterAttention = styled.div`
  float: right;
  height: 13px;
  width: 50px;
  text-align: right;
  line-height: 13px;
  font-size: 13px;
  margin-top: 5px;
  font-weight: 400;
  color: #42c02e;
  cursor: pointer;
`;

export const WriterDesc = styled.div`
  margin-top: 2px;
  height: 20px;
  line-height: 20px;
  font-size: 12px;
  color: #969696;
`;

export const BackTop = styled.div`
  position:fixed;
  right:100px;
  bottom:100px;
  width:60px;
  height:60px;
  font-size:14px;
  line-height:60px;
  text-align:center;
  border:1px solid #ccc;
`
