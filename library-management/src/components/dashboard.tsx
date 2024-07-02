"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import { DisplayCard } from "./displayCard";
import BookDetail from "./bookdetail";

export default function Dashboard() {
  const search = useSearchParams();

  return (
    <>
      <div className="bg-[#1B2431] w-full ">
        <h1 className="text-white font-bold text-[32px] mt-5 ml-10">
          {search.toString() === "" || search.toString() === "Dashboard=" ? (
            <p>
              <b className="text-[#4880FF]">Dash</b>board
            </p>
          ) : (
            <p>
              <b className="text-[#4880FF]">{search}</b> Detail
            </p>
          )}
        </h1>
        {(search.toString() === "" || search.toString() === "Dashboard=") && (
          <DisplayCard />
        )}

        {search.toString() === "Books=" && <BookDetail />}
      </div>
    </>
  );
}
