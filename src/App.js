import Footer from "./Components/Utilies/Footer";
import NavBarLogin from "./Components/Utilies/NavBarLogin";
import LoginPage from "./Pages/Auth/LoginPage";
import RegisterPage from "./Pages/Auth/RegisterPage";
import AllBrandsPage from "./Pages/Brand/AllBrandsPage";
import AllCategoryPage from "./Pages/Categories/AllCategories";
import HomePage from "./Pages/Home/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App text-center">
      <NavBarLogin />
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/allCategories" element={<AllCategoryPage />} />
          <Route path="/allBrands" element={<AllBrandsPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
