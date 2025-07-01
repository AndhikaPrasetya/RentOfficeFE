export default function BookingSkeleton() {
    return(
        <>
  {/* Skeleton untuk Banner */}
  <div
    id="Banner"
    className="relative w-full h-[240px] flex items-center shrink-0 overflow-hidden -mb-[50px] bg-gray-200 animate-pulse"
  >
    {/* Placeholder untuk teks "Start Booking Your Office" */}
    <div className="text-center mx-auto mb-5 z-20">
      <div className="h-10 w-64 bg-gray-300 rounded mx-auto"></div> {/* Placeholder for h1 text */}
    </div>
    {/* Placeholder untuk gradient dan gambar background */}
    <div className="absolute w-full h-full bg-gradient-to-t from-black via-gray-900 to-transparent z-10 opacity-75" />
    <div className="absolute w-full h-full object-cover object-top bg-gray-300"></div> {/* Placeholder for img */}
  </div>

  {/* Skeleton untuk Form utama */}
  <div
    className="relative flex justify-center max-w-[1130px] mx-auto gap-[30px] mb-20 z-20"
  >
    {/* Skeleton untuk Left Panel (Details & Form) */}
    <div className="flex flex-col shrink-0 w-[500px] h-fit rounded-[20px] border border-[#E0DEF7] p-[30px] gap-[30px] bg-white animate-pulse">
      {/* Skeleton untuk Office Thumbnail & Info */}
      <div className="flex items-center gap-4">
        <div className="flex shrink-0 w-[140px] h-[100px] rounded-[20px] overflow-hidden bg-gray-300">
          {/* Placeholder for thumbnail image */}
        </div>
        <div className="flex flex-col gap-2">
          <div className="h-6 w-48 bg-gray-300 rounded mb-1"></div> {/* Placeholder for office?.name */}
          <div className="flex items-center gap-[6px]">
            <div className="w-6 h-6 bg-gray-300 rounded-full"></div> {/* Placeholder for location icon */}
            <div className="h-4 w-28 bg-gray-300 rounded"></div> {/* Placeholder for office?.city.name */}
          </div>
        </div>
      </div>
      <hr className="border-[#F6F5FD]" />

      {/* Skeleton untuk Complete The Details (Form Inputs) */}
      <div className="flex flex-col gap-4">
        <div className="h-6 w-40 bg-gray-300 rounded mb-2"></div> {/* Placeholder for "Complete The Details" heading */}

        {/* Full Name Input Skeleton */}
        <div className="flex flex-col gap-2">
          <div className="h-4 w-24 bg-gray-300 rounded"></div> {/* Label */}
          <div className="flex items-center rounded-full border border-gray-300 px-5 gap-[10px] h-12 bg-gray-200">
            <div className="w-6 h-6 bg-gray-300 rounded-full"></div> {/* Icon */}
            <div className="h-4 w-full bg-gray-300 rounded"></div> {/* Input placeholder */}
          </div>
        </div>

        {/* Phone Number Input Skeleton */}
        <div className="flex flex-col gap-2">
          <div className="h-4 w-28 bg-gray-300 rounded"></div> {/* Label */}
          <div className="flex items-center rounded-full border border-gray-300 px-5 gap-[10px] h-12 bg-gray-200">
            <div className="w-6 h-6 bg-gray-300 rounded-full"></div> {/* Icon */}
            <div className="h-4 w-full bg-gray-300 rounded"></div> {/* Input placeholder */}
          </div>
        </div>

        {/* Started At Input Skeleton */}
        <div className="flex flex-col gap-2">
          <div className="h-4 w-20 bg-gray-300 rounded"></div> {/* Label */}
          <div className="flex items-center rounded-full border border-gray-300 px-5 gap-[10px] h-12 bg-gray-200">
            <div className="w-6 h-6 bg-gray-300 rounded-full"></div> {/* Icon */}
            <div className="h-4 w-full bg-gray-300 rounded"></div> {/* Input placeholder */}
          </div>
        </div>
      </div>
      <hr className="border-[#F6F5FD]" />

      {/* Privacy Shield Skeleton */}
      <div className="flex items-center gap-3">
        <div className="w-[30px] h-[30px] bg-gray-300 rounded-full"></div> {/* Icon */}
        <div className="flex-grow">
          <div className="h-4 w-full bg-gray-300 rounded mb-1"></div>
          <div className="h-4 w-5/6 bg-gray-300 rounded"></div>
        </div>
      </div>
      <hr className="border-[#F6F5FD]" />

      {/* Bonus Packages Skeleton */}
      <div className="flex flex-col gap-[30px]">
        <div className="h-6 w-48 bg-gray-300 rounded mb-2"></div> {/* Heading */}
        <div className="grid grid-cols-2 gap-[30px]">
          {/* Bonus Item 1 */}
          <div className="flex items-center gap-4">
            <div className="w-[34px] h-[34px] bg-gray-300 rounded-full"></div> {/* Icon */}
            <div className="flex flex-col gap-[2px]">
              <div className="h-5 w-28 bg-gray-300 rounded mb-1"></div> {/* Title */}
              <div className="h-3 w-20 bg-gray-300 rounded"></div> {/* Subtitle */}
            </div>
          </div>
          {/* Bonus Item 2 */}
          <div className="flex items-center gap-4">
            <div className="w-[34px] h-[34px] bg-gray-300 rounded-full"></div> {/* Icon */}
            <div className="flex flex-col gap-[2px]">
              <div className="h-5 w-24 bg-gray-300 rounded mb-1"></div> {/* Title */}
              <div className="h-3 w-20 bg-gray-300 rounded"></div> {/* Subtitle */}
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Skeleton untuk Right Panel (Order Details & Payment) */}
    <div className="flex flex-col shrink-0 w-[400px] h-fit rounded-[20px] border border-[#E0DEF7] p-[30px] gap-[30px] bg-white animate-pulse">
      <div className="h-6 w-40 bg-gray-300 rounded mb-2"></div> {/* Heading "Your Order Details" */}
      <div className="flex flex-col gap-5">
        {/* Duration */}
        <div className="flex items-center justify-between">
          <div className="h-4 w-20 bg-gray-300 rounded"></div>
          <div className="h-4 w-28 bg-gray-300 rounded"></div> {/* office?.duration */}
        </div>
        {/* Sub Total */}
        <div className="flex items-center justify-between">
          <div className="h-4 w-24 bg-gray-300 rounded"></div>
          <div className="h-4 w-28 bg-gray-300 rounded"></div> {/* office?.price */}
        </div>
        {/* Unique Code */}
        <div className="flex items-center justify-between">
          <div className="h-4 w-28 bg-gray-300 rounded"></div>
          <div className="h-4 w-20 bg-gray-300 rounded"></div> {/* uniqueCode */}
        </div>
        {/* Grand Total */}
        <div className="flex items-center justify-between">
          <div className="h-5 w-28 bg-gray-300 rounded"></div>
          <div className="h-6 w-36 bg-gray-300 rounded"></div> {/* totalAmountWithUniqueCode */}
        </div>
        {/* Payment Note */}
        <div className="relative rounded-xl p-[10px_20px] gap-[10px] bg-gray-800 h-16 flex items-center">
          <div className="h-4 w-full bg-gray-600 rounded mb-1"></div>
          <div className="h-4 w-5/6 bg-gray-600 rounded"></div>
        </div>
      </div>
      <hr className="border-[#F6F5FD]" />

      <div className="h-6 w-36 bg-gray-300 rounded mb-2"></div> {/* Heading "Send Payment to" */}
      <div className="flex flex-col gap-[30px]">
        {/* Bank Account 1 */}
        <div className="flex items-center gap-3">
          <div className="w-[71px] h-8 bg-gray-300 rounded"></div> {/* Bank logo */}
          <div className="flex flex-col gap-[2px] flex-grow">
            <div className="flex items-center gap-1">
              <div className="h-4 w-32 bg-gray-300 rounded"></div> {/* Account Name */}
              <div className="w-[18px] h-[18px] bg-gray-300 rounded-full"></div> {/* Verify icon */}
            </div>
            <div className="h-4 w-28 bg-gray-300 rounded"></div> {/* Account Number */}
          </div>
        </div>
        {/* Bank Account 2 */}
        <div className="flex items-center gap-3">
          <div className="w-[71px] h-8 bg-gray-300 rounded"></div> {/* Bank logo */}
          <div className="flex flex-col gap-[2px] flex-grow">
            <div className="flex items-center gap-1">
              <div className="h-4 w-32 bg-gray-300 rounded"></div> {/* Account Name */}
              <div className="w-[18px] h-[18px] bg-gray-300 rounded-full"></div> {/* Verify icon */}
            </div>
            <div className="h-4 w-28 bg-gray-300 rounded"></div> {/* Account Number */}
          </div>
        </div>
      </div>
      <hr className="border-[#F6F5FD]" />

      {/* Button Skeleton */}
      <div className="flex items-center justify-center w-full rounded-full p-[16px_26px] bg-gray-300 h-14">
        <div className="h-6 w-32 bg-gray-400 rounded"></div> {/* Button text placeholder */}
      </div>
    </div>
  </div>
</>
    )
}