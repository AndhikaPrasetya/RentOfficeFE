import { Swiper, SwiperSlide } from "swiper/react";
import CityCard from "../components/CityCard";
import { useEffect, useState } from "react";
import type { City } from "../types/type";
import axios from "axios";
import { Link } from "react-router-dom";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;


export default function BrowseCityWrapper() {
  const [cities, setCities] = useState<City[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/api/cities`, {
        headers: {
          "X-API-KEY": `${API_KEY}`,
        },
      })
      .then((response) => {
        console.log(response.data.data);
        setCities(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

if (loading) {
    console.log("📊 Component rendering: Loading state");
    return (
      <section id="Cities" className="flex flex-col gap-[30px] mt-[100px]">
        <div className="w-full max-w-[1000px] mx-auto">
          <div className="animate-pulse">
            <div className="h-12 bg-gray-200 rounded mb-8"></div>
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



  if(error){
    return <p>Error Loading data {error}</p>
  }

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
      <div className="swiper w-full">
        <div className="swiper-wrapper">
          <Swiper
            direction="horizontal"
            spaceBetween={30}
            slidesPerView="auto"
            slidesOffsetAfter={30}
            slidesOffsetBefore={30}
          >
          {cities.map((city)=>(
            <SwiperSlide key={city.id} className=" !w-fit first-of-type:pl-[calc((100%-1130px-60px)/2)] last-of-type:pr-[calc((100%-1130px-60px)/2)]">
            <Link to={`/city/${city.slug}`}>
              <CityCard city={city}></CityCard>
            </Link>
            </SwiperSlide>
          ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
