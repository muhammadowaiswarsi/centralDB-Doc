import Home from "../pages/home";
import License from "../pages/liscence";
import Docs from "../pages/docs";


export const routes = [
    { path: "/*", element: < Home /> },
    { path: "/", element: < Home /> },
    { path: "/license", element: < License /> },
    { path: "/docs", element: < Docs /> }
]

