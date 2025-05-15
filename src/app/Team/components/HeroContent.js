import React from "react";

const HeroContent = ({ title, subTtile }) => {
  return (
    <div class="flex gap-1 2xl:mb-10 mb-6">
      <span className="mt-1">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_483_369)">
            <path
              d="M12 21C17.5228 21 22 16.5228 22 11C22 5.47715 17.5228 1 12 1C6.47715 1 2 5.47715 2 11C2 16.5228 6.47715 21 12 21Z"
              fill="url(#paint0_linear_483_369)"
            />
          </g>
          <path
            d="M16.5451 8.27295L10.9201 14.0484L8.36328 11.4232"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <defs>
            <filter
              id="filter0_d_483_369"
              x="0"
              y="0"
              width="24"
              height="24"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="1" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.0248264 0 0 0 0 0.541667 0 0 0 0 0.29306 0 0 0 0.3 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_483_369"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_483_369"
                result="shape"
              />
            </filter>
            <linearGradient
              id="paint0_linear_483_369"
              x1="2"
              y1="1"
              x2="22"
              y2="27.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.124731" stop-color="#22E17F" />
              <stop offset="0.809861" stop-color="#0EAC60" />
            </linearGradient>
          </defs>
        </svg>
      </span>
      <p className="text-base font-medium leading-[26px] text-white/70">
        <b className="text-white">{title}</b> {subTtile}
      </p>
    </div>
  );
};

export default HeroContent;
