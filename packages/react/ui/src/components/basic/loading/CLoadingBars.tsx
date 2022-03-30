import React from 'react'
const CLoadingBars = () => (
  <svg
    className="o-loading"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid"
  >
    <g transform="translate(20 50)">
      <rect
        x="-10"
        y="-30"
        width=" 20"
        height="60"
        fill="currentColor"
        opacity="0.6"
      >
        <animateTransform
          attributeName="transform"
          type="scale"
          from="2"
          to="1"
          begin="0s"
          repeatCount="indefinite"
          dur="1s"
          calcMode="spline"
          keySplines="0.1 0.9 0.4 1"
          keyTimes="0;1"
          values="2;1"
        ></animateTransform>
      </rect>
    </g>
    <g transform="translate(50 50)">
      <rect
        x="-10"
        y="-30"
        width=" 20"
        height="60"
        fill="currentColor"
        opacity="0.8"
      >
        <animateTransform
          attributeName="transform"
          type="scale"
          from="2"
          to="1"
          begin="0.1s"
          repeatCount="indefinite"
          dur="1s"
          calcMode="spline"
          keySplines="0.1 0.9 0.4 1"
          keyTimes="0;1"
          values="2;1"
        ></animateTransform>
      </rect>
    </g>
    <g transform="translate(80 50)">
      <rect
        x="-10"
        y="-30"
        width=" 20"
        height="60"
        fill="currentColor"
        opacity="0.9"
      >
        <animateTransform
          attributeName="transform"
          type="scale"
          from="2"
          to="1"
          begin="0.2s"
          repeatCount="indefinite"
          dur="1s"
          calcMode="spline"
          keySplines="0.1 0.9 0.4 1"
          keyTimes="0;1"
          values="2;1"
        ></animateTransform>
      </rect>
    </g>
  </svg>
)

export default CLoadingBars
