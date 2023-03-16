import React from 'react';

const NotificationSilent = ({ fill = '#C1C8CD', width = '25', className = '', viewBox = '0 0 25 25' }) => (
  <svg
    width={width}
    height={width}
    viewBox={viewBox}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M12 21C13.385 21 14.5633 20.1652 15 19V18H9V19C9.43668 20.1652 10.615 21 12 21Z" fill="#121212" />
    <path
      opacity="0.4"
      d="M6.22281 19H17.7772C19.6056 19 20.6492 17.1609 19.5522 15.8721C19.0666 15.3016 18.7673 14.6249 18.6867 13.9153L18.2395 9.97519C17.9984 7.85063 16.4123 6.10719 14.2699 5.37366V5.26995C14.2699 4.01629 13.2537 3 12 3C10.7463 3 9.73005 4.01629 9.73005 5.26995V5.37366C7.58766 6.10719 6.0016 7.85063 5.76046 9.97519L5.31328 13.9153C5.23274 14.6249 4.93344 15.3016 4.44779 15.8721C3.35076 17.1609 4.39443 19 6.22281 19Z"
      fill="#121212"
    />
    <path
      d="M6.22275 19H17.7771C17.846 19 17.9137 18.9974 17.9802 18.9923L20.5183 21.5303C20.8111 21.8232 21.286 21.8232 21.5789 21.5303C21.8718 21.2374 21.8718 20.7626 21.5789 20.4697L3.57891 2.46967C3.28602 2.17678 2.81115 2.17678 2.51825 2.46967C2.22536 2.76256 2.22536 3.23744 2.51825 3.53033L6.64157 7.65365C6.16706 8.34015 5.85663 9.12732 5.7604 9.97519L5.31322 13.9153C5.23268 14.6249 4.93338 15.3016 4.44772 15.8721C3.3507 17.1609 4.39437 19 6.22275 19Z"
      fill="#121212"
    />
  </svg>
);

export default NotificationSilent;
