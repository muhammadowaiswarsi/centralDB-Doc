import React, { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { routes } from './helper.js/routeshelper';
import { getAllApisData } from './helper.js/getReadmeData';
import { useDispatch } from 'react-redux';

const RoutesFile = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getAllApisData(dispatch);
  }, []);

  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replaceAll('#', ''));
      if (element) {
        window.scrollTo({ top: element.offsetTop - 100 });
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
