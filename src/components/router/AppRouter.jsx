import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Universitas from "../../pages/about/Universitas";
import VisiMisi from "../../pages/about/VisiMisi";
import Academic from "../../pages/Academic";
import Registration from "../../pages/Registration";
import News from "../../pages/News";
import LoginPage from "../../pages/LoginPage";
import ErrorPage from "../../pages/ErrorPage";
import NewsDetails from "../../pages/NewsDetails";
import DetailAcademic from "../../pages/DetailAcademic";

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/about/university" element={<Universitas />} />
      <Route path="/about/vision-mission" element={<VisiMisi />} />

      <Route path="/academic" element={<Academic />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/news" element={<News />} />

      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<ErrorPage />} />

      <Route path="/news/:id" element={<NewsDetails />} />
      <Route path="/academic/:id" element={<DetailAcademic />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
