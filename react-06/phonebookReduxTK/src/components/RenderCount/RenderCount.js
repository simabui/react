import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const circle = css`
  position: absolute;
  top: 0;
  right: 0;
  font-style: normal;
  text-align: center;
  height: ${30}px;
  width: ${30}px;
  line-height: ${30}px;
  border-radius: ${30 / 2}px;
  border: 1px solid #ddd;
  background: #eee;
`;

export default function RenderCount() {
  const renders = React.useRef(0);
  return <div css={circle}>{++renders.current}</div>;
}
