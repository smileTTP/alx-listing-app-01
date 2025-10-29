import { PropertyProps } from "@/interfaces/index";
import Image from "next/image";

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
    return (
    <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold">{property.name}</h1>
        <div className="flex items-center space-x-2 mt-2">
        <span className="text-yellow-500">{property.rating} stars</span>
        <span>{property.address.city}, {property.address.country}</span>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 gap-4 mt-4">
        <img src={property.image} alt={property.name} className="col-span-2 w-[862.6182861328125px] h-[630.2030029296875px] object-cover rounded-lg" />
        {/* Add more images */}
        <Image src={property.images[0]} alt={property.name} width={732} height={309}/>
        <Image src={property.images[1]} alt={property.name} width={360.7767639160156} height={308.74163818359375}/>
        <Image src={property.images[2]} alt={property.name} width={360.7767639160156} height={308.74163818359375}/>
        </div>

        {/* Description */}
        <div className="mt-4">
        <h2 className="text-2xl font-semibold">Description</h2>
        <p>{property.description}</p>
        </div>

        {/* Amenities */}
        <div className="mt-4">
        <h2 className="text-2xl font-semibold">What this place offers</h2>
        <ul className="flex flex-wrap space-x-4">
            {property.category.map((amenity, index) => (
            <li key={index} className="bg-gray-200 p-2 rounded-md">
                {amenity}
            </li>
            ))}
        </ul>
        </div>
    </div>
    );
};

export default PropertyDetail;