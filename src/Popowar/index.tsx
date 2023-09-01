import React from 'react';
import { Popover } from 'antd-mobile';
interface PropsType {
  content: React.ReactNode;
  placement?:
    | 'top'
    | 'top-start'
    | 'top-end'
    | 'right'
    | 'right-start'
    | 'right-end'
    | 'bottom'
    | 'bottom-start'
    | 'bottom-end'
    | 'left'
    | 'left-start'
    | 'left-end';
  children?: any;
}
export function MyPopover(props: PropsType) {
  const { content, placement } = props;

  return (
    <Popover content={content} trigger="click" placement={placement}>
      {props.children}
    </Popover>
  );
}
export default MyPopover;
