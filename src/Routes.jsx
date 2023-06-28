import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./helper.js/routeshelper";

const RoutesFile = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {routes?.map((val, id) => {
            return (
              <Route
                key={id}
                path={val?.path}
                element={val?.element}
              />
            );
          })}
        </Routes>

      </BrowserRouter>
    </>
  );
};
export default RoutesFile;

