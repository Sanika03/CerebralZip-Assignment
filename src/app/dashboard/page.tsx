"use client";

import { useEffect, useState } from "react";
import { fetchComponent1, fetchComponent3, fetchComponent4, fetchComponent5 } from "@/app/api/fetchComponents";
import { Metrics } from "../components/dashboard/metrics";
import { ComparisonChart } from "../components/dashboard/barChart";
import { TopProductsTable } from "../components/dashboard/dataTable";
import { ScoreCard } from "../components/dashboard/scoreCard";
import { CustomersByDevice } from "../components/dashboard/lineChart";
import { FeedbackStats } from "../components/dashboard/feedback";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { MetricsData, SalesData, ScoreCardData, CustomersByDeviceData, FeedbackData } from "@/types/interfaces";

export default function Dashboard() {
  const [component1Data, setComponent1Data] = useState<MetricsData | null>(null);
  const [component3Data, setComponent3Data] = useState<ScoreCardData | null>(null);
  const [component4Data, setComponent4Data] = useState<CustomersByDeviceData | null>(null);
  const [component5Data, setComponent5Data] = useState<FeedbackData | null>(null);

  const [salesData, setSalesData] = useState<SalesData[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const [comp1, comp3, comp4, comp5] = await Promise.all([
          fetchComponent1(),
          fetchComponent3(),
          fetchComponent4(),
          fetchComponent5(),
        ]);

        setComponent1Data(comp1);
        setComponent3Data(comp3);
        setComponent4Data(comp4);
        setComponent5Data(comp5);
      } catch (error) {
        console.error("Error fetching component data:", error);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/prismaSales");
        const data = await response.json();
        console.log("Fetched API Data:", data);
        setSalesData(data);
      } catch (error) {
        console.error("Error fetching api data:", error);
      }
    }
  
    fetchData();
  }, []);   

  return (
    <div className="p-6 grid grid-cols-3 gap-6">
      <div className="col-span-2 space-y-10">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <div className="flex items-center gap-2">
            <span>Compare to</span>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="rounded-3xl">
                  Last year
                <span><ChevronDown className="ml-1 h-4 w-4" /></span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  Last year
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        {component1Data && <Metrics data={component1Data}/>}  
        {salesData && <ComparisonChart data={salesData}/>}
        <TopProductsTable />
      </div>
      <div className="flex flex-col gap-4">
        {component3Data && <ScoreCard data={component3Data}/>}
        {component4Data && <CustomersByDevice data={component4Data}/>}
        {component5Data && <FeedbackStats data={component5Data}/>}
      </div>
    </div>
  );
}
