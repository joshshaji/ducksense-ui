import type React from "react"

const AnimatedDocumentProcess: React.FC = () => {
  return (
    <svg className="w-full h-full" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background */}
      <rect width="400" height="300" fill="#f8fafc" />

      {/* Source Document */}
      <g>
        <rect x="50" y="100" width="100" height="130" fill="#ffffff" stroke="#3b82f6" strokeWidth="2" rx="4">
          <animate
            attributeName="transform"
            type="translate"
            values="0,0; 0,-10; 0,0"
            dur="3s"
            begin="0s"
            repeatCount="indefinite"
          />
        </rect>
        {/* Document Icon */}
        <path
          d="M70 110 H130 M70 130 H130 M70 150 H130"
          stroke="#3b82f6"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <animate
            attributeName="transform"
            type="translate"
            values="0,0; 0,-10; 0,0"
            dur="3s"
            begin="0s"
            repeatCount="indefinite"
          />
        </path>
        <text x="100" y="185" textAnchor="middle" fill="#3b82f6" fontSize="12">
          Raw Document
          <animate
            attributeName="transform"
            type="translate"
            values="0,0; 0,-10; 0,0"
            dur="3s"
            begin="0s"
            repeatCount="indefinite"
          />
        </text>
      </g>

      {/* Processing Animation */}
      <g>
        {/* Processing Circle */}
        <circle cx="200" cy="150" r="35" fill="#dbeafe" fillOpacity="0.3">
          <animate
            attributeName="r"
            values="35;40;35"
            dur="2s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="200" cy="150" r="30" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2">
          <animate
            attributeName="r"
            values="30;35;30"
            dur="2s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Rotating Processing Indicator */}
        <path
          d="M200 120 A30 30 0 0 1 230 150"
          stroke="#3b82f6"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 200 150"
            to="360 200 150"
            dur="2s"
            repeatCount="indefinite"
          />
        </path>

        <text x="200" y="155" fontFamily="Arial" fontSize="14" fill="#1e40af" textAnchor="middle" fontWeight="bold">
          AI
        </text>
      </g>

      {/* Structured Output */}
      <g>
        <rect x="250" y="100" width="100" height="130" fill="#ffffff" stroke="#3b82f6" strokeWidth="2" rx="4">
          <animate
            attributeName="transform"
            type="translate"
            values="0,0; 0,10; 0,0"
            dur="3s"
            begin="0s"
            repeatCount="indefinite"
          />
        </rect>

        {/* Structured Data Visualization */}
        <rect x="270" y="120" width="60" height="8" fill="#bfdbfe" rx="2">
          <animate
            attributeName="transform"
            type="translate"
            values="0,0; 0,10; 0,0"
            dur="3s"
            begin="0s"
            repeatCount="indefinite"
          />
        </rect>
        <rect x="270" y="140" width="40" height="8" fill="#93c5fd" rx="2">
          <animate
            attributeName="transform"
            type="translate"
            values="0,0; 0,10; 0,0"
            dur="3s"
            begin="0s"
            repeatCount="indefinite"
          />
        </rect>
        <rect x="270" y="160" width="50" height="8" fill="#60a5fa" rx="2">
          <animate
            attributeName="transform"
            type="translate"
            values="0,0; 0,10; 0,0"
            dur="3s"
            begin="0s"
            repeatCount="indefinite"
          />
        </rect>

        <text x="300" y="185" textAnchor="middle" fill="#3b82f6" fontSize="12">
          Structured Data
          <animate
            attributeName="transform"
            type="translate"
            values="0,0; 0,10; 0,0"
            dur="3s"
            begin="0s"
            repeatCount="indefinite"
          />
        </text>
      </g>

      {/* Connection Lines */}
      <path
        d="M150 150 H175"
        stroke="#3b82f6"
        strokeWidth="2"
        strokeDasharray="4 4"
      >
        <animate
          attributeName="stroke-dashoffset"
          values="8;0"
          dur="1s"
          repeatCount="indefinite"
        />
      </path>
      <path
        d="M225 150 H250"
        stroke="#3b82f6"
        strokeWidth="2"
        strokeDasharray="4 4"
      >
        <animate
          attributeName="stroke-dashoffset"
          values="8;0"
          dur="1s"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  )
}

export default AnimatedDocumentProcess
