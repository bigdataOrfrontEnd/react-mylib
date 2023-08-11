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
  const { type, className, ...rest } = props;
  console.log(rest);

  const disabled = props.disabled ? 'disabled' : undefined;
  const ghost = props.ghost ? 'ghost' : undefined;
  const size = props.size ? props.size : 'midlle';
  const onClick = (e: React.MouseEvent) => {
    // preventDefault() 方法告诉用户代理：如果此事件没有被显式处理，
    // 它默认的动作也不应该照常执行。此事件还是继续传播，
    // 除非碰到事件监听器调用 stopPropagation() 或 stopImmediatePropagation()，才停止传播
    if (disabled) return e.preventDefault();
    // console.log(e.target);
    // && props.onClick.call(e.target, e);
    props.onClick && props.onClick(e);
  };
  const buttonClassName = classes('x-button', type, disabled, ghost, size);

  return (
    <Fragment>
      <button className={buttonClassName} onClick={onClick} {...rest}>
        <span className="text">{props.children}</span>
      </button>
    </Fragment>
  );
};
Button.defaultProps = {
  type: 'default',
  ghost: false,
  size: 'middle',
};

export default Button;
