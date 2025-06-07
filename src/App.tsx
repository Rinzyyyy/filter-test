function App() {
  return (
    <div className="bg-[#f8f8f8] h-screen overflow-scroll">
      <div className=" sticky top-0">
        {/* announcementBar */}
        <div className=" w-screen h-[41px] bg-[#e7465a]"></div>
        {/* menuBar */}
        <div className="w-screen h-[66px] bg-white shadow-md "></div>
        {/* breadcrumb  */}
      </div>

      <div className="w-[80%] m-auto pt-5 text-gray-600">
        <p>
          <a>首頁</a> {">"} 我的課程
        </p>
      </div>

      <main className="w-[80%] h-[60vh] m-auto mt-10">
        {/* tab */}
        <div className="flex text-gray-600">
          <div className="border border-gray-300 w-fit rounded-sm rounded-b-none py-2 px-3">
            使用中課程
          </div>
          <div className="border border-gray-300 w-fit rounded-sm rounded-b-none py-2 px-3">
            到期課程
          </div>
        </div>

        <div className="w-full h-[80%] border border-gray-300">
          
        </div>
      </main>

      <footer className="border-t border-gray-300 w-screen h-[20vh] "></footer>
    </div>
  );
}

export default App;
