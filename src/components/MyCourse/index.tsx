import { filterCategories, filterOptionData } from "../../constant/filterData";
import { useIsMobile } from "../../hooks/useIsMobile";
import CustomSelector from "../CustomSelector";

const MyCourse = () => {
  const isMobile = useIsMobile();

  return (
    <article>
      {/* tab */}
      <div className="flex gap-1 text-gray-600 cursor-pointer">
        <div className="border-1 border-b-0 border-gray-300 w-fit rounded-md rounded-b-none bg-blue-100 py-2 px-3">
          <p className="font-bold">使用中課程</p>
        </div>
        <div className="border-1 border-b-0 border-gray-300 w-fit rounded-md rounded-b-none bg-gray-100 py-2 px-3">
          <p className="font-bold">到期課程</p>
        </div>
      </div>

      {/* course */}
      <div className="relative w-full h-[70vh] border border-gray-300">
        <div className="sticky top-0 bg-[#f8f8f8] shadow px-6 py-3 md:flex md:gap-2 ">
          {filterCategories.map((key) => {
            const { name, options } = filterOptionData[key];
            return (
              <div
                className="text-gray-600 flex gap-2 items-center mt-3 pb-2 md:w-[30%]"
                key={`filter_category_${key}`}
              >
                <div className="w-full">
                  <CustomSelector
                    options={[{ label: "全部", value: "all" }, ...options]}
                    placeholder={`請選擇${name}`}
                    defaultOption={{ label: "全部", value: "all" }}
                    isClickToFocus={isMobile}
                    onChange={() => {}}
                  />
                </div>
              </div>
            );
          })}
        </div>

        <div className="h-[calc(100%-204px)] md:h-[calc(100%-84px)] overflow-scroll grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-6 ">
          {Array.from({ length: 10 }).map((_, index) => (
            <div
              key={`course_${index}`}
              className="w-full h-[100px] flex sm:max-w-[359px] sm:h-[365px] border border-gray-300 rounded-sm bg-slate-50 "
            >
              <div className="w-[100px] sm:w-full sm:h-[60%] bg-slate-400"></div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};

export default MyCourse;
