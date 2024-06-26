import React from 'react';

const IconLogo = () => (
  <svg id="logo" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 84 96">
    <title>Logo</title>
    <g transform="translate(-8.000000, -2.000000)">
      <g transform="translate(11.000000, 5.000000)">
        {/* Circle with cx, cy, and r attributes */}
        <circle
          id="Shape"
          cx="39" // centre x du cercle
          cy="45" // centre y du cercle
          r="43" // rayon du cercle
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </g>
    {/* Text with initial 'J' */}
    <text x="32" y="65" fill="currentColor" fontSize="50px" fontFamily="Consolas, serif">
      J
    </text>
  </svg>
);

export default IconLogo;
