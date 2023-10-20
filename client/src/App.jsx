import "./styles.scss";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import HomePage from "./pages/HomePage/HomePage";
import DealsPage from "./pages/DealsPage/DealsPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

function App() {
  const isAuth = Boolean(useSelector((state) => state.auth.token));

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/deals"
            element={isAuth ? <DealsPage /> : <Navigate to="/login" />}
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
