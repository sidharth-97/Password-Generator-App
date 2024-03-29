import React, { useEffect, useState } from "react";
import { savedPasswords } from "../services/api";
import CopyToClipboardButton from "../UI/CopyToClipboard";

const ViewSavedPassword = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [password, setPassword] = useState([]);
  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      // You can show a notification or perform any other action after successful copy
      console.log(`Copied to clipboard: ${text}`);
    } catch (error) {
      console.error("Error copying to clipboard:", error);
    }
  };

  useEffect(() => {
    async function fetchPasswords() {
      try {
        const response = await savedPasswords();
        setPassword(response?.data);
        console.log(response?.data);
      } catch (error) {
        console.error("Error fetching saved passwords:", error);
      }
    }
    fetchPasswords();
  });

  return (
    <div className="max-w-2xl mx-auto">
      {/* Button to open the modal */}
      <button
        type="button"
        onClick={toggleModal}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        View Saved Passwords
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-gray-800 opacity-75"></div>
          <div className="relative bg-white rounded-lg shadow-md p-6 max-w-md w-full">
            <button
              type="button"
              onClick={toggleModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-300"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
            <div className="saved-passwords">
  <h2 className="text-2xl font-bold mb-6 text-center">Saved Passwords</h2>
  <div className="grid gap-6">
    {password &&
      password.map((item, index) => (
        <div key={index} className="password-item p-6 border-2 rounded-lg shadow-md">
          {Object.entries(item).map(([key, value]) => (
            <div key={key} className="mb-4">
              <span className="text-gray-600 text-lg">{key}:</span>
              <div className="flex flex-row justify-between">
                  <span className="font-bold text-base ml-4">{value.substring(0, 15)}...</span>
              <CopyToClipboardButton textToCopy={Object.values(item)[0]} className="mt-4" />
              </div>
            </div>
          ))}
        
        </div>
      ))}
  </div>
</div>


</div>
        </div>
      )}
    </div>
  );
};

export default ViewSavedPassword;
