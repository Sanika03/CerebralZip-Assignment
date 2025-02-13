"use client";

import Link from "next/link";
import Image from "next/image";
import { Nav } from "../components/dashboard/nav";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      router.push("/");
    }
  }, []);

  return (
    <section className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/70 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2 fixed">
          <div className="h-14 mt-8 px-4 lg:h-[60px] lg:px-6">
            <Link href={"/"} className="flex items-center gap-2 font-semibold">
              <h3 className="text-2xl ml-2">
                Salesway
              </h3>
            </Link>
          </div>
          <div className="flex-1">
            <Nav />
          </div>
        </div>
      </div>

      <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        {children}
      </main>
    </section>
  );
}
