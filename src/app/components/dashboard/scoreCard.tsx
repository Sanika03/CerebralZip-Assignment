"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { ScoreCardData } from "@/types/interfaces";

export function ScoreCard({data} : {data: ScoreCardData}) {
  const score = 78;

  return (
    <Card className="w-full p-4">
      <CardHeader className="flex items-center justify-center border-b">
        <div className="w-20 h-20 mb-2">
          <CircularProgressbar
            value={score}
            maxValue={100}
            text={`${score}`}
            styles={buildStyles({
              pathColor: "#2563EB", 
              textColor: "#000",
              trailColor: "#E5E7EB",
              textSize: "24px",
            })}
          />
        </div>
        <span className="text-muted-foreground text-sm">of 100 points</span>
      </CardHeader>
      <CardContent className="text-left space-y-2 mt-5">
        <CardTitle className="text-lg font-semibold">{data.title}</CardTitle>
        <p className="text-sm text-gray-500">
          {data.message}
        </p>
        <Button variant="outline" className="text-sm rounded-2xl">
          Improve your score
        </Button>
      </CardContent>
    </Card>
  );
}
