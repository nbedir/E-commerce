import { useEffect } from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import useApi from "./hooks/useApi";
import Home from "./pages/home/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/home/auth/login/index";
import RegisterPage from "./pages/home/auth/register/index";
import ContactPage from "./pages/contact";

function App() {
  const api = useApi();
  useEffect(() => {
    api
      .get("shop/taxons", {
        params: {
          page: 1,
          itemsPerPage: 30,
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth">
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
          </Route>
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
