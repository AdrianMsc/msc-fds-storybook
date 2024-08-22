import { Codeblock } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faPrint,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import MscButton from "../../components/ds/MscButton";

const ButtonPage = () => {
  return (
    <>
      <small className="category-tag">Action</small>
      <h1 className="mb-2">Button</h1>

      <h2>Default</h2>
      <div className="msc-component-container-row">
        <MscButton label="Blue Solid" />
        <MscButton label="Blue Outline" variant="outline" />
        <MscButton label="Transaprent" variant="transparent" />
        <MscButton label="Button Small" size="msc-btn-sm" />
      </div>

      <Codeblock>
        {`
  // Primary
  <button class="msc-btn msc-btn-blue-solid">Blue Solid</button>

  // Secondary
  <button class="msc-btn msc-btn-blue-outline">Blue Outline</button>

  // Tertiary
  <button class="msc-btn msc-btn-transparent">Text Only</button>

  // Small
  <button class="msc-btn msc-btn-blue-solid msc-btn-sm">
    Small Button
  </button>
        `}
      </Codeblock>

      <br />
      <h2>Disabled</h2>
      <div className="msc-component-container-row">
        <button disabled className="msc-btn msc-btn-blue-solid">
          Primary
        </button>
        <button disabled className="msc-btn msc-btn-blue-outline">
          Secondary
        </button>
        <button disabled className="msc-btn msc-btn-transparent">
          Tertiary
        </button>
        <button disabled className="msc-btn msc-btn-blue-solid msc-btn-sm">
          Small
        </button>
      </div>

      <Codeblock>
        {`
  // Primary
  <button disabled class="msc-btn msc-btn-blue-solid">Primary</button>

  // Secondary
  <button disabled class="msc-btn msc-btn-blue-outline">Secondary</button>

  // Tertiary
  <button disabled class="msc-btn msc-btn-transparent">Tertiary</button>

  // Small
  <button disabled class="msc-btn msc-btn-blue-solid msc-btn-sm">
    Small
  </button>
        `}
      </Codeblock>

      <br />
      <h2 className="font-bold text-2xl mb-2">Button With Icon</h2>
      <div className="msc-component-container-row">
        <button className="msc-btn msc-btn-blue-solid pt-1">
          <FontAwesomeIcon icon={faDownload} className="icon-btn" />
          Primary
        </button>
        <button className="msc-btn msc-btn-blue-outline pt-1">
          <FontAwesomeIcon icon={faDownload} className="icon-btn" />
          Secondary
        </button>
        <button className="msc-btn msc-btn-transparent pt-1">
          <FontAwesomeIcon icon={faDownload} className="icon-btn" />
          Tertiary
        </button>
        <button className="msc-btn msc-btn-blue-solid msc-btn-sm py-1">
          <FontAwesomeIcon icon={faDownload} className="icon-btn" />
          Small
        </button>
      </div>

      <Codeblock>
        {`
  // Primary
  <button class="msc-btn msc-btn-blue-solid">
    <i class="fa-solid fa-download msc-btn-icon"></i>
    Primary
  </button>

  // Secondary
  <button disabled class="msc-btn msc-btn-blue-outline">
    <i class="fa-solid fa-download msc-btn-icon"></i>
    Secondary
  </button>

  // Tertiary
  <button disabled class="msc-btn msc-btn-trasnparent">
    <i class="fa-solid fa-download msc-btn-icon"></i>
    Tertiary
  </button>

  // Small
  <button disabled class="msc-btn disabled:msc-btn-blue-solid msc-btn-sm">
    <i class="fa-solid fa-download msc-btn-icon"></i>
    Small
  </button>
        `}
      </Codeblock>

      <br />
      <h2>Loading State</h2>
      <div className="msc-component-container-row">
        <button className="msc-btn msc-btn-blue-solid">
          <div className="msc-btn-dots-container">
            <div className="msc-btn-dot1"></div>
            <div className="msc-btn-dot2"></div>
            <div className="msc-btn-dot3"></div>
          </div>
        </button>
        <button className="msc-btn msc-btn-blue-outline">
          <div className="msc-btn-dots-container">
            <div className="msc-btn-dot1"></div>
            <div className="msc-btn-dot2"></div>
            <div className="msc-btn-dot3"></div>
          </div>
        </button>
        <button className="msc-btn msc-btn-transparent">
          <div className="msc-btn-dots-container">
            <div className="msc-btn-dot1"></div>
            <div className="msc-btn-dot2"></div>
            <div className="msc-btn-dot3"></div>
          </div>
        </button>
        <button className="msc-btn msc-btn-blue-solid msc-btn-sm">
          <div className="msc-btn-dots-container">
            <div className="msc-btn-dot1"></div>
            <div className="msc-btn-dot2"></div>
            <div className="msc-btn-dot3"></div>
          </div>
        </button>
      </div>

      <Codeblock>
        {`
  // Primary
  <button class="msc-btn msc-btn-blue-solid">
    <div class="msc-btn-dots-container">
      <div class="msc-btn-dot1"></div>
      <div class="msc-btn-dot2"></div>
      <div class="msc-btn-dot3"></div>
    </div>
  </button>

  // Secondary
  <button class="msc-btn msc-btn-blue-outline">
    <div class="msc-btn-dots-container">
      <div class="msc-btn-dot1"></div>
      <div class="msc-btn-dot2"></div>
      <div class="msc-btn-dot3"></div>
    </div>
  </button>

  // Tertiary
  <button class="msc-btn msc-btn-blue-transparent">
    <div class="msc-btn-dots-container">
      <div class="msc-btn-dot1"></div>
      <div class="msc-btn-dot2"></div>
      <div class="msc-btn-dot3"></div>
    </div>
  </button>

  // Small
  <button class="msc-btn msc-btn-blue-solid msc-btn-sm">
    <div class="msc-btn-dots-container">
      <div class="msc-btn-dot1"></div>
      <div class="msc-btn-dot2"></div>
      <div class="msc-btn-dot3"></div>
    </div>
  </button>
        `}
      </Codeblock>

      <br />
      <h2 className="mb-2">Icon Button</h2>

      <div className="flex items-center bg-white p-5 w-fit rounded">
        <table className="border-separate border-spacing-5 text-center">
          <tr className="text-[14px]">
            <th>Button</th>
            <td>Default</td>
            <td>Hover</td>
            <td>Focused</td>
            <td>Disabled</td>
          </tr>
          {/* <!-- LG --> */}
          <tr>
            <th>LG</th>
            <td>
              <button className="msc-icon-button-lg">
                <FontAwesomeIcon icon={faThumbsUp} />
              </button>
            </td>
            <td>
              <button className="msc-icon-button-lg bg-off_white rounded-full">
                <FontAwesomeIcon icon={faThumbsUp} />
              </button>
            </td>
            <td>
              <button className="msc-icon-button-lg bg-monochromes-grey_xlight hover:bg-monochromes-grey_xlight">
                <FontAwesomeIcon icon={faThumbsUp} />
              </button>
            </td>
            <td>
              <button className="msc-icon-button-lg" disabled>
                <FontAwesomeIcon icon={faThumbsUp} />
              </button>
            </td>
          </tr>
          {/* <!-- MD --> */}
          <tr>
            <th>MD</th>
            <td>
              <button className="msc-icon-button">
                <FontAwesomeIcon icon={faThumbsUp} />
              </button>
            </td>
            <td>
              <button className="msc-icon-button bg-off_white rounded-full">
                <FontAwesomeIcon icon={faThumbsUp} />
              </button>
            </td>
            <td>
              <button className="msc-icon-button bg-monochromes-grey_xlight hover:bg-monochromes-grey_xlight">
                <FontAwesomeIcon icon={faThumbsUp} />
              </button>
            </td>
            <td>
              <button className="msc-icon-button" disabled>
                <FontAwesomeIcon icon={faThumbsUp} />
              </button>
            </td>
          </tr>
          {/* <!-- SM --> */}
          <tr>
            <th>SM</th>
            <td>
              <button className="msc-icon-button-sm">
                <FontAwesomeIcon icon={faThumbsUp} />
              </button>
            </td>
            <td>
              <button className="msc-icon-button-sm bg-off_white rounded-full">
                <FontAwesomeIcon icon={faThumbsUp} />
              </button>
            </td>
            <td>
              <button className="msc-icon-button-sm bg-monochromes-grey_xlight hover:bg-monochromes-grey_xlight">
                <FontAwesomeIcon icon={faThumbsUp} />
              </button>
            </td>
            <td>
              <button className="msc-icon-button-sm" disabled>
                <FontAwesomeIcon icon={faThumbsUp} />
              </button>
            </td>
          </tr>
        </table>
      </div>

      <Codeblock>
        {`
  // LG
  <button class="msc-icon-button-lg">
    <i class="fa-solid fa-thumbs-up"></i>
  </button>

  // MD
  <button class="msc-icon-button">
    <i class="fa-solid fa-thumbs-up"></i>
  </button>

  // SM
  <button class="msc-icon-button-sm">
    <i class="fa-solid fa-thumbs-up"></i>
  </button>

  // DISABLED
  <button class="msc-icon-button" disabled>
    <i class="fa-solid fa-thumbs-up"></i>
  </button>
        `}
      </Codeblock>

      <br />
      <h2 className="mb-2">Grey Button</h2>
      <div className="msc-component-container-row">
        <div className="flex flex-col items-center gap-3">
          <p>Default</p>
          <button className="msc-grey-button">
            <FontAwesomeIcon icon={faPrint} />
            <p>Print</p>
          </button>
        </div>
        <div className="flex flex-col items-center gap-3">
          <p>Hover</p>
          <button className="msc-grey-button text-monochromes-main">
            <FontAwesomeIcon icon={faPrint} />
            <p>Print</p>
          </button>
        </div>
        <div className="flex flex-col items-center gap-3">
          <p>Bold</p>
          <button className="msc-grey-button font-bold">
            <FontAwesomeIcon icon={faPrint} />
            <p>Print</p>
          </button>
        </div>
        <div className="flex flex-col items-center gap-3">
          <p>Disabled</p>
          <button disabled className="msc-grey-button">
            <FontAwesomeIcon icon={faPrint} />
            <p>Print</p>
          </button>
        </div>
      </div>

      <Codeblock>
        {`
  // DEFAULT
  <button class="msc-grey-button">
    <i class="fa-solid fa-print mb-[1px]"></i>
    <p>Print</p>
  </button>

  // BOLD
  <button class="msc-grey-button font-bold">
    <i class="fa-solid fa-print mb-[1px]"></i>
    <p>Print</p>
  </button>
        `}
      </Codeblock>
    </>
  );
};

export default ButtonPage;
