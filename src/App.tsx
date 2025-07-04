import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <nav className="flex gap-4 p-4 bg-black text-white">
        <Link to="./CompareProductPage" className="bg-white text-black p-2">
          CompareProductPage
        </Link>
        <Link to="./CourseFilterPage" className="bg-white text-black p-2">
          CourseFilterPage
        </Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
