import React from "react";

const Modal = ({ showShare, handleShowShare, children }) => {
  //   const showHideClassName = showShare ? "modal display-block" : "modal display-none";
  const showHideClassName = showShare
    ? "modal display-block"
    : "modal display-none";

  return (
    <div
      id="defaultModal"
      tabindex="-1"
      aria-hidden="true"
      class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
    >
      <div class="relative w-full h-full max-w-2xl md:h-auto">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700"></div>

        <div className="modal-container">
          <div className="modal-close" onClick={handleShowShare}>
            <svg className="modal-close-icon" viewBox="0 0 40 40">
              <path d="M 10,10 L 30,30 M 30,10 L 10,30"></path>
            </svg>
          </div>
          <div className="modal-content">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
