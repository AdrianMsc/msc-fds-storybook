import React, { useState } from "react";

const MscMailListModalB = ({
  discount,
  price,
  disclaimer,
  placeholder,
  buttonAccept,
  buttonCancel,
}) => {
  const [triggerModal, setTriggerModal] = useState("hidden");

  const toggleModal = () => {
    setTriggerModal((prev) => (prev === "hidden" ? "" : "hidden"));
  };

  return (
    <>
      <button onClick={toggleModal} className="msc-btn msc-btn-blue-solid">
        Open Mail List Modal B
      </button>

      <div
        id="modalDiscount"
        className={`absolute flex h-screen w-screen bg-[#21212166] top-0 left-0 place-content-center place-items-center z-50 ${triggerModal}`}
      >
        <div className="bg-white flex flex-col md:flex-row w-11/12 md:w-[720px] rounded relative">
          <svg
            onClick={toggleModal}
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-1 right-1 cursor-pointer"
          >
            <rect width="36" height="36" rx="18" />
            <path
              d="M22.8831 21.8675C23.3063 22.2581 23.3063 22.9417 22.8831 23.3324C22.6878 23.5277 22.4274 23.6253 22.167 23.6253C21.874 23.6253 21.6136 23.5277 21.4183 23.3324L18.0003 19.9144L14.5498 23.3324C14.3545 23.5277 14.0941 23.6253 13.8337 23.6253C13.5407 23.6253 13.2803 23.5277 13.085 23.3324C12.6618 22.9417 12.6618 22.2581 13.085 21.8675L16.5029 18.417L13.085 14.999C12.6618 14.6084 12.6618 13.9248 13.085 13.5342C13.4756 13.111 14.1592 13.111 14.5498 13.5342L18.0003 16.9521L21.4183 13.5342C21.8089 13.111 22.4925 13.111 22.8831 13.5342C23.3063 13.9248 23.3063 14.6084 22.8831 14.999L19.4652 18.4495L22.8831 21.8675Z"
              className="fill-white md:fill-[#717171]"
            />
          </svg>

          <div className="bg-[#1c58ee] text-white w-full md:w-1/2 rounded-l flex items-center justify-center min-h-[311px] leading-none">
            <div className="text-[28px] text-center">
              <p>
                Join our email list <br /> and save up to
              </p>
              <h1 className="text-6xl">{discount}% OFF</h1>
              <p>
                orders over <span className="underline">${price}</span>
              </p>
              <small className="text-sm">{disclaimer}</small>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex items-center justify-center flex-col min-h-[311px]">
            <svg
              width="121"
              height="125"
              viewBox="0 0 121 125"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                opacity="0.1"
                x="13.5"
                y="2"
                width="95"
                height="95"
                rx="8"
                fill="#1C58EE"
              />
              <g filter="url(#filter0_d_2488_480)">
                <path
                  d="M42.0552 24.7085C46.8081 24.7125 51.4345 23.1771 55.2419 20.3322L57.7054 18.4914C59.3399 17.3466 61.5162 17.3466 63.1507 18.4914L65.9369 20.512C69.6692 23.2186 74.1574 24.6844 78.7677 24.7021L80.1586 24.7075C83.8278 24.7075 86.8023 27.682 86.8023 31.3513C86.8023 34.6983 88.2834 37.8737 90.8477 40.0247L91.0068 40.1582C91.3293 40.4287 91.5156 40.828 91.5156 41.2489V78.8368C91.5156 81.4577 89.391 83.5823 86.7701 83.5823H34.2455C31.6248 83.5823 29.5 81.4577 29.5 78.8368L29.5023 41.2488C29.5023 40.828 29.6886 40.4287 30.0107 40.1582L30.1667 40.0273C32.7317 37.8756 34.2131 34.6992 34.2131 31.3513C34.2131 27.682 37.1874 24.7075 40.8568 24.7075L42.0552 24.7085Z"
                  fill="#FF0000"
                  fill-opacity="0.01"
                />
              </g>
              <mask
                id="mask0_2488_480"
                maskType="alpha"
                maskUnits="userSpaceOnUse"
                x="29"
                y="16"
                width="63"
                height="68"
              >
                <path
                  d="M48.4288 24.7074L57.785 16.8586C59.4196 15.7138 61.5958 15.7138 63.2304 16.8586L72.5873 24.7074H80.1586C83.8278 24.7074 86.8023 27.6819 86.8023 31.3511V36.6313L91.0068 40.1581C91.3293 40.4286 91.5156 40.8279 91.5156 41.2488V78.8367C91.5156 81.4576 89.391 83.5822 86.7701 83.5822H34.2455C31.6248 83.5822 29.5 81.4576 29.5 78.8367L29.5023 41.2487C29.5023 40.8278 29.6886 40.4286 30.0107 40.1581L34.2131 36.6328V31.3511C34.2131 27.6819 37.1874 24.7074 40.8568 24.7074H48.4288Z"
                  fill="#EBE9FF"
                />
              </mask>
              <g mask="url(#mask0_2488_480)">
                <path
                  d="M54.2485 20.4947L32.6281 38.0482C30.6518 39.6528 29.5041 42.0627 29.5039 44.6084L29.502 78.8364C29.502 81.4573 31.6266 83.5819 34.2475 83.5819H86.7721C89.393 83.5819 91.5175 81.4573 91.5175 78.8364V44.6185C91.5175 42.0671 90.3647 39.6522 88.3809 38.0477L66.6628 20.483C63.0414 17.5541 57.8644 17.559 54.2485 20.4947Z"
                  fill="#1C58EE"
                />
                <path
                  d="M76.9435 24.707C82.3886 24.707 86.8027 29.1212 86.8027 34.5663L86.8027 82.1734C86.8027 82.9512 86.1721 83.5818 85.3943 83.5818L35.6219 83.5818C34.8441 83.5818 34.2135 82.9512 34.2135 82.1734L34.2135 34.5663C34.2135 29.1212 38.6276 24.707 44.0728 24.707L76.9435 24.707Z"
                  fill="#F1F5FE"
                />
                <rect
                  x="41.377"
                  y="47.5566"
                  width="29.9834"
                  height="4.32984"
                  rx="2.16492"
                  fill="#B3C7F9"
                />
                <rect
                  x="41.377"
                  y="32.8281"
                  width="29.6902"
                  height="4.32984"
                  rx="2.16492"
                  fill="#B3C7F9"
                />
                <rect
                  x="41.377"
                  y="40.1914"
                  width="22.5152"
                  height="4.32984"
                  rx="2.16492"
                  fill="#B3C7F9"
                />
                <path
                  d="M53.384 61.9445L29.2168 42.4414L29.3846 81.6386L53.384 61.9445Z"
                  fill="#1C58EE"
                />
                <path
                  d="M67.7561 62.2875L92.2383 42.7227L91.8987 80.003L67.7561 62.2875Z"
                  fill="#1C58EE"
                />
                <path
                  d="M24.0184 79.0529L52.5205 59.0893C57.3716 55.6915 63.8301 55.6915 68.6811 59.0893L108.157 86.7392C109.285 87.5291 108.726 89.3013 107.349 89.3013L27.2506 89.3013C21.7431 89.3013 19.5074 82.2125 24.0184 79.0529Z"
                  fill="#4A3AFF"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_2488_480"
                  x="0.421291"
                  y="0.527689"
                  width="120.173"
                  height="124.107"
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
                  <feOffset dy="11.9736" />
                  <feGaussianBlur stdDeviation="14.5394" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.290196 0 0 0 0 0.227451 0 0 0 0 1 0 0 0 0.15 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_2488_480"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_2488_480"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>

            <div class="relative w-full max-w-[17.5rem] mb-4">
              <input
                id="email"
                type="text"
                placeholder="Email Address"
                class="bg-white w-full h-10 px-4 py-3.5 text-sm rounded border !border-monochromes-grey_light placeholder-transparent disabled:bg-off_white disabled:!border-[#e5e7eb] disabled:cursor-not-allowed disabled:text-monochromes-grey_light hover:disabled:!border-[#e5e7eb] hover:enabled:!border-monochromes-main focus:border-monochromes-grey_light focus:outline-dashed focus:outline-1 focus:outline-offset-4 focus:outline-black invalid:!border-error-red invalid:!text-error-red hover:invalid:!border-error-red focus:invalid:!border-error-red peer"
              />
              <label
                for="email"
                class="bg-white absolute left-3.5 -top-[0.6rem] pt-[1px] px-[0.2rem] text-xs transition-all cursor-text peer-placeholder-shown:text-sm peer-placeholder-shown:text-monochromes-grey_light peer-placeholder-shown:top-2 peer-focus:-top-[0.6rem] peer-focus:text-[#212121] peer-focus:text-xs peer-focus:cursor-default peer-invalid:text-error-red peer-disabled:bg-off_white"
              >
                {placeholder}
              </label>
            </div>

            <button
              onClick={toggleModal}
              className="flex items-center justify-center py-2 px-2 md:px-5 h-10 rounded-full font-bold text-base cursor-pointer min-w-24 md:min-w-32 text-sm text-white bg-primary-blue hover:bg-[#186DF5] active:bg-primary-blue_dark disabled:bg-monochromes-grey_light disabled:text-white disabled:cursor-not-allowed focus-visible:outline-dashed focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[#424242] w-[200px]"
            >
              {buttonCancel}
            </button>

            <button
              onClick={toggleModal}
              className="closeBtn flex items-center justify-center py-2 px-2 md:px-5 h-10 rounded-full font-bold text-base cursor-pointer min-w-24 md:min-w-32 text-sm bg-transparent min-w-32 text-primary-blue hover:bg-primary-blue_xlight active:bg-[#0d3aa933] disabled:bg-transparent disabled:text-monochromes-grey_light disabled:cursor-not-allowed focus-visible:outline-dashed focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[#424242]"
            >
              {buttonAccept}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MscMailListModalB;
