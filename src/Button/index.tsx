import React, { Fragment } from 'react';
import { classes } from '../utils';
import './style.less';
export type ButtonProps = {
  type?: 'default' | 'primary' | 'dashed' | 'danger'; //默认样式
  className?: string; //自定义类名
  style?: React.CSSProperties; //自定义样式
  disabled?: boolean; //按钮禁用状态
  onClick?: React.MouseEventHandler; //点击按钮时的回调
  size?: 'large' | 'middle' | 'small'; //按钮尺寸
  buttonType?: 'button' | 'submit' | 'reset'; //按钮类型
  loading?: boolean;
  ghost?: boolean;
};
const Button: React.FunctionComponent<ButtonProps> = (props) => {
  const { type } = props;
  console.log(props.onClick);

  const onClick = (e: React.MouseEvent) => {
    // console.log(e.target);
    // && props.onClick.call(e.target, e);
    props.onClick && props.onClick(e);
  };
  const buttonClassName = classes('x-button', type);

  return (
    <Fragment>
      <button className={buttonClassName} onClick={onClick}>
        <span className="text">{props.children}</span>
      </button>
    </Fragment>
  );
};
Button.defaultProps = {
  type: 'default',
};

export default Button;
