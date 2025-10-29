import { PropertyProps } from "@/interfaces/index";
import React from "react";
import Image from "next/image";

const Card = ({image, name, address, rating, offers, price, category}: PropertyProps) => {
    return (
        <div className="w-[378.5572204589844px] h-[422.6997985839844px]">
            <Image src={image} alt={name} width={380} height={255}/>
            <div>
                {
                category.map((item, index) => (
                    <div key={index}>{item}</div>
                ))
                }
            </div>
            <div>
                <h2>{name}</h2>
                <div>
                    <Image src={'/assets/icons/star.png'} alt={"star"} width={19.818126678466797} height={18.848159790039062}/>
                    <p>{rating}</p>
                </div>
            </div>
            <h4>{address.state}, {address.city}, {address.country}</h4>
            <div>
            <div>
                <div>{offers.bed}</div>
                <div>{offers.shower}</div>
                <div>{offers.occupants}</div>
            </div>
            <div>{price}</div>
            </div>
        </div>
    );
}
export default Card;