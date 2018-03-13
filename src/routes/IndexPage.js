import React from 'react';
import { connect } from 'dva';
// import styles from './IndexPage.css';
import { Button } from 'antd';

function IndexPage() {
  return (
    <Button>123</Button>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
