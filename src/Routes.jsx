import React, { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { routes } from './helper.js/routeshelper';

const RoutesFile = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <>
      <Routes>
        {routes?.map((val, id) => {
          return (
            <Route
              key={id}
              path={val?.path}
              element={val?.isNavigate ? <Navigate to={val?.to} /> : val.element}
            />
          );
        })}
      </Routes>
    </>
  );
};

export default RoutesFile;
