import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { logout } from "../services/api";
import { useAuth } from "./AuthContext";
import AuthenticationModal from "./AuthenticationModal";
import { toast } from "react-toastify";
import ViewSavedPassword from "./ViewSavedPassword";

const Navbar = () => {
  const {user,logoutC}=useAuth()
  const handleLogout = async() => {
    const response = await logout()
    logoutC()
    toast.success("Logout success")
    console.log(response)
  }
  return (
    <nav className="relative select-none bg-gray-200 lg:flex lg:items-stretch w-full">
      <div className="flex flex-no-shrink items-stretch h-12">
        <Link
          to="/"
          className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-black no-underline flex items-center hover:bg-gray-300 text-xl font-bold"
        >
          PasswordGen
        </Link>

        <button className="block hidden cursor-pointer ml-auto relative w-12 h-12 p-4">
          <svg
            className="fill-current text-black"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          <svg
            className="fill-current text-black"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        </button>
      </div>
      {user ? (
        <div className="lg:flex lg:items-stretch lg:flex-no-shrink lg:flex-grow">
          <div className="lg:flex lg:items-stretch lg:justify-end ml-auto">
            <span
              className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-black no-underline flex items-center hover:bg-gray-300 font-semibold"
            >
              <ViewSavedPassword/>
            </span>
            <Button onClick={handleLogout} className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-black no-underline flex items-center hover:bg-gray-300 font-semibold">
              Sign out
            </Button>
          </div>
        </div>
      ) : (
        <div className="lg:flex lg:items-stretch lg:flex-no-shrink lg:flex-grow">
          <div className="lg:flex lg:items-stretch lg:justify-end ml-auto">
            <button
              type="button"
              className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-black no-underline flex items-center hover:bg-gray-300 font-semibold"
            >
              <AuthenticationModal/>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
