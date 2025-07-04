import { useContext } from "react";
import AuthContext from "../context/authcontext/AuthContext";

const UseAuth = () => {
  const context=useContext(AuthContext);
  return context;
};

export default UseAuth;