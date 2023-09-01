import React, { useEffect, useState } from 'react';
import { NoticeBar } from 'antd-mobile';
import 'antd-mobile/es/global';

export type NoticeBarProps = {
  content: string;
  color: 'default' | 'alert' | 'error' | 'info';
  closeable?: boolean;
  delay?: number;
  extra?: React.ReactNode;
  icon?: React.ReactNode;
  onClose?: () => void;
  onClick?: () => void;
  speed?: number;
  wrap?: boolean;
};

const MyNoticeBar = (props: NoticeBarProps) => {
  const [style, setStyle] = useState({});
  const { content, color, ...res } = props;
  useEffect(() => {
    const test = setTimeout(() => {
      setStyle({ display: 'none' });
    }, 5000);
    return () => {
      clearTimeout(test);
    };
  });
  return (
    <div style={style}>
      <NoticeBar content={content} color={color} {...res} />
    </div>
  );
};
MyNoticeBar.prototype = {};
export default MyNoticeBar;
