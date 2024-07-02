import Dashboard from "@/components/dashboard";
import Sidebar from "@/components/sidebar";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense>
      <div className="flex bg-[#1B2431]">
        <Sidebar />
        {/* <BookDetail /> */}
        <Dashboard />
      </div>
    </Suspense>
  );
}
