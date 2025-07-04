import { FaLine } from "react-icons/fa";
import MyCourse from "../../components/MyCourse";

const CourseFilterPage = () => {
  return (
    <div className="bg-[#f8f8f8] min-h-screen">
      <div className="sticky top-0 z-99">
        {/* announcementBar */}
        <div className=" w-screen h-[41px] bg-[#bdb8b9]"></div>
        {/* menuBar */}
        <div className="w-screen h-[66px] bg-white shadow-md flex justify-end items-center px-10">
          <a href="https://lin.ee/qC3xvlk" target="_blank">
            <FaLine size={50} color="#04d03a" />
          </a>
        </div>
      </div>

      {/* breadcrumb  */}
      <div className="w-[95%] xl:w-[80%] m-auto pt-5 text-gray-600">
        <p>
          <a className="text-blue-800">首頁</a> {">"} 我的課程
        </p>
      </div>

      <main className="w-[95%] xl:w-[80%] m-auto my-10">
        <MyCourse />
      </main>
      <footer className="border-t border-gray-300 w-screen h-[200px] "></footer>
    </div>
  );
};

export default CourseFilterPage;
