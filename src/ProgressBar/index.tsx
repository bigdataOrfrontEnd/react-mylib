import React from 'react';
import './style.less';
interface ProgressBarType {
  style: 'line';
  size?: 'small' | 'big' | 'all';
}
//使用字符串拼接的方式去改变样式
export default function ProgressBar(props: ProgressBarType) {
  const { style } = props;
  return (
    <div>
      <div className={`${style}-progress`}></div>
    </div>
  );
}
export { ProgressBar };
