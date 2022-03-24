import { render } from "react-dom";
import {
    BrowserRouter,
    Routes as RoutesRoot ,
    Route,
  } from "react-router-dom";
import Layout from "../layout/Layout";
import HomePage from "../pages/homePage";


export const Routes = () => {
    return(
        <BrowserRouter>
        <RoutesRoot>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
          </Route>
        </RoutesRoot>
      </BrowserRouter>
    )
}