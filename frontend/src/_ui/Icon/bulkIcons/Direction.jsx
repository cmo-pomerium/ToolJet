import React from 'react';

const Direction = ({ fill = '#C1C8CD', width = '25', className = '', viewBox = '0 0 25 25' }) => (
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
      d="M10.5001 7.95068H5.65987C5.51854 7.95068 5.38462 7.88387 5.29478 7.76854L4.1263 6.26854C3.98248 6.08391 3.98248 5.81746 4.1263 5.63283L5.29478 4.13283C5.38462 4.0175 5.51854 3.95068 5.65987 3.95068H10.5001V7.95068Z"
      fill="#121212"
    />
    <path
      opacity="0.4"
      d="M10.5001 15.9507H4.07776C3.94242 15.9507 3.81263 15.898 3.71693 15.8042L2.18608 14.3042C1.9868 14.109 1.9868 13.7924 2.18608 13.5971L3.71693 12.0971C3.81263 12.0034 3.94242 11.9507 4.07776 11.9507H10.5001V15.9507Z"
      fill="#121212"
    />
    <path
      opacity="0.4"
      d="M13.4999 7.95068H19.9294C20.0649 7.95068 20.1948 8.00336 20.2906 8.09713L21.8232 9.59713C22.0227 9.79239 22.0227 10.109 21.8232 10.3042L20.2906 11.8042C20.1948 11.898 20.0649 11.9507 19.9294 11.9507H13.4999V7.95068Z"
      fill="#121212"
    />
    <path
      d="M10.5 3C10.5 2.44772 10.9477 2 11.5 2H12.5C13.0523 2 13.5 2.44772 13.5 3V21C13.5 21.5523 13.0523 22 12.5 22H11.5C10.9477 22 10.5 21.5523 10.5 21V3Z"
      fill="#121212"
    />
  </svg>
);

export default Direction;
