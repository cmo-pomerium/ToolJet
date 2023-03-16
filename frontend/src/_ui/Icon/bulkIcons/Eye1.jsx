import React from 'react';

const Eye1 = ({ fill = '#C1C8CD', width = '25', className = '', viewBox = '0 0 25 25' }) => (
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
      d="M20.8772 12.3211C22.3743 13.7542 22.3743 16.2458 20.8772 17.6789C18.8134 19.6545 15.6042 22 12 22C8.3958 22 5.18661 19.6545 3.12281 17.6789C1.62573 16.2458 1.62573 13.7542 3.12281 12.3211C5.18661 10.3455 8.3958 8 12 8C15.6042 8 18.8134 10.3455 20.8772 12.3211Z"
      fill="#121212"
    />
    <circle cx="12" cy="15" r="3" fill="#121212" />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 1.25C12.4142 1.25 12.75 1.58579 12.75 2V4C12.75 4.41421 12.4142 4.75 12 4.75C11.5858 4.75 11.25 4.41421 11.25 4V2C11.25 1.58579 11.5858 1.25 12 1.25Z"
      fill="#121212"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2.46967 4.46967C2.76256 4.17678 3.23744 4.17678 3.53033 4.46967L5.03033 5.96967C5.32322 6.26256 5.32322 6.73744 5.03033 7.03033C4.73744 7.32322 4.26256 7.32322 3.96967 7.03033L2.46967 5.53033C2.17678 5.23744 2.17678 4.76256 2.46967 4.46967ZM21.5303 4.46967C21.8232 4.76256 21.8232 5.23744 21.5303 5.53033L20.0303 7.03033C19.7374 7.32322 19.2626 7.32322 18.9697 7.03033C18.6768 6.73744 18.6768 6.26256 18.9697 5.96967L20.4697 4.46967C20.7626 4.17678 21.2374 4.17678 21.5303 4.46967Z"
      fill="#121212"
    />
  </svg>
);

export default Eye1;
