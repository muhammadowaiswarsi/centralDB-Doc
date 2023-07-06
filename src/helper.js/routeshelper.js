import Home from "../pages/home";
import License from "../pages/liscence";
import Docs from "../pages/docs";
import Legal from "../pages/legal";
import PrivacyPolicy from "../pages/privacyPolicy";
import TermsOfUse from "../pages/termsOfUse";


export const routes = [
    { path: "/", element: < Home /> },
    { path: "/license", element: < License /> },
    { path: "/docs", element: < Docs /> },
    { path: "/privacy-policy", element: < PrivacyPolicy /> },
    { path: "/terms-of-use", element: < TermsOfUse /> },
    { path: "/legal", element: < Legal /> },
    { path: "/*", isNavigate:true, to: "/" }
]

