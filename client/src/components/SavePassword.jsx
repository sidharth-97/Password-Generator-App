import React, { useState } from 'react';
import { savePassword } from '../services/api';
import { useAuth } from './AuthContext';
import {toast} from 'react-toastify'

const Modal = ({ showModal, closeModal, content }) => {
    const [key, setKey ] = useState("")
    const handleSubmit = async () => {
      console.log(key, content);
      if(key=="")return toast.error("Please give a keyword")
        const data={[key]:content}
        const response = await savePassword(data)
      if (response.status == 200) {
          toast.success("Password saved")
      } else {
        toast.error(response?.data)
        }
    }
  return (
    <div
      id="default-modal"
      tabIndex="-1"
      aria-hidden={!showModal}
      className={`${
        showModal ? 'fixed' : 'hidden'
      }  inset-0 z-50 flex items-center justify-center`}
    > <div className="absolute inset-0 bg-gray-800 opacity-75"></div>
      <div className="relative p-4 w-full max-w-2xl max-h-full">
        {/* Modal content */}
        <div className="relative bg-white rounded-lg shadow :bg-gray-700">
          {/* Modal header */}
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t :border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 :text-white">
             Save your password
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center :hover:bg-gray-600 :hover:text-white"
              onClick={closeModal}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {/* Modal body */}
          <div className="p-4 md:p-5 space-y-4 w-full">
          <input className='w-full p-3' type="text"onChange={(e)=>setKey(e.target.value)} placeholder='Enter your keyword' />
          </div>
          {/* Modal footer */}
          <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b :border-gray-600">
            <button 
              data-modal-hide="default-modal"
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center :bg-blue-600 :hover:bg-blue-700 :focus:ring-blue-800"
              onClick={handleSubmit}
            >
              Save
            </button>
            <button
              data-modal-hide="default-modal"
              type="button"
              className="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 :bg-gray-700 :text-gray-300 :border-gray-500 :hover:text-white :hover:bg-gray-600 :focus:ring-gray-600"
              onClick={closeModal}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const SavePassword = ({password}) => {
    const [showModal, setShowModal] = useState(false);
    const {user}=useAuth()
console.log(password);
    const openModal = () => {
        if (!user) {
            toast.error("Please login to save password")
            return
      }
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button
        data-modal-target="default-modal"
        data-modal-toggle="default-modal"
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center :bg-blue-600 :hover:bg-blue-700 :focus:ring-blue-800"
        type="button"
        onClick={openModal}
      >
        Save
      </button>
          <Modal showModal={showModal} closeModal={closeModal} content={password} />
    </div>
  );
};

export default SavePassword;
