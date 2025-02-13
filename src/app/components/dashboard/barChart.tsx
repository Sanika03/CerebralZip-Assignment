"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { SalesData } from "@/types/interfaces"; 
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const chartConfig = {
  thisYear: {
    label: "This Year",
    color: "#2563eb",
  },
  lastYear: {
    label: "Last Year",
    color: "#60a5fa",
  },
} satisfies ChartConfig


//NOTE: The data spreadsheet given had data only for December months so it was not possible to plot the graph for all the months. Hence, I have added dummy data but logged the data in console to show that it is being fetched.

export function ComparisonChart({ data }: { data: SalesData[] }) {
  console.log("Data fetched" + data);

  const chartData = [
    { month: "January", thisYear: 12060, lastYear: 8000 },
    { month: "February", thisYear: 15050, lastYear: 12000 },
    { month: "March", thisYear: 11370, lastYear: 8200 },
    { month: "April", thisYear: 7300, lastYear: 5900 },
    { month: "May", thisYear: 12200, lastYear: 10000 },
    { month: "June", thisYear: 18004, lastYear: 14000 },
  ]

  return (
    <div className="flex flex-col gap-10">
       <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Comparison</h1>
          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="rounded-3xl">
                  6 months
                <span><ChevronDown className="ml-1 h-4 w-4" /></span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  6 months
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <YAxis
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            domain={[0, 20000]}
            ticks={[0, 5000, 10000, 15000, 20000]}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
          <Bar dataKey="thisYear" fill="var(--color-thisYear)" radius={4} />
          <Bar dataKey="lastYear" fill="var(--color-lastYear)" radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  )
}
