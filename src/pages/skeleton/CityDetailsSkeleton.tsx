
import Navbar from "../../components/Navbar";

export default function CityDetailsSkeleton() {
  return (
    <>
      <Navbar />

      <div className="flex flex-col w-full">
        {/* Skeleton for Hero Banner Section */}
        <section
          id="Hero-Banner"
          className="relative flex h-[434px] sm:h-[300px] md:h-[350px] lg:h-[434px]"
        >
          <div
            id="Hero-Text"
            className="relative flex flex-col w-full max-w-[650px] h-fit rounded-[30px] border border-[#E0DEF7] p-5 sm:p-8 md:p-10 gap-4 sm:gap-5 md:gap-[30px] bg-white mt-[50px] sm:mt-[60px] md:mt-[70px] ml-[calc((100%-1130px)/2)] sm:ml-5 md:ml-10 lg:ml-[calc((100%-1130px)/2)] z-10 animate-pulse"
          >
            {/* Skeleton for H1 title */}
            <div className="h-10 sm:h-12 md:h-16 w-5/6 bg-gray-200 rounded"></div>
            <div className="h-10 sm:h-12 md:h-16 w-4/6 bg-gray-200 rounded"></div>
            {/* Skeleton for paragraph */}
            <div className="h-5 w-full bg-gray-200 rounded"></div>
            <div className="h-5 w-11/12 bg-gray-200 rounded"></div>
          </div>

          {/* Hero Image Skeleton */}
          <div
            id="Hero-Image"
            className="absolute right-0 w-0 sm:w-[50%] md:w-[calc(100%-((100%-1130px)/2)-305px)] h-full rounded-bl-[40px] overflow-hidden bg-gray-300 animate-pulse"
          >
          </div>
        </section>
        <section
          id="Fresh-Space"
          className="flex flex-col gap-6 sm:gap-[30px] w-full max-w-[1130px] mx-auto mt-[50px] sm:mt-[70px] mb-[80px] sm:mb-[120px] px-4 sm:px-0"
        >
          {/* Skeleton for Browse Offices title */}
          <div className="h-8 sm:h-10 md:h-12 w-48 sm:w-56 md:w-64 bg-gray-200 rounded animate-pulse"></div>

          {/* Office Cards Grid Skeleton */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-[30px]">
            {/* Skeleton for OfficeCard components */}
            {[...Array(6)].map(
              (
                _,
                index // Asumsi 6 placeholder untuk kartu kantor
              ) => (
                <div
                  key={index}
                  className="flex flex-col rounded-[20px] border border-[#E0DEF7] overflow-hidden bg-white animate-pulse"
                >
                  {/* Image placeholder */}
                  <div className="w-full h-[180px] sm:h-[200px] md:h-[220px] bg-gray-200"></div>
                  <div className="p-4 sm:p-5 flex flex-col gap-2 sm:gap-3">
                    {/* Tag placeholder */}
                    <div className="h-5 w-20 bg-gray-200 rounded-full"></div>
                    {/* Name placeholder */}
                    <div className="h-6 w-4/5 bg-gray-200 rounded"></div>
                    {/* Location placeholder */}
                    <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
                    {/* Rating & Price placeholders */}
                    <div className="flex justify-between items-center mt-2">
                      <div className="h-4 w-20 bg-gray-200 rounded"></div>{" "}
                      {/* Price */}
                      <div className="h-4 w-14 bg-gray-200 rounded"></div>{" "}
                      {/* Rating */}
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </section>
      </div>
    </>
  );
}