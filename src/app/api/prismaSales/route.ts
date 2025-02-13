import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const salesData = await prisma.sales_data.findMany({
      orderBy: { date: "asc" },
    });
    return NextResponse.json(salesData, { status: 200 });
  } catch (error) {
    console.error("Error fetching sales data:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}