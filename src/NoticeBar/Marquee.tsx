import React, { Component, createRef } from 'react';
import ReactDOM from 'react-dom';
export interface MarqueeProps {
  prefixCls?: string;
  text?: string | null;
  loop?: boolean;
  leading?: number;
  trailing?: number;
  className?: string;
  fps?: number;
  style?: React.CSSProperties;
}
export interface StateProps {
  animatedWidth: number;
  overflowWidth: number;
}
export class Marquee extends Component<MarqueeProps, StateProps> {
  // 私有变量
  private marqueeTimer: number = 0;
  textRef: any = React.createRef();
  conatRef: any = React.createRef();
  // 默认值
  static defaultProps = {
    text: '请输入你的内容',
    loop: false, //选框是否循环
    leading: 500,
    trailing: 800, //定时器在执行指定的函数或代码之前应该等待的时间
    fps: 40,
    className: '',
  };

  constructor(props: MarqueeProps) {
    super(props);

    this.state = {
      animatedWidth: 0,
      overflowWidth: 0,
    };
  }
  componentDidMount(): void {
    this.measureText();
    this.startAnimation();
  }

  componentWillUnmount(): void {
    window.clearTimeout(this.marqueeTimer);
  }
  render() {
    const style: React.CSSProperties = {
      // 使用定位的方式去移动
      position: 'relative',
      right: this.state.animatedWidth,
      whiteSpace: 'nowrap',
      display: 'inline-block',
    };
    return (
      <div className="marquee-wrap" role="marque" ref={this.conatRef}>
        <div className="marquee" style={style} ref={this.textRef}>
          {this.props.text}
        </div>
      </div>
    );
  }
  //动画
  startAnimation() {
    //进入函数首先先清除定时器
    if (this.marqueeTimer) {
      window.clearTimeout(this.marqueeTimer);
    }
    const fps = this.props.fps;
    const TIMEOUT = (1 / fps!) * 1000;
    const isLeading = this.state.animatedWidth === 0;
    const timeout = isLeading ? this.props.leading : TIMEOUT;
    const animate = () => {
      const { overflowWidth } = this.state;
      let animatatedWidth = this.state.animatedWidth + 1;

      const isRoundOver = animatatedWidth > overflowWidth;

      //   animatatedWidth置零,判断是否循环
      if (isRoundOver) {
        if (this.props.loop) {
          console.log('animatatedWidth置零');

          animatatedWidth = 0;
        } else {
          return;
        }
      }
      if (isRoundOver && this.props.trailing) {
        // setTimeout设置一个定时器，一旦定时器到期，就会执行一个函数或指定的代码片段
        //返回值 timeoutID 是一个正整数，表示由 setTimeout()
        //调用创建的定时器的编号。这个值可以传递给 clearTimeout() 来取消该定时器。
        window.setTimeout(() => {
          this.setState({
            animatedWidth: animatatedWidth,
          });
          window.setTimeout(animate, TIMEOUT);
        }, this.props.trailing);
      } else {
        this.setState({
          animatedWidth: animatatedWidth,
        });
        this.marqueeTimer = window.setTimeout(animate, TIMEOUT);
      }
    };
    console.log(this.state.overflowWidth);

    if (this.state.overflowWidth == 0) {
      this.marqueeTimer = window.setTimeout(animate, timeout);
    }
  }
  //   获取当前组件和需要移动数据的宽度
  measureText() {
    const container = this.conatRef.current; //拿到这个组件元素
    const node = this.textRef.current;
    console.log(container.offsetWidth, node.offsetWidth);

    if (container && node) {
      const containerWith = container.offsetWidth; //返回一个元素的布局宽度
      const textWitdh = node.offsetWidth;
      const overflowWidth = textWitdh - containerWith; //移动元素和外部的容器的差值

      if (overflowWidth !== this.state.overflowWidth) {
        this.setState({
          overflowWidth,
        });
      }
    }
  }
}

export default Marquee;
