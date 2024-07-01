// components/Button.js
import React, { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    onClick: () => void;
    selected: boolean;
}

const Button = ({ children, onClick, selected }: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={`block px-8 w-[220px] py-4 mb-1 rounded-lg text-[20px] text-white ${selected ? 'bg-blue-500' : 'bg-[#273142] hover:bg-gray-600'}`}
        >
            {children}
        </button>
    );
};

export default Button;
