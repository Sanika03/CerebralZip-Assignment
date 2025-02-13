"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { FeedbackData } from "@/types/interfaces";

export function FeedbackStats({data} : {data: FeedbackData}) {
  return (
    <Card className="w-full p-4">
      <CardHeader>
        <CardTitle className="text-sm text-gray-500">
          Community feedback
        </CardTitle>
        <p className="text-lg font-semibold">Mostly positive</p>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2">
          <Progress value={data.negative} className="h-2 bg-red-300" />
          <Progress value={data.neutral} className="h-2 bg-yellow-300" />
          <Progress value={data.positive} className="h-2 bg-green-400" />
        </div>
        <div className="flex justify-between text-xs text-gray-500 mt-2">
          <div>
            <p>Negative</p>
            <p className="font-semibold text-black text-base">{data.negative}</p>
          </div>
          <div>
            <p>Neutral</p>
            <p className="font-semibold text-black text-base">{data.neutral}</p>
          </div>
          <div>
            <p>Positive</p>
            <p className="font-semibold text-black text-base">{data.positive}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
