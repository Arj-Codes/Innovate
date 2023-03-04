import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";

import CanvasLoader from "./components/CanvasLoader";
import Loader from "./components/Loader";
import SectionDivider from "./components/SectionDivider";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import { loginFailure, loginSuccess } from "./redux/userSlice";

const App = () => {
  const { userData } = useSelector((state) => state.user);
  const [load, setLoad] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:9000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) {
            return response.json();
          }
          throw new Error("authentication has been failed!");
        })
        .then((res) => {
          dispatch(loginSuccess(res));
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);

  useEffect(() => {
    let timer = setTimeout(() => setLoad(false), 5000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {load ? (
        <Loader />
      ) : (
        <div>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/login"
              element={userData ? <Navigate to="/" /> : <Login />}
            />
          </Routes>
          <SectionDivider />
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
