import React, { Component } from 'react';
import './style.less';
import { Marquee } from './Marquee';
import { SmileOutline, CloseOutline } from 'antd-mobile-icons';
export interface NoticeBarPropsType {
  onClick?: () => void;
  icon?: React.ReactElement<any> | null;
  loop?: boolean;
  children?: any;
}
export interface StatePropsType {
  show?: boolean;
}
export class NoticeBar extends Component<NoticeBarPropsType, StatePropsType> {
  static defaultProps = {
    icon: <SmileOutline />,
  };
  constructor(props: NoticeBarPropsType) {
    super(props);
    this.state = {
      show: true,
    };
  }
  onClick() {
    this.setState({ show: false });
  }
  render() {
    const { icon } = this.props;
    const operationDom = (
      <div role="button" aria-label="close" onClick={(e) => this.onClick()}>
        <CloseOutline />
      </div>
    );
    return this.state.show ? (
      <div className="prefixCls" role="alert">
        {icon}
        <div>
          <Marquee loop={this.props.loop} text={this.props.children} />
        </div>
        {operationDom}
      </div>
    ) : null;
  }
}

export default NoticeBar;
