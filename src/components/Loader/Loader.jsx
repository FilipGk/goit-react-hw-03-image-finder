import React, { Component } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import style from './Loader.module.css';

class Loader extends Component {
  render() {
    return (
      <div className={style.loader_wrapper}>
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      </div>
    );
  }
}

export default Loader;
