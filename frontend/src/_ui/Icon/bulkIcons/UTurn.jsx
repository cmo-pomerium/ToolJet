import React from 'react';

const UTurn = ({ fill = '#C1C8CD', width = '25', className = '', viewBox = '0 0 25 25' }) => (
  <svg
    width={width}
    height={width}
    viewBox={viewBox}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      opacity="0.4"
      d="M8.97272 3.25394C10.6446 1.58202 13.3554 1.58202 15.0273 3.25394L20.7461 8.97272C22.418 10.6446 22.418 13.3554 20.7461 15.0273L15.0273 20.7461C13.3554 22.418 10.6446 22.418 8.97272 20.7461L3.25394 15.0273C1.58202 13.3554 1.58202 10.6446 3.25394 8.97272L8.97272 3.25394Z"
      fill="#121212"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M15 16.75C14.5858 16.75 14.25 16.4142 14.25 16V11C14.25 9.75736 13.2426 8.75 12 8.75C10.7574 8.75 9.75 9.75736 9.75 11V12.6036L10.4697 11.8839C10.7626 11.591 11.2374 11.591 11.5303 11.8839C11.8232 12.1768 11.8232 12.6516 11.5303 12.9445L10.2374 14.2374C9.55402 14.9209 8.44598 14.9209 7.76256 14.2374L6.46967 12.9445C6.17678 12.6516 6.17678 12.1768 6.46967 11.8839C6.76256 11.591 7.23744 11.591 7.53033 11.8839L8.25 12.6036V11C8.25 8.92893 9.92893 7.25 12 7.25C14.0711 7.25 15.75 8.92893 15.75 11V16C15.75 16.4142 15.4142 16.75 15 16.75Z"
      fill="#121212"
    />
  </svg>
);

export default UTurn;
