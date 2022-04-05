import { render } from "react-dom";
import {
    BrowserRouter,
    Routes as RoutesRoot ,
    Route,
    Routes,
  } from "react-router-dom";
import Layout from "../layout/Layout";
import CardPage from "../pages/CardPage";
import HomePage from "../pages/homePage";
import NotFound from "../pages/NotFound";


export const RoutesApp = () => {
    return(
        <BrowserRouter>
          <RoutesRoot>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="/cardPage/:name" element={<CardPage />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </RoutesRoot>
      </BrowserRouter>
    )
}