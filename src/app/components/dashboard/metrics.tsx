import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MetricsData } from "@/types/interfaces";
import { TrendingDown, TrendingUp } from "lucide-react";

export function Metrics({ data }: { data: MetricsData }) {
  const { purchases, refunds, revenue } = data;
  return (
    <div className="grid grid-cols-3 gap-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-muted-foreground text-base">Purchases</CardTitle>
        </CardHeader>
        <CardContent className="text-2xl font-bold flex items-center gap-2">
          {purchases}
          <span className="text-sm bg-green-100 text-green-600 px-2 py-1 border border-green-600 rounded-3xl flex items-center gap-1">
            +32%
            <TrendingUp className="h-4 w-4" />
          </span>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-muted-foreground text-base">Revenue</CardTitle>
        </CardHeader>
        <CardContent className="text-2xl font-bold flex items-center gap-2">
          ${revenue}
          <span className="text-sm bg-green-100 text-green-600 px-2 py-1 border border-green-600 rounded-3xl flex items-center gap-1">
            +49%
            <TrendingUp className="h-4 w-4" />
          </span>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-muted-foreground text-base">Refunds</CardTitle>
        </CardHeader>
        <CardContent className="text-2xl font-bold flex items-center gap-2">
          ${refunds}
          <span className="text-sm bg-red-100 text-red-600 px-2 py-1 border border-red-600 rounded-3xl flex items-center gap-1">
            -7%
            <TrendingDown className="h-4 w-4" />
          </span>
        </CardContent>
      </Card>
    </div>
  );
}
