"use client"

import { CartesianGrid, Line, LineChart, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { CustomersByDeviceData } from "@/types/interfaces"

const chartData = [
  { month: "January", web_sales: 1940, offline_sales: 1760 },
  { month: "February", web_sales: 2900, offline_sales: 2250 },
  { month: "March", web_sales: 4140, offline_sales: 1710 },
  { month: "April", web_sales: 3490, offline_sales: 3040 },
  { month: "May", web_sales: 6430, offline_sales: 2890 },
  { month: "June", web_sales: 7810, offline_sales: 3660 },
]

const chartConfig = {
  web_sales: {
    label: "Web Sales",
    color: "#2563eb",
  },
  offline_sales: {
    label: "Offline Sales",
    color: "#60a5fa",
  },
} satisfies ChartConfig

export function CustomersByDevice({data} : {data: CustomersByDeviceData}) {
  console.log("Data fetched" + data);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Customers by device</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              ticks={[1000, 4000, 8000]} 
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="web_sales"
              type="monotone"
              stroke="var(--color-web_sales)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="offline_sales"
              type="monotone"
              stroke="var(--color-offline_sales)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex justify-start items-center gap-10 w-full text-sm ml-8">
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2">
              <span className="text-gray-500">Web Sales</span>
              <span className="w-3 h-3 rounded-sm" style={{ background: chartConfig.web_sales.color }}></span>
            </div>
            <span className="text-lg font-bold">1,304%</span>
          </div>
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2">
              <span className="text-gray-500">Offline Selling</span>
              <span className="w-3 h-3 rounded-sm" style={{ background: chartConfig.offline_sales.color }}></span>
            </div>
            <span className="text-lg font-bold">473%</span>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
