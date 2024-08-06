import React from "react";

const ColorsPage = () => {
  return (
    <>
      <small className="category-tag">Foundations</small>
      <h1>Colors</h1>

      <p class="mb-4">
        Welcome to our Color Palette Showcase, an integral part of our design
        system. Here, you’ll find a range of colors, each represented by a
        precise hexadecimal code. This guide ensures consistent application of
        our brand’s colors across all platforms and mediums, reflecting our
        identity and enhancing user experience. Use this as your reference for
        maintaining visual harmony in your designs
      </p>

      <div className="msc-component-container-col">
        <div class="flex flex-col items-start mb-3 bg-white rounded">
          <h2 class="mr-2 font-bold mb-2">Monochromes</h2>
          <div class="flex">
            <div class="w-16 h-16 flex items-center justify-center text-[12px] text-white bg-monochromes-main">
              #212121
            </div>
            <div class="w-16 h-16 flex items-center justify-center text-[12px] text-white bg-monochromes-grey_xdark">
              #2D2D2D
            </div>
            <div class="w-16 h-16 flex items-center justify-center text-[12px] text-white bg-monochromes-grey_dark">
              #3E3E3E
            </div>
            <div class="w-16 h-16 flex items-center justify-center text-[12px] text-white bg-monochromes-grey">
              #717171
            </div>
            <div class="w-16 h-16 flex items-center justify-center text-[12px] text-white bg-monochromes-grey_light">
              #A6A6A6
            </div>
            <div class="w-16 h-16 flex items-center justify-center text-[12px] text-white bg-monochromes-grey_xlight">
              #DBDBDB
            </div>
          </div>
        </div>

        <div class="flex flex-col items-start mb-3 bg-white rounded">
          <h2 class="mr-2 font-bold mb-2">White</h2>
          <div class="flex">
            <div class="w-16 h-16 flex items-center justify-center text-[12px] border bg-white">
              #FFFFFF
            </div>
            <div class="w-16 h-16 flex items-center justify-center text-[12px] bg-off_white">
              #F2F2F2
            </div>
          </div>
        </div>

        <div class="flex flex-col items-start mb-3 bg-white rounded">
          <h2 class="mr-2 font-bold mb-2">Primary</h2>
          <div class="flex">
            <div class="w-16 h-16 flex items-center justify-center text-[12px] text-white bg-primary-blue_xdark">
              #0A2C7F
            </div>
            <div class="w-16 h-16 flex items-center justify-center text-[12px] text-white bg-primary-blue_dark">
              #0D3AA9
            </div>
            <div class="w-16 h-16 flex items-center justify-center text-[12px] text-white bg-primary-blue">
              #1C58EE
            </div>
            <div class="w-16 h-16 flex items-center justify-center text-[12px] bg-primary-blue_light">
              #B3C7F9
            </div>
            <div class="w-16 h-16 flex items-center justify-center text-[12px] bg-primary-blue_xlight">
              #F1F5FE
            </div>
          </div>
        </div>

        <div class="flex flex-col items-start mb-3 bg-white rounded">
          <h2 class="mr-2 font-bold mb-2">Brand blue</h2>
          <div class="flex">
            <div class="w-16 h-16 flex items-center justify-center text-[12px] text-white bg-brand_blue-dark">
              #012169
            </div>
            <div class="w-16 h-16 flex items-center justify-center text-[12px] text-white bg-brand_blue-bold">
              #0057BB
            </div>
            <div class="w-16 h-16 flex items-center justify-center text-[12px] text-white bg-brand_blue-bright">
              #00A3E0
            </div>
          </div>
        </div>

        <div class="flex flex-col items-start mb-3 bg-white rounded">
          <h2 class="mr-2 font-bold mb-2">Success</h2>
          <div class="flex">
            <div class="w-16 h-16 flex items-center justify-center text-[12px] text-white bg-success-green_xdark">
              #084B2F
            </div>
            <div class="w-16 h-16 flex items-center justify-center text-[12px] text-white bg-success-green_dark">
              #0E754A
            </div>
            <div class="w-16 h-16 flex items-center justify-center text-[12px] text-white bg-success-green">
              #24E594
            </div>
            <div class="w-16 h-16 flex items-center justify-center text-[12px] bg-success-green_light">
              #B6F6DB
            </div>
            <div class="w-16 h-16 flex items-center justify-center text-[12px] bg-success-green_xlight">
              #F1FDF8
            </div>
          </div>
        </div>

        <div class="flex flex-col items-start mb-3 bg-white rounded">
          <h2 class="mr-2 font-bold mb-2">Warning</h2>
          <div class="flex">
            <div class="w-16 h-16 flex items-center justify-center text-[12px] text-white bg-warning-orange_xdark">
              #6C3E00
            </div>
            <div class="w-16 h-16 flex items-center justify-center text-[12px] text-white bg-warning-orange_dark">
              #A66000
            </div>
            <div class="w-16 h-16 flex items-center justify-center text-[12px] bg-warning-orange">
              #FF980A
            </div>
            <div class="w-16 h-16 flex items-center justify-center text-[12px] bg-warning-orange_light">
              #FFDDAD
            </div>
            <div class="w-16 h-16 flex items-center justify-center text-[12px] bg-warning-orange_xlight">
              #FFF9F0
            </div>
          </div>
        </div>

        <div class="flex flex-col items-start mb-3 bg-white rounded">
          <h2 class="mr-2 font-bold">Error</h2>
          <div class="flex">
            <div class="w-16 h-16 flex items-center justify-center text-[12px] text-white bg-error-red_xdark">
              #6C1400
            </div>
            <div class="w-16 h-16 flex items-center justify-center text-[12px] text-white bg-error-red_dark">
              #A61E00
            </div>
            <div class="w-16 h-16 flex items-center justify-center text-[12px] text-white bg-error-red">
              #CC2500
            </div>
            <div class="w-16 h-16 flex items-center justify-center text-[12px] bg-error-red_light">
              #FFBCAD
            </div>
            <div class="w-16 h-16 flex items-center justify-center text-[12px] bg-error-red_xlight">
              #FFF3F0
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ColorsPage;
