import axios from "axios";
import Cookies from "js-cookie";

import { logout } from "./redux/userSlice";

export const logOut = async (dispatch) => {
  window.open("http://localhost:9000/auth/logout", "_self");
  dispatch(logout());
};
