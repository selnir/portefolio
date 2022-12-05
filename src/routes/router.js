import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../pages/main";
import NoPage from "../pages/Nopage";
import App from "../App";

const Routeportefolio=
<BrowserRouter key="RouterPortefolio">
        <Routes >
          <Route path="/" element={<App />}>
            <Route index element={<Main />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
</BrowserRouter>  

export default [Routeportefolio];