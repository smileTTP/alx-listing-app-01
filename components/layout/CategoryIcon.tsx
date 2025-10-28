import { CategoryProps } from "@/interfaces";
import Image from "next/image";
import React from "react";
const CategoryIcon = ({ src, alt, onClick }: CategoryProps) => {
    return (
        <div>
            <button type="button" className="" onClick={onClick}>
                <Image src={src} alt={alt} width={34} height={34} className=""/>
            </button>
        </div>
    );
}

export default CategoryIcon;