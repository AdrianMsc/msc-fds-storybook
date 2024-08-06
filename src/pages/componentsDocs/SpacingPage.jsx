import React from "react";

const SpacingPage = () => {
  return (
    <>
      <small className="category-tag">Foundations</small>
      <h1>Spacing</h1>
      <p class="mb-3 mt-3">
        Spacing is an essential part of the design. It can be applied on grid
        and layouts but also used on margin and padding of our components. Like
        our grid, the spacing system use the 8 pixels grid.
      </p>
      <p class="mb-3">
        If we use by default the 8 pixels grid for spacing system, some elements
        (like icons or small components) can use a 4px spacing.
      </p>

      <h2 class="mb-3">Spacing System</h2>

      <table class="border-collapse w-full border border-slate-400">
        <thead class="bg-slate-50">
          <tr>
            <th class="w-1/4 border border-slate-300 p-4 text-slate-900 text-left">
              Spacing
            </th>
            <th class="w-1/2 border border-slate-300 font-semibold p-4 text-slate-900 text-left">
              Usage
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border border-slate-300 p-4">2px</td>
            <td class="border border-slate-300 p-4">TBD</td>
          </tr>
          <tr>
            <td class="border border-slate-300 p-4">4px</td>
            <td class="border border-slate-300 p-4">
              Padding/margin for some components (XS and S size) <br />
              Margin between atoms (eg: between icon and text)
            </td>
          </tr>
          <tr>
            <td class="border border-slate-300 p-4">8px</td>
            <td class="border border-slate-300 p-4">
              Default padding for components <br />
              Margin between related components (eg: two buttons on a modal for
              better hierarchy)
            </td>
          </tr>
          <tr>
            <td class="border border-slate-300 p-4">16px</td>
            <td class="border border-slate-300 p-4">
              Default margin between components or sections (eg: buttons,
              inputs, texts) <br />
              Padding for some components (eg: buttons, dialog, drawer) Padding
              for organisms (eg: side panel)
            </td>
          </tr>
          <tr>
            <td class="border border-slate-300 p-4">24px</td>
            <td class="border border-slate-300 p-4">
              Margin between main title and body content <br />
              Margin between cards/sections/organisms (body content) <br />
              Global padding for body content (Body with sub-header and/or
              multi-column)
            </td>
          </tr>
        </tbody>
      </table>

      <h2 class="mt-5">4px</h2>

      <div class="p-1 outline outline-slate-300 my-4">
        <div class="w-full h-[4px] bg-slate-300"></div>
      </div>
      <h2>8px</h2>

      <div class="p-2 outline outline-slate-300 my-4">
        <div class="w-full h-[8px] bg-slate-300"></div>
      </div>

      <h2>16px</h2>

      <div class="p-4 outline outline-slate-300 my-4">
        <div class="w-full h-[16px] bg-slate-300"></div>
      </div>

      <h2>24px</h2>

      <div class="p-6 outline outline-slate-300 my-4">
        <div class="w-full h-[24px] bg-slate-300"></div>
      </div>
    </>
  );
};

export default SpacingPage;
