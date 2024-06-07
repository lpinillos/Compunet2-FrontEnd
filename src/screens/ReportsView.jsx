import CardDashboard from "../components/ReportCard";
import { NavBarVertical } from '../components/NavBarVertical';
import { Navigate } from "react-router-dom";
import { countClients, countDestinations, countPlans } from "../service/reports";
import { FaUserFriends, FaUsers, FaUserTie, FaBook } from 'react-icons/fa';
import { GrCatalog } from "react-icons/gr";
import { useEffect, useState } from "react";
import BarChart from "../components/BarChart";
import LatestSales from "../components/LatestSales";

function ReportsView() {

  const [numberDestinations, setNumberDestinations] = useState(0);
  const [numberPlans, setNumberPlans] = useState(0);
  const [numberClients, setNumberClients] = useState(0);
  const [numberSales, setNumberSales] = useState(0);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const count = await countDestinations();
        setNumberDestinations(count);
      } catch (error) {
        console.error("Error trayendo el contador de destinos", error);
      }
    };

    fetchDestinations();
  }, []);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const count = await countPlans();
        setNumberPlans(count);
      } catch (error) {
        console.error("Error trayendo el contador de planes", error);
      }
    };

    fetchPlans();
  }, []);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const count = await countClients();
        setNumberClients(count);
      } catch (error) {
        console.error("Error trayendo el contador de clientes", error);
      }
    };

    fetchClients();
  }, []);

  return (
    <>
        <NavBarVertical />
        <div className="ml-64 p-4">
            <h1 className="text-3xl font-semibold">Panel de control</h1>
            <section className="flex flex-row gap-5 justify-between">
                <CardDashboard
                icon={<FaUsers fill={"black"} />}
                number={numberClients}
                description="Clientes"
                classBtn="bg-[rgba(255,_160,_0,_0.5)] [box-shadow:0px_12px_20px_0px_rgba(255,_160,_0,_0.5)]"
                />
                <CardDashboard
                icon={<FaUserTie fill={"black"} />}
                number={numberPlans}
                description="Planes"
                classBtn="bg-[rgba(105,_166,_65,_0.5)] [box-shadow:0px_12px_20px_0px_rgba(105,_166,_65,_0.5)]"
                />
                <CardDashboard
                icon={<GrCatalog fill={"black"} />}
                number={numberDestinations}
                description="Destinos"
                classBtn="bg-[rgba(255,_0,_0,_0.5)] [box-shadow:0px_12px_20px_0px_rgba(255,_0,_0,_0.5)]"
                />
            </section>
            <section className="flex flex-row gap-5 justify-between w-full h-full max-h-[400px]">
                <article className="flex-grow">
                <BarChart />
                </article>
            </section>
            <section className="flex flex-col gap-5">
                <LatestSales />
            </section>
        </div>
    </>
  );
}

export default ReportsView;