// components/Sidebar.js
'use client';
import Button from "./button"; // Assuming Button component file name is Button.js
import { useState } from "react";
import { useRouter } from "next/navigation";

const Sidebar = () => {
    const values = ["Dashboard", "Books", "Students", "Borrow", "Return"];
    const [selected, setSelected] = useState<string>("Dashboard");
    const router = useRouter();

    const handleClick = (item: string) => {
        console.log(item);
        setSelected(item);
        router.push(`/${item.toLowerCase()}`); // Navigate to the corresponding page
    };
    return (
        <div className="w-[256px]">
            <div className="h-screen w-[256px] bg-[#273142] text-white flex flex-col justify-between p-4">
                <div>
                    <h1 className="text-[40px] font-bold text-blue-500 mb-8 text-center">
                        Ad<b className="text-white">min</b>
                    </h1>
                    {values.map((item, index) => (
                        <Button
                            key={index}
                            onClick={() => handleClick(item)}
                            selected={selected === item}
                        >
                            {item}  
                        </Button>
                    ))}
                </div>
                <a href="/logout" className="block px-8 py-4 mt-4 rounded-lg hover:bg-red-600 text-center">
                    Log out
                </a>
            </div>
        </div>
    );
};

export default Sidebar;
