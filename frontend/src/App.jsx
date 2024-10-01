import { Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";
import SignUpPage from "./page/SignUpPage";
import LoginPage from "./page/LoginPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;