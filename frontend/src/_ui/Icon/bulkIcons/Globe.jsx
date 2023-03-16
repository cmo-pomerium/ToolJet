import React from 'react';

const Globe = ({ fill = '#C1C8CD', width = '25', className = '', viewBox = '0 0 25 25' }) => (
  <svg
    width={width}
    height={width}
    viewBox={viewBox}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle opacity="0.4" cx="12" cy="12" r="10" fill="#121212" />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M9.55687 8.07157C9.71871 7.14207 9.93538 6.30662 10.1929 5.5984C10.4862 4.79196 10.8203 4.18426 11.1591 3.7901C11.4998 3.39387 11.7862 3.27659 12.0002 3.27659C12.2142 3.27659 12.5006 3.39387 12.8413 3.7901C13.1802 4.18426 13.5143 4.79196 13.8075 5.5984C14.065 6.30662 14.2817 7.14207 14.4436 8.07157C13.6606 7.99686 12.8417 7.95743 12.0002 7.95743C11.1587 7.95743 10.3398 7.99686 9.55687 8.07157ZM8.23617 8.23593C8.41399 7.08809 8.67158 6.04654 8.99318 5.16213C9.31598 4.27444 9.71544 3.51116 10.1911 2.95786C10.665 2.40664 11.2742 2 12.0002 2C12.7263 2 13.3354 2.40664 13.8093 2.95786C14.285 3.51116 14.6845 4.27444 15.0072 5.16213C15.3288 6.04654 15.5864 7.08809 15.7643 8.23593C16.9121 8.41375 17.9536 8.67134 18.8381 8.99294C19.7257 9.31574 20.489 9.71519 21.0423 10.1909C21.5935 10.6648 22.0002 11.2739 22.0002 12C22.0002 12.726 21.5935 13.3352 21.0423 13.8091C20.489 14.2848 19.7257 14.6842 18.8381 15.007C17.9536 15.3286 16.9121 15.5862 15.7643 15.764C15.5864 16.9119 15.3288 17.9534 15.0072 18.8378C14.6845 19.7255 14.285 20.4888 13.8093 21.0421C13.3354 21.5933 12.7263 21.9999 12.0002 21.9999C11.2742 21.9999 10.665 21.5933 10.1911 21.0421C9.71544 20.4888 9.31598 19.7255 8.99318 18.8378C8.67158 17.9534 8.41399 16.9119 8.23617 15.764C7.08833 15.5862 6.04679 15.3286 5.16238 15.007C4.27468 14.6842 3.5114 14.2848 2.95811 13.8091C2.40689 13.3352 2.00024 12.726 2.00024 12C2.00024 11.2739 2.40689 10.6648 2.95811 10.1909C3.5114 9.71519 4.27469 9.31574 5.16238 8.99294C6.04679 8.67134 7.08833 8.41375 8.23617 8.23593ZM8.07181 14.4433C7.14231 14.2815 6.30686 14.0648 5.59864 13.8073C4.79221 13.514 4.18451 13.1799 3.79035 12.841C3.39411 12.5004 3.27684 12.214 3.27684 12C3.27684 11.786 3.39411 11.4995 3.79035 11.1589C4.18451 10.82 4.79221 10.4859 5.59864 10.1927C6.30686 9.93514 7.14231 9.71846 8.07181 9.55663C7.99711 10.3396 7.95767 11.1585 7.95767 12C7.95767 12.8415 7.99711 13.6604 8.07181 14.4433ZM9.37375 14.6264C9.28335 13.7984 9.23427 12.9167 9.23427 12C9.23427 11.0832 9.28335 10.2016 9.37375 9.3735C10.2018 9.28311 11.0835 9.23402 12.0002 9.23402C12.917 9.23402 13.7986 9.28311 14.6267 9.3735C14.7171 10.2016 14.7662 11.0832 14.7662 12C14.7662 12.9167 14.7171 13.7984 14.6267 14.6264C13.7986 14.7168 12.917 14.7659 12.0002 14.7659C11.0835 14.7659 10.2018 14.7168 9.37375 14.6264ZM9.55687 15.9284C9.71871 16.8579 9.93538 17.6933 10.1929 18.4015C10.4862 19.208 10.8203 19.8157 11.1591 20.2098C11.4998 20.6061 11.7862 20.7234 12.0002 20.7234C12.2142 20.7234 12.5006 20.6061 12.8413 20.2098C13.1802 19.8157 13.5143 19.208 13.8075 18.4015C14.065 17.6933 14.2817 16.8579 14.4436 15.9284C13.6606 16.0031 12.8417 16.0425 12.0002 16.0425C11.1587 16.0425 10.3398 16.0031 9.55687 15.9284ZM15.9286 14.4433C16.8581 14.2815 17.6936 14.0648 18.4018 13.8073C19.2082 13.514 19.8159 13.1799 20.2101 12.841C20.6063 12.5004 20.7236 12.214 20.7236 12C20.7236 11.786 20.6063 11.4996 20.2101 11.1589C19.8159 10.82 19.2082 10.4859 18.4018 10.1927C17.6936 9.93514 16.8581 9.71846 15.9286 9.55663C16.0033 10.3396 16.0428 11.1585 16.0428 12C16.0428 12.8415 16.0033 13.6604 15.9286 14.4433Z"
      fill="#121212"
    />
  </svg>
);

export default Globe;
