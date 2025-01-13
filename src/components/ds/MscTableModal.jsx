import React, { useState } from "react";
import cross from "../../assets/times.svg";
import info from "../../assets/info-question.svg";

const MscTableModal = ({ productTitle, brandTitle, total }) => {
  const [triggerModal, setTriggerModal] = useState("hidden");

  const toggleModal = () => {
    setTriggerModal((prev) => (prev === "hidden" ? "" : "hidden"));
  };

  return (
    <>
      <button onClick={toggleModal} className="msc-btn msc-btn-blue-solid">
        Trigger Modal
      </button>

      <div className={`msc-modal-bg ${triggerModal}`}>
        <div className="h-full w-full md:min-w-fit md:max-w-[90%] md:max-h-[90%] bg-white rounded-lg shadow-xl overflow-hidden flex flex-col place-content-stretch 2xl:h-fit 2xl:max-w-fit">
          <div className="flex p-4 w-full place-content-between items-center border-b">
            <h4 class="h-fit font-bold align-middle text-sm sm:text-base max-h-fit">
              <span>Other Available Sizes for </span>
              <span>{productTitle}</span>
              <span class="text-monochromes-grey">{brandTitle}</span>
            </h4>
            <button id="modalClsBtn" onClick={toggleModal}>
              <img src={cross} className="msc-modal-close" />
            </button>
          </div>
          <div class="flex-row px-4 pt-4 text-sm h-[90%] lg:h-fit overflow-auto">
            <div class="flex flex-col gap-4 pb-4 h-full flex-1">
              <fieldset>
                <div class="msc-label-toggle-container flex flex-col sm:flex-row sm:items-center items-start gap-2">
                  <div class="flex">
                    <p class="mb-0.5 mr-1 font-bold text-nowrap">Size Type</p>
                    <img src={info} class="msc-toggle-icon" />
                  </div>
                  <div class="relative flex flex-row h-8 w-fit p-1 rounded-full items-center bg-monochromes-grey_xlight text-xs text-[#212121A3] bg-[#21212129]">
                    <span
                      id="tripleToggleDot"
                      class="absolute w-[70px] h-3/4 bg-white shadow-md rounded-full transition-all duration-150 ease-in-out"
                    ></span>
                    <label
                      for="fractional"
                      class="msc-triple-toggle-input-label flex h-6 items-center justify-center rounded-full cursor-pointer w-[70px]"
                    >
                      <input
                        type="radio"
                        id="fractional"
                        name="tableModal"
                        value="fractional"
                        class="peer sr-only"
                        checked
                      />
                      <span class="w-full h-full rounded-full text-center content-center font-bold text-xs peer-checked:text-black transition ease-in delay-150 z-10">
                        Fractional
                      </span>
                    </label>
                    <label
                      for="letter"
                      class="msc-triple-toggle-input-label flex h-6 items-center justify-center rounded-full cursor-pointer w-[70px]"
                    >
                      <input
                        type="radio"
                        id="letter"
                        name="tableModal"
                        value="letter"
                        class="peer sr-only"
                      />
                      <span class="w-full h-full rounded-full text-center content-center font-bold text-xs peer-checked:text-black transition ease-in delay-150 z-10">
                        Letter
                      </span>
                    </label>
                    <label
                      for="wire"
                      class="msc-triple-toggle-input-label flex h-6 items-center justify-center rounded-full cursor-pointer w-[70px]"
                    >
                      <input
                        type="radio"
                        id="wire"
                        name="tableModal"
                        value="wire"
                        class="peer sr-only"
                      />
                      <span class="w-full h-full rounded-full text-center content-center font-bold text-xs peer-checked:text-black transition ease-in delay-150 z-10">
                        Wire
                      </span>
                    </label>
                    <label
                      for="metric"
                      class="msc-triple-toggle-input-label flex h-6 items-center justify-center rounded-full cursor-pointer w-[70px]"
                    >
                      <input
                        type="radio"
                        id="metric"
                        name="tableModal"
                        value="metric"
                        class="peer sr-only"
                      />
                      <span class="w-full h-full rounded-full text-center content-center font-bold text-xs peer-checked:text-black transition ease-in delay-150 z-10">
                        Metric
                      </span>
                    </label>
                  </div>
                </div>
              </fieldset>
              <div
                id="tableDiv"
                class="border border-monochromes-grey_xlight rounded overflow-auto max-h-[99%] w-full"
              >
                <table class="w-full h-full">
                  <thead class="sticky top-0 bg-white z-10 after:content-[''] after:absolute after:inset-0 after:border-b-2 after:border-black after:pointer-events-none after:z-10">
                    <tr class="w-full">
                      <th class="text-start py-2 pl-3 text-sm">Size</th>
                      <th class="text-start py-2 pl-3 text-sm">Dec. Equiv.</th>
                      <th class="text-start py-2 pl-3 text-sm">
                        Drill Point Angle
                      </th>
                      <th class="text-start py-2 pl-3 text-sm">
                        Coating/Finish
                      </th>
                      <th class="text-start py-2 pl-3">MSC#</th>
                      <th class="text-start py-2 pl-3 text-sm">Avalability</th>
                      <th class="text-end py-2 pr-3 text-sm">Unit Price</th>
                      <th class="text-end py-2 pr-3 text-sm">Price</th>
                      <th class="text-center bg-primary-blue_xlight after:content-[''] after:absolute after:inset-0 after:border-l after:border-monochromes-grey_xlight after:pointer-events-none after:z-10 sticky right-0 text-sm z-10">
                        Quantity
                      </th>
                    </tr>
                  </thead>
                  <tbody class="text-sm">
                    <tr class="border-b border-dashed border-monochromes-grey_light">
                      <td class="text-nowrap py-2 px-3 text-sm">1/64</td>
                      <td class="text-nowrap py-2 px-3 text-sm">0.0325</td>
                      <td class="text-nowrap py-2 px-3 text-sm">18</td>
                      <td class="text-nowrap py-2 px-3 text-sm">
                        Bright/Uncoated
                      </td>
                      <td class="py-2 px-3 text-sm cursor-pointer text-primary-blue_dark font-bold hover:underline text-nowrap">
                        81171043
                      </td>
                      <td class="text-success-green_dark py-2 px-3 text-ellipsis text-nowrap text-sm flex gap-1 items-center h-full w-fit">
                        <i class="fa-solid fa-check size-4"></i>
                        In Stock
                      </td>
                      <td class="py-2 px-3 text-right text-sm text-nowrap">
                        $12.11<span>/ea</span>
                      </td>
                      <td class="py-2 px-3 text-right text-sm text-nowrap">
                        $145.32<span>/pack of 12</span>
                      </td>
                      <td class="sticky right-0 z-[5] py-2 px-3 bg-primary-blue_xlight justify-center h-full max-w-fit border-l border-monochromes-grey_xlight after:content-[''] after:absolute after:inset-0 after:border-l after:border-monochromes-grey_xlight">
                        <div class="flex flex-row gap-2 justify-center">
                          <button>
                            <i class="fa-solid fa-minus size-4 text-monochromes-grey p-1"></i>
                          </button>
                          <div class="relative flex flex-col max-w-[68px] w-[68px]">
                            <input
                              id="field"
                              type="number"
                              placeholder="0"
                              class="text-center max-w-[68px] border border-monochromes-grey_light hover:border-monochromes-main pl-4 pr-4 py-3.5 rounded text-sm focus:border-monochromes-grey_light focus:outline-dashed focus:outline-1 focus:outline-offset-4 focus:outline-black disabled:bg-off_white disabled:!border-[#e5e7eb] disabled:cursor-not-allowed hover:disabled:!border-[#e5e7eb] invalid:!border-error-red invalid:!text-error-red hover:invalid:!border-error-red focus:invalid:!border-error-red peer order-2 h-5"
                            />
                          </div>
                          <button>
                            <i class="fa-solid fa-plus size-4 text-monochromes-grey p-1"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-dashed border-monochromes-grey_light">
                      <td class="text-nowrap py-2 px-3 text-sm">1/16</td>
                      <td class="text-nowrap py-2 px-3 text-sm">0.0625</td>
                      <td class="text-nowrap py-2 px-3 text-sm">18</td>
                      <td class="text-nowrap py-2 px-3 text-sm">
                        Bright/Uncoated
                      </td>
                      <td class="py-2 px-3 text-sm cursor-pointer text-primary-blue_dark font-bold hover:underline text-nowrap">
                        81171043
                      </td>
                      <td class="text-success-green_dark py-2 px-3 text-ellipsis text-nowrap text-sm flex gap-1 items-center h-full w-fit">
                        <i class="fa-solid fa-check size-4"></i>
                        In Stock
                      </td>
                      <td class="py-2 px-3 text-right text-sm text-nowrap">
                        $5.32<span>/ea</span>
                      </td>
                      <td class="py-2 px-3 text-right text-sm text-nowrap">
                        $5.32<span>/ea</span>
                      </td>
                      <td class="py-2 px-3 bg-primary-blue_xlight border-l border-monochromes-grey_xlight gap-2 sticky right-0 justify-center after:content-[''] after:absolute after:inset-0 after:border-l after:border-monochromes-grey_xlight">
                        <div class="flex flex-row gap-2 justify-center">
                          <button>
                            <i class="fa-solid fa-minus size-4 text-monochromes-grey p-1"></i>
                          </button>
                          <div class="relative flex flex-col max-w-[68px] w-[68px]">
                            <input
                              id="field"
                              type="number"
                              placeholder="0"
                              class="text-center max-w-[68px] border border-monochromes-grey_light hover:border-monochromes-main pl-4 pr-4 py-3.5 rounded text-sm focus:border-monochromes-grey_light focus:outline-dashed focus:outline-1 focus:outline-offset-4 focus:outline-black h-5 disabled:bg-off_white disabled:!border-[#e5e7eb] disabled:cursor-not-allowed hover:disabled:!border-[#e5e7eb] invalid:!border-error-red invalid:!text-error-red hover:invalid:!border-error-red focus:invalid:!border-error-red peer order-2 "
                            />
                          </div>
                          <button>
                            <i class="fa-solid fa-plus size-4 text-monochromes-grey p-1"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-dashed border-monochromes-grey_light">
                      <td class="text-nowrap py-2 px-3 text-sm">1/16</td>
                      <td class="text-nowrap py-2 px-3 text-sm">0.0625</td>
                      <td class="text-nowrap py-2 px-3 text-sm">18</td>
                      <td class="text-nowrap py-2 px-3 text-sm">
                        Bright/Uncoated
                      </td>
                      <td class="py-2 px-3 text-sm cursor-pointer text-primary-blue_dark font-bold hover:underline text-nowrap">
                        81171043
                      </td>
                      <td class="text-success-green_dark py-2 px-3 text-ellipsis text-nowrap text-sm flex gap-1 items-center h-full w-fit">
                        <i class="fa-solid fa-check size-4"></i>
                        In Stock
                      </td>
                      <td class="py-2 px-3 text-right text-sm text-nowrap">
                        $87.56<span>/ea</span>
                      </td>
                      <td class="py-2 px-3 text-right text-sm text-nowrap">
                        $87.56<span>/ea</span>
                      </td>
                      <td class="py-2 px-3 bg-primary-blue_xlight border-l border-monochromes-grey_xlight gap-2 sticky right-0 justify-center after:content-[''] after:absolute after:inset-0 after:border-l after:border-monochromes-grey_xlight">
                        <div class="flex flex-row gap-2 justify-center">
                          <button>
                            <i class="fa-solid fa-minus size-4 text-monochromes-grey p-1"></i>
                          </button>
                          <div class="relative flex flex-col max-w-[68px] w-[68px]">
                            <input
                              id="field"
                              type="number"
                              placeholder="0"
                              class="text-center max-w-[68px] border border-monochromes-grey_light hover:border-monochromes-main pl-4 pr-4 py-3.5 rounded text-sm focus:border-monochromes-grey_light focus:outline-dashed focus:outline-1 focus:outline-offset-4 focus:outline-black disabled:bg-off_white disabled:!border-[#e5e7eb] disabled:cursor-not-allowed hover:disabled:!border-[#e5e7eb] invalid:!border-error-red invalid:!text-error-red hover:invalid:!border-error-red focus:invalid:!border-error-red peer order-2 h-5"
                            />
                          </div>
                          <button>
                            <i class="fa-solid fa-plus size-4 text-monochromes-grey p-1"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-dashed border-monochromes-grey_light">
                      <td class="text-nowrap py-2 px-3 text-sm">1/16</td>
                      <td class="text-nowrap py-2 px-3 text-sm">0.0625</td>
                      <td class="text-nowrap py-2 px-3 text-sm">18</td>
                      <td class="text-nowrap py-2 px-3 text-sm">
                        Bright/Uncoated
                      </td>
                      <td class="py-2 px-3 text-sm cursor-pointer text-primary-blue_dark font-bold hover:underline text-nowrap">
                        81171043
                      </td>
                      <td class="text-success-green_dark py-2 px-3 text-ellipsis text-nowrap text-sm flex gap-1 items-center h-full w-fit">
                        <i class="fa-solid fa-check size-4"></i>
                        In Stock
                      </td>
                      <td class="py-2 px-3 text-right text-sm text-nowrap">
                        $153.54<span>/ea</span>
                      </td>
                      <td class="py-2 px-3 text-right text-sm text-nowrap">
                        $153.54<span>/pack of 12</span>
                      </td>
                      <td class="py-2 px-3 bg-primary-blue_xlight border-l border-monochromes-grey_xlight gap-2 sticky right-0 justify-center after:content-[''] after:absolute after:inset-0 after:border-l after:border-monochromes-grey_xlight">
                        <div class="flex flex-row gap-2 justify-center">
                          <button>
                            <i class="fa-solid fa-minus size-4 text-monochromes-grey p-1"></i>
                          </button>
                          <div class="relative flex flex-col max-w-[68px] w-[68px]">
                            <input
                              id="field"
                              type="number"
                              placeholder="0"
                              class="text-center max-w-[68px] border border-monochromes-grey_light hover:border-monochromes-main pl-4 pr-4 py-3.5 rounded text-sm focus:border-monochromes-grey_light focus:outline-dashed focus:outline-1 focus:outline-offset-4 focus:outline-black disabled:bg-off_white disabled:!border-[#e5e7eb] disabled:cursor-not-allowed hover:disabled:!border-[#e5e7eb] invalid:!border-error-red invalid:!text-error-red hover:invalid:!border-error-red focus:invalid:!border-error-red peer order-2 h-5"
                            />
                          </div>
                          <button>
                            <i class="fa-solid fa-plus size-4 text-monochromes-grey p-1"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-dashed border-monochromes-grey_light">
                      <td class="text-nowrap py-2 px-3 text-sm">1/16</td>
                      <td class="text-nowrap py-2 px-3 text-sm">0.0625</td>
                      <td class="text-nowrap py-2 px-3 text-sm">18</td>
                      <td class="text-nowrap py-2 px-3 text-sm">
                        Bright/Uncoated
                      </td>
                      <td class="py-2 px-3 text-sm cursor-pointer text-primary-blue_dark font-bold hover:underline text-nowrap">
                        81171043
                      </td>
                      <td class="py-2 px-3 text-sm text-monochromes-grey font-bold flex gap-1 items-center h-full w-fit">
                        <i class="fa-solid fa-shield text-nowrap"></i>
                        Ships fr. Supplier{" "}
                        <span class="font-normal">(5 biz. days)</span>
                      </td>
                      <td class="py-2 px-3 text-right text-sm text-nowrap">
                        $184.54<span>/ea</span>
                      </td>
                      <td class="py-2 px-3 text-right text-sm text-nowrap">
                        $184.54<span>/pack of 12</span>
                      </td>
                      <td class="py-2 px-3 bg-primary-blue_xlight border-l border-monochromes-grey_xlight gap-2 sticky right-0 justify-center after:content-[''] after:absolute after:inset-0 after:border-l after:border-monochromes-grey_xlight">
                        <div class="flex flex-row gap-2 justify-center">
                          <button>
                            <i class="fa-solid fa-minus size-4 text-monochromes-grey p-1"></i>
                          </button>
                          <div class="relative flex flex-col max-w-[68px] w-[68px]">
                            <input
                              id="field"
                              type="number"
                              placeholder="0"
                              class="text-center max-w-[68px] border border-monochromes-grey_light hover:border-monochromes-main pl-4 pr-4 py-3.5 rounded text-sm focus:border-monochromes-grey_light focus:outline-dashed focus:outline-1 focus:outline-offset-4 focus:outline-black  disabled:bg-off_white disabled:!border-[#e5e7eb] disabled:cursor-not-allowed hover:disabled:!border-[#e5e7eb] invalid:!border-error-red invalid:!text-error-red hover:invalid:!border-error-red focus:invalid:!border-error-red peer order-2 h-5"
                            />
                          </div>
                          <button>
                            <i class="fa-solid fa-plus size-4 text-monochromes-grey p-1"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-dashed border-monochromes-grey_light">
                      <td class="text-nowrap py-2 px-3 text-sm">1/16</td>
                      <td class="text-nowrap py-2 px-3 text-sm">0.0625</td>
                      <td class="text-nowrap py-2 px-3 text-sm">18</td>
                      <td class="text-nowrap py-2 px-3 text-sm">
                        Bright/Uncoated
                      </td>
                      <td class="py-2 px-3 text-sm cursor-pointer text-primary-blue_dark font-bold hover:underline text-nowrap">
                        81171043
                      </td>
                      <td class="text-success-green_dark py-2 px-3 text-ellipsis text-nowrap text-sm flex gap-1 items-center h-full w-fit">
                        <i class="fa-solid fa-check size-4"></i>
                        In Stock
                      </td>
                      <td class="py-2 px-3 text-right text-sm text-nowrap">
                        $168.24<span>/ea</span>
                      </td>
                      <td class="py-2 px-3 text-right text-sm text-nowrap">
                        $168.24<span>/ea</span>
                      </td>
                      <td class="py-2 px-3 bg-primary-blue_xlight border-l border-monochromes-grey_xlight gap-2 sticky right-0 justify-center after:content-[''] after:absolute after:inset-0 after:border-l after:border-monochromes-grey_xlight">
                        <div class="flex flex-row gap-2 justify-center">
                          <button>
                            <i class="fa-solid fa-minus size-4 text-monochromes-grey p-1"></i>
                          </button>
                          <div class="relative flex flex-col max-w-[68px] w-[68px]">
                            <input
                              id="field"
                              type="number"
                              placeholder="0"
                              class="text-center max-w-[68px] border border-monochromes-grey_light hover:border-monochromes-main pl-4 pr-4 py-3.5 rounded text-sm focus:border-monochromes-grey_light focus:outline-dashed focus:outline-1 focus:outline-offset-4 focus:outline-black disabled:bg-off_white disabled:!border-[#e5e7eb] disabled:cursor-not-allowed hover:disabled:!border-[#e5e7eb] invalid:!border-error-red invalid:!text-error-red hover:invalid:!border-error-red focus:invalid:!border-error-red peer order-2 h-5"
                            />
                          </div>
                          <button>
                            <i class="fa-solid fa-plus size-4 text-monochromes-grey p-1"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-dashed border-monochromes-grey_light">
                      <td class="text-nowrap py-2 px-3 text-sm">1/16</td>
                      <td class="text-nowrap py-2 px-3 text-sm">0.0625</td>
                      <td class="text-nowrap py-2 px-3 text-sm">18</td>
                      <td class="text-nowrap py-2 px-3 text-sm">
                        Bright/Uncoated
                      </td>
                      <td class="py-2 px-3 text-sm cursor-pointer text-primary-blue_dark font-bold hover:underline text-nowrap">
                        81171043
                      </td>
                      <td class="text-success-green_dark py-2 px-3 text-ellipsis text-nowrap text-sm flex gap-1 items-center h-full w-fit">
                        <i class="fa-solid fa-check size-4"></i>
                        In Stock
                      </td>
                      <td class="py-2 px-3 text-right text-sm text-nowrap">
                        $237.89<span>/ea</span>
                      </td>
                      <td class="py-2 px-3 text-right text-sm text-nowrap">
                        $237.89<span>/pack of 12</span>
                      </td>
                      <td class="py-2 px-3 bg-primary-blue_xlight border-l border-monochromes-grey_xlight gap-2 sticky right-0 justify-center after:content-[''] after:absolute after:inset-0 after:border-l after:border-monochromes-grey_xlight">
                        <div class="flex flex-row gap-2 justify-center">
                          <button>
                            <i class="fa-solid fa-minus size-4 text-monochromes-grey p-1"></i>
                          </button>
                          <div class="relative flex flex-col max-w-[68px] w-[68px]">
                            <input
                              id="field"
                              type="number"
                              placeholder="0"
                              class="text-center max-w-[68px] border border-monochromes-grey_light hover:border-monochromes-main pl-4 pr-4 py-3.5 rounded text-sm focus:border-monochromes-grey_light focus:outline-dashed focus:outline-1 focus:outline-offset-4 focus:outline-black disabled:bg-off_white disabled:!border-[#e5e7eb] disabled:cursor-not-allowed hover:disabled:!border-[#e5e7eb] invalid:!border-error-red invalid:!text-error-red hover:invalid:!border-error-red focus:invalid:!border-error-red peer order-2 h-5"
                            />
                          </div>
                          <button>
                            <i class="fa-solid fa-plus size-4 text-monochromes-grey p-1"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-dashed border-monochromes-grey_light">
                      <td class="text-nowrap py-2 px-3 text-sm">9/64</td>
                      <td class="text-nowrap py-2 px-3 text-sm">0.1406</td>
                      <td class="text-nowrap py-2 px-3 text-sm">18</td>
                      <td class="text-nowrap py-2 px-3 text-sm">
                        Bright/Uncoated
                      </td>
                      <td class="py-2 px-3 text-sm cursor-pointer text-primary-blue_dark font-bold hover:underline text-nowrap">
                        81171092
                      </td>
                      <td class="text-success-green_dark py-2 px-3 text-ellipsis text-nowrap text-sm flex gap-1 items-center h-full w-fit">
                        <i class="fa-solid fa-check size-4"></i>
                        In Stock
                      </td>
                      <td class="py-2 px-3 text-right text-sm text-nowrap">
                        $254.56<span>/ea</span>
                      </td>
                      <td class="py-2 px-3 text-right text-sm text-nowrap">
                        $254.56<span>/ea</span>
                      </td>
                      <td class="py-2 px-3 bg-primary-blue_xlight border-l border-monochromes-grey_xlight gap-2 sticky right-0 justify-center after:content-[''] after:absolute after:inset-0 after:border-l after:border-monochromes-grey_xlight">
                        <div class="flex flex-row gap-2 justify-center">
                          <button>
                            <i class="fa-solid fa-minus size-4 text-monochromes-grey p-1"></i>
                          </button>
                          <div class="relative flex flex-col max-w-[68px] w-[68px]">
                            <input
                              id="field"
                              type="number"
                              placeholder="0"
                              class="text-center max-w-[68px] border border-monochromes-grey_light hover:border-monochromes-main pl-4 pr-4 py-3.5 rounded text-sm focus:border-monochromes-grey_light focus:outline-dashed focus:outline-1 focus:outline-offset-4 focus:outline-black disabled:bg-off_white disabled:!border-[#e5e7eb] disabled:cursor-not-allowed hover:disabled:!border-[#e5e7eb] invalid:!border-error-red invalid:!text-error-red hover:invalid:!border-error-red focus:invalid:!border-error-red peer order-2 h-5"
                            />
                          </div>
                          <button>
                            <i class="fa-solid fa-plus size-4 text-monochromes-grey p-1"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-dashed border-monochromes-grey_light">
                      <td class="text-nowrap py-2 px-3 text-sm">11/16</td>
                      <td class="text-nowrap py-2 px-3 text-sm">0.6875</td>
                      <td class="text-nowrap py-2 px-3 text-sm">18</td>
                      <td class="text-nowrap py-2 px-3 text-sm">
                        Bright/Uncoated
                      </td>
                      <td class="py-2 px-3 text-sm cursor-pointer text-primary-blue_dark font-bold hover:underline text-nowrap">
                        81171118
                      </td>
                      <td class="py-2 px-3 text-sm text-monochromes-grey font-bold text-ellipsis text-nowrap flex gap-1 items-center h-full w-fit">
                        <i class="fa-solid fa-shield"></i>
                        Ships fr. Supplier{" "}
                        <span class="font-normal">(5 biz. days)</span>
                      </td>
                      <td class="py-2 px-3 text-right text-sm text-nowrap">
                        $254.56<span>/ea</span>
                      </td>
                      <td class="py-2 px-3 text-right text-sm text-nowrap">
                        $254.56<span>/pack of 12</span>
                      </td>
                      <td class="py-2 px-3 bg-primary-blue_xlight border-l border-monochromes-grey_xlight gap-2 sticky right-0 justify-center after:content-[''] after:absolute after:inset-0 after:border-l after:border-monochromes-grey_xlight">
                        <div class="flex flex-row gap-2 justify-center">
                          <button>
                            <i class="fa-solid fa-minus size-4 text-monochromes-grey p-1"></i>
                          </button>
                          <div class="relative flex flex-col max-w-[68px] w-[68px]">
                            <input
                              id="field"
                              type="number"
                              placeholder="0"
                              class="text-center max-w-[68px] border border-monochromes-grey_light hover:border-monochromes-main pl-4 pr-4 py-3.5 rounded text-sm focus:border-monochromes-grey_light focus:outline-dashed focus:outline-1 focus:outline-offset-4 focus:outline-black disabled:bg-off_white disabled:!border-[#e5e7eb] disabled:cursor-not-allowed hover:disabled:!border-[#e5e7eb] invalid:!border-error-red invalid:!text-error-red hover:invalid:!border-error-red focus:invalid:!border-error-red peer order-2 h-5"
                            />
                          </div>
                          <button>
                            <i class="fa-solid fa-plus size-4 text-monochromes-grey p-1"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-dashed border-monochromes-grey_light">
                      <td class="text-nowrap py-2 px-3 text-sm">9/64</td>
                      <td class="text-nowrap py-2 px-3 text-sm">0.1406</td>
                      <td class="text-nowrap py-2 px-3 text-sm">18</td>
                      <td class="text-nowrap py-2 px-3 text-sm">
                        Bright/Uncoated
                      </td>
                      <td class="py-2 px-3 text-sm cursor-pointer text-primary-blue_dark font-bold hover:underline text-nowrap">
                        81171092
                      </td>
                      <td class="text-success-green_dark py-2 px-3 text-ellipsis text-nowrap text-sm flex gap-1 items-center h-full w-fit">
                        <i class="fa-solid fa-check size-4"></i>
                        In Stock
                      </td>
                      <td class="py-2 px-3 text-right text-sm text-nowrap">
                        $254.56<span>/ea</span>
                      </td>
                      <td class="py-2 px-3 text-right text-sm text-nowrap">
                        $254.56<span>/ea</span>
                      </td>
                      <td class="py-2 px-3 bg-primary-blue_xlight border-l border-monochromes-grey_xlight gap-2 sticky right-0 justify-center after:content-[''] after:absolute after:inset-0 after:border-l after:border-monochromes-grey_xlight">
                        <div class="flex flex-row gap-2 justify-center">
                          <button>
                            <i class="fa-solid fa-minus size-4 text-monochromes-grey p-1"></i>
                          </button>
                          <div class="relative flex flex-col max-w-[68px] w-[68px]">
                            <input
                              id="field"
                              type="number"
                              placeholder="0"
                              class="text-center max-w-[68px] border border-monochromes-grey_light hover:border-monochromes-main pl-4 pr-4 py-3.5 rounded text-sm focus:border-monochromes-grey_light focus:outline-dashed focus:outline-1 focus:outline-offset-4 focus:outline-black disabled:bg-off_white disabled:!border-[#e5e7eb] disabled:cursor-not-allowed hover:disabled:!border-[#e5e7eb] invalid:!border-error-red invalid:!text-error-red hover:invalid:!border-error-red focus:invalid:!border-error-red peer order-2 h-5"
                            />
                          </div>
                          <button>
                            <i class="fa-solid fa-plus size-4 text-monochromes-grey p-1"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-dashed border-monochromes-grey_light">
                      <td class="text-nowrap py-2 px-3 text-sm">11/16</td>
                      <td class="text-nowrap py-2 px-3 text-sm">0.6875</td>
                      <td class="text-nowrap py-2 px-3 text-sm">18</td>
                      <td class="text-nowrap py-2 px-3 text-sm">
                        Bright/Uncoated
                      </td>
                      <td class="py-2 px-3 text-sm cursor-pointer text-primary-blue_dark font-bold hover:underline text-nowrap">
                        81171118
                      </td>
                      <td class="py-2 px-3 text-sm text-monochromes-grey font-bold text-ellipsis text-nowrap flex gap-1 items-center h-full w-fit">
                        <i class="fa-solid fa-shield"></i>
                        Ships fr. Supplier{" "}
                        <span class="font-normal">(5 biz. days)</span>
                      </td>
                      <td class="py-2 px-3 text-right text-sm text-nowrap">
                        $254.56<span>/ea</span>
                      </td>
                      <td class="py-2 px-3 text-right text-sm text-nowrap">
                        $254.56<span>/pack of 12</span>
                      </td>
                      <td class="py-2 px-3 bg-primary-blue_xlight border-l border-monochromes-grey_xlight gap-2 sticky right-0 justify-center after:content-[''] after:absolute after:inset-0 after:border-l after:border-monochromes-grey_xlight">
                        <div class="flex flex-row gap-2 justify-center">
                          <button>
                            <i class="fa-solid fa-minus size-4 text-monochromes-grey p-1"></i>
                          </button>
                          <div class="relative flex flex-col max-w-[68px] w-[68px]">
                            <input
                              id="field"
                              type="number"
                              placeholder="0"
                              class="text-center max-w-[68px] border border-monochromes-grey_light hover:border-monochromes-main pl-4 pr-4 py-3.5 rounded text-sm focus:border-monochromes-grey_light focus:outline-dashed focus:outline-1 focus:outline-offset-4 focus:outline-black disabled:bg-off_white disabled:!border-[#e5e7eb] disabled:cursor-not-allowed hover:disabled:!border-[#e5e7eb] invalid:!border-error-red invalid:!text-error-red hover:invalid:!border-error-red focus:invalid:!border-error-red peer order-2 h-5"
                            />
                          </div>
                          <button>
                            <i class="fa-solid fa-plus size-4 text-monochromes-grey p-1"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-dashed border-monochromes-grey_light">
                      <td class="text-nowrap py-2 px-3 text-sm">11/16</td>
                      <td class="text-nowrap py-2 px-3 text-sm">0.6875</td>
                      <td class="text-nowrap py-2 px-3 text-sm">18</td>
                      <td class="text-nowrap py-2 px-3 text-sm">
                        Bright/Uncoated
                      </td>
                      <td class="py-2 px-3 text-sm cursor-pointer text-primary-blue_dark font-bold hover:underline text-nowrap">
                        81171118
                      </td>
                      <td class="py-2 px-3 text-sm text-monochromes-grey font-bold text-ellipsis text-nowrap flex gap-1 items-center h-full w-fit">
                        <i class="fa-solid fa-shield"></i>
                        Ships fr. Supplier{" "}
                        <span class="font-normal">(5 biz. days)</span>
                      </td>
                      <td class="py-2 px-3 text-right text-sm text-nowrap">
                        $254.56<span>/ea</span>
                      </td>
                      <td class="py-2 px-3 text-right text-sm text-nowrap">
                        $254.56<span>/pack of 12</span>
                      </td>
                      <td class="py-2 px-3 bg-primary-blue_xlight border-l border-monochromes-grey_xlight gap-2 sticky right-0 justify-center after:content-[''] after:absolute after:inset-0 after:border-l after:border-monochromes-grey_xlight">
                        <div class="flex flex-row gap-2 justify-center">
                          <button>
                            <i class="fa-solid fa-minus size-4 text-monochromes-grey p-1"></i>
                          </button>
                          <div class="relative flex flex-col max-w-[68px] w-[68px]">
                            <input
                              id="field"
                              type="number"
                              placeholder="0"
                              class="text-center max-w-[68px] border border-monochromes-grey_light hover:border-monochromes-main pl-4 pr-4 py-3.5 rounded text-sm focus:border-monochromes-grey_light focus:outline-dashed focus:outline-1 focus:outline-offset-4 focus:outline-black disabled:bg-off_white disabled:!border-[#e5e7eb] disabled:cursor-not-allowed hover:disabled:!border-[#e5e7eb] invalid:!border-error-red invalid:!text-error-red hover:invalid:!border-error-red focus:invalid:!border-error-red peer order-2 h-5"
                            />
                          </div>
                          <button>
                            <i class="fa-solid fa-plus size-4 text-monochromes-grey p-1"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-dashed border-monochromes-grey_light">
                      <td class="text-nowrap py-2 px-3 text-sm">9/64</td>
                      <td class="text-nowrap py-2 px-3 text-sm">0.1406</td>
                      <td class="text-nowrap py-2 px-3 text-sm">18</td>
                      <td class="text-nowrap py-2 px-3 text-sm">
                        Bright/Uncoated
                      </td>
                      <td class="py-2 px-3 text-sm cursor-pointer text-primary-blue_dark font-bold hover:underline text-nowrap">
                        81171092
                      </td>
                      <td class="text-success-green_dark py-2 px-3 text-ellipsis text-nowrap text-sm flex gap-1 items-center h-full w-fit">
                        <i class="fa-solid fa-check size-4"></i>
                        In Stock
                      </td>
                      <td class="py-2 px-3 text-right text-sm text-nowrap">
                        $254.56<span>/ea</span>
                      </td>
                      <td class="py-2 px-3 text-right text-sm text-nowrap">
                        $254.56<span>/ea</span>
                      </td>
                      <td class="py-2 px-3 bg-primary-blue_xlight border-l border-monochromes-grey_xlight gap-2 sticky right-0 justify-center after:content-[''] after:absolute after:inset-0 after:border-l after:border-monochromes-grey_xlight">
                        <div class="flex flex-row gap-2 justify-center">
                          <button>
                            <i class="fa-solid fa-minus size-4 text-monochromes-grey p-1"></i>
                          </button>
                          <div class="relative flex flex-col max-w-[68px] w-[68px]">
                            <input
                              id="field"
                              type="number"
                              placeholder="0"
                              class="text-center max-w-[68px] border border-monochromes-grey_light hover:border-monochromes-main pl-4 pr-4 py-3.5 rounded text-sm focus:border-monochromes-grey_light focus:outline-dashed focus:outline-1 focus:outline-offset-4 focus:outline-black disabled:bg-off_white disabled:!border-[#e5e7eb] disabled:cursor-not-allowed hover:disabled:!border-[#e5e7eb] invalid:!border-error-red invalid:!text-error-red hover:invalid:!border-error-red focus:invalid:!border-error-red peer order-2 h-5"
                            />
                          </div>
                          <button>
                            <i class="fa-solid fa-plus size-4 text-monochromes-grey p-1"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b border-dashed border-monochromes-grey_light">
                      <td class="text-nowrap py-2 px-3 text-sm">11/16</td>
                      <td class="text-nowrap py-2 px-3 text-sm">0.6875</td>
                      <td class="text-nowrap py-2 px-3 text-sm">18</td>
                      <td class="text-nowrap py-2 px-3 text-sm">
                        Bright/Uncoated
                      </td>
                      <td class="py-2 px-3 text-sm cursor-pointer text-primary-blue_dark font-bold hover:underline text-nowrap">
                        81171118
                      </td>
                      <td class="py-2 px-3 text-sm text-monochromes-grey font-bold text-ellipsis text-nowrap flex gap-1 items-center h-full w-fit">
                        <i class="fa-solid fa-shield"></i>
                        Ships fr. Supplier{" "}
                        <span class="font-normal">(5 biz. days)</span>
                      </td>
                      <td class="py-2 px-3 text-right text-sm text-nowrap">
                        $254.56<span>/ea</span>
                      </td>
                      <td class="py-2 px-3 text-right text-sm text-nowrap">
                        $254.56<span>/pack of 12</span>
                      </td>
                      <td class="py-2 px-3 bg-primary-blue_xlight border-l border-monochromes-grey_xlight gap-2 sticky right-0 justify-center after:content-[''] after:absolute after:inset-0 after:border-l after:border-monochromes-grey_xlight">
                        <div class="flex flex-row gap-2 justify-center">
                          <button>
                            <i class="fa-solid fa-minus size-4 text-monochromes-grey p-1"></i>
                          </button>
                          <div class="relative flex flex-col max-w-[68px] w-[68px]">
                            <input
                              id="field"
                              type="number"
                              placeholder="0"
                              class="text-center max-w-[68px] border border-monochromes-grey_light hover:border-monochromes-main pl-4 pr-4 py-3.5 rounded text-sm focus:border-monochromes-grey_light focus:outline-dashed focus:outline-1 focus:outline-offset-4 focus:outline-black disabled:bg-off_white disabled:!border-[#e5e7eb] disabled:cursor-not-allowed hover:disabled:!border-[#e5e7eb] invalid:!border-error-red invalid:!text-error-red hover:invalid:!border-error-red focus:invalid:!border-error-red peer order-2 h-5"
                            />
                          </div>
                          <button>
                            <i class="fa-solid fa-plus size-4 text-monochromes-grey p-1"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="flex justify-end py-3 px-4 gap-4 items-center h-auto border-t max-h-fit">
            <p class="font-bold text-sm sm:text-base">
              Total:{" "}
              <span class="font-bold text-sm sm:text-base">${total}</span>
            </p>
            <button class="py-2 px-2 md:px-5 h-10 rounded-full font-bold text-base cursor-pointer min-w-24 md:min-w-32 text-white bg-primary-blue hover:bg-[#186DF5] active:bg-blue-700 disabled:text-white disabled:cursor-not-allowed disabled:bg-gray-300 focus-visible:outline-dashed focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[#424242]">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MscTableModal;
