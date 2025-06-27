import { useEffect, useState } from "react";
import OfficeCard from "../components/OfficeCard";
import type { Office } from "../types/type";
import axios from "axios";
import { Link } from "react-router-dom";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export default function BrowseOfficeWrapper(){
   const [offices, setOffices] = useState<Office[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/api/offices`, {
        headers: {
          "X-API-KEY": `${API_KEY}`,
        },
      })
      .then((response) => {
        console.log(response.data.data);
        setOffices(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

if (loading) {
    return (
      <section id="Fresh-Space"
    className="flex flex-col gap-[30px] w-full max-w-[1130px] mx-auto mt-[100px] mb-[120px]">
        <div className="w-full max-w-[1000px] mx-auto">
          <div className="animate-pulse">
            <div className="h-12 bg-gray-200 rounded mb-8"></div>
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

  if(error){
    return <p>Error Loading data {error}</p>
  }
    return(
         <section
    id="Fresh-Space"
    className="flex flex-col gap-[30px] w-full max-w-[1130px] mx-auto mt-[100px] mb-[120px]"
  >
    <h2 className="font-bold text-[32px] leading-[48px] text-nowrap text-center">
      Browse Our Fresh Space.
      <br />
      For Your Better Productivity.
    </h2>
    <div className="grid grid-cols-3 gap-[15px]">
      
    {offices.map((office)=>(
      <Link to={`/office/${office.slug}`}>
       <OfficeCard key={office.id} office={office}></OfficeCard>
      </Link>
    ))}
    </div>
  </section>
    )
}