import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faEllipsisVertical,
  faFloppyDisk,
  faPlus,
  faPrint,
  faReceipt,
  faShare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { Codeblock } from "../../components";

const CartActionBarPage = () => {
  const [isOptionsListVisible, setOptionsListVisible] = useState(false);

  const toggleOptionsList = () => {
    setOptionsListVisible(!isOptionsListVisible);
  };

  return (
    <>
      <small className="category-tag">Action</small>
      <h1 className="mb-4">Cart Action Bar</h1>

      <div className="msc-cart-action-bar">
        <div className="msc-buttons-container">
          <button className="msc-grey-button">
            <FontAwesomeIcon icon={faFloppyDisk} />
            <p>Save Cart</p>
          </button>
          <div className="msc-v-divider-gray h-5"></div>
          <button className="msc-grey-button">
            <FontAwesomeIcon icon={faPrint} />
            <p>Print</p>
          </button>
          <div className="msc-v-divider-gray h-5"></div>
          <button className="msc-grey-button">
            <FontAwesomeIcon icon={faPlus} />
            <p>Add to List</p>
          </button>
          <div className="msc-v-divider-gray h-5"></div>
          <button className="msc-grey-button">
            <FontAwesomeIcon icon={faDownload} />
            <p>Download Cart</p>
          </button>
          <div className="msc-v-divider-gray h-5"></div>
          <button className="msc-grey-button">
            <FontAwesomeIcon icon={faReceipt} />
            <p>Request a Quote</p>
          </button>
          <div className="msc-v-divider-gray h-5"></div>
          <button className="msc-grey-button">
            <FontAwesomeIcon icon={faShare} />
            <p>Share</p>
          </button>
          <div className="msc-v-divider-gray h-5"></div>
          <button className="msc-grey-button">
            <FontAwesomeIcon icon={faTrash} />
            <p>Clear Cart</p>
          </button>
        </div>

        <button
          id="cartOptions"
          className="msc-grey-button lg:hidden"
          onClick={toggleOptionsList}
        >
          <p>Cart Options</p>
          <FontAwesomeIcon icon={faEllipsisVertical} />
        </button>
      </div>

      {isOptionsListVisible && (
        <div
          id="optionsList"
          className={`msc-buttons-container-responsive ${
            isOptionsListVisible ? "" : "hidden"
          }`}
        >
          <button className="msc-grey-button">
            <FontAwesomeIcon icon={faFloppyDisk} />
            <p>Save Cart</p>
          </button>
          <button className="msc-grey-button">
            <FontAwesomeIcon icon={faPrint} />
            <p>Print</p>
          </button>
          <button className="msc-grey-button">
            <FontAwesomeIcon icon={faPlus} />
            <p>Add to List</p>
          </button>
          <button className="msc-grey-button">
            <FontAwesomeIcon icon={faDownload} />
            <p>Download Cart</p>
          </button>
          <button className="msc-grey-button">
            <FontAwesomeIcon icon={faReceipt} />
            <p>Request a Quote</p>
          </button>
          <button className="msc-grey-button">
            <FontAwesomeIcon icon={faShare} />
            <p>Share</p>
          </button>
          <button className="msc-grey-button">
            <FontAwesomeIcon icon={faTrash} />
            <p>Clear Cart</p>
          </button>
        </div>
      )}

      <Codeblock>
        {`
  <div class="msc-cart-action-bar">
    <div class="msc-buttons-container">
      <button class="msc-grey-button">
        <i class="fa-solid fa-floppy-disk mb-[1px]"></i>
        <p>Save Cart</p>
      </button>
      <div class="msc-v-divider-gray h-5"></div>
      <button class="msc-grey-button">
        <i class="fa-solid fa-print mb-[1px]"></i>
        <p>Print</p>
      </button>
      <div class="msc-v-divider-gray h-5"></div>
      <button class="msc-grey-button">
        <i class="fa-solid fa-plus mb-[1px]"></i>
        <p>Add to List</p>
      </button>
      <div class="msc-v-divider-gray h-5"></div>
      <button class="msc-grey-button">
        <i class="fa-solid fa-download mb-[1px]"></i>
        <p>Download Cart</p>
      </button>
      <div class="msc-v-divider-gray h-5"></div>
      <button class="msc-grey-button">
        <i class="fa-solid fa-receipt mb-[1px]"></i>
        <p>Request a Quote</p>
      </button>
      <div class="msc-v-divider-gray h-5"></div>
      <button class="msc-grey-button">
        <i class="fa-solid fa-share mb-[1px]"></i>
        <p>Share</p>
      </button>
      <div class="msc-v-divider-gray h-5"></div>
      <button class="msc-grey-button">
        <i class="fa-solid fa-trash mb-[1px]"></i>
        <p>Clear Cart</p>
      </button>
    </div>
    
    <!-- Responsive Code -->
    <button id="cartOptions" class="msc-grey-button lg:hidden">
      <p>Cart Options</p>
      <i class="fa-solid fa-ellipsis-vertical mb-[1px]"></i>
    </button>
  </div>
  <div id="optionsList" class="msc-buttons-container-responsive hidden">
    <button class="msc-grey-button">
      <i class="fa-solid fa-floppy-disk mb-[1px]"></i>
      <p>Save Cart</p>
    </button>
    <button class="msc-grey-button">
      <i class="fa-solid fa-print mb-[1px]"></i>
      <p>Print</p>
    </button>
    <button class="msc-grey-button">
      <i class="fa-solid fa-plus mb-[1px]"></i>
      <p>Add to List</p>
    </button>
    <button class="msc-grey-button">
      <i class="fa-solid fa-download mb-[1px]"></i>
      <p>Download Cart</p>
    </button>
    <button class="msc-grey-button">
      <i class="fa-solid fa-receipt mb-[1px]"></i>
      <p>Request a Quote</p>
    </button>
    <button class="msc-grey-button">
      <i class="fa-solid fa-share mb-[1px]"></i>
      <p>Share</p>
    </button>
    <button class="msc-grey-button">
      <i class="fa-solid fa-trash mb-[1px]"></i>
      <p>Clear Cart</p>
    </button>
  </div>

  <!-- JS -->
  <script>
    const cartOptions = document.getElementById('cartOptions');
    const optionsList = document.getElementById('optionsList');
            
    cartOptions.addEventListener("click", function () {
      optionsList.classList.toggle('hidden')
    })
  </script>
        `}
      </Codeblock>
    </>
  );
};

export default CartActionBarPage;
