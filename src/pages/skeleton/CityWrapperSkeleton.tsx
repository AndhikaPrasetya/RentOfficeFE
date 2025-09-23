export default function CityWrapperSkeleton(){
     return (
      <section id="Cities" className="flex flex-col gap-[30px] mt-[100px]">
         <div className="w-full max-w-[1130px] mx-auto flex items-center justify-between">
        <h2 className="font-bold text-[32px] leading-[48px] text-nowrap">
          You Can Choose <br />
          Our Favorite Cities
        </h2>
        <a
          href="#"
          className="rounded-full py-3 px-5 bg-[#0D903A] font-bold text-white"
        >
          Explore All City
        </a>
      </div>
        <div className="w-full max-w-[1000px] mx-auto">
          <div className="animate-pulse">
            <div className="flex gap-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-64 h-48 bg-gray-200 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
}