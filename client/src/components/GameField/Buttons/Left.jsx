import React from 'react';

function Left({ moveLeft, rotateLeftHandler }) {
  return (
    <svg onClick={moveLeft} width="83" height="83" viewBox="0 0 83 83" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1.335" y="1.33561" width="79.4599" height="79.4599" fill="#D2D2D2" stroke="white" stroke-width="2.67" />
      <path d="M52.2648 21.1555L22.3994 41.0657L52.2648 60.976" stroke="white" stroke-width="2.67" stroke-linecap="square" />
    </svg>
  );
}

export default Left;
