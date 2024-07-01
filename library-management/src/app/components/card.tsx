import React from "react";
import Link from "next/link";
interface CardProps {
  text: string;
  icon?:any;
  number: number;
}
export default function Card({ text , icon , number}: CardProps) {
  return (
    <>
      <div className="bg-[#273142]  w-[262px] h-[160px] rounded-xl ">
        <header className="flex justify-between p-4 ">
           <div>
            <h5 className="text-white font-bold text-[18px] mb-5">{text}</h5>
       
                <h1 className="text-white font-bold text-[32px] ">{number}</h1>
                <Link href='' className="text-white">View more</Link>
            </div> 
          <div className="w-[60px] h-[60px] bg-[#4880FF] flex items-center justify-center rounded-3xl">
            {icon}
          </div>
        </header>
  

      </div>
    </>
  );
}
