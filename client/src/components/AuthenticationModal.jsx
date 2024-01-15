import React, { useState } from 'react';
import Login from './Login';

const AuthenticationModal = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Modal toggle */}
      <button
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        onClick={toggleModal}
      >
        Toggle login modal
      </button>

      {/* Main modal */}
      <div
        id="authentication-modal"
        aria-hidden="true"
        className={`${
          isModalOpen ? 'fixed' : 'hidden'
        }  overflow-x-hidden overflow-y-auto h-modal md:h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 justify-center items-center`}
        >
      
        <div className="relative w-full max-w-md px-4 h-full md:h-auto">
          {/* Modal content */}
          <div className="bg-white rounded-lg shadow relative dark:bg-gray-700">
            <div className="flex justify-end p-2">
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                onClick={toggleModal}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
         <Login/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthenticationModal;