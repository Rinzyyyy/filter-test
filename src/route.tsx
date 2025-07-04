import { createBrowserRouter } from "react-router-dom";

import App from "./App"; 
import CompareProductPage from "./pages/CompareProductPage";
import CourseFilterPage from "./pages/CourseFilter";  

const router = createBrowserRouter([
  {
    path: "/exam",
    element: <App />, 
    children: [
      { path: "CompareProductPage", element: <CompareProductPage /> },
      { path: "CourseFilterPage", element: <CourseFilterPage /> },  
    ],
  },
]); 

export default router;
