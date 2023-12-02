import { NavLink } from 'react-router-dom';
import Errorr from "../../images/error.png";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img src={Errorr} alt="error" className="w-96 mb-10" />
      <h2 className="text-2xl mb-3 text-white text-center">Please, try to reload the page !</h2>
      <NavLink to="/" className="flex flex-row justify-center items-center my-5 bg-white p-3 rounded-full cursor-pointer hover:bg-gray-300 px-20">
        Back To Home Page
      </NavLink>
    </div>
  );
};

export default Error;