import { CategoryProps } from "@/interfaces";
import Image from "next/image";
import React from "react";
const CategoryIcon = ({ src, alt, onClick }: CategoryProps) => {
    return (
        <div className="flex flex-col items-center justify-center w-[73px] h-[88px] hover:underline hover:font-bold">
            <button type="button" className="" onClick={onClick}>
                <Image src={src} alt={alt} width={34} height={34}/>
                <p className="text-[12px] text-gray-600">{alt}</p>
            </button>
        </div>
    );
}

export default CategoryIcon;