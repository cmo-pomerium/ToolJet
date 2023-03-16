import React from 'react';

const InRectangle = ({ fill = '#C1C8CD', width = '25', className = '', viewBox = '0 0 25 25' }) => (
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
      d="M18 2H6C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V6C22 3.79086 20.2091 2 18 2Z"
      fill="#121212"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12.25 7C12.25 6.58579 12.5858 6.25 13 6.25C13.4142 6.25 13.75 6.58579 13.75 7V9.18934L16.4697 6.46967C16.7626 6.17678 17.2374 6.17678 17.5303 6.46967C17.8232 6.76256 17.8232 7.23744 17.5303 7.53033L14.8107 10.25H17C17.4142 10.25 17.75 10.5858 17.75 11C17.75 11.4142 17.4142 11.75 17 11.75H13C12.5858 11.75 12.25 11.4142 12.25 11V7ZM7 13.75C6.58579 13.75 6.25 13.4142 6.25 13C6.25 12.5858 6.58579 12.25 7 12.25H11C11.4142 12.25 11.75 12.5858 11.75 13V17C11.75 17.4142 11.4142 17.75 11 17.75C10.5858 17.75 10.25 17.4142 10.25 17V14.8107L7.53033 17.5303C7.23744 17.8232 6.76256 17.8232 6.46967 17.5303C6.17678 17.2374 6.17678 16.7626 6.46967 16.4697L9.18934 13.75H7Z"
      fill="#121212"
    />
  </svg>
);

export default InRectangle;
