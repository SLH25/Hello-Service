// src/components/Logo.tsx
// import React from "react";

export default function Logo({
  width = 420,
  dark = false,
  className = "",
  ariaLabel = "Hello Service logo",
}) {
  const height = (width * 120) / 420;

  const colors = dark
    ? {
        rect: "url(#darkGradient)", // dégradé dark mode
        mainText: "#FFFFFF",
        handleFill: "#FFFFFF",
        slogan: "#E6F0FF",
      }
    : {
        rect: "url(#darkGradient)", // dégradé light mode
        mainText: "#FFFFFF",
        handleFill: "#111111",
        slogan: "#333333",
      };

  return (
    <svg
      role="img"
      aria-label={ariaLabel}
      width={width}
      height={height + 32}
      viewBox="0 0 420 152"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{ariaLabel}</title>

      {/* Dégradés */}
      <defs>
        <linearGradient id="lightGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FB8C00" />
          <stop offset="100%" stopColor="#FF4D4D" />
        </linearGradient>
        <linearGradient id="darkGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1E88E5" />
          <stop offset="100%" stopColor="#6A11CB" />
        </linearGradient>
      </defs>

      {/* Fond avec coins arrondis */}
      <rect x="0" y="0" width="420" height="120" rx="20" fill={colors.rect} />

      <g aria-hidden="true">
        {/* Glow derrière H */}
        <text
          x="36"
          y="78"
          fill={colors.mainText}
          fontSize="64"
          fontFamily="ui-sans-serif, system-ui, Segoe UI, Roboto, Helvetica, Arial"
          fontWeight="800"
          letterSpacing="0.5"
          style={{
            filter: "drop-shadow(0px 0px 6px rgba(255,255,255,0.4))",
          }}
        >
          H
        </text>

        {/* Icône type poignée */}
        <g transform="translate(112,20)">
          <g transform="translate(0,4)">
            <rect
              x="8"
              y="2"
              width="16"
              height="6"
              rx="3"
              fill={colors.handleFill}
            />
            <rect
              x="60"
              y="46"
              width="16"
              height="6"
              rx="3"
              fill={colors.handleFill}
            />
          </g>

          <path
            d="M20 10c6.5-6.5 17-6.5 23.5 0l3.2 3.2c2 2 2 5.2 0 7.2l-8 8c-2 2-5.2 2-7.2 0l-1.8-1.8a4 4 0 0 0-5.7 0L14 35.8a4 4 0 0 0 0 5.7l1.8 1.8c2 2 2 5.2 0 7.2l-8 8c-2 2-5.2 2-7.2 0L-2.6 55c-6.5-6.5-6.5-17 0-23.5l22.6-21.6z"
            fill={colors.handleFill}
          />
        </g>

        {/* Texte principal */}
        <text
          x="160"
          y="78"
          fill={colors.mainText}
          fontSize="44"
          fontFamily="ui-sans-serif, system-ui, Segoe UI, Roboto, Helvetica, Arial"
          fontWeight="700"
          letterSpacing="0.5"
        >
          lloServices
        </text>
      </g>

      {/* Slogan */}
      <text
        x="210"
        y="142"
        textAnchor="middle"
        fill={colors.slogan}
        fontSize="16"
        fontFamily="ui-sans-serif, system-ui, Segoe UI, Roboto, Helvetica, Arial"
        fontWeight="500"
      >
        Your Hello, Delivered with Service
      </text>
    </svg>
  );
}
