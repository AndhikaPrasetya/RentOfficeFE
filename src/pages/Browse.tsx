import Navbar from "../components/Navbar";
import BrowseCityWrapper from "../wrapper/BrowseCityWrapper";
import BrowseOfficeWrapper from "../wrapper/BrowseOfficeSwapper";

export default function Browse(){
    return (
      <>
<Navbar/>
  <header className="flex flex-col w-full">
    <section id="Hero-Banner" className="relative flex h-[720px] -mb-[93px]">
      <div
        id="Hero-Text"
        className="relative flex flex-col w-full max-w-[650px] h-fit rounded-[30px] border border-[#E0DEF7] p-10 gap-[30px] bg-white mt-[70px] ml-[calc((100%-1130px)/2)] z-10"
      >
        <div className="flex items-center w-fit rounded-full py-2 px-4 gap-[10px] bg-[#000929]">
          <img
            src="/assets/images/icons/crown-white.svg"
            className="w-5 h-5"
            alt="icon"
          />
          <span className="font-semibold text-white">
            We’ve won top productivity 500 fortunes
          </span>
        </div>
        <h1 className="font-extrabold text-[50px] leading-[60px]">
          All Great Offices.
          <br />
          Grow Your Business.
        </h1>
        <p className="text-lg leading-8 text-[#000929]">
          Kantor yang tepat dapat memberikan impact pekerjaan menjadi lebih baik
          dan sehat dalam tumbuhkan karir.
        </p>
        <div className="flex items-center gap-5">
          <a
            href="#"
            className="flex items-center rounded-full p-[20px_26px] gap-3 bg-[#0D903A]"
          >
            <img
              src="/assets/images/icons/slider-horizontal-white.svg"
              className="w-[30px] h-[30px]"
              alt="icon"
            />
            <span className="font-bold text-xl leading-[30px] text-[#F7F7FD]">
              Explore Now
            </span>
          </a>
          <a
            href="#"
            className="flex items-center rounded-full border border-[#000929] p-[20px_26px] gap-3 bg-white"
          >
            <img
              src="/assets/images/icons/video-octagon.svg"
              className="w-[30px] h-[30px]"
              alt="icon"
            />
            <span className="font-semibold text-xl leading-[30px]">
              Watch Story
            </span>
          </a>
        </div>
      </div>
      <div
        id="Hero-Image"
        className="absolute right-0 w-[calc(100%-((100%-1130px)/2)-305px)] h-[720px] rounded-bl-[40px] overflow-hidden"
      >
        <img
          src="/assets/images/backgrounds/banner.png"
          className="w-full h-full object-cover"
          alt="hero background"
        />
      </div>
    </section>
    <div className="flex flex-col pt-[150px] pb-10 px-[120px] gap-10 bg-[#0D903A]">
      <div className="logo-contianer flex items-center justify-center flex-wrap max-w-[1130px] h-[38px] mx-auto gap-[60px]">
        <img src="/assets/images/logos/TESLA.svg" alt="clients logo" />
        <img src="/assets/images/logos/Libra 2.svg" alt="clients logo" />
        <img src="/assets/images/logos/Binance logo.svg" alt="clients logo" />
        <img src="/assets/images/logos/Facebook 7.svg" alt="clients logo" />
        <img src="/assets/images/logos/Microsoft 6.svg" alt="clients logo" />
      </div>
      <div className="flex justify-center gap-[50px]">
        <div className="flex flex-col gap-[2px] text-center">
          <p className="text-xl leading-[30px] text-[#F7F7FD]">
            Comfortable Space
          </p>
          <p className="font-bold text-[38px] leading-[57px] text-white">
            580M+
          </p>
        </div>
        <div className="flex flex-col gap-[2px] text-center">
          <p className="text-xl leading-[30px] text-[#F7F7FD]">
            Startups Succeed
          </p>
          <p className="font-bold text-[38px] leading-[57px] text-white">98%</p>
        </div>
        <div className="flex flex-col gap-[2px] text-center">
          <p className="text-xl leading-[30px] text-[#F7F7FD]">Countries</p>
          <p className="font-bold text-[38px] leading-[57px] text-white">90+</p>
        </div>
        <div className="flex flex-col gap-[2px] text-center">
          <p className="text-xl leading-[30px] text-[#F7F7FD]">
            Supportive Events
          </p>
          <p className="font-bold text-[38px] leading-[57px] text-white">
            139M+
          </p>
        </div>
      </div>
    </div>
  </header>
  <BrowseCityWrapper></BrowseCityWrapper>
  <section
    id="Benefits"
    className="flex items-center justify-center w-[1015px] mx-auto gap-[100px] mt-[100px]"
  >
    <h2 className="font-bold text-[32px] leading-[48px] text-nowrap">
      We Might Good <br />
      For Your Business
    </h2>
    <div className="grid grid-cols-2 gap-[30px]">
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center shrink-0 w-[70px] h-[70px] rounded-[23px] bg-white overflow-hidden">
          <img
            src="/assets/images/icons/security-user.svg"
            className="w-[34px] h-[34px]"
            alt="icon"
          />
        </div>
        <div className="flex flex-col gap-[5px]">
          <p className="font-bold text-lg leading-[27px]">
            Privacy-First Design
          </p>
          <p className="text-sm leading-[24px]">
            Lorem available without even higher tax that cost much
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center shrink-0 w-[70px] h-[70px] rounded-[23px] bg-white overflow-hidden">
          <img
            src="/assets/images/icons/group.svg"
            className="w-[34px] h-[34px]"
            alt="icon"
          />
        </div>
        <div className="flex flex-col gap-[5px]">
          <p className="font-bold text-lg leading-[27px]">Easy Move Access</p>
          <p className="text-sm leading-[24px]">
            Lorem available without even higher tax that cost much
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center shrink-0 w-[70px] h-[70px] rounded-[23px] bg-white overflow-hidden">
          <img
            src="/assets/images/icons/3dcube.svg"
            className="w-[34px] h-[34px]"
            alt="icon"
          />
        </div>
        <div className="flex flex-col gap-[5px]">
          <p className="font-bold text-lg leading-[27px]">Flexibility Spaces</p>
          <p className="text-sm leading-[24px]">
            Lorem available without even higher tax that cost much
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center shrink-0 w-[70px] h-[70px] rounded-[23px] bg-white overflow-hidden">
          <img
            src="/assets/images/icons/cup.svg"
            className="w-[34px] h-[34px]"
            alt="icon"
          />
        </div>
        <div className="flex flex-col gap-[5px]">
          <p className="font-bold text-lg leading-[27px]">Top-Rated Office</p>
          <p className="text-sm leading-[24px]">
            Lorem available without even higher tax that cost much
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center shrink-0 w-[70px] h-[70px] rounded-[23px] bg-white overflow-hidden">
          <img
            src="/assets/images/icons/coffee.svg"
            className="w-[34px] h-[34px]"
            alt="icon"
          />
        </div>
        <div className="flex flex-col gap-[5px]">
          <p className="font-bold text-lg leading-[27px]">
            Extra Snacks Available
          </p>
          <p className="text-sm leading-[24px]">
            Lorem available without even higher tax that cost much
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center shrink-0 w-[70px] h-[70px] rounded-[23px] bg-white overflow-hidden">
          <img
            src="/assets/images/icons/home-trend-up.svg"
            className="w-[34px] h-[34px]"
            alt="icon"
          />
        </div>
        <div className="flex flex-col gap-[5px]">
          <p className="font-bold text-lg leading-[27px]">
            Sustain for Business
          </p>
          <p className="text-sm leading-[24px]">
            Lorem available without even higher tax that cost much
          </p>
        </div>
      </div>
    </div>
  </section>
<BrowseOfficeWrapper></BrowseOfficeWrapper>
            <footer className="bg-[#0D903A] py-[50px] mt-[100px]">
                <div className="max-w-[1130px] mx-auto flex justify-between">
                    {/* Column 1: Logo and Description */}
                    <div className="flex flex-col gap-[20px] max-w-[300px]">
                        <img src="/assets/images/logos/logo-white.svg" alt="logo" className="h-[34px] w-auto" />
                        <p className="text-[#F7F7FD] leading-7">
                            Kantor yang tepat dapat memberikan impact pekerjaan menjadi lebih baik
                            dan sehat dalam tumbuhkan karir.
                        </p>
                        <div className="flex gap-[15px] mt-[10px]">
                            <a href="#" className="w-[45px] h-[45px] flex items-center justify-center rounded-full bg-white">
                                <img src="/assets/images/icons/facebook-black.svg" alt="facebook" className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-[45px] h-[45px] flex items-center justify-center rounded-full bg-white">
                                <img src="/assets/images/icons/instagram-black.svg" alt="instagram" className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-[45px] h-[45px] flex items-center justify-center rounded-full bg-white">
                                <img src="/assets/images/icons/twitter-black.svg" alt="twitter" className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="flex flex-col gap-[20px]">
                        <h4 className="font-bold text-xl leading-[30px] text-white">Quick Links</h4>
                        <ul className="flex flex-col gap-[10px]">
                            <li>
                                <a href="#" className="text-[#F7F7FD] hover:text-gray-300">Browse City</a>
                            </li>
                            <li>
                                <a href="#" className="text-[#F7F7FD] hover:text-gray-300">Browse Office</a>
                            </li>
                            <li>
                                <a href="#" className="text-[#F7F7FD] hover:text-gray-300">How It Works</a>
                            </li>
                            <li>
                                <a href="#" className="text-[#F7F7FD] hover:text-gray-300">Contacts</a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Company */}
                    <div className="flex flex-col gap-[20px]">
                        <h4 className="font-bold text-xl leading-[30px] text-white">Company</h4>
                        <ul className="flex flex-col gap-[10px]">
                            <li>
                                <a href="#" className="text-[#F7F7FD] hover:text-gray-300">About Us</a>
                            </li>
                            <li>
                                <a href="#" className="text-[#F7F7FD] hover:text-gray-300">Blog</a>
                            </li>
                            <li>
                                <a href="#" className="text-[#F7F7FD] hover:text-gray-300">Careers</a>
                            </li>
                            <li>
                                <a href="#" className="text-[#F7F7FD] hover:text-gray-300">Partners</a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Contact Us */}
                    <div className="flex flex-col gap-[20px] max-w-[250px]">
                        <h4 className="font-bold text-xl leading-[30px] text-white">Contact Us</h4>
                        <p className="text-[#F7F7FD] leading-7">
                            hello@workia.com
                        </p>
                        <p className="text-[#F7F7FD] leading-7">
                            Jl. Buah Batu No.123, Bandung, Jawa Barat, Indonesia
                        </p>
                        <p className="text-[#F7F7FD] leading-7">
                            +62 812 3456 7890
                        </p>
                    </div>
                </div>
                <div className="mt-[50px] text-center text-[#F7F7FD] text-sm">
                    © 2025 Workia. All rights reserved.
                </div>
            </footer>
</>

    );
}