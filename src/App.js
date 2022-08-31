import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Hazrat from "./pages/Hazrat";
import Masjid from "./pages/Masjid";
import Maktab from "./pages/Maktab";
import NoPage from "./pages/NoPage";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="hazrat" element={<Hazrat />} />
          <Route path="masjid" element={<Masjid />} />
          <Route path="maktab" element={<Maktab />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}