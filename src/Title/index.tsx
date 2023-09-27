import React from 'react';
import './style.less';
interface TitleProps {
  color?: string;
  name: string;
  sectName?: string;
}
export default function Title(props: TitleProps) {
  return (
    <div className="title" style={{ color: props.color }}>
      <h1>{props.name}</h1>
      {props.sectName && <h2>{props.sectName}</h2>}
    </div>
  );
}
