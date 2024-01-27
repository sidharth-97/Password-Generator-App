import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';

const AuthenticationModal = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isLogin,setIsLogin]=useState(true)

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  const handleIsLogin = (val) => {
    console.log(isLogin);
    setIsLogin(val)
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Modal toggle */}
      <button
        
        type="button"
        onClick={toggleModal}
      >
        SignIn
      </button>

      {/* Main modal */}
      <div
        id="authentication-modal"
        aria-hidden="true"
        className={`${
          isModalOpen ? 'fixed' : 'hidden'
        }  inset-0 z-50 flex items-center justify-center`}
        ><div className="absolute inset-0 bg-gray-800 opacity-75"></div>
        <div className="relative w-screen max-w-md px-4 h-full md:h-auto">
          {/* Modal content */}
          <div className="bg-white rounded-lg shadow relative :bg-gray-700">
            <div className="flex justify-end p-2">
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center :hover:bg-gray-800 :hover:text-white"
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
            {
              isLogin? <Login isLogin={handleIsLogin } />:<Signup isLogin={ handleIsLogin} />
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthenticationModal;
