export default function OfficeWrapperSkeleton(){
        return (
      <section id="Fresh-Space"
    className="flex flex-col gap-[30px] w-full max-w-[1130px] mx-auto mt-[100px] mb-[120px]">
        <h2 className="font-bold text-[32px] leading-[48px] text-nowrap text-center">
      Browse Our Fresh Space.
      <br />
      For Your Better Productivity.
    </h2>
        <div className="w-full max-w-[1000px] mx-auto">
          <div className="animate-pulse">
            <div className="flex justify-between">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-64 h-100 bg-gray-200 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
}