import { Swiper, SwiperSlide } from 'swiper/react';
import Navbar from '../../components/Navbar';


function OfficeDetailSkeleton() {
  return (
    <>
    <Navbar></Navbar>
      <section id="Gallery" className="-mb-[50px]">
        <div className="swiper w-full">
          <div className="swiper-wrapper">
            <Swiper
              direction="horizontal"
              spaceBetween={10}
              slidesPerView="auto"
              slidesOffsetAfter={30}
              slidesOffsetBefore={30}
            >
              {[...Array(3)].map((_, index) => (
                <SwiperSlide key={index} className="swiper-slide !w-fit">
                  <div className="w-[700px] h-[550px] overflow-hidden bg-gray-200 animate-pulse rounded-lg">
                    {/* Placeholder untuk gambar */}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      ---

      <section
        id="Details"
        className="relative flex max-w-[1130px] mx-auto gap-[30px] mb-20 z-10"
      >
        <div className="flex flex-col w-full rounded-[20px] border border-[#E0DEF7] p-[30px] gap-[30px] bg-white">
          {/* Tag */}
          <div className="w-24 h-7 rounded-full bg-gray-200 animate-pulse"></div>

          <div className="flex items-center justify-between">
            <div>
              {/* Office Name */}
              <div className="h-10 w-80 bg-gray-200 animate-pulse rounded"></div>
              <div className="flex items-center gap-[6px] mt-[10px]">
                <div className="w-6 h-6 bg-gray-200 animate-pulse rounded-full"></div>
                <div className="h-5 w-24 bg-gray-200 animate-pulse rounded"></div>
              </div>
            </div>
            <div className="flex flex-col gap-[6px] items-end">
              {/* Rating Stars */}
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, index) => (
                  <div key={index} className="w-5 h-5 bg-gray-200 animate-pulse rounded-full"></div>
                ))}
              </div>
              {/* Rating Text */}
              <div className="h-5 w-32 bg-gray-200 animate-pulse rounded mt-1"></div>
            </div>
          </div>

          {/* About section */}
          <div className="flex flex-col gap-2">
            <div className="h-5 w-full bg-gray-200 animate-pulse rounded"></div>
            <div className="h-5 w-11/12 bg-gray-200 animate-pulse rounded"></div>
            <div className="h-5 w-10/12 bg-gray-200 animate-pulse rounded"></div>
          </div>

          <hr className="border-[#F6F5FD]" />

          {/* You Get What You Need Most Title */}
          <div className="h-6 w-60 bg-gray-200 animate-pulse rounded"></div>
          <div className="grid grid-cols-3 gap-x-5 gap-y-[30px]">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-[34px] h-[34px] bg-gray-200 animate-pulse rounded-full"></div>
                <div className="flex flex-col gap-[2px]">
                  <div className="h-6 w-24 bg-gray-200 animate-pulse rounded"></div>
                  <div className="h-4 w-20 bg-gray-200 animate-pulse rounded"></div>
                </div>
              </div>
            ))}
          </div>

          <hr className="border-[#F6F5FD]" />

          {/* Office Address */}
          <div className="flex flex-col gap-[6px]">
            <div className="h-6 w-32 bg-gray-200 animate-pulse rounded"></div>
            <div className="h-5 w-48 bg-gray-200 animate-pulse rounded mt-1"></div>
            <div className="h-5 w-60 bg-gray-200 animate-pulse rounded"></div>
          </div>

          {/* Map Placeholder */}
          <div className="overflow-hidden w-full h-[280px]">
            <div className="h-full w-full max-w-[none] bg-gray-200 animate-pulse rounded-lg">
              {/* Placeholder for iframe */}
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-[392px] flex flex-col shrink-0 gap-[30px]">
          <div className="flex flex-col rounded-[20px] border border-[#E0DEF7] p-[30px] gap-[30px] bg-white">
            {/* Price */}
            <div className="h-10 w-40 bg-gray-200 animate-pulse rounded"></div>
            <div className="h-5 w-32 bg-gray-200 animate-pulse rounded mt-1"></div>
            <hr className="border-[#F6F5FD]" />

            {/* Benefits */}
            <div className="flex flex-col gap-5">
              {[...Array(3)].map((_, index) => ( // Adjust number of placeholders as needed
                <div key={index} className="flex items-center gap-3">
                  <div className="w-[30px] h-[30px] bg-gray-200 animate-pulse rounded-full"></div>
                  <div className="h-5 w-full bg-gray-200 animate-pulse rounded"></div>
                </div>
              ))}
            </div>

            <hr className="border-[#F6F5FD]" />

            {/* Buttons */}
            <div className="flex flex-col gap-[14px]">
              <div className="h-[52px] w-full rounded-full bg-gray-200 animate-pulse"></div>
              <div className="h-[52px] w-full rounded-full bg-gray-200 animate-pulse"></div>
            </div>
          </div>

          {/* Contact Our Sales */}
          <div className="flex flex-col rounded-[20px] border border-[#E0DEF7] p-[30px] gap-[20px] bg-white">
            <div className="h-6 w-48 bg-gray-200 animate-pulse rounded"></div>
            <div className="flex flex-col gap-[30px]">
              {[...Array(2)].map((_, index) => (
                <div key={index} className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-4">
                    <div className="w-[60px] h-[60px] rounded-full bg-gray-200 animate-pulse"></div>
                    <div className="flex flex-col gap-[2px]">
                      <div className="h-5 w-24 bg-gray-200 animate-pulse rounded"></div>
                      <div className="h-4 w-28 bg-gray-200 animate-pulse rounded"></div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-200 animate-pulse rounded-full"></div>
                    <div className="w-10 h-10 bg-gray-200 animate-pulse rounded-full"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default OfficeDetailSkeleton;